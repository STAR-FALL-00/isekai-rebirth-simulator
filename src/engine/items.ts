import type { RebirthItem, Stats, GameHistory } from './types';

/**
 * Rebirth Items — 转生道具系统
 * 道具可以影响转生到特定世界的概率，或提供初始属性加成
 */

/** 道具掉落率配置 */
export const LOOT_RATES: Record<RebirthItem['rarity'], number> = {
  common: 0.15,
  rare: 0.05,
  epic: 0.02,
  legendary: 0.005,
};

/** 临时道具 — 游戏内一次性效果 */
export interface TempItem extends RebirthItem {
  /** 使用后立即生效的属性变化 */
  instantEffects: Partial<Stats>;
}

export const tempItemPool: TempItem[] = [
  {
    id: 'temp_heal_potion',
    name: '疗伤药',
    description: '一瓶普通的疗伤药，服用后恢复气血。',
    rarity: 'common',
    instantEffects: { health: 20 },
  },
  {
    id: 'temp_strength_herb',
    name: '力量草',
    description: '一株散发着微光的草药，能短暂增强体质。',
    rarity: 'common',
    instantEffects: { strength: 10 },
  },
  {
    id: 'temp_wisdom_scroll',
    name: '智慧卷轴',
    description: '记载着古老知识的卷轴，阅读后悟性提升。',
    rarity: 'rare',
    instantEffects: { intelligence: 15 },
  },
  {
    id: 'temp_charm_perfume',
    name: '魅惑香水',
    description: '一瓶神秘的香水，使用后魅力大增。',
    rarity: 'rare',
    instantEffects: { charisma: 15 },
  },
  {
    id: 'temp_luck_amulet',
    name: '幸运护符',
    description: '一个闪烁着金光的护符，能带来好运。',
    rarity: 'epic',
    instantEffects: { luck: 25, health: 10 },
  },
  {
    id: 'temp_elixir',
    name: '十全大补丹',
    description: '传说中的丹药，能全面提升身体素质。',
    rarity: 'epic',
    instantEffects: { strength: 10, intelligence: 10, charisma: 10, health: 15 },
  },
  {
    id: 'temp_phoenix_feather',
    name: '凤凰羽',
    description: '一根燃烧着火焰的羽毛，传闻能起死回生。',
    rarity: 'legendary',
    instantEffects: { health: 50, luck: 20, special: 10 },
  },
];

/** 根据事件稀有度获取可能掉落的临时道具 */
export function getTempDropsByRarity(eventRarity: 'common' | 'rare' | 'epic' | 'legendary'): TempItem[] {
  const rarities: RebirthItem['rarity'][] =
    eventRarity === 'legendary' ? ['common', 'rare', 'epic', 'legendary']
      : eventRarity === 'epic' ? ['common', 'rare', 'epic']
        : eventRarity === 'rare' ? ['common', 'rare']
          : ['common'];
  return tempItemPool.filter((item) => rarities.includes(item.rarity));
}

