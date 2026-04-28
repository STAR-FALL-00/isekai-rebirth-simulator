export type TalentLevel = 'trash' | 'poor' | 'average' | 'good' | 'genius' | 'legendary';

export const TALENT_DISTRIBUTION: { level: TalentLevel; weight: number; label: string }[] = [
  { level: 'legendary', weight: 1, label: '绝世' },
  { level: 'genius', weight: 5, label: '天才' },
  { level: 'good', weight: 12, label: '良才' },
  { level: 'average', weight: 42, label: '普通' },
  { level: 'poor', weight: 32, label: '平庸' },
  { level: 'trash', weight: 8, label: '废材' },
];

export const TALENT_COLORS: Record<TalentLevel, string> = {
  legendary: '#FFD700',
  genius: '#FF6B6B',
  good: '#9B6BFF',
  average: '#4ECDC4',
  poor: '#95A5A6',
  trash: '#7F8C8D',
};

export interface Stats {
  strength: number;
  intelligence: number;
  charisma: number;
  luck: number;
  health: number;
  special: number;
}

export interface World {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  themeColor: string;
  statNames: Record<string, string>;
  identities: Identity[];
  npcs: NPC[];
}

export interface Identity {
  id: string;
  name: string;
  description: string;
  baseStats: Partial<Stats>;
  exclusiveEvents: string[];
  specialTrait: string;
  spawnWeight?: number;
}

export interface NPC {
  id: string;
  name: string;
  type: 'romance' | 'mentor' | 'rival';
  description: string;
  avatar?: string;
  introEvent?: string;
  maxRelationshipEvents?: string[];
}

export type EventEffects = Partial<Stats> & { realm?: number; maxAge?: number };

export interface Event {
  id: string;
  worldId: string;
  category: string;
  minAge: number;
  maxAge: number;
  text: string;
  choices?: {
    text: string;
    effects: EventEffects;
    successText?: string;
    failText?: string;
    successRate?: number;
    failEffects?: EventEffects;
    relationshipEffects?: Record<string, number>;
    failRelationshipEffects?: Record<string, number>;
    failFlags?: string[];
    flags?: string[];
    nextEventId?: string;
    /** 选择成功时奖励的转生道具ID */
    rewardItem?: string;
    /** 选择成功时获得的临时道具效果（一次性） */
    tempEffects?: EventEffects;
  }[];
  effects?: EventEffects;
  relationshipEffects?: Record<string, number>;
  requiredRelationship?: Record<string, number>;
  conditions?: { stat: string; min?: number; max?: number }[];
  flags?: string[];
  requiredFlags?: string[];
  probability: number;
  isChain?: boolean;
  chainEventId?: string;
  /** 事件触发时奖励的转生道具ID（用于无选择事件） */
  rewardItem?: string;
  /** 事件触发时获得的临时道具效果（一次性） */
  tempEffects?: EventEffects;
}

export interface Ending {
  id: string;
  worldId: string;
  category: 'normal' | 'good' | 'bad' | 'harem' | 'secret' | 'hidden';
  title: string;
  description: string;
  conditions: EndingCondition[];
}

export interface EndingCondition {
  type: 'stat' | 'flag' | 'relationship' | 'choice';
  key: string;
  operator: '>' | '<' | '>=' | '<=' | '=' | 'has';
  value: number | string;
  weight: number;
}

