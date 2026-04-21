import { BlockID } from '../types/blocks';

// ═══════════════════════════════
// BLOCK DROP TABLE — What each block drops when broken
// ═══════════════════════════════

// Extended item IDs (beyond BlockID range) for crafted/refined items
export const ItemID = {
  // Block drops (same as BlockID for most)
  DIRT: BlockID.DIRT,
  STONE: BlockID.STONE,
  SAND: BlockID.SAND,
  SANDSTONE: BlockID.SANDSTONE,
  SNOW: BlockID.SNOW,
  ICE: BlockID.ICE,
  MUD: BlockID.MUD,
  CRYSTAL: BlockID.CRYSTAL,
  GLOWSTONE: BlockID.GLOWSTONE,
  WOOD: BlockID.WOOD,
  LEAVES: BlockID.LEAVES,
  CACTUS: BlockID.CACTUS,
  COAL_ORE: BlockID.COAL_ORE,
  IRON_ORE: BlockID.IRON_ORE,
  GOLD_ORE: BlockID.GOLD_ORE,
  DIAMOND_ORE: BlockID.DIAMOND_ORE,
  SPRUCE_WOOD: BlockID.SPRUCE_WOOD,
  SPRUCE_LEAVES: BlockID.SPRUCE_LEAVES,
  PACKED_ICE: BlockID.PACKED_ICE,
  PORTAL_FRAME: BlockID.PORTAL_FRAME,
  GRASS: BlockID.GRASS,

  // Refined/crafted items (IDs 100+)
  SWORD: 100,
  PISTOL: 101,
  RIFLE: 102,
  MAGIC_STAFF: 103,
  AMMO: 106,

  // Materials
  PLANK: 113,
  STICK: 114,
  IGNITER: 115,
  IRON_INGOT: 116,
  COAL: 117,
  RAW_MEAT: 118,
  LEATHER: 119,
  SLIME_BALL: 120,
  ASH: 121,
  CRYSTAL_SHARD: 122,
  DIAMOND: 105,
  GOLD_INGOT: 104,
  FURNACE: 123,
  TORCH: 124,
  CHEST: 125,
  WOODEN_PICKAXE: 126,
  STONE_PICKAXE: 127,
  IRON_PICKAXE: 128,
  WOODEN_AXE: 129,
  STONE_AXE: 130,
  WOODEN_SHOVEL: 131,
  CRAFTING_TABLE: 132,
  BOWL: 133,
  MUSHROOM_STEW: 134,
  BREAD: 135,
  IRON_HELMET: 136,
  IRON_CHESTPLATE: 137,
  IRON_LEGGINGS: 138,
  IRON_BOOTS: 139,
} as const;

export interface ItemDef {
  name: string;
  color: string;
  stackable: boolean;
  maxStack: number;
  isBlock: boolean; // If true, can be placed as a block
  blockId?: BlockID; // The block to place
}

