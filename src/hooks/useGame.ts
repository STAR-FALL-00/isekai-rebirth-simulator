import { useState, useCallback } from 'react';
import type { GameState, Event, EventEffects } from '@/engine/types';
import { WORLD_REALM_TABLES } from '@/engine/types';
import { createInitialState, startRandomGame } from '@/engine/gameState';
import { tryDropRebirthItem, tryDropTempItem, applyTempItemEffects, updateGameHistory, rebirthItems } from '@/engine/items';

function applyRelationshipChanges(
  relationships: Record<string, number>,
  effects: Record<string, number>
): { relationships: Record<string, number>; changed: boolean } {
  const newRelationships = { ...relationships };
  let changed = false;
  for (const [npcId, delta] of Object.entries(effects)) {
    const prevVal = newRelationships[npcId] ?? 0;
    const newVal = Math.max(-100, Math.min(100, prevVal + delta));
    if (newVal !== prevVal) {
      newRelationships[npcId] = newVal;
      changed = true;
    }
  }
  return { relationships: newRelationships, changed };
}

export function useGame() {
  const [state, setState] = useState<GameState>(createInitialState);

  /** Start a new game with random world and identity */
  const handleStartGame = useCallback(() => {
    setState((prev) => {
      // Save history from previous playthrough before starting new one
      if (prev.isDead || prev.age > 0) {
        updateGameHistory(prev);
      }
      return startRandomGame(prev);
    });
  }, []);

  /** Advance one year */
  const handleAdvanceYear = useCallback(() => {
    setState((prev) => {
      if (!prev.isPlaying || prev.isDead) return prev;

      const newAge = prev.age + 1;
      const isDead = newAge >= prev.maxAge || (prev.stats.health ?? 0) <= 0;

      // ACHIEVEMENT CHECK — death trigger
      // Consumers should call checkAndUnlock(deadState) when isDead becomes true

      return {
        ...prev,
        age: newAge,
        isDead,
        isPlaying: !isDead,
      };
    });
  }, []);

  /** Apply event effects, handling both stats and meta fields (realm, maxAge) */
  const applyEffects = useCallback((prev: GameState, effects: EventEffects) => {
    const newStats = { ...prev.stats };
    let newRealm = prev.realm;
    let newMaxAge = prev.maxAge;

    for (const [key, val] of Object.entries(effects)) {
      if (key === 'realm' && typeof val === 'number') {
        newRealm = Math.max(0, Math.min(7, newRealm + val));
        // When realm increases, also increase maxAge based on cultivation realm table
        if (val > 0) {
          const worldId = prev.world?.id ?? 'cultivation';
          const realmTable = WORLD_REALM_TABLES[worldId] ?? WORLD_REALM_TABLES['cultivation'];
          const realmInfo = realmTable[newRealm];
          if (realmInfo) {
            newMaxAge = realmInfo.maxAgeBase + Math.floor(Math.random() * 50);
          }
        }
      } else if (key === 'maxAge' && typeof val === 'number') {
        newMaxAge = Math.max(1, newMaxAge + val);
      } else if (key in newStats) {
        (newStats as Record<string, number>)[key] = Math.max(0, Math.min(200, (newStats as Record<string, number>)[key] ?? 0) + (val ?? 0));
      }
    }

    return { newStats, newRealm, newMaxAge };
  }, []);

  /** Select a choice in an event with success/fail roll */
  const handleSelectChoice = useCallback((choiceIndex: number): { success: boolean; text: string; effects: EventEffects; rewardItem?: string; tempItemName?: string } | null => {
    let result: { success: boolean; text: string; effects: EventEffects; rewardItem?: string; tempItemName?: string } | null = null;

    setState((prev) => {
      if (!prev.currentEvent?.choices || !prev.isPlaying) return prev;

      const choice = prev.currentEvent.choices[choiceIndex];
      if (!choice) return prev;

      const successRate = choice.successRate ?? 1.0;
      const roll = Math.random();
      const success = roll <= successRate;
      const resultEffects = success ? choice.effects : (choice.failEffects ?? choice.effects);
      const resultText = success ? (choice.successText ?? choice.text) : (choice.failText ?? choice.text);

      const { newStats, newRealm, newMaxAge } = applyEffects(prev, resultEffects);

      // Apply choice relationship effects
      const choiceRelEffects = success
        ? (choice.relationshipEffects ?? prev.currentEvent?.relationshipEffects)
        : (choice.failRelationshipEffects ?? choice.relationshipEffects ?? prev.currentEvent?.relationshipEffects);

      let newRelationships = { ...prev.relationships };
      let relEventCountDelta = 0;
      if (choiceRelEffects) {
        const { relationships, changed } = applyRelationshipChanges(newRelationships, choiceRelEffects);
        newRelationships = relationships;
        if (changed) relEventCountDelta = 1;
      }

      const newFlags = [...prev.flags];

      // Add event-level flags
      if (prev.currentEvent.flags) {
        for (const flag of prev.currentEvent.flags) {
          if (!newFlags.includes(flag)) {
            newFlags.push(flag);
          }
        }
      }

      const flagsToAdd = success ? choice.flags : choice.failFlags;
      if (flagsToAdd) {
        for (const flag of flagsToAdd) {
          if (!newFlags.includes(flag)) {
            newFlags.push(flag);
          }
        }
      }

      // ── 道具掉落处理 ──
      let newInventory = [...prev.inventory];
      let newObtainedItems = [...prev.obtainedItems];
      let newTempItems = [...prev.tempItems];
      let rewardItemId: string | undefined;
      let tempItemName: string | undefined;

      if (success) {
        // 1. 转生道具掉落（从事件rewardItem或随机掉落）
        if (choice.rewardItem) {
          const itemDef = newInventory.find((i) => i.id === choice.rewardItem);
          if (!itemDef) {
            // 从rebirthItems中找到并加入
            const found = rebirthItems.find((i) => i.id === choice.rewardItem);
            if (found) {
              newInventory.push(found);
              newObtainedItems.push(found.id);
              rewardItemId = found.id;
            }
          }
        } else {
          // 随机掉落转生道具
          const dropped = tryDropRebirthItem(newInventory, prev.currentEvent.category);
          if (dropped) {
            newInventory.push(dropped);
            newObtainedItems.push(dropped.id);
            rewardItemId = dropped.id;
          }
        }

        // 2. 临时道具掉落
        const droppedTemp = tryDropTempItem(prev.currentEvent.category);
        if (droppedTemp) {
          newTempItems.push(droppedTemp);
          tempItemName = droppedTemp.name;
        }

        // 3. 事件级临时效果（tempEffects）
        if (choice.tempEffects) {
          const virtualTempItem = {
            id: `temp_${Date.now()}`,
            name: '神秘力量',
            description: '事件中获得的临时增益',
            rarity: 'common' as const,
            instantEffects: choice.tempEffects,
          };
          newTempItems.push(virtualTempItem);
          tempItemName = virtualTempItem.name;
        }
      }

      // 应用临时道具效果（立即生效）
      let finalStats = newStats;
      for (const tempItem of newTempItems) {
        if ('instantEffects' in tempItem) {
          finalStats = applyTempItemEffects(finalStats, tempItem as import('@/engine/items').TempItem);
        }
      }
      // 清空已使用的临时道具
      newTempItems = [];

      // 更新事件分类计数
      const newEventCounters = { ...prev.eventCounters };
      const cat = prev.currentEvent.category;
      if (cat === 'combat') newEventCounters.combat += 1;
      else if (cat === 'romance') newEventCounters.romance += 1;
      else if (cat === 'hidden') newEventCounters.hidden += 1;

      // 更新选择统计
      const newChoiceStats = {
        total: prev.choiceStats.total + 1,
        success: prev.choiceStats.success + (success ? 1 : 0),
        fail: prev.choiceStats.fail + (success ? 0 : 1),
      };

      result = { success, text: resultText, effects: resultEffects, rewardItem: rewardItemId, tempItemName };

      return {
        ...prev,
        stats: finalStats,
        realm: newRealm,
        maxAge: newMaxAge,
        flags: newFlags,
        eventHistory: [
          ...prev.eventHistory,
          { age: prev.age, text: resultText, effects: resultEffects },
        ],
        gameLog: [
          ...prev.gameLog,
          `选择了：${choice.text}（${success ? '成功' : '失败'}）`,
          ...(rewardItemId ? [`获得道具！`] : []),
          ...(tempItemName ? [`获得临时道具：${tempItemName}`] : []),
        ],
        inventory: newInventory,
        obtainedItems: newObtainedItems,
        tempItems: newTempItems,
        eventCounters: newEventCounters,
        choiceStats: newChoiceStats,
        relationships: newRelationships,
        relationshipEventCount: prev.relationshipEventCount + relEventCountDelta,
      };
    });

    return result;
  }, [applyEffects]);

  /** Set current event */
  const handleSetEvent = useCallback((event: Event | null) => {
    setState((prev) => {
      if (!event?.category) return { ...prev, currentEvent: event };

      let newRelationships = { ...prev.relationships };
      let relEventCountDelta = 0;

      // Auto-apply small relationship changes based on event category
      if (event.category === 'romance') {
        const romanceNPCs = prev.world?.npcs.filter((n) => n.type === 'romance') ?? [];
        for (const npc of romanceNPCs) {
          const current = newRelationships[npc.id] ?? 0;
          const next = Math.min(100, current + 5);
          if (next !== current) {
            newRelationships[npc.id] = next;
            relEventCountDelta = 1;
          }
        }
      } else if (event.category === 'combat') {
        const rivalNPCs = prev.world?.npcs.filter((n) => n.type === 'rival') ?? [];
        for (const npc of rivalNPCs) {
          const current = newRelationships[npc.id] ?? 0;
          const next = Math.min(100, current + 3);
          if (next !== current) {
            newRelationships[npc.id] = next;
            relEventCountDelta = 1;
          }
        }
      }

      // Apply explicit event-level relationship effects
      if (event.relationshipEffects && Object.keys(event.relationshipEffects).length > 0) {
        const { relationships, changed } = applyRelationshipChanges(newRelationships, event.relationshipEffects);
        newRelationships = relationships;
        if (changed) relEventCountDelta = 1;
      }

      return {
        ...prev,
        currentEvent: event,
        eventCategoryCounts: {
          ...prev.eventCategoryCounts,
          [event.category]: (prev.eventCategoryCounts[event.category] ?? 0) + 1,
        },
        relationships: newRelationships,
        relationshipEventCount: prev.relationshipEventCount + relEventCountDelta,
      };
    });
  }, []);

  /** Set ending */
  const handleSetEnding = useCallback((ending: NonNullable<GameState['ending']>) => {
    setState((prev) => {
      const next = { ...prev, ending, isPlaying: false };
      // ACHIEVEMENT CHECK — ending trigger
      // Consumers should call checkAndUnlock(next) when ending is set
      return next;
    });
  }, []);

  /** Reset game */
  const handleResetGame = useCallback(() => {
    setState((prev) => {
      if (prev.isDead || prev.age > 0) {
        updateGameHistory(prev);
      }
      return createInitialState();
    });
  }, []);

  /** Save history manually (e.g. from ending screen) */
  const handleSaveHistory = useCallback(() => {
    setState((prev) => {
      if (prev.isDead || prev.age > 0) {
        updateGameHistory(prev);
      }
      return prev;
    });
  }, []);

  /** Record an event category for achievement tracking */
  const handleRecordEventCategory = useCallback((category: string) => {
    setState((prev) => ({
      ...prev,
      eventCategoryCounts: {
        ...prev.eventCategoryCounts,
        [category]: (prev.eventCategoryCounts[category] ?? 0) + 1,
      },
    }));
  }, []);

  /** Update stats (and meta fields like realm/maxAge) */
  const handleUpdateStats = useCallback((effects: EventEffects) => {
    setState((prev) => {
      const { newStats, newRealm, newMaxAge } = applyEffects(prev, effects);
      let newDeathSurvived = prev.deathSurvivedCount;
      if (
        prev.currentEvent?.category === 'death' &&
        effects.health &&
        effects.health > 0
      ) {
        newDeathSurvived += 1;
      }
      return {
        ...prev,
        stats: newStats,
        realm: newRealm,
        maxAge: newMaxAge,
        deathSurvivedCount: newDeathSurvived,
      };
    });
  }, [applyEffects]);

  /** Add flags to global state */
  const handleAddFlags = useCallback((newFlags: string[]) => {
    setState((prev) => {
      const merged = [...prev.flags];
      for (const flag of newFlags) {
        if (!merged.includes(flag)) {
          merged.push(flag);
        }
      }
      return { ...prev, flags: merged };
    });
  }, []);

  /** Add relationship */
  const handleAddRelationship = useCallback((npcId: string, delta: number) => {
    setState((prev) => {
      const { relationships, changed } = applyRelationshipChanges(prev.relationships, { [npcId]: delta });
      if (!changed) return prev;
      return { ...prev, relationships, relationshipEventCount: prev.relationshipEventCount + 1 };
    });
  }, []);

  /** Apply bulk relationship effects */
  const applyRelationshipEffects = useCallback((effects: Record<string, number>) => {
    setState((prev) => {
      const { relationships, changed } = applyRelationshipChanges(prev.relationships, effects);
      if (!changed) return prev;
      return { ...prev, relationships, relationshipEventCount: prev.relationshipEventCount + 1 };
    });
  }, []);

  /** Get relationship level for an NPC */
  const getRelationshipLevel = useCallback((npcId: string) => {
    const val = state.relationships[npcId] ?? 0;
    if (val >= 80) return 'lover';
    if (val >= 50) return 'confidant';
    if (val >= 20) return 'friend';
    if (val >= 0) return 'acquaintance';
    return 'stranger';
  }, [state.relationships]);

  /** Get list of NPCs that have been encountered (relationship != 0) */
  const getEncounteredNPCs = useCallback(() => {
    return Object.entries(state.relationships)
      .filter(([, val]) => val !== 0)
      .map(([id]) => id);
  }, [state.relationships]);

  /** Equip an item from inventory */
  const handleEquipItem = useCallback((itemId: string) => {
    setState((prev) => {
      // Check if item exists in inventory and not already equipped
      if (!prev.inventory.some((i) => i.id === itemId)) return prev;
      if (prev.equippedItems.includes(itemId)) return prev;
      // Max 3 equipped items
      if (prev.equippedItems.length >= 3) return prev;
      return {
        ...prev,
        equippedItems: [...prev.equippedItems, itemId],
      };
    });
  }, []);

  /** Unequip an item */
  const handleUnequipItem = useCallback((itemId: string) => {
    setState((prev) => ({
      ...prev,
      equippedItems: prev.equippedItems.filter((id) => id !== itemId),
    }));
  }, []);

  return {
    state,
    startGame: handleStartGame,
    advanceYear: handleAdvanceYear,
    selectChoice: handleSelectChoice,
    setEvent: handleSetEvent,
    setEnding: handleSetEnding,
    resetGame: handleResetGame,
    updateStats: handleUpdateStats,
    addFlags: handleAddFlags,
    addRelationship: handleAddRelationship,
    applyRelationshipEffects,
    getRelationshipLevel,
    getEncounteredNPCs,
    equipItem: handleEquipItem,
    unequipItem: handleUnequipItem,
    saveHistory: handleSaveHistory,
    recordEventCategory: handleRecordEventCategory,
  };
}
