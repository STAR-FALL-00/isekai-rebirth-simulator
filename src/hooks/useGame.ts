import { useState, useCallback } from 'react';
import type { GameState, Event, Stats, EventEffects } from '@/engine/types';
import { WORLD_REALM_TABLES } from '@/engine/types';
import { createInitialState, startRandomGame } from '@/engine/gameState';

export function useGame() {
  const [state, setState] = useState<GameState>(createInitialState);

  /** Start a new game with random world and identity */
  const handleStartGame = useCallback(() => {
    setState((prev) => startRandomGame(prev));
  }, []);

  /** Advance one year */
  const handleAdvanceYear = useCallback(() => {
    setState((prev) => {
      if (!prev.isPlaying || prev.isDead) return prev;

      const newAge = prev.age + 1;
      const isDead = newAge >= prev.maxAge || (prev.stats.health ?? 0) <= 0;

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
  const handleSelectChoice = useCallback((choiceIndex: number): { success: boolean; text: string; effects: EventEffects } | null => {
    let result: { success: boolean; text: string; effects: EventEffects } | null = null;

    setState((prev) => {
      if (!prev.currentEvent?.choices || !prev.isPlaying) return prev;

      const choice = prev.currentEvent.choices[choiceIndex];
      if (!choice) return prev;

      const successRate = choice.successRate ?? 1.0;
      const roll = Math.random();
      const success = roll <= successRate;
      const resultEffects = success ? choice.effects : (choice.failEffects ?? choice.effects);
      const resultText = success ? (choice.successText ?? choice.text) : (choice.failText ?? choice.text);

      result = { success, text: resultText, effects: resultEffects };

      const { newStats, newRealm, newMaxAge } = applyEffects(prev, resultEffects);

      const newFlags = [...prev.flags];

      // Add event-level flags (e.g. realm_attempt_1, major_seen_15)
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

      return {
        ...prev,
        stats: newStats,
        realm: newRealm,
        maxAge: newMaxAge,
        flags: newFlags,
        eventHistory: [
          ...prev.eventHistory,
          { age: prev.age, text: resultText, effects: resultEffects },
        ],
        gameLog: [...prev.gameLog, `选择了：${choice.text}（${success ? '成功' : '失败'}）`],
      };
    });

    return result;
  }, [applyEffects]);

  /** Set current event */
  const handleSetEvent = useCallback((event: Event | null) => {
    setState((prev) => ({ ...prev, currentEvent: event }));
  }, []);

  /** Set ending */
  const handleSetEnding = useCallback((ending: NonNullable<GameState['ending']>) => {
    setState((prev) => ({ ...prev, ending, isPlaying: false }));
  }, []);

  /** Reset game */
  const handleResetGame = useCallback(() => {
    setState(createInitialState());
  }, []);

  /** Update stats (and meta fields like realm/maxAge) */
  const handleUpdateStats = useCallback((effects: EventEffects) => {
    setState((prev) => {
      const { newStats, newRealm, newMaxAge } = applyEffects(prev, effects);
      return { ...prev, stats: newStats, realm: newRealm, maxAge: newMaxAge };
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
    setState((prev) => ({
      ...prev,
      relationships: {
        ...prev.relationships,
        [npcId]: Math.max(-100, Math.min(100, (prev.relationships[npcId] ?? 0) + delta)),
      },
    }));
  }, []);

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
    equipItem: handleEquipItem,
    unequipItem: handleUnequipItem,
  };
}
