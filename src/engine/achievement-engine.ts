import type { GameState, Stats } from '@/engine/types';
import type { AchievementData } from '@/engine/events/types';
import { achievements } from './achievements';

// ═══════════════════════════════════════════════════════════════
// Achievement Engine — runtime check + persistent data
// ═══════════════════════════════════════════════════════════════

export interface AchievementUnlockResult {
  id: string;
  title: string;
  description: string;
  category: AchievementData['category'];
  icon: string;
}

export interface PersistentData {
  totalRebirths: number;
  completedWorlds: Record<string, number>;
  endingsUnlocked: string[];
  endingsByWorld: Record<string, string[]>;
  endingsByCategory: {
    normal: string[];
    good: string[];
    bad: string[];
    secret: string[];
    hidden: string[];
    harem: string[];
  };
  maxStatsEver: Partial<Stats>;
  allTimeEventCategories: Record<string, number>;
}

const PERSISTENT_KEY = 'isekai-persistent-data';

export function loadPersistentData(): PersistentData {
  try {
    const raw = localStorage.getItem(PERSISTENT_KEY);
    if (raw) return JSON.parse(raw) as PersistentData;
  } catch { /* ignore */ }
  return {
    totalRebirths: 0,
    completedWorlds: {},
    endingsUnlocked: [],
    endingsByWorld: {},
    endingsByCategory: { normal: [], good: [], bad: [], secret: [], hidden: [], harem: [] },
    maxStatsEver: {},
    allTimeEventCategories: {},
  };
}

export function savePersistentData(data: PersistentData): void {
  try {
    localStorage.setItem(PERSISTENT_KEY, JSON.stringify(data));
  } catch { /* ignore */ }
}

/** Update persistent cross-run data based on current game state */
function updatePersistentData(gameState: GameState): PersistentData {
  const data = loadPersistentData();

  // totalRebirths
  data.totalRebirths = Math.max(data.totalRebirths, gameState.totalRebirths);

  // completed worlds
  if (gameState.world?.id && (gameState.isDead || gameState.ending)) {
    const wid = gameState.world.id;
    data.completedWorlds[wid] = (data.completedWorlds[wid] ?? 0) + 1;
  }

  // endings
  if (gameState.ending?.id) {
    const eid = gameState.ending.id;
    if (!data.endingsUnlocked.includes(eid)) {
      data.endingsUnlocked.push(eid);
    }
    const cat = gameState.ending.category;
    if (data.endingsByCategory[cat] && !data.endingsByCategory[cat].includes(eid)) {
      data.endingsByCategory[cat].push(eid);
    }
    const wid = gameState.ending.worldId;
    if (wid) {
      if (!data.endingsByWorld[wid]) data.endingsByWorld[wid] = [];
      if (!data.endingsByWorld[wid].includes(eid)) {
        data.endingsByWorld[wid].push(eid);
      }
    }
  }

  // max stats ever
  for (const [key, val] of Object.entries(gameState.stats)) {
    if (typeof val === 'number') {
      const current = (data.maxStatsEver as Record<string, number>)[key] ?? 0;
      if (val > current) {
        (data.maxStatsEver as Record<string, number>)[key] = val;
      }
    }
  }

  // all-time event categories
  for (const [cat, count] of Object.entries(gameState.eventCategoryCounts ?? {})) {
    data.allTimeEventCategories[cat] = (data.allTimeEventCategories[cat] ?? 0) + count;
  }

  savePersistentData(data);
  return data;
}

/* ── condition evaluators ── */

