export interface Recipe {
  name: string;
  pattern: (number | null)[]; // 3x3 grid, null = empty
  result: { id: number; count: number };
}

// Item IDs
export const ITEM_IDS = {
  PLANK: 113,
  STICK: 114,
  SWORD: 101,
  PISTOL: 102,
  RIFLE: 103,
  MAGIC_STAFF: 104,
  AMMO: 106,
  PORTAL_FRAME: 21,
  IGNITER: 115,
  IRON: 103,
  COAL: 102,
  CRYSTAL: 9,
  GOLD: 104,
  WOOD: 14,
};

export const RECIPES: Recipe[] = [
  {
    name: 'Plank',
    pattern: [14, null, null, null, null, null, null, null, null],
    result: { id: 113, count: 4 },
  },
  {
    name: 'Stick',
    pattern: [113, null, null, 113, null, null, null, null, null],
    result: { id: 114, count: 4 },
  },
  {
    name: 'Sword',
    pattern: [103, null, null, 103, null, null, 114, null, null],
    result: { id: 101, count: 1 },
  },
  {
    name: 'Pistol',
    pattern: [103, 103, 103, null, 114, null, null, null, null],
    result: { id: 102, count: 1 },
  },
  {
    name: 'Rifle',
    pattern: [103, 103, 103, 114, 103, 103, 114, null, null],
    result: { id: 103, count: 1 },
  },
  {
    name: 'Magic Staff',
    pattern: [9, 9, 9, null, 114, null, null, 114, null],
    result: { id: 104, count: 1 },
  },
  {
    name: 'Ammo',
    pattern: [103, 102, 103, null, null, null, null, null, null],
    result: { id: 106, count: 16 },
  },
  {
    name: 'Portal Frame',
    pattern: [9, 9, 9, 9, null, 9, 9, 9, 9],
    result: { id: 21, count: 1 },
  },
  {
    name: 'Igniter',
    pattern: [104, 103, null, null, null, null, null, null, null],
    result: { id: 115, count: 1 },
  },
];
