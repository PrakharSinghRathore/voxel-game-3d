import { CreatureType } from '../types/entities';

export interface LootEntry {
  itemId: number;
  minCount: number;
  maxCount: number;
  chance: number; // 0-1
}

export class LootTable {
  private static table: Record<CreatureType, LootEntry[]> = {
    [CreatureType.CRAWLER]: [
      { itemId: 106, minCount: 1, maxCount: 3, chance: 0.5 }, // STRING
      { itemId: 102, minCount: 1, maxCount: 2, chance: 0.3 }, // COAL
    ],
    [CreatureType.SLIME]: [
      { itemId: 112, minCount: 1, maxCount: 1, chance: 1.0 }, // SLIMEBALL
    ],
    [CreatureType.ASH_WRAITH]: [
      { itemId: 108, minCount: 2, maxCount: 4, chance: 0.4 }, // ASH
      { itemId: 104, minCount: 1, maxCount: 1, chance: 0.25 }, // GOLD
    ],
    [CreatureType.CRYSTAL_GOLEM]: [
      { itemId: 109, minCount: 3, maxCount: 6, chance: 0.7 }, // CRYSTAL_SHARD
      { itemId: 105, minCount: 1, maxCount: 1, chance: 0.2 }, // DIAMOND
    ],
    [CreatureType.FROST_WOLF]: [
      { itemId: 110, minCount: 1, maxCount: 2, chance: 0.6 }, // FUR
      { itemId: 111, minCount: 1, maxCount: 2, chance: 0.5 }, // RAW_MEAT
    ],
  };

  static rollLoot(creatureType: CreatureType): { itemId: number; count: number }[] {
    const entries = LootTable.table[creatureType] || [];
    const result: { itemId: number; count: number }[] = [];
    for (const entry of entries) {
      if (Math.random() < entry.chance) {
        const count = entry.minCount + Math.floor(Math.random() * (entry.maxCount - entry.minCount + 1));
        result.push({ itemId: entry.itemId, count });
      }
    }
    return result;
  }
}