/** 尝试从事件中掉落临时道具 */
export function tryDropTempItem(eventCategory: string): TempItem | null {
  let rarity: 'common' | 'rare' | 'epic' | 'legendary' = 'common';
  const roll = Math.random();

  if (eventCategory === 'hidden' || eventCategory === 'death') {
    if (roll < LOOT_RATES.legendary) rarity = 'legendary';
    else if (roll < LOOT_RATES.epic) rarity = 'epic';
    else if (roll < LOOT_RATES.rare) rarity = 'rare';
  } else if (eventCategory === 'combat' || eventCategory === 'cultivation') {
    if (roll < LOOT_RATES.epic) rarity = 'epic';
    else if (roll < LOOT_RATES.rare) rarity = 'rare';
  } else if (eventCategory === 'romance' || eventCategory === 'exploration') {
    if (roll < LOOT_RATES.rare) rarity = 'rare';
  }

  const candidates = getTempDropsByRarity(rarity);
  if (candidates.length === 0) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

/** 尝试从转生道具池中掉落一个道具 */
export function tryDropRebirthItem(
  existingInventory: RebirthItem[],
  eventCategory: string
): RebirthItem | null {
  const roll = Math.random();
  let threshold = LOOT_RATES.common;

  if (eventCategory === 'hidden') threshold = LOOT_RATES.epic;
  else if (eventCategory === 'combat' || eventCategory === 'cultivation') threshold = LOOT_RATES.rare;
  else if (eventCategory === 'romance' || eventCategory === 'exploration') threshold = LOOT_RATES.common + 0.05;

  if (roll > threshold) return null;

  const available = rebirthItems.filter((item) => !existingInventory.some((i) => i.id === item.id));
  if (available.length === 0) return null;

  // 按稀有度加权
  const weights: Record<RebirthItem['rarity'], number> = {
    common: 40,
    rare: 30,
    epic: 20,
    legendary: 2,
  };

  const totalWeight = available.reduce((sum, item) => sum + weights[item.rarity], 0);
  let randomWeight = Math.random() * totalWeight;

  for (const item of available) {
    randomWeight -= weights[item.rarity];
    if (randomWeight <= 0) return item;
  }

  return available[available.length - 1] ?? null;
}

/** 应用临时道具效果 */
export function applyTempItemEffects(stats: Stats, tempItem: TempItem): Stats {
  const newStats = { ...stats };
  for (const [key, val] of Object.entries(tempItem.instantEffects)) {
    if (val !== undefined && key in newStats) {
      (newStats as Record<string, number>)[key] = Math.max(0, Math.min(200, (newStats as Record<string, number>)[key] ?? 0) + val);
    }
  }
  return newStats;
}

/** localStorage key */
const HISTORY_KEY = 'isekai-game-history';

/** 读取历史记录 */
export function loadGameHistory(): GameHistory {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (raw) {
      return JSON.parse(raw) as GameHistory;
    }
  } catch {
    // ignore
  }
  return {
    bestAge: 0,
    bestRealm: 0,
    totalEvents: 0,
    endingsUnlocked: [],
    bestStats: { strength: 0, intelligence: 0, charisma: 0, luck: 0, health: 0, special: 0 },
    totalPlaythroughs: 0,
    totalItemsFound: 0,
  };
}

/** 保存历史记录 */
export function saveGameHistory(history: GameHistory) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {
    // ignore
  }
}

/** 更新历史记录（与本次游戏对比并更新） */
export function updateGameHistory(
  state: { age: number; realm: number; stats: Stats; eventHistory: { length: number }; ending: { id: string } | null; obtainedItems: string[] }
) {
  const history = loadGameHistory();

  history.bestAge = Math.max(history.bestAge, state.age);
  history.bestRealm = Math.max(history.bestRealm, state.realm);
  history.totalEvents = Math.max(history.totalEvents, state.eventHistory.length);
  history.totalPlaythroughs += 1;
  history.totalItemsFound += state.obtainedItems.length;

  // Update best stats
  for (const key of Object.keys(state.stats) as (keyof Stats)[]) {
    history.bestStats[key] = Math.max(history.bestStats[key] ?? 0, state.stats[key]);
  }

  // Track unlocked endings
  if (state.ending && !history.endingsUnlocked.includes(state.ending.id)) {
    history.endingsUnlocked.push(state.ending.id);
  }

  saveGameHistory(history);
  return history;
}

