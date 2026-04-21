import { ItemID } from './ItemDefs';

export interface Recipe {
  name: string;
  pattern: (number | null)[]; // 3x3 grid, null = empty
  result: { id: number; count: number };
  category: 'tools' | 'weapons' | 'materials' | 'blocks' | 'food' | 'armor';
}

export const RECIPES: Recipe[] = [
  // === MATERIALS ===
  {
    name: 'Plank',
    pattern: [ItemID.WOOD, null, null, null, null, null, null, null, null],
    result: { id: ItemID.PLANK, count: 4 },
    category: 'materials',
  },
  {
    name: 'Stick',
    pattern: [ItemID.PLANK, null, null, ItemID.PLANK, null, null, null, null, null],
    result: { id: ItemID.STICK, count: 4 },
    category: 'materials',
  },
  {
    name: 'Iron Ingot (smelt)',
    pattern: [ItemID.IRON_ORE, null, null, ItemID.COAL, null, null, null, null, null],
    result: { id: ItemID.IRON_INGOT, count: 1 },
    category: 'materials',
  },
  {
    name: 'Gold Ingot (smelt)',
    pattern: [ItemID.GOLD_ORE, null, null, ItemID.COAL, null, null, null, null, null],
    result: { id: ItemID.GOLD_INGOT, count: 1 },
    category: 'materials',
  },

  // === BLOCKS ===
  {
    name: 'Crafting Table',
    pattern: [ItemID.PLANK, ItemID.PLANK, null, ItemID.PLANK, ItemID.PLANK, null, null, null, null],
    result: { id: ItemID.CRAFTING_TABLE, count: 1 },
    category: 'blocks',
  },
  {
    name: 'Furnace',
    pattern: [ItemID.STONE, ItemID.STONE, ItemID.STONE, ItemID.STONE, null, ItemID.STONE, ItemID.STONE, ItemID.STONE, ItemID.STONE],
    result: { id: ItemID.FURNACE, count: 1 },
    category: 'blocks',
  },
  {
    name: 'Chest',
    pattern: [ItemID.PLANK, ItemID.PLANK, ItemID.PLANK, ItemID.PLANK, null, ItemID.PLANK, ItemID.PLANK, ItemID.PLANK, ItemID.PLANK],
    result: { id: ItemID.CHEST, count: 1 },
    category: 'blocks',
  },
  {
    name: 'Torch',
    pattern: [ItemID.COAL, null, null, ItemID.STICK, null, null, null, null, null],
    result: { id: ItemID.TORCH, count: 4 },
    category: 'blocks',
  },
  {
    name: 'Portal Frame',
    pattern: [ItemID.CRYSTAL_SHARD, ItemID.CRYSTAL_SHARD, ItemID.CRYSTAL_SHARD, ItemID.CRYSTAL_SHARD, null, ItemID.CRYSTAL_SHARD, ItemID.CRYSTAL_SHARD, ItemID.CRYSTAL_SHARD, ItemID.CRYSTAL_SHARD],
    result: { id: ItemID.PORTAL_FRAME, count: 1 },
    category: 'blocks',
  },

  // === TOOLS ===
  {
    name: 'Wooden Pickaxe',
    pattern: [ItemID.PLANK, ItemID.PLANK, ItemID.PLANK, null, ItemID.STICK, null, null, ItemID.STICK, null],
    result: { id: ItemID.WOODEN_PICKAXE, count: 1 },
    category: 'tools',
  },
  {
    name: 'Stone Pickaxe',
    pattern: [ItemID.STONE, ItemID.STONE, ItemID.STONE, null, ItemID.STICK, null, null, ItemID.STICK, null],
    result: { id: ItemID.STONE_PICKAXE, count: 1 },
    category: 'tools',
  },
  {
    name: 'Iron Pickaxe',
    pattern: [ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.IRON_INGOT, null, ItemID.STICK, null, null, ItemID.STICK, null],
    result: { id: ItemID.IRON_PICKAXE, count: 1 },
    category: 'tools',
  },
  {
    name: 'Wooden Axe',
    pattern: [ItemID.PLANK, ItemID.PLANK, null, ItemID.PLANK, ItemID.STICK, null, null, ItemID.STICK, null],
    result: { id: ItemID.WOODEN_AXE, count: 1 },
    category: 'tools',
  },
  {
    name: 'Stone Axe',
    pattern: [ItemID.STONE, ItemID.STONE, null, ItemID.STONE, ItemID.STICK, null, null, ItemID.STICK, null],
    result: { id: ItemID.STONE_AXE, count: 1 },
    category: 'tools',
  },
  {
    name: 'Wooden Shovel',
    pattern: [ItemID.PLANK, null, null, ItemID.STICK, null, null, ItemID.STICK, null, null],
    result: { id: ItemID.WOODEN_SHOVEL, count: 1 },
    category: 'tools',
  },

  // === WEAPONS ===
  {
    name: 'Iron Sword',
    pattern: [ItemID.IRON_INGOT, null, null, ItemID.IRON_INGOT, null, null, ItemID.STICK, null, null],
    result: { id: ItemID.SWORD, count: 1 },
    category: 'weapons',
  },
  {
    name: 'Pistol',
    pattern: [ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.IRON_INGOT, null, ItemID.STICK, null, null, null, null],
    result: { id: ItemID.PISTOL, count: 1 },
    category: 'weapons',
  },
  {
    name: 'Rifle',
    pattern: [ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.STICK, ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.STICK, null, null],
    result: { id: ItemID.RIFLE, count: 1 },
    category: 'weapons',
  },
  {
    name: 'Magic Staff',
    pattern: [ItemID.CRYSTAL_SHARD, ItemID.CRYSTAL_SHARD, ItemID.CRYSTAL_SHARD, null, ItemID.STICK, null, null, ItemID.STICK, null],
    result: { id: ItemID.MAGIC_STAFF, count: 1 },
    category: 'weapons',
  },
  {
    name: 'Ammo',
    pattern: [ItemID.IRON_INGOT, ItemID.COAL, ItemID.IRON_INGOT, null, null, null, null, null, null],
    result: { id: ItemID.AMMO, count: 16 },
    category: 'weapons',
  },
  {
    name: 'Igniter',
    pattern: [ItemID.GOLD_INGOT, ItemID.IRON_INGOT, null, null, null, null, null, null, null],
    result: { id: ItemID.IGNITER, count: 1 },
    category: 'weapons',
  },

  // === FOOD ===
  {
    name: 'Bread',
    pattern: [ItemID.SAND, ItemID.SAND, ItemID.SAND, null, null, null, null, null, null],
    result: { id: ItemID.BREAD, count: 1 },
    category: 'food',
  },
  {
    name: 'Bowl',
    pattern: [ItemID.PLANK, null, ItemID.PLANK, null, ItemID.PLANK, null, null, null, null],
    result: { id: ItemID.BOWL, count: 1 },
    category: 'food',
  },

  // === ARMOR ===
  {
    name: 'Iron Helmet',
    pattern: [ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.IRON_INGOT, null, ItemID.IRON_INGOT, null, null, null],
    result: { id: ItemID.IRON_HELMET, count: 1 },
    category: 'armor',
  },
  {
    name: 'Iron Chestplate',
    pattern: [ItemID.IRON_INGOT, null, ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.IRON_INGOT],
    result: { id: ItemID.IRON_CHESTPLATE, count: 1 },
    category: 'armor',
  },
  {
    name: 'Iron Leggings',
    pattern: [ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.IRON_INGOT, ItemID.IRON_INGOT, null, ItemID.IRON_INGOT, ItemID.IRON_INGOT, null, ItemID.IRON_INGOT],
    result: { id: ItemID.IRON_LEGGINGS, count: 1 },
    category: 'armor',
  },
  {
    name: 'Iron Boots',
    pattern: [ItemID.IRON_INGOT, null, ItemID.IRON_INGOT, ItemID.IRON_INGOT, null, ItemID.IRON_INGOT, null, null, null],
    result: { id: ItemID.IRON_BOOTS, count: 1 },
    category: 'armor',
  },
];