function checkCondition(
  ach: AchievementData,
  gameState: GameState,
  persistent: PersistentData,
  unlockedIds: string[]
): boolean {
  const c = ach.condition;
  const target = typeof c.target === 'number' ? c.target : parseInt(c.target as string, 10) || 0;
  const evtCats = gameState.eventCategoryCounts ?? {};

  switch (c.type) {
    // ── world ──
    case 'complete_world':
      return c.target === gameState.world?.id && (gameState.isDead || !!gameState.ending);

    case 'complete_world_count': {
      const count = persistent.completedWorlds[c.worldId ?? ''] ?? 0;
      return count >= target;
    }

    case 'all_worlds':
      return Object.keys(persistent.completedWorlds).length >= target;

    case 'all_endings': {
      const worldId = c.worldId ?? gameState.world?.id ?? '';
      return (persistent.endingsByWorld[worldId]?.length ?? 0) >= target;
    }

    // ── meta / rebirth ──
    case 'total_reincarnations':
      return persistent.totalRebirths >= target;

    case 'first_reincarnation':
      return persistent.totalRebirths >= 1;

    // ── stats ──
    case 'max_stat': {
      const maxVal = Math.max(...Object.values(gameState.stats));
      return maxVal >= target;
    }

    case 'max_stat_intelligence':
      return gameState.stats.intelligence >= target;

    case 'max_stat_charisma':
      return gameState.stats.charisma >= target;

    case 'max_stat_luck':
      return gameState.stats.luck >= target;

    case 'max_stat_health':
      return gameState.stats.health >= target;

    case 'max_stat_special':
      return gameState.stats.special >= target;

    case 'min_stat':
      return gameState.stats.strength <= target;

    case 'min_stat_intelligence':
      return gameState.stats.intelligence <= target;

    case 'min_stat_charisma':
      return gameState.stats.charisma <= target;

    case 'min_stat_luck':
      return gameState.stats.luck <= target;

    case 'min_stat_health':
      return gameState.stats.health <= target;

    case 'all_stats_high': {
      const vals = Object.values(gameState.stats);
      return vals.length > 0 && vals.every((v) => v >= target);
    }

    case 'all_stats_max': {
      const vals = Object.values(gameState.stats);
      return vals.length > 0 && vals.every((v) => v >= target);
    }

    case 'all_stats_low': {
      const vals = Object.values(gameState.startingStats ?? gameState.stats);
      return vals.length > 0 && vals.every((v) => v <= target);
    }

    // ── age ──
    case 'max_age':
      return gameState.age >= target;

    case 'min_age_death':
      return gameState.isDead && gameState.age <= target;

    // ── events ──
    case 'event_category':
      return (evtCats[c.target as string] ?? 0) >= 1;

    case 'survive_death':
      return (gameState.deathSurvivedCount ?? 0) >= target;

    case 'choices_made':
      return (gameState.choiceStats?.total ?? 0) >= target;

    case 'events_triggered':
      return gameState.eventHistory.length >= target;

    case 'combat_events':
      return (evtCats.combat ?? 0) >= target;

    case 'no_combat':
      return (evtCats.combat ?? 0) === 0 && (gameState.isDead || !!gameState.ending);

    case 'no_romance':
      return (evtCats.romance ?? 0) === 0 && (gameState.isDead || !!gameState.ending);

    case 'all_categories': {
      const categories = [
        'childhood', 'growth', 'adult', 'elder',
        'combat', 'romance', 'cultivation', 'exploration',
        'world_story', 'identity_exclusive', 'hidden', 'death',
      ];
      return categories.every((cat) => (evtCats[cat] ?? 0) > 0);
    }

    // ── speed ──
    case 'speed_run':
      return (gameState.isDead || !!gameState.ending) && gameState.age <= target;

    case 'speed_run_world':
      return (
        gameState.world?.id === c.worldId &&
        (gameState.isDead || !!gameState.ending) &&
        gameState.age <= target
      );

    case 'min_events':
      return (gameState.isDead || !!gameState.ending) && gameState.eventHistory.length <= target;

    case 'speed_good_ending':
      return gameState.ending?.category === 'good' && gameState.age <= target;

    // ── endings ──
    case 'endings_unlocked':
      return persistent.endingsUnlocked.length >= target;

    case 'first_ending':
      return persistent.endingsUnlocked.length >= 1;

    case 'good_ending':
      return gameState.ending?.category === 'good';

    case 'bad_ending':
      return gameState.ending?.category === 'bad';

    case 'secret_ending':
      return gameState.ending?.category === 'secret';

    case 'hidden_endings':
      return persistent.endingsByCategory.hidden.length >= target;

    case 'harem_endings':
      return persistent.endingsByCategory.harem.length >= target;

    case 'all_harem':
      return persistent.endingsByCategory.harem.length >= target;

    case 'all_hidden':
      return persistent.endingsByCategory.hidden.length >= target;

    case 'all_secret':
      return persistent.endingsByCategory.secret.length >= target;

    case 'all_worlds_best': {
      const bestCount =
        persistent.endingsByCategory.good.length +
        persistent.endingsByCategory.secret.length +
        persistent.endingsByCategory.hidden.length;
      return Object.keys(persistent.completedWorlds).length >= target && bestCount > 0;
    }

    // ── meta ──
    case 'achievements':
    case 'all_achievements':
      return unlockedIds.length >= target;

    // ── not yet tracked precisely ──
    case 'concurrent_romance':
    case 'lucky_streak':
    case 'unlucky_streak':
      return false;

    default:
      return false;
  }
}

/** Check achievements against current game state */
export function checkAchievements(
  gameState: GameState,
  unlockedIds: string[]
): AchievementUnlockResult[] {
  const persistent = updatePersistentData(gameState);
  const results: AchievementUnlockResult[] = [];

  for (const ach of achievements) {
    if (unlockedIds.includes(ach.id)) continue;
    if (checkCondition(ach, gameState, persistent, unlockedIds)) {
      results.push({
        id: ach.id,
        title: ach.title,
        description: ach.description,
        category: ach.category,
        icon: ach.icon,
      });
    }
  }

  return results;
}
