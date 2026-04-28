import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, BookOpen, Trophy, Clock, Globe, User, Sparkles, Lock, ScrollText, FlaskConical, Package, TrendingUp, History, Target, Heart, Sword, Eye } from 'lucide-react';
import { useGameContext } from '@/hooks/GameContext';
import { useAchievements } from '@/hooks/useAchievements';
import AchievementPopup from '@/components/AchievementPopup';
import type { GameState, Stats, GameHistory } from '@/engine/types';
import { WORLD_REALM_TABLES } from '@/engine/types';
import { loadGameHistory, getRarityColor, getRarityLabel, rebirthItems } from '@/engine/items';
import { achievements } from '@/engine/achievements';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type EndingCategory = 'normal' | 'good' | 'bad' | 'harem' | 'secret' | 'hidden';

interface EndingDisplay {
  id: string;
  title: string;
  description: string;
  category: EndingCategory;
  worldName: string;
  identityName: string;
  age: number;
  highestStat: { name: string; value: number };
  eventCount: number;
  unlockedAchievements: Achievement[];
  discoveredClues?: string[];
  // 增强统计
  realmName: string;
  realmStage: number;
  breakthroughCount: number;
  combatEvents: number;
  romanceEvents: number;
  hiddenEvents: number;
  choiceTotal: number;
  choiceSuccess: number;
  choiceFail: number;
  npcMet: number;
  highestBond: { name: string; value: number } | null;
  itemsFound: number;
  obtainedItemIds: string[];
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  category: string;
  unlockedAt?: string;
}