// Item definitions with names, colors, and properties
export const ITEM_DEFS: Record<number, ItemDef> = {
  // Block items
  [ItemID.GRASS]: { name: 'Grass', color: '#4CAF50', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.GRASS },
  [ItemID.DIRT]: { name: 'Dirt', color: '#795548', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.DIRT },
  [ItemID.STONE]: { name: 'Stone', color: '#9E9E9E', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.STONE },
  [ItemID.SAND]: { name: 'Sand', color: '#FDD835', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.SAND },
  [ItemID.SANDSTONE]: { name: 'Sandstone', color: '#E8C86A', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.SANDSTONE },
  [ItemID.SNOW]: { name: 'Snow', color: '#FAFAFA', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.SNOW },
  [ItemID.ICE]: { name: 'Ice', color: '#B3E5FC', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.ICE },
  [ItemID.MUD]: { name: 'Mud', color: '#4E342E', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.MUD },
  [ItemID.CRYSTAL]: { name: 'Crystal', color: '#7B1FA2', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.CRYSTAL },
  [ItemID.GLOWSTONE]: { name: 'Glowstone', color: '#FF8F00', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.GLOWSTONE },
  [ItemID.WOOD]: { name: 'Wood', color: '#6D4C41', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.WOOD },
  [ItemID.LEAVES]: { name: 'Leaves', color: '#2E7D32', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.LEAVES },
  [ItemID.CACTUS]: { name: 'Cactus', color: '#2E7D32', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.CACTUS },
  [ItemID.COAL_ORE]: { name: 'Coal Ore', color: '#424242', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.COAL_ORE },
  [ItemID.IRON_ORE]: { name: 'Iron Ore', color: '#E8C86A', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.IRON_ORE },
  [ItemID.GOLD_ORE]: { name: 'Gold Ore', color: '#FFD700', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.GOLD_ORE },
  [ItemID.DIAMOND_ORE]: { name: 'Diamond Ore', color: '#00BCD4', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.DIAMOND_ORE },
  [ItemID.SPRUCE_WOOD]: { name: 'Spruce Wood', color: '#4E342E', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.SPRUCE_WOOD },
  [ItemID.SPRUCE_LEAVES]: { name: 'Spruce Leaves', color: '#1B5E20', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.SPRUCE_LEAVES },
  [ItemID.PACKED_ICE]: { name: 'Packed Ice', color: '#81D4FA', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.PACKED_ICE },
  [ItemID.PORTAL_FRAME]: { name: 'Portal Frame', color: '#6A1B9A', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.PORTAL_FRAME },

  // Refined materials
  [ItemID.PLANK]: { name: 'Plank', color: '#8D6E63', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.WOOD },
  [ItemID.STICK]: { name: 'Stick', color: '#6D4C41', stackable: true, maxStack: 64, isBlock: false },
  [ItemID.COAL]: { name: 'Coal', color: '#333333', stackable: true, maxStack: 64, isBlock: false },
  [ItemID.IRON_INGOT]: { name: 'Iron Ingot', color: '#DDDDDD', stackable: true, maxStack: 64, isBlock: false },
  [ItemID.GOLD_INGOT]: { name: 'Gold Ingot', color: '#FFD700', stackable: true, maxStack: 64, isBlock: false },
  [ItemID.DIAMOND]: { name: 'Diamond', color: '#00E5FF', stackable: true, maxStack: 64, isBlock: false },
  [ItemID.CRYSTAL_SHARD]: { name: 'Crystal Shard', color: '#CE93D8', stackable: true, maxStack: 64, isBlock: false },
  [ItemID.SLIME_BALL]: { name: 'Slime Ball', color: '#76FF03', stackable: true, maxStack: 64, isBlock: false },
  [ItemID.ASH]: { name: 'Ash', color: '#FF5722', stackable: true, maxStack: 64, isBlock: false },
  [ItemID.RAW_MEAT]: { name: 'Raw Meat', color: '#FF6D00', stackable: true, maxStack: 16, isBlock: false },
  [ItemID.LEATHER]: { name: 'Leather', color: '#8D6E63', stackable: true, maxStack: 64, isBlock: false },
  [ItemID.IGNITER]: { name: 'Igniter', color: '#FF6D00', stackable: true, maxStack: 1, isBlock: false },

  // Tools & Weapons
  [ItemID.SWORD]: { name: 'Iron Sword', color: '#C0C0C0', stackable: false, maxStack: 1, isBlock: false },
  [ItemID.PISTOL]: { name: 'Pistol', color: '#888888', stackable: false, maxStack: 1, isBlock: false },
  [ItemID.RIFLE]: { name: 'Rifle', color: '#555555', stackable: false, maxStack: 1, isBlock: false },
  [ItemID.MAGIC_STAFF]: { name: 'Magic Staff', color: '#9C27B0', stackable: false, maxStack: 1, isBlock: false },
  [ItemID.AMMO]: { name: 'Ammo', color: '#FFD700', stackable: true, maxStack: 64, isBlock: false },
  [ItemID.WOODEN_PICKAXE]: { name: 'Wooden Pickaxe', color: '#8D6E63', stackable: false, maxStack: 1, isBlock: false },
  [ItemID.STONE_PICKAXE]: { name: 'Stone Pickaxe', color: '#9E9E9E', stackable: false, maxStack: 1, isBlock: false },
  [ItemID.IRON_PICKAXE]: { name: 'Iron Pickaxe', color: '#DDDDDD', stackable: false, maxStack: 1, isBlock: false },
  [ItemID.WOODEN_AXE]: { name: 'Wooden Axe', color: '#8D6E63', stackable: false, maxStack: 1, isBlock: false },
  [ItemID.STONE_AXE]: { name: 'Stone Axe', color: '#9E9E9E', stackable: false, maxStack: 1, isBlock: false },
  [ItemID.WOODEN_SHOVEL]: { name: 'Wooden Shovel', color: '#8D6E63', stackable: false, maxStack: 1, isBlock: false },

  // Utility blocks
  [ItemID.FURNACE]: { name: 'Furnace', color: '#757575', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.STONE },
  [ItemID.TORCH]: { name: 'Torch', color: '#FFA726', stackable: true, maxStack: 64, isBlock: false },
  [ItemID.CHEST]: { name: 'Chest', color: '#6D4C41', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.WOOD },
  [ItemID.CRAFTING_TABLE]: { name: 'Crafting Table', color: '#8D6E63', stackable: true, maxStack: 64, isBlock: true, blockId: BlockID.WOOD },

  // Food
  [ItemID.BREAD]: { name: 'Bread', color: '#D4A04A', stackable: true, maxStack: 16, isBlock: false },
  [ItemID.BOWL]: { name: 'Bowl', color: '#8D6E63', stackable: true, maxStack: 64, isBlock: false },
  [ItemID.MUSHROOM_STEW]: { name: 'Mushroom Stew', color: '#A1887F', stackable: false, maxStack: 1, isBlock: false },

  // Armor
  [ItemID.IRON_HELMET]: { name: 'Iron Helmet', color: '#DDDDDD', stackable: false, maxStack: 1, isBlock: false },
  [ItemID.IRON_CHESTPLATE]: { name: 'Iron Chestplate', color: '#DDDDDD', stackable: false, maxStack: 1, isBlock: false },
  [ItemID.IRON_LEGGINGS]: { name: 'Iron Leggings', color: '#DDDDDD', stackable: false, maxStack: 1, isBlock: false },
  [ItemID.IRON_BOOTS]: { name: 'Iron Boots', color: '#DDDDDD', stackable: false, maxStack: 1, isBlock: false },
};

