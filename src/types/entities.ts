export enum FSMState {
  IDLE = 0,
  WANDER,
  CHASE,
  ATTACK,
  DEAD,
}

export enum CreatureType {
  CRAWLER = 0,
  SLIME,
  ASH_WRAITH,
  CRYSTAL_GOLEM,
  FROST_WOLF,
}

export interface CreatureSpawn {
  type: CreatureType;
  biome: number; // BiomeID
  minY: number;
  maxY: number;
  spawnWeight: number;
  maxPerChunk: number;
}

export interface CreatureStats {
  maxHp: number;
  attackDamage: number;
  attackCooldown: number; // seconds
  wanderSpeed: number;
  chaseSpeed: number;
  aggroRange: number; // blocks
  deaggroRange: number;
  hitboxWidth: number;
  hitboxHeight: number;
}

export const CREATURE_STATS: Record<CreatureType, CreatureStats> = {
  [CreatureType.CRAWLER]: {
    maxHp: 20,
    attackDamage: 6,
    attackCooldown: 1.0,
    wanderSpeed: 1.5,
    chaseSpeed: 4.0,
    aggroRange: 16,
    deaggroRange: 24,
    hitboxWidth: 0.6,
    hitboxHeight: 0.4,
  },
  [CreatureType.SLIME]: {
    maxHp: 16,
    attackDamage: 4,
    attackCooldown: 1.5,
    wanderSpeed: 1.0,
    chaseSpeed: 3.0,
    aggroRange: 12,
    deaggroRange: 20,
    hitboxWidth: 0.8,
    hitboxHeight: 0.8,
  },
  [CreatureType.ASH_WRAITH]: {
    maxHp: 40,
    attackDamage: 12,
    attackCooldown: 1.2,
    wanderSpeed: 2.0,
    chaseSpeed: 5.5,
    aggroRange: 20,
    deaggroRange: 30,
    hitboxWidth: 0.6,
    hitboxHeight: 1.6,
  },
  [CreatureType.CRYSTAL_GOLEM]: {
    maxHp: 80,
    attackDamage: 20,
    attackCooldown: 2.0,
    wanderSpeed: 0.8,
    chaseSpeed: 2.5,
    aggroRange: 14,
    deaggroRange: 22,
    hitboxWidth: 1.0,
    hitboxHeight: 2.0,
  },
  [CreatureType.FROST_WOLF]: {
    maxHp: 35,
    attackDamage: 10,
    attackCooldown: 0.8,
    wanderSpeed: 3.0,
    chaseSpeed: 7.0,
    aggroRange: 20,
    deaggroRange: 32,
    hitboxWidth: 0.7,
    hitboxHeight: 0.8,
  },
};

export const CREATURE_SPAWNS: CreatureSpawn[] = [
  { type: CreatureType.CRAWLER, biome: 0, minY: 0, maxY: 64, spawnWeight: 10, maxPerChunk: 3 },
  { type: CreatureType.CRAWLER, biome: 2, minY: 0, maxY: 64, spawnWeight: 5, maxPerChunk: 2 },
  { type: CreatureType.SLIME, biome: 3, minY: 0, maxY: 64, spawnWeight: 8, maxPerChunk: 3 },
  { type: CreatureType.ASH_WRAITH, biome: 1, minY: 0, maxY: 64, spawnWeight: 4, maxPerChunk: 1 },
  { type: CreatureType.CRYSTAL_GOLEM, biome: 4, minY: 0, maxY: 64, spawnWeight: 3, maxPerChunk: 1 },
  { type: CreatureType.FROST_WOLF, biome: 2, minY: 0, maxY: 64, spawnWeight: 6, maxPerChunk: 2 },
];