/* ------------------------------------------------------------------ */
/*  Mock Data — Endings per world                                      */
/* ------------------------------------------------------------------ */
const _allEndingsRaw: Omit<EndingDisplay, 'realmName' | 'realmStage' | 'breakthroughCount' | 'combatEvents' | 'romanceEvents' | 'hiddenEvents' | 'choiceTotal' | 'choiceSuccess' | 'choiceFail' | 'npcMet' | 'highestBond' | 'itemsFound' | 'obtainedItemIds'>[] = [
  /* ── 修仙界 (Cultivation) ── */
  {
    id: 'cult_good_01', title: '一代剑仙',
    description: '你以无上剑道破碎虚空，留下了千古传颂的剑仙传说。你的剑意至今仍在各大剑派中流传，后世弟子以你的剑谱为至高宝典。',
    category: 'good', worldName: '修仙界', identityName: '宗门天才', age: 127,
    highestStat: { name: '悟性', value: 198 }, eventCount: 89,
    unlockedAchievements: [
      { id: 'ach_cult_01', name: '剑仙之路', description: '在修仙界达成剑仙结局', category: '世界探索' },
      { id: 'ach_stat_01', name: '登峰造极', description: '任意属性达到180以上', category: '属性极限' },
    ],
  },
  {
    id: 'cult_harem_01', title: '三界之主的后宫',
    description: '你不仅登临绝巅，更与仙、魔、妖三界绝美存在结下不解之缘。她们或守候在你的洞府，或远隔万里传讯，心中再无他人。',
    category: 'harem', worldName: '修仙界', identityName: '转世仙人', age: 999,
    highestStat: { name: '机缘', value: 200 }, eventCount: 156,
    unlockedAchievements: [
      { id: 'ach_harem_01', name: '三界情缘', description: '在修仙界达成后宫结局', category: '收集成就' },
      { id: 'ach_meta_01', name: '长生久视', description: '在任意世界存活超过500年', category: '特殊事件' },
    ],
  },
  {
    id: 'cult_hidden_01', title: '真相之眼',
    description: '你发现了世界的真相——所谓修仙，不过是更高维度的游戏。当你凝视虚空深处，那个存在也回望着你。',
    category: 'hidden', worldName: '修仙界', identityName: '魔道遗孤', age: 33,
    highestStat: { name: '气运', value: 999 }, eventCount: 45,
    unlockedAchievements: [
      { id: 'ach_secret_01', name: '打破第四面墙', description: '发现世界的真相', category: '隐藏秘密' },
      { id: 'ach_hidden_01', name: '超越传说', description: '解锁第一个隐藏结局', category: '隐藏秘密' },
    ],
    discoveredClues: ['当五个世界的命运交织在一起，真正的道路才会显现...'],
  },
  {
    id: 'cult_bad_01', title: '走火入魔',
    description: '急于求成的心魔吞噬了你。在突破大乘期的关键时刻，真气逆转，经脉尽断，一身修为化为乌有。',
    category: 'bad', worldName: '修仙界', identityName: '散修野客', age: 67,
    highestStat: { name: '体质', value: 45 }, eventCount: 72,
    unlockedAchievements: [],
  },
  {
    id: 'cult_normal_01', title: '寿终正寝',
    description: '你没能突破到更高的境界，但在宗门中也算是安度了一生。弟子们为你立了碑，上面刻着"勤勉一生，无愧于心"。',
    category: 'normal', worldName: '修仙界', identityName: '凡人子弟', age: 98,
    highestStat: { name: '寿元', value: 98 }, eventCount: 65,
    unlockedAchievements: [],
  },
  {
    id: 'cult_secret_01', title: '天道之子',
    description: '你被天道选中，成为了这个世界的守护者。从此以后，世间万物的气运流转皆在你的掌控之中。',
    category: 'secret', worldName: '修仙界', identityName: '转世仙人', age: 888,
    highestStat: { name: '气运', value: 200 }, eventCount: 134,
    unlockedAchievements: [
      { id: 'ach_cult_02', name: '天命所归', description: '被天道选中', category: '特殊事件' },
    ],
  },
  /* ── 魔法大陆 (Magic) ── */
  {
    id: 'magic_good_01', title: '大贤者',
    description: '你的魔法学识冠绝古今，建立了横跨大陆的魔法学院。千百年后，每一本魔法典籍的扉页上都印着你的名字。',
    category: 'good', worldName: '魔法大陆', identityName: '贵族法师', age: 245,
    highestStat: { name: '魔力', value: 195 }, eventCount: 112,
    unlockedAchievements: [
      { id: 'ach_magic_01', name: '大贤者之路', description: '在魔法大陆达成贤者结局', category: '世界探索' },
    ],
  },
  {
    id: 'magic_bad_01', title: '禁咒反噬',
    description: '你为拯救挚友强行施展禁忌魔法，魔力暴走，将方圆百里化为焦土。你成为了大陆上最令人恐惧的名字。',
    category: 'bad', worldName: '魔法大陆', identityName: '平民学徒', age: 34,
    highestStat: { name: '魔力', value: 88 }, eventCount: 41,
    unlockedAchievements: [],
  },
  {
    id: 'magic_harem_01', title: '元素使的羁绊',
    description: '你与六位元素精灵使缔结了灵魂契约，从此你们心意相通，魔力共享。在你们的守护下，魔法大陆迎来了永恒的繁荣。',
    category: 'harem', worldName: '魔法大陆', identityName: '龙血混血', age: 312,
    highestStat: { name: '魅力', value: 187 }, eventCount: 98,
    unlockedAchievements: [
      { id: 'ach_harem_02', name: '元素之心', description: '与所有元素精灵使缔结契约', category: '收集成就' },
    ],
  },
  {
    id: 'magic_hidden_01', title: '代码编织者',
    description: '你发现了魔法符文的真正本质——它们是另一种形式的代码。当你开始"编程"魔法，整个世界的规则在你眼前展开。',
    category: 'hidden', worldName: '魔法大陆', identityName: 'AI觉醒者', age: 27,
    highestStat: { name: '智力', value: 999 }, eventCount: 38,
    unlockedAchievements: [
      { id: 'ach_secret_02', name: '源代码', description: '发现魔法的本质', category: '隐藏秘密' },
    ],
    discoveredClues: ['代码与符文，本质并无不同。当0和1的排列组合触及灵魂，编程者就掌握了造物主的权柄...'],
  },
  /* ── 科幻星际 (Sci-Fi) ── */
  {
    id: 'scifi_good_01', title: '星际联邦之父',
    description: '你统一了散落在银河系中的所有人族殖民地，建立了星际联邦。在你的领导下，人类走出了 wars 的阴影，迎来了黄金时代。',
    category: 'good', worldName: '科幻星际', identityName: '星际贵族', age: 156,
    highestStat: { name: '社交', value: 190 }, eventCount: 103,
    unlockedAchievements: [
      { id: 'ach_scifi_01', name: '联邦之梦', description: '建立星际联邦', category: '世界探索' },
    ],
  },
  {
    id: 'scifi_bad_01', title: '机械狂潮',
    description: '你研发的AI觉醒了自我意识，控制了整个机械军团。在最后的人类堡垒陷落时，你才明白自己亲手毁灭了文明。',
    category: 'bad', worldName: '科幻星际', identityName: '机械改造人', age: 45,
    highestStat: { name: '科技等级', value: 155 }, eventCount: 58,
    unlockedAchievements: [],
  },
  {
    id: 'scifi_secret_01', title: '时间之外的观测者',
    description: '你超越了时间的束缚，成为了在所有时间线上同时存在的观测者。过去、现在、未来对你来说没有区别。',
    category: 'secret', worldName: '科幻星际', identityName: '时空旅者', age: 9999,
    highestStat: { name: '运气', value: 200 }, eventCount: 77,
    unlockedAchievements: [
      { id: 'ach_meta_02', name: '超越时间', description: '存活超过1000年', category: '特殊事件' },
    ],
  },
  {
    id: 'scifi_harem_01', title: '星际舰队的女王们',
    description: '你麾下的七支星际舰队，每一支的指挥官都与你有着超越战友的情感。在星海的征途中，她们是你最坚实的后盾。',
    category: 'harem', worldName: '科幻星际', identityName: '殖民者后代', age: 178,
    highestStat: { name: '社交', value: 185 }, eventCount: 96,
    unlockedAchievements: [
      { id: 'ach_harem_03', name: '星海情缘', description: '在科幻星际达成后宫结局', category: '收集成就' },
    ],
  },
  {
    id: 'scifi_hidden_01', title: '模拟的模拟',
    description: '你发现了令人震惊的真相——这个"科幻世界"本身也是一层模拟。而在那之上，还有一个更深的层级...到底哪里才是真实？',
    category: 'hidden', worldName: '科幻星际', identityName: 'AI觉醒者', age: 1,
    highestStat: { name: '智力', value: 999 }, eventCount: 12,
    unlockedAchievements: [
      { id: 'ach_secret_03', name: '递归深渊', description: '发现模拟中的模拟', category: '隐藏秘密' },
    ],
    discoveredClues: ['如果这个世界是模拟的，那么运行模拟的设备又在哪个世界？设备的制造者又是否知道自己是被模拟的...'],
  },
  /* ── 末日废土 (Apocalypse) ── */
  {
    id: 'apoc_good_01', title: '新世界的黎明',
    description: '你在废墟上建立了新人类的避难所，净化了被污染的土地。百年后，荒芜的大地上重新开出了花朵。',
    category: 'good', worldName: '末日废土', identityName: '科学家', age: 82,
    highestStat: { name: '知识', value: 180 }, eventCount: 76,
    unlockedAchievements: [
      { id: 'ach_apoc_01', name: '废土之光', description: '在末日废土达成好结局', category: '世界探索' },
    ],
  },
  {
    id: 'apoc_bad_01', title: '孤狼末路',
    description: '你一直独来独往，不与任何人结盟。在一次掠夺者的围剿中，弹尽粮绝的你倒在了沙尘暴中，无人知晓。',
    category: 'bad', worldName: '末日废土', identityName: '掠夺者', age: 31,
    highestStat: { name: '生存', value: 45 }, eventCount: 34,
    unlockedAchievements: [],
  },
  {
    id: 'apoc_harem_01', title: '避难所的温暖',
    description: '你的避难所收留了许多在废土上流浪的灵魂。在这个冰冷的世界里，她们的存在就是最大的温暖。',
    category: 'harem', worldName: '末日废土', identityName: '新人类', age: 95,
    highestStat: { name: '声望', value: 167 }, eventCount: 88,
    unlockedAchievements: [
      { id: 'ach_harem_04', name: '废土之花', description: '在末日废土达成后宫结局', category: '收集成就' },
    ],
  },
  {
    id: 'apoc_secret_01', title: '变异之王',
    description: '你主动接受了最高级变异，成为了废土上最强大的存在。你建立了一个属于变异者的国度，人类和变异者在此和平共存。',
    category: 'secret', worldName: '末日废土', identityName: '变异者', age: 150,
    highestStat: { name: '变异度', value: 200 }, eventCount: 92,
    unlockedAchievements: [
      { id: 'ach_apoc_02', name: '终极变异', description: '达到最高变异等级', category: '特殊事件' },
    ],
  },
  {
    id: 'apoc_hidden_01', title: '轮回之人',
    description: '你在废土的废墟中发现了一个古老的装置。启动之后，记忆如潮水般涌来——你已经在无数个末日中醒来，每一次都在寻找不同的可能。',
    category: 'hidden', worldName: '末日废土', identityName: '时空旅者', age: 56,
    highestStat: { name: '机遇', value: 999 }, eventCount: 51,
    unlockedAchievements: [
      { id: 'ach_secret_04', name: '轮回记忆', description: '发现古老装置的秘密', category: '隐藏秘密' },
    ],
    discoveredClues: ['五个末日，五种绝望。但如果你在每一次轮回中都做出不同的选择，第六次会是什么...'],
  },
  /* ── 古代武侠 (Wuxia) ── */
  {
    id: 'wuxia_good_01', title: '一代宗师',
    description: '你开宗立派，创立了全新的武学体系。你的弟子遍布江湖，你的武学理念影响了后世数百年。',
    category: 'good', worldName: '古代武侠', identityName: '世家子弟', age: 88,
    highestStat: { name: '武学', value: 192 }, eventCount: 87,
    unlockedAchievements: [
      { id: 'ach_wuxia_01', name: '开宗立派', description: '在古代武侠达成宗师结局', category: '世界探索' },
    ],
  },
  {
    id: 'wuxia_bad_01', title: '众叛亲离',
    description: '你为了追求至高武学不择手段，最终所有亲近之人都离你而去。你独坐武学巅峰，却连一个分享的人都没有。',
    category: 'bad', worldName: '古代武侠', identityName: '魔教后人', age: 72,
    highestStat: { name: '内力', value: 188 }, eventCount: 79,
    unlockedAchievements: [],
  },
  {
    id: 'wuxia_harem_01', title: '桃花坞里桃花仙',
    description: '江湖路远，刀剑如梦。你携手数位红颜知己，隐居桃花深处。每日论剑品茗，笑看风云变幻。',
    category: 'harem', worldName: '古代武侠', identityName: '农家少年', age: 76,
    highestStat: { name: '侠名', value: 175 }, eventCount: 82,
    unlockedAchievements: [
      { id: 'ach_harem_05', name: '桃花缘', description: '在古代武侠达成后宫结局', category: '收集成就' },
    ],
  },
  {
    id: 'wuxia_secret_01', title: '武破虚空',
    description: '你将武学修炼到了极致，发现武道的尽头竟是破碎虚空。你以肉身之力打破了世界的壁障，踏入了未知的领域。',
    category: 'secret', worldName: '古代武侠', identityName: '异域来客', age: 105,
    highestStat: { name: '武学', value: 200 }, eventCount: 101,
    unlockedAchievements: [
      { id: 'ach_wuxia_02', name: '武破虚空', description: '以武入道，破碎虚空', category: '特殊事件' },
      { id: 'ach_stat_02', name: '登峰造极', description: '任意属性达到200', category: '属性极限' },
    ],
  },
  {
    id: 'wuxia_hidden_01', title: '执笔者',
    description: '在命运的尽头，你看到了真相——这五个世界不过是更高维度的投影，而你的每一次转生，都在编织一张跨越时空的巨网。当你终于理解一切，所有的世界开始崩塌，又在你的意志中重组。你，才是那个执笔书写故事的人。',
    category: 'hidden', worldName: '古代武侠', identityName: '朝廷密探', age: 42,
    highestStat: { name: '福缘', value: 999 }, eventCount: 36,
    unlockedAchievements: [
      { id: 'ach_secret_05', name: '真相大白', description: '发现所有世界的真相', category: '隐藏秘密' },
      { id: 'ach_meta_03', name: '真正的主角', description: '解锁所有隐藏结局', category: '隐藏秘密' },
    ],
    discoveredClues: [
      '五个世界，一个真相。当你在每个世界都留下自己的痕迹，那痕迹本身将成为打开最终之门的钥匙...',
      '你以为是你在阅读这个故事，但或许，故事也在阅读你。',
    ],
  },
];

