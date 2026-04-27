export type TalentLevel = 'trash' | 'poor' | 'average' | 'good' | 'genius' | 'legendary';

export const TALENT_DISTRIBUTION: { level: TalentLevel; weight: number; label: string }[] = [
  { level: 'legendary', weight: 2, label: '绝世' },
  { level: 'genius', weight: 8, label: '天才' },
  { level: 'good', weight: 20, label: '良才' },
  { level: 'average', weight: 35, label: '普通' },
  { level: 'poor', weight: 25, label: '平庸' },
  { level: 'trash', weight: 10, label: '废材' },
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
}

export interface NPC {
  id: string;
  name: string;
  type: 'romance' | 'mentor' | 'rival';
  description: string;
}

export interface Event {
  id: string;
  worldId: string;
  category: string;
  minAge: number;
  maxAge: number;
  text: string;
  choices?: {
    text: string;
    effects: Partial<Stats>;
    successText?: string;
    failText?: string;
    successRate?: number;
    failEffects?: Partial<Stats>;
    flags?: string[];
    nextEventId?: string;
  }[];
  effects?: Partial<Stats>;
  conditions?: { stat: string; min?: number; max?: number }[];
  flags?: string[];
  requiredFlags?: string[];
  probability: number;
  isChain?: boolean;
  chainEventId?: string;
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

export interface GameState {
  world: World | null;
  identity: Identity | null;
  age: number;
  maxAge: number;
  stats: Stats;
  talentLevel: TalentLevel;
  relationships: Record<string, number>;
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
}