export interface RebirthItem {
  id: string;
  name: string;
  description: string;
  worldBias?: Record<string, number>;
  statBonus?: Partial<Stats>;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export const CULTIVATION_REALMS = [
  { stage: 0, name: '炼气期', maxAgeBase: 100 },
  { stage: 1, name: '筑基期', maxAgeBase: 180 },
  { stage: 2, name: '金丹期', maxAgeBase: 300 },
  { stage: 3, name: '元婴期', maxAgeBase: 500 },
  { stage: 4, name: '化神期', maxAgeBase: 800 },
  { stage: 5, name: '渡劫期', maxAgeBase: 1200 },
  { stage: 6, name: '大乘期', maxAgeBase: 2000 },
  { stage: 7, name: '飞升', maxAgeBase: 9999 },
];

export const MAGIC_REALMS = [
  { stage: 0, name: '魔法学徒', maxAgeBase: 100 },
  { stage: 1, name: '初级法师', maxAgeBase: 180 },
  { stage: 2, name: '大法师', maxAgeBase: 300 },
  { stage: 3, name: '贤者', maxAgeBase: 500 },
  { stage: 4, name: '元素使', maxAgeBase: 800 },
  { stage: 5, name: '真理守护者', maxAgeBase: 1200 },
  { stage: 6, name: '法则化身', maxAgeBase: 2000 },
  { stage: 7, name: '虚空行者', maxAgeBase: 9999 },
];

export const SCIFI_REALMS = [
  { stage: 0, name: '平民殖民者', maxAgeBase: 100 },
  { stage: 1, name: '星际战士', maxAgeBase: 180 },
  { stage: 2, name: '舰长', maxAgeBase: 300 },
  { stage: 3, name: '舰队统帅', maxAgeBase: 500 },
  { stage: 4, name: '星际元帅', maxAgeBase: 800 },
  { stage: 5, name: '银河守护者', maxAgeBase: 1200 },
  { stage: 6, name: '超维生命', maxAgeBase: 2000 },
  { stage: 7, name: '星神', maxAgeBase: 9999 },
];

export const APOCALYPSE_REALMS = [
  { stage: 0, name: '避难所居民', maxAgeBase: 100 },
  { stage: 1, name: '废土行者', maxAgeBase: 180 },
  { stage: 2, name: '聚集地领袖', maxAgeBase: 300 },
  { stage: 3, name: '觉醒变异者', maxAgeBase: 500 },
  { stage: 4, name: '废土之王', maxAgeBase: 800 },
  { stage: 5, name: '末日领主', maxAgeBase: 1200 },
  { stage: 6, name: '新人类始祖', maxAgeBase: 2000 },
  { stage: 7, name: '永恒存在', maxAgeBase: 9999 },
];

export const WUXIA_REALMS = [
  { stage: 0, name: '江湖新秀', maxAgeBase: 100 },
  { stage: 1, name: '三流高手', maxAgeBase: 180 },
  { stage: 2, name: '二流高手', maxAgeBase: 300 },
  { stage: 3, name: '一流高手', maxAgeBase: 500 },
  { stage: 4, name: '武林宗师', maxAgeBase: 800 },
  { stage: 5, name: '大宗师', maxAgeBase: 1200 },
  { stage: 6, name: '武圣', maxAgeBase: 2000 },
  { stage: 7, name: '破碎虚空', maxAgeBase: 9999 },
];

export const FLOATING_CITADEL_REALMS = [
  { stage: 0, name: '初学者', maxAgeBase: 100 },
  { stage: 1, name: '冒险者', maxAgeBase: 180 },
  { stage: 2, name: '剑士', maxAgeBase: 300 },
  { stage: 3, name: '骑士', maxAgeBase: 500 },
  { stage: 4, name: '领主', maxAgeBase: 800 },
  { stage: 5, name: '贤者', maxAgeBase: 1200 },
  { stage: 6, name: '王者', maxAgeBase: 2000 },
  { stage: 7, name: '解放者', maxAgeBase: 9999 },
];

export const DOUPO_REALMS = [
  { stage: 0, name: '斗之气', maxAgeBase: 100 },
  { stage: 1, name: '斗者', maxAgeBase: 180 },
  { stage: 2, name: '斗师', maxAgeBase: 300 },
  { stage: 3, name: '大斗师', maxAgeBase: 500 },
  { stage: 4, name: '斗灵', maxAgeBase: 800 },
  { stage: 5, name: '斗王', maxAgeBase: 1200 },
  { stage: 6, name: '斗皇', maxAgeBase: 2000 },
  { stage: 7, name: '斗帝', maxAgeBase: 9999 },
];

export const DRAGON_RAJA_REALMS = [
  { stage: 0, name: '普通人', maxAgeBase: 100 },
  { stage: 1, name: 'D级混血', maxAgeBase: 180 },
  { stage: 2, name: 'C级混血', maxAgeBase: 300 },
  { stage: 3, name: 'B级混血', maxAgeBase: 500 },
  { stage: 4, name: 'A级混血', maxAgeBase: 800 },
  { stage: 5, name: 'S级混血', maxAgeBase: 1200 },
  { stage: 6, name: 'SS级混血', maxAgeBase: 2000 },
  { stage: 7, name: '龙王级', maxAgeBase: 9999 },
];

export const THREE_BODY_REALMS = [
  { stage: 0, name: '平民', maxAgeBase: 100 },
  { stage: 1, name: '学者', maxAgeBase: 180 },
  { stage: 2, name: '工程师', maxAgeBase: 300 },
  { stage: 3, name: '科学家', maxAgeBase: 500 },
  { stage: 4, name: '面壁者', maxAgeBase: 800 },
  { stage: 5, name: '执剑人', maxAgeBase: 1200 },
  { stage: 6, name: '文明守护者', maxAgeBase: 2000 },
  { stage: 7, name: '宇宙级存在', maxAgeBase: 9999 },
];

export const FRIEREN_REALMS = [
  { stage: 0, name: '魔法学徒', maxAgeBase: 100 },
  { stage: 1, name: '初级魔法使', maxAgeBase: 180 },
  { stage: 2, name: '中级魔法使', maxAgeBase: 300 },
  { stage: 3, name: '上级魔法使', maxAgeBase: 500 },
  { stage: 4, name: '宫廷魔法使', maxAgeBase: 800 },
  { stage: 5, name: '大魔法使', maxAgeBase: 1200 },
  { stage: 6, name: '贤者', maxAgeBase: 2000 },
  { stage: 7, name: '魔法之神', maxAgeBase: 9999 },
];

export const GUNDAM_SEED_REALMS = [
  { stage: 0, name: '调整者平民', maxAgeBase: 100 },
  { stage: 1, name: '士兵', maxAgeBase: 180 },
  { stage: 2, name: '王牌机师', maxAgeBase: 300 },
  { stage: 3, name: '舰长', maxAgeBase: 500 },
  { stage: 4, name: '指挥官', maxAgeBase: 800 },
  { stage: 5, name: '将军', maxAgeBase: 1200 },
  { stage: 6, name: '国家领袖', maxAgeBase: 2000 },
  { stage: 7, name: '和平缔造者', maxAgeBase: 9999 },
];

export const RAILGUN_REALMS = [
  { stage: 0, name: '无能力者', maxAgeBase: 100 },
  { stage: 1, name: '低能力者', maxAgeBase: 180 },
  { stage: 2, name: '异能力者', maxAgeBase: 300 },
  { stage: 3, name: '强能力者', maxAgeBase: 500 },
  { stage: 4, name: '大能力者', maxAgeBase: 800 },
  { stage: 5, name: '超能力者', maxAgeBase: 1200 },
  { stage: 6, name: '绝对能力者', maxAgeBase: 2000 },
  { stage: 7, name: '系统外存在', maxAgeBase: 9999 },
];

export const FATE_REALMS = [
  { stage: 0, name: '普通人', maxAgeBase: 100 },
  { stage: 1, name: '魔术师', maxAgeBase: 180 },
  { stage: 2, name: '魔术使', maxAgeBase: 300 },
  { stage: 3, name: '魔法使', maxAgeBase: 500 },
  { stage: 4, name: '冠位魔术师', maxAgeBase: 800 },
  { stage: 5, name: '封印指定', maxAgeBase: 1200 },
  { stage: 6, name: '根源连接者', maxAgeBase: 2000 },
  { stage: 7, name: '抑止力', maxAgeBase: 9999 },
];

export const KAGUYA_REALMS = [
  { stage: 0, name: '普通学生', maxAgeBase: 100 },
  { stage: 1, name: '学生会干事', maxAgeBase: 180 },
  { stage: 2, name: '学生会部长', maxAgeBase: 300 },
  { stage: 3, name: '学生会副会长', maxAgeBase: 500 },
  { stage: 4, name: '学生会长', maxAgeBase: 800 },
  { stage: 5, name: '社会精英', maxAgeBase: 1200 },
  { stage: 6, name: '企业家', maxAgeBase: 2000 },
  { stage: 7, name: '国家栋梁', maxAgeBase: 9999 },
];

export const WORLD_REALM_TABLES: Record<string, Array<{ stage: number; name: string; maxAgeBase: number }>> = {
  cultivation: CULTIVATION_REALMS,
  magic: MAGIC_REALMS,
  scifi: SCIFI_REALMS,
  apocalypse: APOCALYPSE_REALMS,
  wuxia: WUXIA_REALMS,
  floating_citadel: FLOATING_CITADEL_REALMS,
  doupo: DOUPO_REALMS,
  dragon_raja: DRAGON_RAJA_REALMS,
  three_body: THREE_BODY_REALMS,
  frieren: FRIEREN_REALMS,
  gundam_seed: GUNDAM_SEED_REALMS,
  railgun: RAILGUN_REALMS,
  fate: FATE_REALMS,
  kaguya: KAGUYA_REALMS,
};

export interface GameState {
  world: World | null;
  identity: Identity | null;
  age: number;
  maxAge: number;
  realm: number; // 0-7 cultivation realm stage
  stats: Stats;
  talentLevel: TalentLevel;
  relationships: Record<string, number>;
  relationshipEventCount: number;
  flags: string[];
  eventHistory: { age: number; text: string; effects: Partial<Stats> }[];
  currentEvent: Event | null;
  ending: Ending | null;
  isDead: boolean;
  isPlaying: boolean;
  gameLog: string[];
  inventory: RebirthItem[];
  equippedItems: string[];
  totalRebirths: number;
  /** 游戏中获得的临时道具（一次性使用） */
  tempItems: RebirthItem[];
  /** 本局获得的道具记录（用于结算展示） */
  obtainedItems: string[];
  /** 本局做出的选择统计 */
  choiceStats: { total: number; success: number; fail: number };
  /** 本局战斗/恋爱/隐藏事件计数 */
  eventCounters: { combat: number; romance: number; hidden: number };
  /** 本局所有事件类别计数（成就系统用） */
  eventCategoryCounts: Record<string, number>;
  /** 在死亡事件中成功生还的次数 */
  deathSurvivedCount: number;
  /** 起始属性（用于检测起始属性相关的成就） */
  startingStats: Stats;
}

/** 跨局历史记录 */
export interface GameHistory {
  bestAge: number;
  bestRealm: number;
  totalEvents: number;
  endingsUnlocked: string[];
  bestStats: Stats;
  totalPlaythroughs: number;
  totalItemsFound: number;
}