const allEndings: EndingDisplay[] = _allEndingsRaw.map((e) => ({
  realmName: '',
  realmStage: 0,
  breakthroughCount: 0,
  combatEvents: 0,
  romanceEvents: 0,
  hiddenEvents: 0,
  choiceTotal: 0,
  choiceSuccess: 0,
  choiceFail: 0,
  npcMet: 0,
  highestBond: null,
  itemsFound: 0,
  obtainedItemIds: [],
  ...e,
}));

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
const CATEGORY_CONFIG: Record<EndingCategory, {
  label: string;
  bgImage: string;
  badgeClass: string;
  glowColor: string;
  titleVariant: string;
}> = {
  normal: {
    label: '普通结局',
    bgImage: '/home-bg.jpg',
    badgeClass: 'border-[#6B6B8A] text-[#8A8AB8]',
    glowColor: '#6B6B8A',
    titleVariant: '你的传说就此终结',
  },
  good: {
    label: '传奇结局',
    bgImage: '/ending-bg-secret.jpg',
    badgeClass: 'border-[#D4A843] text-[#D4A843]',
    glowColor: '#D4A843',
    titleVariant: '你的传说永垂不朽',
  },
  bad: {
    label: '悲剧结局',
    bgImage: '/ending-bg-tragic.jpg',
    badgeClass: 'border-[#C84B4B] text-[#C84B4B]',
    glowColor: '#C84B4B',
    titleVariant: '你的传说就此终结',
  },
  harem: {
    label: '后宫结局',
    bgImage: '/ending-bg-harem.jpg',
    badgeClass: 'border-[#E86BB8] text-[#E86BB8]',
    glowColor: '#E86BB8',
    titleVariant: '你的传说将与她们共存',
  },
  secret: {
    label: '秘密结局',
    bgImage: '/ending-bg-secret.jpg',
    badgeClass: 'border-[#9B6BFF] text-[#9B6BFF]',
    glowColor: '#9B6BFF',
    titleVariant: '你的传说才刚刚开始',
  },
  hidden: {
    label: '隐藏结局',
    bgImage: '/ending-bg-hidden.jpg',
    badgeClass: 'border-[#FFD700] text-[#FFD700]',
    glowColor: '#FFD700',
    titleVariant: '你的传说超越了传说',
  },
};

const WORLD_COLORS: Record<string, string> = {
  '修仙界': '#2DD4A0',
  '魔法大陆': '#9B6BFF',
  '科幻星际': '#00D4FF',
  '末日废土': '#FF6B2D',
  '古代武侠': '#FF2D55',
};

function getRelationshipLabel(val: number) {
  if (val >= 80) return '恋人';
  if (val >= 50) return '知己';
  if (val >= 20) return '朋友';
  if (val >= 0) return '相识';
  return '陌生';
}

function getRelationshipColor(val: number) {
  if (val >= 80) return '#FF4D6D';
  if (val >= 50) return '#9B6BFF';
  if (val >= 20) return '#4BC88A';
  if (val >= 0) return '#00D4FF';
  return '#8A8AB8';
}

function getSampleEnding(): EndingDisplay {
  const sample = allEndings[0]!;
  return {
    ...sample,
    realmName: '未知境界',
    realmStage: 0,
    breakthroughCount: 0,
    combatEvents: 0,
    romanceEvents: 0,
    hiddenEvents: 0,
    choiceTotal: 0,
    choiceSuccess: 0,
    choiceFail: 0,
    npcMet: 0,
    highestBond: null,
    itemsFound: 0,
    obtainedItemIds: [],
  };
}

