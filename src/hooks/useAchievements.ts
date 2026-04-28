import { useState, useCallback, useMemo } from 'react';
import type { GameState } from '@/engine/types';
import { achievements } from '@/engine/achievements';
import { checkAchievements, type AchievementUnlockResult } from '@/engine/achievement-engine';

const ACHIEVEMENTS_KEY = 'isekai-achievements';

export function useAchievements() {
  const [unlockedIds, setUnlockedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(ACHIEVEMENTS_KEY);
      if (raw) return JSON.parse(raw) as string[];
    } catch { /* ignore */ }
    return [];
  });

  const unlockAchievement = useCallback((id: string) => {
    setUnlockedIds((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      try {
        localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(next));
      } catch { /* ignore */ }
      return next;
    });
  }, []);

  const checkAndUnlock = useCallback((gameState: GameState): AchievementUnlockResult[] => {
    const newUnlocks = checkAchievements(gameState, unlockedIds);
    if (newUnlocks.length > 0) {
      setUnlockedIds((prev) => {
        const next = [...prev, ...newUnlocks.map((r) => r.id)];
        try {
          localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(next));
        } catch { /* ignore */ }
        return next;
      });
    }
    return newUnlocks;
  }, [unlockedIds]);

  const totalCount = achievements.length;

  const progressByCategory = useMemo(() => {
    const map: Record<string, { total: number; unlocked: number }> = {};
    for (const ach of achievements) {
      if (!map[ach.category]) {
        map[ach.category] = { total: 0, unlocked: 0 };
      }
      map[ach.category]!.total++;
      if (unlockedIds.includes(ach.id)) {
        map[ach.category]!.unlocked++;
      }
    }
    return map;
  }, [unlockedIds]);

  const unlockedCount = unlockedIds.length;

  return {
    unlockedAchievements: unlockedIds,
    unlockedCount,
    unlockAchievement,
    checkAndUnlock,
    totalCount,
    progressByCategory,
  };
}
