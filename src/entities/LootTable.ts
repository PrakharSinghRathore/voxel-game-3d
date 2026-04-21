import { CreatureType } from '../types/entities';
import { ItemID } from '../inventory/ItemDefs';

export interface LootEntry {
  itemId: number;
  minCount: number;
  maxCount: number;
  chance: number; // 0-1
}

export class LootTable {
  private static table: Record<CreatureType, LootEntry[]> = {
    [CreatureType.CRAWLER]: [
      { itemId: ItemID.STICK, minCount: 1, maxCount: 3, chance: 0.5 },
      { itemId: ItemID.COAL, minCount: 1, maxCount: 2, chance: 0.3 },
    ],
    [CreatureType.SLIME]: [
      { itemId: ItemID.SLIME_BALL, minCount: 1, maxCount: 2, chance: 1.0 },
    ],
    [CreatureType.ASH_WRAITH]: [
      { itemId: ItemID.ASH, minCount: 2, maxCount: 4, chance: 0.4 },
      { itemId: ItemID.GOLD_INGOT, minCount: 1, maxCount: 1, chance: 0.25 },
    ],
    [CreatureType.CRYSTAL_GOLEM]: [
      { itemId: ItemID.CRYSTAL_SHARD, minCount: 3, maxCount: 6, chance: 0.7 },
      { itemId: ItemID.DIAMOND, minCount: 1, maxCount: 1, chance: 0.2 },
    ],
    [CreatureType.FROST_WOLF]: [
      { itemId: ItemID.LEATHER, minCount: 1, maxCount: 2, chance: 0.6 },
      { itemId: ItemID.RAW_MEAT, minCount: 1, maxCount: 2, chance: 0.5 },
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