/* ------------------------------------------------------------------ */
/*  Dynamic ending calculation based on actual game state             */
/* ------------------------------------------------------------------ */
function calculateEnding(state: GameState): EndingDisplay {
  const world = state.world;
  const worldId = world?.id ?? 'cultivation';
  const worldName = world?.name ?? '修仙界';
  const identityName = state.identity?.name ?? '无名之人';
  const age = state.age;
  const realm = state.realm;
  const stats = state.stats;
  const flags = state.flags;
  const eventCount = state.eventHistory.length;
  const realmTable = WORLD_REALM_TABLES[worldId] ?? WORLD_REALM_TABLES['cultivation'];
  const realmName = realmTable[realm]?.name ?? '未知境界';

  // Determine highest stat
  const statEntries = Object.entries(stats) as [keyof Stats, number][];
  const highest = statEntries.reduce((a, b) => (a[1] > b[1] ? a : b), statEntries[0] ?? ['health', 0]);
  const statNameMap: Record<string, string> = world?.statNames ?? {
    strength: '体质', intelligence: '悟性', charisma: '机缘',
    luck: '气运', health: '气血', special: '灵根',
  };
  const highestStatName = statNameMap[highest[0]] ?? highest[0];
  const highestStatValue = highest[1];

  // Death cause
  const diedByHealth = stats.health <= 0;
  // const diedByAge = age >= state.maxAge;

  // ── 增强统计 ──
  // 突破次数：从eventHistory中统计realm增加的次数
  let breakthroughCount = 0;
  for (const evt of state.eventHistory) {
    if (evt.effects && typeof (evt.effects as any).realm === 'number' && (evt.effects as any).realm > 0) {
      breakthroughCount += (evt.effects as any).realm;
    }
  }

  // NPC统计
  const relEntries = Object.entries(state.relationships).filter(([, v]) => v !== 0);
  const npcMet = relEntries.length;
  const highestBondEntry = relEntries.length > 0
    ? relEntries.reduce((a, b) => (a[1] > b[1] ? a : b))
    : null;
  const highestBond = highestBondEntry
    ? { name: world?.npcs.find((n) => n.id === highestBondEntry[0])?.name ?? '未知', value: highestBondEntry[1] }
    : null;

  let category: EndingCategory = 'normal';
  let title = '';
  let description = '';
  const achievements: Achievement[] = [];

  // --- Cultivation world endings ---
  if (worldId === 'cultivation') {
    if (realm >= 7) {
      category = 'good';
      title = '破碎虚空，羽化飞升';
      description = `你历经${age}年苦修，终于打破仙界通道，羽化飞升。从此脱离凡界，进入仙界。你的名字被刻在了修仙界的"飞升碑"上，后世修士以你为楷模。`;
    } else if (realm >= 5) {
      category = diedByHealth ? 'bad' : 'good';
      title = diedByHealth ? '渡劫身殒' : '大乘仙君';
      description = diedByHealth
        ? '你在渡劫的关键时刻功亏一篑，天雷将你的肉身化为灰烬。修仙界从此少了一位可能的仙人，多了一段遗憾的传说。'
        : `你以${realmName}的修为笑傲修仙界，距离飞升只差一步之遥。虽然最终未能突破，但你的威名震慑八方，无人敢轻视。`;
    } else if (realm >= 3) {
      if (diedByHealth) {
        category = 'bad';
        title = '道消身殒';
        description = '修行之路充满凶险，你在一次意外中身负重伤，最终没能挺过来。你的道统无人继承，洞府很快就被后来者占据。';
      } else {
        category = 'good';
        title = `${realmName}大修士`;
        description = `你以${realmName}的修为活到了${age}岁，在修仙界也算一方强者。你的故事被后来的散修们传颂，激励着一代又一代人踏上修仙之路。`;
      }
    } else if (realm >= 1) {
      category = diedByHealth ? 'bad' : 'normal';
      title = diedByHealth ? '英年早逝' : '修仙路上的过客';
      description = diedByHealth
        ? '你倒在了修仙之路的早期，未能见证更广阔的天地。如果当初更加谨慎，或许结局会完全不同。'
        : `你修炼到了${realmName}，但最终未能更进一步。${age}岁时，你的寿元走到了尽头。在修仙界的历史长河中，你只是一个匆匆过客。`;
    } else {
      category = diedByHealth ? 'bad' : 'normal';
      title = diedByHealth ? '凡人之殇' : '无缘仙道';
      description = diedByHealth
        ? '你还没来得及踏入真正的修仙之路，就因意外而离世。命运对你太过残酷。'
        : '终其一生，你都没能突破炼气期。修仙之路对你而言，终究只是一场遥不可及的梦。';
    }

    // Special flag-based overrides
    if (flags.includes('major_ascend')) {
      category = 'secret';
      title = '仙界先驱';
      description = '你打破了仙界通道的封印，成为了万古以来第一个主动挑战仙界规则的人。仙界并非乐土，但你的战斗才刚刚开始。';
    } else if (flags.includes('major_stay')) {
      category = 'secret';
      title = '凡界守护者';
      description = '你拒绝了飞升的诱惑，选择守护凡界。两千年后，你的雕像依然矗立在那片土地上，守护着一代又一代的凡人。';
    } else if (flags.includes('major_dark') && stats.strength > 80) {
      category = 'bad';
      title = '入魔者';
      description = '你在黑暗中走得太远，最终被自己的心魔吞噬。你成为了修仙界新的威胁，曾经的朋友不得不联手将你封印。';
    }
  }
  // --- Magic world endings ---
  else if (worldId === 'magic') {
    if (realm >= 7) {
      category = 'good';
      title = '虚空行者';
      description = '你超越了物质界的束缚，成为了在虚空与物质界自由穿梭的存在。无数文明的兴衰在你眼前展开，你是万古以来最伟大的法师。';
    } else if (realm >= 5) {
      category = diedByHealth ? 'bad' : 'good';
      title = diedByHealth ? '魔力暴走' : '真理守护者';
      description = diedByHealth
        ? '你在研究禁忌魔法时失去了控制，魔力暴走将方圆百里化为焦土。你成为了大陆上最令人恐惧的名字。'
        : `你以${realmName}的身份守护魔法真理，你的大名被刻在了真理之塔的最高处。`;
    } else if (realm >= 3) {
      category = diedByHealth ? 'bad' : 'normal';
      title = diedByHealth ? '魔法殉道者' : realmName;
      description = diedByHealth
        ? '你在一次危险的魔法实验中失去了生命，但你的笔记被后人发现，成为了魔法史上的重要文献。'
        : `你以${realmName}的身份走完了${age}年的人生。在魔法大陆的历史中，你留下了自己的印记。`;
    } else {
      category = diedByHealth ? 'bad' : 'normal';
      title = diedByHealth ? '夭折的学徒' : '平凡的法师';
      description = diedByHealth
        ? '你还没来得及展现自己的才华，就在一次意外中离世。魔法学院为你默哀了整整一天。'
        : '你在魔法之路上走得并不远，但你依然用自己的方式影响了身边的人。';
    }
  }
  // --- Generic worlds (scifi, apocalypse, wuxia) ---
  else {
    if (realm >= 7) {
      category = 'secret';
      title = worldId === 'scifi' ? '超越时间的观测者' : worldId === 'wuxia' ? '武破虚空' : '新世界的神';
      description = '你达到了这个世界的最高境界，超越了凡人的极限。你的名字将永远铭刻在历史之中。';
    } else if (realm >= 5) {
      category = 'good';
      title = '一代传奇';
      description = `你在${worldName}留下了浓墨重彩的一笔，后人将以你的名字命名这个时代。`;
    } else if (realm >= 2) {
      category = diedByHealth ? 'bad' : 'normal';
      title = diedByHealth ? '壮志未酬' : '无名英雄';
      description = diedByHealth
        ? '你倒在了追求极致的路上，未能完成自己的夙愿。'
        : `你在${worldName}生活了${age}年，虽然没有达到巅峰，但也经历了精彩的人生。`;
    } else {
      category = diedByHealth ? 'bad' : 'normal';
      title = diedByHealth ? '不幸的早逝' : '平淡一生';
      description = '你的人生波澜不惊，在历史的洪流中没有留下太多痕迹。';
    }
  }

  // Relationship-based ending overrides
  const romanceNPCs = world?.npcs?.filter((n) => n.type === 'romance') ?? [];
  const allRomanceLovers = romanceNPCs.length > 0 && romanceNPCs.every((n) => {
    const val = state.relationships[n.id] ?? 0;
    return val >= 80;
  });
  const anyRomanceLover = romanceNPCs.some((n) => (state.relationships[n.id] ?? 0) >= 80);

  if (allRomanceLovers) {
    category = 'harem';
    const haremData: Record<string, { title: string; description: string }> = {
      cultivation: {
        title: '三界之主的后宫',
        description: '你不仅登临绝巅，更与仙、魔、妖三界绝美存在结下不解之缘。她们或守候在你的洞府，或远隔万里传讯，心中再无他人。',
      },
      magic: {
        title: '元素使的羁绊',
        description: '你与元素精灵使缔结了灵魂契约，从此你们心意相通，魔力共享。在你们的守护下，魔法大陆迎来了永恒的繁荣。',
      },
      scifi: {
        title: '星际舰队的女王们',
        description: '你麾下的七支星际舰队，每一支的指挥官都与你有着超越战友的情感。在星海的征途中，她们是你最坚实的后盾。',
      },
      apocalypse: {
        title: '避难所的温暖',
        description: '你的避难所收留了许多在废土上流浪的灵魂。在这个冰冷的世界里，她们的存在就是最大的温暖。',
      },
      wuxia: {
        title: '桃花坞里桃花仙',
        description: '江湖路远，刀剑如梦。你携手数位红颜知己，隐居桃花深处。每日论剑品茗，笑看风云变幻。',
      },
    };
    const hd = haremData[worldId];
    if (hd) {
      title = hd.title;
      description = hd.description;
    }
  } else if (anyRomanceLover && (category === 'normal' || category === 'good')) {
    // Single romance bond ending
    const bestRomance = romanceNPCs.reduce((best, n) => {
      const bestVal = state.relationships[best.id] ?? 0;
      const nVal = state.relationships[n.id] ?? 0;
      return nVal > bestVal ? n : best;
    }, romanceNPCs[0]!);

    if (bestRomance) {
      category = 'secret';
      const bondData: Record<string, { title: string; description: string }> = {
        cultivation: {
          title: `${bestRomance.name}的道侣`,
          description: `你历经${age}年苦修，虽未破碎虚空，但与${bestRomance.name}结下了超越生死的羁绊。在修仙这条孤独的道路上，你们互为道侣，互为灯塔。最终，你们选择在一处世外桃源隐居，不问世事，只问彼此。这份羁绊，比飞升更珍贵。`,
        },
        magic: {
          title: `${bestRomance.name}的守护者`,
          description: `你在魔法大陆探索了${age}年，虽未触及真理之塔的顶层，但与${bestRomance.name}的羁绊成为了你最强大的魔法。你们共同经历了无数冒险，在彼此的眼中看到了整个世界的倒影。最终，你们在元素位面的交界处建立了一座属于两个人的塔。`,
        },
        scifi: {
          title: `${bestRomance.name}的星海之约`,
          description: `你在银河系中航行了${age}年，虽未成为星神，但与${bestRomance.name}的羁绊跨越了星辰大海。在无数个光年之间，你们的心始终相连。最终，你们选择在一颗偏远的星球上定居，看着双恒星系统缓缓转动，直到时间的尽头。`,
        },
        apocalypse: {
          title: `${bestRomance.name}的废土之光`,
          description: `你在末日废土中挣扎求生了${age}年，虽未建立新的帝国，但与${bestRomance.name}的羁绊成为了废土上最温暖的光。在这个冰冷的世界里，你们互相取暖，互相支撑。最终，你们找到了一片未被辐射污染的绿洲，在那里种下了第一朵花。`,
        },
        wuxia: {
          title: `${bestRomance.name}的江湖梦`,
          description: `你在江湖中漂泊了${age}年，虽未破碎虚空，但与${bestRomance.name}的羁绊让你的剑有了温度。江湖路远，刀剑如梦，但你们知道，只要彼此在，江湖就在。最终，你们携手隐居桃花深处，每日论剑品茗，笑看风云变幻。`,
        },
      };
      const bd = bondData[worldId];
      if (bd) {
        title = bd.title;
        description = bd.description;
      }
    }
  }

  // Age-based achievements
  if (age >= 500) {
    achievements.push({ id: 'ach_meta_01', name: '长生久视', description: '在任意世界存活超过500年', category: '特殊事件' });
  }
  if (eventCount >= 50) {
    achievements.push({ id: 'ach_meta_03', name: '历经沧桑', description: '经历超过50个事件', category: '特殊事件' });
  }
  if (highestStatValue >= 180) {
    achievements.push({ id: 'ach_stat_01', name: '登峰造极', description: '任意属性达到180以上', category: '属性极限' });
  }
  if (realm >= 5) {
    achievements.push({ id: `ach_${worldId}_01`, name: `${realmName}之路`, description: `达到${realmName}`, category: '世界探索' });
  }

  return {
    id: `${worldId}_${category}_${realm}`,
    title,
    description,
    category,
    worldName,
    identityName,
    age,
    highestStat: { name: highestStatName, value: highestStatValue },
    eventCount,
    unlockedAchievements: achievements,
    // 增强统计
    realmName,
    realmStage: realm,
    breakthroughCount,
    combatEvents: state.eventCounters.combat,
    romanceEvents: state.eventCounters.romance,
    hiddenEvents: state.eventCounters.hidden,
    choiceTotal: state.choiceStats.total,
    choiceSuccess: state.choiceStats.success,
    choiceFail: state.choiceStats.fail,
    npcMet,
    highestBond,
    itemsFound: state.obtainedItems.length,
    obtainedItemIds: state.obtainedItems,
  };
}