export const rebirthItems: RebirthItem[] = [
  // ── Common (普通) ──
  {
    id: 'jade_pendant',
    name: '古朴玉佩',
    description: '一块温润的古玉，似乎与修仙界有着某种神秘的联系。装备后略微增加转生至修仙界的概率。',
    worldBias: { cultivation: 2.5 },
    rarity: 'common',
  },
  {
    id: 'old_spellbook',
    name: '残破魔法书',
    description: '一本缺页的魔法书，封面上的符文已经模糊不清。装备后略微增加转生至魔法大陆的概率。',
    worldBias: { magic: 2.5 },
    rarity: 'common',
  },
  {
    id: 'worn_chip',
    name: '老旧芯片',
    description: '一块来自未知时代的芯片，表面刻着微小的电路。装备后略微增加转生至科幻星际的概率。',
    worldBias: { scifi: 2.5 },
    rarity: 'common',
  },
  {
    id: 'gas_mask',
    name: '破损防毒面具',
    description: '一个在废墟中捡到的防毒面具，镜片已经龟裂。装备后略微增加转生至末日废土的概率。',
    worldBias: { apocalypse: 2.5 },
    rarity: 'common',
  },
  {
    id: 'rusty_sword',
    name: '生锈的铁剑',
    description: '一把生锈的铁剑，剑柄上刻着模糊的家纹。装备后略微增加转生至古代武侠的概率。',
    worldBias: { wuxia: 2.5 },
    rarity: 'common',
  },
  {
    id: 'red_string',
    name: '姻缘红绳',
    description: '一根红色的细绳，据说系在手腕上能招来桃花运。装备后略微增加遇到 romance NPC 的概率（所有世界通用）。',
    statBonus: { charisma: 5 },
    rarity: 'common',
  },
  {
    id: 'lucky_coin',
    name: '幸运铜币',
    description: '一面刻着奇怪符号的铜币，抛向空中时总是正面朝上。装备后初始运气+5。',
    statBonus: { luck: 5 },
    rarity: 'common',
  },

  // ── Rare (稀有) ──
  {
    id: 'spirit_stone',
    name: '灵石碎片',
    description: '一块蕴含着浓郁灵气的石头碎片，据说来自上界的仙山。装备后增加转生至修仙界的概率，并获得初始体质+3。',
    worldBias: { cultivation: 5 },
    statBonus: { strength: 3 },
    rarity: 'rare',
  },
  {
    id: 'mana_crystal',
    name: '魔力结晶',
    description: '一颗散发着微弱紫光的结晶，内部似乎有液态魔力在流动。装备后增加转生至魔法大陆的概率，并获得初始悟性+3。',
    worldBias: { magic: 5 },
    statBonus: { intelligence: 3 },
    rarity: 'rare',
  },
  {
    id: 'quantum_core',
    name: '量子核心',
    description: '一个微型化的量子计算核心，表面流动着蓝色的数据流。装备后增加转生至科幻星际的概率，并获得初始智力+3。',
    worldBias: { scifi: 5 },
    statBonus: { intelligence: 3 },
    rarity: 'rare',
  },
  {
    id: 'mutant_blood',
    name: '变异血清',
    description: '一支装有绿色液体的注射器，标签已经脱落。装备后增加转生至末日废土的概率，并获得初始体质+3。',
    worldBias: { apocalypse: 5 },
    statBonus: { strength: 3 },
    rarity: 'rare',
  },
  {
    id: 'martial_manual',
    name: '内功心法残卷',
    description: '半卷泛黄的内功秘籍，上面画着人体经脉图。装备后增加转生至古代武侠的概率，并获得初始内力+3。',
    worldBias: { wuxia: 5 },
    statBonus: { strength: 3 },
    rarity: 'rare',
  },
  {
    id: 'wanderers_map',
    name: '旅者地图',
    description: '一张会自动更新路线的神秘地图，上面标注着五个世界的入口。装备后所有世界概率更均衡（降低极端偏向）。',
    worldBias: { cultivation: 1.5, magic: 1.5, scifi: 1.5, apocalypse: 1.5, wuxia: 1.5 },
    rarity: 'rare',
  },

  // ── Epic (史诗) ──
  {
    id: 'immortal_bone',
    name: '仙人遗骨',
    description: '一截晶莹剔透的骨头，据说是某位陨落仙人留下的。装备后大幅增加转生至修仙界的概率，初始灵根+8，但会降低转生到其他世界的概率。',
    worldBias: { cultivation: 10, magic: 0.6, scifi: 0.6, apocalypse: 0.6, wuxia: 0.6 },
    statBonus: { special: 8, luck: 2 },
    rarity: 'epic',
  },
  {
    id: 'dragon_tear',
    name: '龙之泪',
    description: '一颗传说中的龙泪凝结成的宝石，内部仿佛有火焰在燃烧。装备后大幅增加转生至魔法大陆的概率，初始魔力+8。',
    worldBias: { cultivation: 0.6, magic: 10, scifi: 0.6, apocalypse: 0.6, wuxia: 0.6 },
    statBonus: { special: 8, charisma: 2 },
    rarity: 'epic',
  },
  {
    id: 'alien_dna',
    name: '外星基因序列',
    description: '一串被编码在水晶中的外星DNA序列，科学家至今无法完全解析。装备后大幅增加转生至科幻星际的概率。',
    worldBias: { cultivation: 0.6, magic: 0.6, scifi: 10, apocalypse: 0.6, wuxia: 0.6 },
    statBonus: { intelligence: 8, strength: 2 },
    rarity: 'epic',
  },
  {
    id: 'radiation_badge',
    name: '辐射徽章',
    description: '一个发光的徽章，佩戴者能在辐射环境中自由行走。装备后大幅增加转生至末日废土的概率。',
    worldBias: { cultivation: 0.6, magic: 0.6, scifi: 0.6, apocalypse: 10, wuxia: 0.6 },
    statBonus: { strength: 8, health: 5 },
    rarity: 'epic',
  },
  {
    id: 'kongfu_legacy',
    name: '武学传承令',
    description: '一块刻着"武"字的古令牌，据说持有它的人能找到隐世门派。装备后大幅增加转生至古代武侠的概率。',
    worldBias: { cultivation: 0.6, magic: 0.6, scifi: 0.6, apocalypse: 0.6, wuxia: 10 },
    statBonus: { strength: 8, intelligence: 2 },
    rarity: 'epic',
  },

  // ── Legendary (传说) ──
  {
    id: 'reincarnation_lotus',
    name: '轮回金莲',
    description: '一朵永恒不凋的金色莲花，是传说中的轮回至宝。装备后可以选择特定的世界进行转生（100%命中目标世界），并且所有初始属性+5。',
    worldBias: { cultivation: 100 },
    statBonus: { strength: 5, intelligence: 5, charisma: 5, luck: 5, health: 5, special: 5 },
    rarity: 'legendary',
  },
  {
    id: 'chaos_orb',
    name: '混沌宝珠',
    description: '一颗蕴含着混沌之力的宝珠，能让转生变得完全不可预测。装备后转生完全随机，但所有初始属性+10。',
    statBonus: { strength: 10, intelligence: 10, charisma: 10, luck: 10, health: 10, special: 10 },
    rarity: 'legendary',
  },
  {
    id: 'world_key',
    name: '世界之钥',
    description: '一把能够打开任何世界大门的钥匙，是远古时代的造物。装备后大幅提升转生到任意世界的概率，且可以自由选择世界（等同于100%选择）。',
    worldBias: { cultivation: 8, magic: 8, scifi: 8, apocalypse: 8, wuxia: 8 },
    statBonus: { luck: 10, special: 5 },
    rarity: 'legendary',
  },

  // ── 浮空要塞 ──
  {
    id: 'old_sword_hilt',
    name: '旧剑柄',
    description: '一块断裂的剑柄，似乎来自某把名剑。装备后略微增加转生至浮空要塞的概率。',
    worldBias: { floating_citadel: 2.5 },
    rarity: 'common',
  },
  {
    id: 'teleport_crystal_shard',
    name: '传送水晶碎片',
    description: '一块碎裂的水晶，内部还有微弱的传送能量。装备后初始幸运+5。',
    statBonus: { luck: 5 },
    rarity: 'common',
  },
  {
    id: 'enhancement_stone',
    name: '强化石',
    description: '能提升武器性能的稀有矿石。装备后增加转生至浮空要塞的概率，初始力量+3。',
    worldBias: { floating_citadel: 5 },
    statBonus: { strength: 3 },
    rarity: 'rare',
  },
  {
    id: 'taming_bell',
    name: '驯兽铃',
    description: '能安抚塔中怪物的铃铛。装备后增加转生至浮空要塞的概率，初始人缘+3。',
    worldBias: { floating_citadel: 5 },
    statBonus: { charisma: 3 },
    rarity: 'rare',
  },
  {
    id: 'black_sword_fragment',
    name: '黑剑碎片',
    description: '一把传说中的黑剑的碎片，据说曾属于某位独行剑士。装备后大幅增加转生至浮空要塞的概率，初始剑技+8。',
    worldBias: { floating_citadel: 10, cultivation: 0.6, magic: 0.6, scifi: 0.6, apocalypse: 0.6, wuxia: 0.6 },
    statBonus: { special: 8, strength: 2 },
    rarity: 'epic',
  },
  {
    id: 'admin_access_card',
    name: '管理员权限卡',
    description: '一张刻着神秘代码的卡片，传闻能修改塔的某些规则。装备后可选择特定世界转生（100%命中），所有初始属性+5。',
    worldBias: { floating_citadel: 100 },
    statBonus: { strength: 5, intelligence: 5, charisma: 5, luck: 5, health: 5, special: 5 },
    rarity: 'legendary',
  },
];

