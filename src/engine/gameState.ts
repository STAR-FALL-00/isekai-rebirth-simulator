import type { GameState, Stats, TalentLevel } from './types';
import { TALENT_DISTRIBUTION, WORLD_REALM_TABLES } from './types';

export const defaultStats: Stats = {
  strength: 10,
  intelligence: 10,
  charisma: 10,
  luck: 10,
  health: 50,
  special: 10,
};

function rollTalentLevel(): TalentLevel {
  const totalWeight = TALENT_DISTRIBUTION.reduce((s, d) => s + d.weight, 0);
  let roll = Math.random() * totalWeight;
  for (const d of TALENT_DISTRIBUTION) {
    roll -= d.weight;
    if (roll <= 0) return d.level;
  }
  return 'average';
}

const TALENT_STAT_MODIFIER: Record<TalentLevel, Partial<Stats>> = {
  legendary: { strength: 5, intelligence: 5, charisma: 5, luck: 5, special: 10, health: 10 },
  genius: { special: 8, intelligence: 5, health: 5 },
  good: { special: 5, intelligence: 3 },
  average: {},
  poor: { special: -5, intelligence: -2 },
  trash: { special: -15, strength: -5, intelligence: -5 },
};

export function createInitialState(): GameState {
  return {
    world: null,
    identity: null,
    age: 0,
    maxAge: 100,
    realm: 0,
    stats: { ...defaultStats },
    relationships: {},
    flags: [],
    eventHistory: [],
    currentEvent: null,
    ending: null,
    isDead: false,
    isPlaying: false,
    gameLog: [],
    inventory: [],
    equippedItems: [],
    totalRebirths: 0,
  };
}

import { rebirthItems, calculateWorldWeights, pickRandomWorldByWeights, getEquippedStatBonus } from './items';
import { worlds } from './worlds';

export function startRandomGame(state: GameState): GameState {
  // 1. Calculate world weights based on equipped items
  const weights = calculateWorldWeights(state.equippedItems, rebirthItems);

  // 2. Pick random world
  const worldId = pickRandomWorldByWeights(weights);
  const world = worlds.find((w) => w.id === worldId)!;

  // 3. Pick random identity from the chosen world (weighted by spawnWeight)
  const identityWeights = world.identities.map((i) => i.spawnWeight ?? 1);
  const totalIdentityWeight = identityWeights.reduce((s, w) => s + w, 0);
  let identityRoll = Math.random() * totalIdentityWeight;
  let identityIndex = 0;
  for (let i = 0; i < identityWeights.length; i++) {
    identityRoll -= identityWeights[i];
    if (identityRoll <= 0) {
      identityIndex = i;
      break;
    }
  }
  const identity = world.identities[identityIndex];

  // 4. Apply base stats from identity
  const baseStats = { ...defaultStats };
  const identityStats = identity.baseStats;
  for (const key of Object.keys(identityStats) as (keyof Stats)[]) {
    baseStats[key] = identityStats[key] ?? baseStats[key];
  }

  // 5. Apply equipped item stat bonuses
  const statBonus = getEquippedStatBonus(state.equippedItems, rebirthItems);
  for (const key of Object.keys(statBonus) as (keyof Stats)[]) {
    baseStats[key] = Math.max(0, Math.min(200, baseStats[key] + statBonus[key]));
  }

  // 6. Award a random item (20% chance) to inventory after each rebirth
  let newInventory = [...state.inventory];
  const lootRoll = Math.random();
  if (lootRoll < 0.2) {
    // Pick a random item not already in inventory
    const availableItems = rebirthItems.filter((item) => !newInventory.some((i) => i.id === item.id));
    if (availableItems.length > 0) {
      const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)];
      newInventory.push(randomItem);
    }
  }

  // 7. Initialize relationships
  const initialRelationships: Record<string, number> = {};
  for (const npc of world.npcs) {
    initialRelationships[npc.id] = 0;
  }

  // Roll talent level
  const talentLevel = rollTalentLevel();
  const talentModifier = TALENT_STAT_MODIFIER[talentLevel];
  for (const key of Object.keys(talentModifier) as (keyof Stats)[]) {
    baseStats[key] = Math.max(0, Math.min(200, baseStats[key] + (talentModifier[key] ?? 0)));
  }

  const talentLabel = TALENT_DISTRIBUTION.find(d => d.level === talentLevel)?.label ?? '普通';

  // Calculate starting maxAge based on realm table for the chosen world
  const realmTable = WORLD_REALM_TABLES[world.id] ?? WORLD_REALM_TABLES['cultivation'];
  const realmBase = realmTable[0].maxAgeBase;
  const healthBonus = Math.floor((baseStats.health ?? 50) / 5);
  const luckBonus = Math.floor((baseStats.luck ?? 10) / 10) * 5;
  const startMaxAge = realmBase + healthBonus + luckBonus + Math.floor(Math.random() * 20);

  return {
    ...state,
    world,
    identity,
    age: 0,
    maxAge: startMaxAge,
    realm: 0,
    stats: baseStats,
    talentLevel,
    relationships: initialRelationships,
    flags: [`start_${identity.id}`, `talent_${talentLevel}`],
    eventHistory: [],
    currentEvent: null,
    ending: null,
    isDead: false,
    isPlaying: true,
    gameLog: [`转生至${world.name}，成为${identity.name}。天赋：${talentLabel}。`],
    inventory: newInventory,
    equippedItems: [], // Items consumed on rebirth
    totalRebirths: state.totalRebirths + 1,
  };
}