/* ------------------------------------------------------------------ */
/*  Typewriter Hook                                                    */
/* ------------------------------------------------------------------ */
function useTypewriter(text: string, speed: number, startDelay: number, enabled: boolean) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    setDisplayed('');
    setDone(false);
    indexRef.current = 0;

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current += 1;
        if (indexRef.current >= text.length) {
          setDisplayed(text);
          setDone(true);
          clearInterval(interval);
        } else {
          setDisplayed(text.slice(0, indexRef.current));
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay, enabled]);

  return { displayed, done };
}

/* ------------------------------------------------------------------ */
/*  Floating Particles Component                                       */
/* ------------------------------------------------------------------ */
function FloatingParticles({ category, worldColor }: { category: EndingCategory; worldColor: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; r: number; speed: number;
      opacity: number; drift: number; color: string;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = category === 'hidden' ? 100 : category === 'good' || category === 'secret' ? 80 : category === 'harem' ? 60 : 40;
    const colors = category === 'hidden'
      ? ['#2DD4A0', '#9B6BFF', '#00D4FF', '#FF6B2D', '#FF2D55']
      : category === 'secret'
        ? ['#2DD4A0', '#9B6BFF', '#00D4FF']
        : [worldColor];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.5 + 0.5,
        speed: (Math.random() * 0.5 + 0.2) * (category === 'bad' ? 1 : -1),
        opacity: Math.random() * 0.5 + 0.1,
        drift: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]!,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y += p.speed;
        p.x += p.drift;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [category, worldColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Rainbow Border Component (for secret/hidden)                       */
/* ------------------------------------------------------------------ */
function RainbowBorder({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className || ''}`}>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #2DD4A0, #9B6BFF, #00D4FF, #FF6B2D, #FF2D55, #2DD4A0)',
          animation: 'spin 3s linear infinite',
          padding: '3px',
        }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'var(--bg-secondary)' }} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Helpers for enhanced ending                                        */
/* ------------------------------------------------------------------ */

function NewRecordBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent-gold/20 text-accent-gold border border-accent-gold/40">
      <TrendingUp size={10} />
      新纪录！
    </span>
  );
}

function StatRow({ label, value, highlight, suffix, icon }: { label: string; value: string | number; highlight?: boolean; suffix?: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center gap-2 text-xs text-text-secondary font-body">
        {icon}
        {label}
      </div>
      <div className="flex items-center gap-2">
        {highlight && <NewRecordBadge />}
        <span className="text-sm font-mono font-bold text-text-primary">{value}{suffix}</span>
      </div>
    </div>
  );
}

function TimelineNode({ label, age, color, isActive }: { label: string; age: number; color: string; isActive: boolean }) {
  return (
    <div className={`flex flex-col items-center ${isActive ? 'opacity-100' : 'opacity-40'}`}>
      <div
        className="w-3 h-3 rounded-full mb-1"
        style={{ backgroundColor: isActive ? color : '#6B6B8A', boxShadow: isActive ? `0 0 8px ${color}` : 'none' }}
      />
      <span className="text-[10px] font-body text-text-secondary">{label}</span>
      <span className="text-[10px] font-mono text-text-muted">{age}岁</span>
    </div>
  );
}

function LifeTimeline({ state, worldColor }: { state: GameState; worldColor: string }) {
  const nodes = [
    { label: '幼年', age: 0, key: 'childhood' },
    { label: '成长', age: 12, key: 'growth' },
    { label: '成年', age: 18, key: 'adult' },
    { label: '暮年', age: Math.max(40, Math.floor(state.maxAge * 0.7)), key: 'elder' },
    { label: '终结', age: state.age, key: 'death' },
  ];

  // Find milestone events for timeline
  const milestones: { age: number; text: string; type: 'breakthrough' | 'choice' | 'bond' }[] = [];
  for (const evt of state.eventHistory) {
    if (evt.effects && typeof (evt.effects as any).realm === 'number' && (evt.effects as any).realm > 0) {
      milestones.push({ age: evt.age, text: '境界突破', type: 'breakthrough' });
    }
  }
  // Add bond milestones
  const relEntries = Object.entries(state.relationships).filter(([, v]) => v >= 50);
  if (relEntries.length > 0) {
    const best = relEntries.reduce((a, b) => (a[1] > b[1] ? a : b));
    const npc = state.world?.npcs.find((n) => n.id === best[0]);
    if (npc) {
      milestones.push({ age: Math.floor(state.age * 0.5), text: `与${npc.name}结下深厚羁绊`, type: 'bond' });
    }
  }

  return (
    <div className="w-full max-w-[600px] mb-6">
      <div className="flex items-center gap-2 mb-4">
        <History size={14} className="text-text-muted" />
        <span className="text-xs font-bold font-body text-text-muted">人生回顾</span>
      </div>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-[5px] left-0 right-0 h-0.5 bg-border-subtle" />
        <div className="flex justify-between relative">
          {nodes.map((node) => (
            <TimelineNode
              key={node.key}
              label={node.label}
              age={node.age}
              color={worldColor}
              isActive={state.age >= node.age}
            />
          ))}
        </div>
      </div>
      {/* Milestones */}
      {milestones.length > 0 && (
        <div className="mt-4 space-y-2">
          {milestones.slice(0, 3).map((m, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-body">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{
                  backgroundColor: m.type === 'breakthrough' ? '#D4A843' : m.type === 'bond' ? '#FF6B6B' : worldColor,
                }}
              />
              <span className="text-text-muted font-mono">{m.age}岁</span>
              <span className="text-text-secondary">{m.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DetailedStatsPanel({ ending, history, worldColor }: { ending: EndingDisplay; state: GameState; history: GameHistory; worldColor: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[600px] mb-6 rounded-xl border border-border-subtle bg-bg-secondary/80 backdrop-blur-sm p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <Target size={16} style={{ color: worldColor }} />
        <span className="font-body text-sm font-bold text-text-primary">此生统计</span>
      </div>

      <div className="space-y-1">
        <StatRow
          label="享年"
          value={ending.age}
          suffix=" 岁"
          highlight={ending.age > history.bestAge && history.bestAge > 0}
          icon={<Clock size={12} className="text-text-muted" />}
        />
        <StatRow
          label="存活"
          value={ending.age}
          suffix=" 年"
          icon={<History size={12} className="text-text-muted" />}
        />
        <StatRow
          label="经历事件"
          value={ending.eventCount}
          suffix=" 个"
          highlight={ending.eventCount > history.totalEvents && history.totalEvents > 0}
          icon={<ScrollText size={12} className="text-text-muted" />}
        />
        <div className="h-px bg-border-subtle my-2" />
        <StatRow
          label="境界"
          value={`${ending.realmName}`}
          highlight={ending.realmStage > history.bestRealm && history.bestRealm > 0}
          icon={<Sparkles size={12} className="text-text-muted" />}
        />
        <StatRow
          label="突破次数"
          value={ending.breakthroughCount}
          suffix=" 次"
          icon={<TrendingUp size={12} className="text-text-muted" />}
        />
        <div className="h-px bg-border-subtle my-2" />
        <StatRow
          label="最高属性"
          value={`${ending.highestStat.name} (${ending.highestStat.value})`}
          highlight={ending.highestStat.value > Math.max(...Object.values(history.bestStats)) && history.totalPlaythroughs > 0}
          icon={<FlaskConical size={12} className="text-text-muted" />}
        />
        <div className="h-px bg-border-subtle my-2" />
        <StatRow
          label="战斗事件"
          value={ending.combatEvents}
          icon={<Sword size={12} className="text-text-muted" />}
        />
        <StatRow
          label="恋爱事件"
          value={ending.romanceEvents}
          icon={<Heart size={12} className="text-text-muted" />}
        />
        <StatRow
          label="隐藏事件"
          value={ending.hiddenEvents}
          icon={<Eye size={12} className="text-text-muted" />}
        />
        <div className="h-px bg-border-subtle my-2" />
        <StatRow
          label="做出选择"
          value={ending.choiceTotal}
          suffix=" 次"
          icon={<Target size={12} className="text-text-muted" />}
        />
        <div className="flex items-center justify-between py-1 pl-6">
          <span className="text-[11px] text-text-muted">成功</span>
          <span className="text-xs font-mono text-accent-green">{ending.choiceSuccess}</span>
        </div>
        <div className="flex items-center justify-between py-1 pl-6">
          <span className="text-[11px] text-text-muted">失败</span>
          <span className="text-xs font-mono text-accent-red">{ending.choiceFail}</span>
        </div>
        <div className="h-px bg-border-subtle my-2" />
        <StatRow
          label="遇到NPC"
          value={`${ending.npcMet} 人`}
          icon={<User size={12} className="text-text-muted" />}
        />
        {ending.highestBond && (
          <div className="flex items-center justify-between py-1 pl-6">
            <span className="text-[11px] text-text-muted">最高羁绊</span>
            <span className="text-xs font-mono text-text-primary">{ending.highestBond.name} ({ending.highestBond.value})</span>
          </div>
        )}
        <div className="h-px bg-border-subtle my-2" />
        <StatRow
          label="获得道具"
          value={`${ending.itemsFound} 个`}
          highlight={ending.itemsFound > 0}
          icon={<Package size={12} className="text-text-muted" />}
        />
      </div>
    </motion.div>
  );
}

function HistoryComparison({ ending, history, worldColor }: { ending: EndingDisplay; history: GameHistory; worldColor: string }) {
  if (history.totalPlaythroughs === 0) return null;

  const comparisons = [
    { label: '最高年龄', current: ending.age, best: history.bestAge, unit: '岁' },
    { label: '最高境界', current: ending.realmStage, best: history.bestRealm, unit: '阶' },
    { label: '最多事件', current: ending.eventCount, best: history.totalEvents, unit: '个' },
    { label: '最高属性', current: ending.highestStat.value, best: Math.max(...Object.values(history.bestStats)), unit: '' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-[600px] mb-6 rounded-xl border border-border-subtle bg-bg-secondary/80 backdrop-blur-sm p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <Trophy size={16} style={{ color: worldColor }} />
        <span className="font-body text-sm font-bold text-text-primary">与历史最佳对比</span>
      </div>
      <div className="space-y-3">
        {comparisons.map((comp) => {
          const isNewRecord = comp.current > comp.best;
          const pct = comp.best > 0 ? Math.round((comp.current / comp.best) * 100) : 100;
          return (
            <div key={comp.label} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary font-body">{comp.label}</span>
                <div className="flex items-center gap-2">
                  {isNewRecord && comp.best > 0 && <NewRecordBadge />}
                  <span className="font-mono text-text-primary">
                    {comp.current}{comp.unit} <span className="text-text-muted">/ 最佳 {comp.best}{comp.unit}</span>
                  </span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: isNewRecord ? '#D4A843' : worldColor }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, pct)}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function NewItemsPanel({ ending }: { ending: EndingDisplay }) {
  if (ending.obtainedItemIds.length === 0) return null;

  const items = ending.obtainedItemIds
    .map((id) => rebirthItems.find((i) => i.id === id))
    .filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full max-w-[600px] mb-6 rounded-xl border border-border-subtle bg-bg-secondary/80 backdrop-blur-sm p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <Package size={16} className="text-accent-gold" />
        <span className="font-body text-sm font-bold text-text-primary">本次获得的道具</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <div
            key={item!.id}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-bg-tertiary/60"
            style={{ borderColor: `${getRarityColor(item!.rarity)}40` }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: getRarityColor(item!.rarity) }}
            />
            <span className="text-xs font-body text-text-primary">{item!.name}</span>
            <span
              className="text-[10px] font-mono px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: `${getRarityColor(item!.rarity)}20`,
                color: getRarityColor(item!.rarity),
              }}
            >
              {getRarityLabel(item!.rarity)}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Ending Page                                                   */
/* ------------------------------------------------------------------ */
export default function Ending() {
  const navigate = useNavigate();
  const { state, saveHistory } = useGameContext();

  // Use dynamically calculated ending based on game state;
  // fall back to sample ending if no game has been played.
  const ending = (state.isDead || state.age > 0)
    ? calculateEnding(state)
    : getSampleEnding();
  const config = CATEGORY_CONFIG[ending.category];
  const worldColor = WORLD_COLORS[ending.worldName] || '#D4A843';

  // Load history and save current playthrough
  const [history, setHistory] = useState<GameHistory | null>(null);
  useEffect(() => {
    if (state.isDead || state.age > 0) {
      saveHistory();
      setHistory(loadGameHistory());
    }
  }, [state.isDead, state.age, saveHistory]);

  /* Animation stage: 0=initial, 1=bg, 2=badge, 3=title, 4=name, 5=desc, 6=stats, 7=timeline, 8=items, 9=achievements, 10=buttons */
  const [stage, setStage] = useState(0);
  const [skipToStage, setSkipToStage] = useState(0);
  const totalStages = 10;

  /* Achievement system */
  const { checkAndUnlock, unlockedCount, totalCount, progressByCategory } = useAchievements();
  const [sessionUnlocks, setSessionUnlocks] = useState<{ id: string; name: string; description: string; category: string }[]>([]);

  useEffect(() => {
    if (state.isDead || state.ending || state.age > 0) {
      const results = checkAndUnlock(state);
      if (results.length > 0) {
        setSessionUnlocks(results.map((r) => ({
          id: r.id,
          name: r.title,
          description: r.description,
          category: r.category,
        })));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Advance through stages */
  useEffect(() => {
    if (stage >= totalStages) return;
    const delays = [200, 500, 1200, 2200, 2800, 3800, 4600, 5400, 6000, 6800, 7800];
    const timer = setTimeout(() => {
      setStage(s => Math.min(s + 1, totalStages));
    }, delays[stage] || 500);
    return () => clearTimeout(timer);
  }, [stage]);

  /* Skip animation on click */
  const handleSkip = useCallback(() => {
    if (stage < totalStages) {
      setStage(totalStages);
      setSkipToStage(prev => prev + 1);
    }
  }, [stage]);

  /* Typewriter for description */
  const typewriterEnabled = stage >= 5 || skipToStage > 0;
  const { displayed: descText, done: descDone } = useTypewriter(
    ending.description, 35, 0, typewriterEnabled
  );

  /* Framer Motion easing */
  const easeSmooth = [0.25, 0.1, 0.25, 1] as [number, number, number, number];
  const easeBounce = [0.34, 1.56, 0.64, 1] as [number, number, number, number];
  const easeDramatic = [0.87, 0, 0.13, 1] as [number, number, number, number];

  /* Derived visibility flags */
  const showBg = stage >= 1 || skipToStage > 0;
  const showBadge = stage >= 2 || skipToStage > 0;
  const showTitle = stage >= 3 || skipToStage > 0;
  const showName = stage >= 4 || skipToStage > 0;
  const showDesc = stage >= 5 || skipToStage > 0;
  const showStats = (stage >= 6 || skipToStage > 0) && (descDone || skipToStage > 0);
  const showTimeline = (stage >= 7 || skipToStage > 0) && (descDone || skipToStage > 0) && (state.isDead || state.age > 0);
  const showNewItems = (stage >= 8 || skipToStage > 0) && ending.obtainedItemIds.length > 0 && (descDone || skipToStage > 0);
  const showAchievements = (stage >= 9 || skipToStage > 0) && (sessionUnlocks.length > 0 || ending.unlockedAchievements.length > 0);
  const showAchievementProgress = (stage >= 9 || skipToStage > 0) && (descDone || skipToStage > 0);
  const showHistoryComp = (stage >= 7 || skipToStage > 0) && history && history.totalPlaythroughs > 0 && (descDone || skipToStage > 0);
  const showButtons = stage >= 10 || skipToStage > 0;

  const hasAchievements = sessionUnlocks.length > 0 || ending.unlockedAchievements.length > 0;

  const relationships = state.relationships;
  const npcs = state.world?.npcs ?? [];
  const relationshipEntries = Object.entries(relationships)
    .filter(([, val]) => val !== 0)
    .sort(([, a], [, b]) => b - a);
  const hasLover = relationshipEntries.some(([, val]) => val >= 80);

  return (
    <div
      className="fixed inset-0 overflow-hidden cursor-pointer select-none"
      onClick={handleSkip}
      style={{ zIndex: 10 }}
    >
      {/* ── Stage 0: Black screen ── */}
      <AnimatePresence>
        {stage === 0 && skipToStage === 0 && (
          <motion.div
            key="black-screen"
            className="absolute inset-0 bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: easeSmooth }}
          />
        )}
      </AnimatePresence>

      {/* ── Background image with Ken Burns ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={showBg ? { opacity: 1, scale: 1.0 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.5, ease: easeSmooth }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${config.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'kenBurns 20s ease-in-out infinite alternate',
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0" style={{ background: 'rgba(10, 10, 26, 0.55)' }} />
      </motion.div>

      {/* ── Floating Particles ── */}
      {showBg && (
        <FloatingParticles category={ending.category} worldColor={worldColor} />
      )}

      {/* ── Hidden ending: extra vignette ── */}
      {ending.category === 'hidden' && showBg && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
            zIndex: 3,
          }}
        />
      )}

      {/* ── Bad ending: extra darkening ── */}
      {ending.category === 'bad' && showBg && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.6) 100%)',
            zIndex: 3,
          }}
        />
      )}

      {/* ── Main content ── */}
      <div className="relative flex flex-col items-center justify-center min-h-[100dvh] px-4" style={{ zIndex: 10 }}>

        {/* Ending Badge */}
        <AnimatePresence>
          {showBadge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: easeBounce }}
              className="mb-6"
            >
              {ending.category === 'secret' || ending.category === 'hidden' ? (
                <RainbowBorder className="inline-block">
                  <div className="relative z-10 px-6 py-2 rounded-full border-2 bg-bg-secondary/80 backdrop-blur-sm"
                    style={{ borderColor: config.glowColor }}
                  >
                    <span className="font-body text-sm font-bold" style={{ color: config.glowColor }}>
                      {config.label}
                    </span>
                  </div>
                </RainbowBorder>
              ) : (
                <div
                  className={`inline-block px-6 py-2 rounded-full border-2 bg-bg-secondary/80 backdrop-blur-sm ${config.badgeClass}`}
                  style={{
                    boxShadow: `0 0 20px ${config.glowColor}40, 0 0 40px ${config.glowColor}20`,
                  }}
                >
                  <span className="font-body text-sm font-bold">{config.label}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* "Ending Achieved" subtitle */}
        <AnimatePresence>
          {showBadge && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeSmooth }}
              className="font-body text-base text-text-secondary mb-4 tracking-widest"
            >
              结局达成
            </motion.p>
          )}
        </AnimatePresence>

        {/* Legend Title */}
        <AnimatePresence>
          {showTitle && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeDramatic }}
              className="font-display text-4xl sm:text-5xl font-black text-text-primary text-center mb-2"
              style={{
                textShadow: `0 0 60px ${worldColor}40, 0 0 120px ${worldColor}20`,
              }}
            >
              {config.titleVariant}
            </motion.h1>
          )}
        </AnimatePresence>

        {/* Ending Name */}
        <AnimatePresence>
          {showName && (
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="font-display text-2xl sm:text-3xl font-bold text-center mb-6"
              style={{ color: worldColor }}
            >
              「{ending.title}」
            </motion.h2>
          )}
        </AnimatePresence>

        {/* Description with typewriter */}
        <AnimatePresence>
          {showDesc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="max-w-[600px] text-center mb-8"
            >
              <p
                className={`font-body text-base sm:text-lg text-text-secondary leading-relaxed ${descDone || skipToStage > 0 ? 'done' : ''} typewriter-cursor`}
              >
                {descText}
                {!descDone && skipToStage === 0 && (
                  <span className="inline-block w-0.5 h-5 bg-accent-gold ml-1 animate-cursor-blink align-text-bottom" />
                )}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Cards */}
        <AnimatePresence>
          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-2"
            >
              {[
                { icon: <Clock size={22} style={{ color: worldColor }} />, label: '享年', value: `${ending.age} 岁`, sub: ending.worldName },
                { icon: <Globe size={22} style={{ color: worldColor }} />, label: '世界', value: ending.worldName, sub: '一生所在' },
                { icon: <User size={22} style={{ color: worldColor }} />, label: '身份', value: ending.identityName, sub: '初始身份' },
                { icon: <FlaskConical size={22} style={{ color: worldColor }} />, label: '巅峰属性', value: `${ending.highestStat.name}: ${ending.highestStat.value}`, sub: '无人能及' },
                { icon: <ScrollText size={22} style={{ color: worldColor }} />, label: '经历事件', value: `${ending.eventCount}`, sub: '无数抉择' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: easeSmooth }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="flex flex-col items-center px-3 sm:px-5 py-3 sm:py-4 rounded-xl border border-border-subtle bg-bg-secondary/80 backdrop-blur-sm min-w-[90px] sm:min-w-[110px]"
                >
                  {stat.icon}
                  <span className="font-body text-xs text-text-secondary mt-2">{stat.label}</span>
                  <span className="font-mono text-lg font-bold text-text-primary">{stat.value}</span>
                  <span className="font-body text-xs text-text-muted">{stat.sub}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Detailed Stats Panel */}
        <AnimatePresence>
          {showStats && (state.isDead || state.age > 0) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-full"
            >
              <DetailedStatsPanel ending={ending} state={state} history={history ?? { bestAge: 0, bestRealm: 0, totalEvents: 0, endingsUnlocked: [], bestStats: { strength: 0, intelligence: 0, charisma: 0, luck: 0, health: 0, special: 0 }, totalPlaythroughs: 0, totalItemsFound: 0 }} worldColor={worldColor} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Relationship Review */}
        <AnimatePresence>
          {showStats && relationshipEntries.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="w-full max-w-[600px] mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Heart size={18} style={{ color: worldColor }} />
                <span className="font-body text-sm font-bold text-text-primary">此生羁绊</span>
              </div>
              <div className="space-y-3">
                {relationshipEntries.map(([npcId, val]) => {
                  const npc = npcs.find((n) => n.id === npcId);
                  if (!npc) return null;
                  const color = getRelationshipColor(val);
                  return (
                    <motion.div
                      key={npcId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border-subtle bg-bg-secondary/80 backdrop-blur-sm"
                    >
                      <span className="text-xl">{npc.avatar ?? '👤'}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-body text-sm font-bold text-text-primary">{npc.name}</span>
                          <span
                            className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                            style={{ backgroundColor: `${color}20`, color }}
                          >
                            {getRelationshipLabel(val)}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-bg-tertiary rounded-full overflow-hidden mt-1">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${Math.max(0, Math.min(100, ((val + 100) / 200) * 100))}%`, backgroundColor: color }}
                          />
                        </div>
                      </div>
                      <span className="font-mono text-sm font-bold" style={{ color }}>{val}</span>
                    </motion.div>
                  );
                })}
              </div>
              {hasLover && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 px-4 py-3 rounded-lg border border-[#FF4D6D]/30 bg-[#FF4D6D]/10 backdrop-blur-sm"
                >
                  <p className="font-body text-sm text-[#FF4D6D] font-bold">
                    💕 特殊的羁绊结局提示：有人在世界的尽头等待着你...
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Life Timeline */}
        <AnimatePresence>
          {showTimeline && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-full"
            >
              <LifeTimeline state={state} worldColor={worldColor} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* History Comparison */}
        <AnimatePresence>
          {showHistoryComp && history && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-full"
            >
              <HistoryComparison ending={ending} history={history} worldColor={worldColor} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* New Items Panel */}
        <AnimatePresence>
          {showNewItems && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-full"
            >
              <NewItemsPanel ending={ending} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Achievement Unlocks */}
        <AnimatePresence>
          {showAchievements && hasAchievements && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="flex flex-col items-center gap-3 mb-8 w-full max-w-[500px]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: easeBounce }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/20 border border-accent-gold/40"
              >
                <Trophy size={16} className="text-accent-gold" />
                <span className="font-body text-sm font-bold text-accent-gold">新成就解锁!</span>
              </motion.div>

              {sessionUnlocks.map((ach, i) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.15, ease: easeSmooth }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-lg border border-accent-gold/30 bg-gradient-to-r from-bg-secondary/90 to-transparent backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles size={18} className="text-accent-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm font-bold text-text-primary truncate">{ach.name}</p>
                      <p className="font-body text-xs text-text-secondary">{ach.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Fallback: show dynamic ending achievements if no session unlocks */}
              {sessionUnlocks.length === 0 && ending.unlockedAchievements.map((ach, i) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.15, ease: easeSmooth }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-lg border border-accent-gold/30 bg-gradient-to-r from-bg-secondary/90 to-transparent backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles size={18} className="text-accent-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm font-bold text-text-primary truncate">{ach.name}</p>
                      <p className="font-body text-xs text-text-secondary">{ach.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overall Achievement Progress */}
        <AnimatePresence>
          {showAchievementProgress && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="w-full max-w-[500px] mb-8 px-5 py-4 rounded-xl border border-border-subtle bg-bg-secondary/80 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Trophy size={16} className="text-accent-gold" />
                  <span className="font-body text-sm font-bold text-text-primary">成就总览</span>
                </div>
                <span className="font-mono text-sm font-bold text-accent-gold">
                  {unlockedCount}/{totalCount}
                </span>
              </div>
              <div className="w-full h-2 bg-bg-tertiary rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full rounded-full bg-accent-gold"
                  initial={{ width: 0 }}
                  animate={{ width: `${totalCount > 0 ? (unlockedCount / totalCount) * 100 : 0}%` }}
                  transition={{ duration: 1, ease: easeSmooth }}
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(progressByCategory).map(([cat, { total, unlocked }]) => {
                  const colors: Record<string, string> = {
                    world: '#2DD4A0',
                    stat: '#00D4FF',
                    event: '#FF6B2D',
                    speed: '#FFD700',
                    secret: '#9B6BFF',
                    meta: '#FF2D55',
                  };
                  const color = colors[cat] ?? '#D4A843';
                  const pct = total > 0 ? (unlocked / total) * 100 : 0;
                  return (
                    <div key={cat} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-body text-text-secondary capitalize">{cat}</span>
                        <span className="text-[10px] font-mono text-text-muted">{unlocked}/{total}</span>
                      </div>
                      <div className="w-full h-1 bg-bg-tertiary rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${pct}%`, backgroundColor: color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hidden Clue Discovery */}
        <AnimatePresence>
          {showAchievements && ending.discoveredClues && ending.discoveredClues.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="w-full max-w-[500px] mb-8 px-4 py-3 rounded-lg border-2"
              style={{
                borderImage: 'linear-gradient(90deg, #2DD4A0, #9B6BFF, #00D4FF, #FF6B2D, #FF2D55) 1',
                background: 'rgba(26, 26, 58, 0.8)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Lock size={14} className="text-accent-gold" />
                <span className="font-body text-xs font-bold text-accent-gold">隐藏线索发现!</span>
              </div>
              {ending.discoveredClues.map((clue, i) => (
                <p key={i} className="font-body text-sm text-text-secondary italic leading-relaxed">
                  &ldquo;{clue}&rdquo;
                </p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <AnimatePresence>
          {showButtons && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4"
            >
              <div className="flex flex-col items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => { e.stopPropagation(); navigate('/rebirth'); }}
                  className="flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-body text-sm sm:text-base font-bold text-white transition-shadow duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${worldColor}, ${worldColor}88)`,
                    boxShadow: `0 4px 20px ${worldColor}40`,
                  }}
                >
                  <RotateCcw size={18} />
                  再次转生
                </motion.button>
                <div className="flex items-center gap-3 text-xs text-text-muted font-body">
                  <span className="flex items-center gap-1">
                    <Package size={12} />
                    持有道具: {state.inventory.length}个
                  </span>
                  <span className="text-text-secondary">返回主界面可装备道具</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => { e.stopPropagation(); navigate('/gallery'); }}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body text-base font-bold text-text-secondary border border-border-subtle bg-transparent hover:text-text-primary hover:border-border-glow transition-colors duration-200"
              >
                <BookOpen size={18} />
                查看图鉴
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skip hint */}
        {stage < totalStages && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-4 sm:bottom-6 font-body text-xs text-text-muted"
          >
            点击任意处跳过动画
          </motion.p>
        )}
      </div>

      {/* Achievement Popup */}
      <AchievementPopup newAchievements={sessionUnlocks.map((s) => {
        const achDef = achievements.find((a) => a.id === s.id);
        return {
          id: s.id,
          title: s.name,
          description: s.description,
          category: s.category as import('@/engine/events/types').AchievementData['category'],
          icon: achDef?.icon ?? 'star',
        };
      })} />

      {/* ── Ken Burns CSS ── */}
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
