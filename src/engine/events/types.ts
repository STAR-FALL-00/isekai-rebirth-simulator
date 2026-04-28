import type { Stats } from '@/engine/types';

export type EventCategory =
  | 'childhood' | 'growth' | 'adult' | 'elder'
  | 'combat' | 'romance' | 'cultivation' | 'exploration'
  | 'world_story' | 'identity_exclusive' | 'hidden' | 'death';

export type EventEffects = Partial<Stats> & { realm?: number; maxAge?: number };

export interface EventCondition {
  stat: keyof Stats;
  min?: number;
  max?: number;
}

export interface EventChoice {
  text: string;
  successText: string;
  failText: string;
  successRate: number;
  effects: EventEffects;
  failEffects?: EventEffects;
  flags?: string[];
  failFlags?: string[];
  requiredFlags?: string[];
}

export interface EventTemplate {
  id: string;
  category: EventCategory;
  minAge: number;
  maxAge: number;
  templates: string[];
  choices?: EventChoice[];
  effects?: EventEffects;
  conditions?: EventCondition[];
  requiredFlags?: string[];
  flags?: string[];
  probability: number;
  identityExclusive?: string;
  talentExclusive?: string; // 'trash' | 'poor' | 'average' | 'good' | 'genius' | 'legendary' 或 'not_trash'
  chainPriority?: number; // 链式事件优先级，>0 时优先触发
}

export interface GameEvent {
  id: string;
  worldId: string;
  category: EventCategory;
  age: number;
  text: string;
  choices?: EventChoice[];
  effects?: EventEffects;
  conditions?: EventCondition[];
  requiredFlags?: string[];
  flags?: string[];
  probability: number;
  identityExclusive?: string;
  talentExclusive?: string;
  chainPriority?: number;
}

export interface EndingData {
  id: string;
  worldId: string;
  category: 'normal' | 'good' | 'bad' | 'harem' | 'secret' | 'hidden';
  title: string;
  description: string;
  rarityScore: number;
  conditions: {
    type: 'stat' | 'flag' | 'relationship';
    key: string;
    operator: '>' | '<' | '>=' | '<=' | '=';
    value: number | string;
    weight: number;
  }[];
}

export interface AchievementData {
  id: string;
  title: string;
  description: string;
  category: 'world' | 'stat' | 'event' | 'speed' | 'secret' | 'meta';
  icon: string;
  condition: {
    type: string;
    target: string | number;
    worldId?: string;
  };
}