/** 根据稀有度获取颜色 */
export function getRarityColor(rarity: RebirthItem['rarity']): string {
  switch (rarity) {
    case 'common': return '#8A8AB8';    // 灰紫色
    case 'rare': return '#4B8AC8';      // 蓝色
    case 'epic': return '#9B6BFF';      // 紫色
    case 'legendary': return '#D4A843';  // 金色
  }
}

/** 根据稀有度获取中文名 */
export function getRarityLabel(rarity: RebirthItem['rarity']): string {
  switch (rarity) {
    case 'common': return '普通';
    case 'rare': return '稀有';
    case 'epic': return '史诗';
    case 'legendary': return '传说';
  }
}

/** 计算装备了道具后的世界权重 */
export function calculateWorldWeights(
  equippedItemIds: string[],
  allItems: RebirthItem[]
): Record<string, number> {
  const baseWeights: Record<string, number> = {
    cultivation: 1,
    magic: 1,
    scifi: 1,
    apocalypse: 1,
    wuxia: 1,
    floating_citadel: 1,
  };

  const equippedItems = allItems.filter((item) => equippedItemIds.includes(item.id));

  for (const item of equippedItems) {
    if (item.worldBias) {
      for (const [worldId, weight] of Object.entries(item.worldBias)) {
        baseWeights[worldId] = (baseWeights[worldId] || 1) * weight;
      }
    }
  }

  return baseWeights;
}

/** 根据权重随机选择一个世界 */
export function pickRandomWorldByWeights(
  weights: Record<string, number>
): string {
  const entries = Object.entries(weights);
  const totalWeight = entries.reduce((sum, [, w]) => sum + w, 0);
  let random = Math.random() * totalWeight;

  for (const [worldId, weight] of entries) {
    random -= weight;
    if (random <= 0) return worldId;
  }

  return entries[entries.length - 1]?.[0] ?? 'cultivation';
}

/** 获取装备的属性加成 */
export function getEquippedStatBonus(
  equippedItemIds: string[],
  allItems: RebirthItem[]
): import('./types').Stats {
  const bonus: import('./types').Stats = {
    strength: 0,
    intelligence: 0,
    charisma: 0,
    luck: 0,
    health: 0,
    special: 0,
  };

  const equippedItems = allItems.filter((item) => equippedItemIds.includes(item.id));

  for (const item of equippedItems) {
    if (item.statBonus) {
      for (const key of Object.keys(item.statBonus) as (keyof import('./types').Stats)[]) {
        bonus[key] += item.statBonus[key] ?? 0;
      }
    }
  }

  return bonus;
}