// Block drop table — what each block drops when broken
export const BLOCK_DROPS: Record<number, { id: number; count: number; chance: number }[]> = {
  [BlockID.GRASS]: [{ id: ItemID.DIRT, count: 1, chance: 1.0 }],
  [BlockID.DIRT]: [{ id: ItemID.DIRT, count: 1, chance: 1.0 }],
  [BlockID.STONE]: [{ id: ItemID.STONE, count: 1, chance: 1.0 }],
  [BlockID.SAND]: [{ id: ItemID.SAND, count: 1, chance: 1.0 }],
  [BlockID.SANDSTONE]: [{ id: ItemID.SANDSTONE, count: 1, chance: 1.0 }],
  [BlockID.SNOW]: [{ id: ItemID.SNOW, count: 1, chance: 1.0 }],
  [BlockID.ICE]: [{ id: ItemID.ICE, count: 1, chance: 0.8 }],
  [BlockID.MUD]: [{ id: ItemID.MUD, count: 1, chance: 1.0 }],
  [BlockID.CRYSTAL]: [{ id: ItemID.CRYSTAL_SHARD, count: 2, chance: 1.0 }, { id: ItemID.CRYSTAL_SHARD, count: 2, chance: 0.5 }],
  [BlockID.GLOWSTONE]: [{ id: ItemID.GLOWSTONE, count: 1, chance: 1.0 }],
  [BlockID.WOOD]: [{ id: ItemID.WOOD, count: 1, chance: 1.0 }],
  [BlockID.LEAVES]: [{ id: ItemID.LEAVES, count: 1, chance: 0.4 }, { id: ItemID.STICK, count: 1, chance: 0.15 }],
  [BlockID.CACTUS]: [{ id: ItemID.CACTUS, count: 1, chance: 1.0 }],
  [BlockID.BEDROCK]: [], // Can't break bedrock
  [BlockID.COAL_ORE]: [{ id: ItemID.COAL, count: 1, chance: 1.0 }],
  [BlockID.IRON_ORE]: [{ id: ItemID.IRON_ORE, count: 1, chance: 1.0 }],
  [BlockID.GOLD_ORE]: [{ id: ItemID.GOLD_ORE, count: 1, chance: 1.0 }],
  [BlockID.DIAMOND_ORE]: [{ id: ItemID.DIAMOND, count: 1, chance: 1.0 }],
  [BlockID.SPRUCE_WOOD]: [{ id: ItemID.SPRUCE_WOOD, count: 1, chance: 1.0 }],
  [BlockID.SPRUCE_LEAVES]: [{ id: ItemID.SPRUCE_LEAVES, count: 1, chance: 0.4 }, { id: ItemID.STICK, count: 1, chance: 0.2 }],
  [BlockID.PACKED_ICE]: [{ id: ItemID.PACKED_ICE, count: 1, chance: 1.0 }],
  [BlockID.PORTAL_FRAME]: [{ id: ItemID.PORTAL_FRAME, count: 1, chance: 1.0 }],
};

/**
 * Get the drops for a given block type
 */
export function getBlockDrops(blockId: BlockID): { id: number; count: number }[] {
  const drops = BLOCK_DROPS[blockId];
  if (!drops) return [];

  const result: { id: number; count: number }[] = [];
  for (const drop of drops) {
    if (Math.random() < drop.chance) {
      result.push({ id: drop.id, count: drop.count });
    }
  }
  return result;
}

/**
 * Get the item name from an ID
 */
export function getItemName(id: number): string {
  return ITEM_DEFS[id]?.name ?? 'Unknown';
}

/**
 * Get the item color from an ID
 */
export function getItemColor(id: number): string {
  return ITEM_DEFS[id]?.color ?? '#666';
}

/**
 * Get item definition
 */
export function getItemDef(id: number): ItemDef | undefined {
  return ITEM_DEFS[id];
}
