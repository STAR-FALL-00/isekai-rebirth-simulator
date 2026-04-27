import { useState, useCallback } from 'react';
import type { GameState, Event, Stats } from '@/engine/types';
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

  /** Select a choice in an event with success/fail roll */
  const handleSelectChoice = useCallback((choiceIndex: number): { success: boolean; text: string; effects: Partial<Stats> } | null => {
    let result: { success: boolean; text: string; effects: Partial<Stats> } | null = null;

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

      const newStats = { ...prev.stats };
      for (const key of Object.keys(resultEffects) as (keyof Stats)[]) {
        newStats[key] = Math.max(0, Math.min(200, (newStats[key] ?? 0) + (resultEffects[key] ?? 0)));
      }

      const newFlags = [...prev.flags];
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
        flags: newFlags,
        eventHistory: [
          ...prev.eventHistory,
          { age: prev.age, text: resultText, effects: resultEffects },
        ],
        gameLog: [...prev.gameLog, `选择了：${choice.text}（${success ? '成功' : '失败'}）`],
      };
    });

    return result;
  }, []);

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

  /** Update stats */
  const handleUpdateStats = useCallback((effects: Partial<Stats>) => {
    setState((prev) => {
      const newStats = { ...prev.stats };
      for (const key of Object.keys(effects) as (keyof Stats)[]) {
        newStats[key] = Math.max(0, Math.min(200, (newStats[key] ?? 0) + (effects[key] ?? 0)));
      }
      return { ...prev, stats: newStats };
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
    addRelationship: handleAddRelationship,
    equipItem: handleEquipItem,
    unequipItem: handleUnequipItem,
  };
}
