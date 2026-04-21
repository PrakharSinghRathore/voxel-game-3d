export enum BlockID {
  AIR = 0,
  GRASS,
  DIRT,
  STONE,
  SAND,
  SANDSTONE,
  SNOW,
  ICE,
  MUD,
  CRYSTAL,
  GLOWSTONE,
  LAVA,
  WATER,
  WOOD,
  LEAVES,
  CACTUS,
  BEDROCK,
  COAL_ORE,
  IRON_ORE,
  GOLD_ORE,
  DIAMOND_ORE,
  PORTAL_FRAME,
  PORTAL_ACTIVE,
  LILY_PAD,
  SPRUCE_WOOD,
  SPRUCE_LEAVES,
  PACKED_ICE,
}

export interface BlockDef {
  id: BlockID;
  name: string;
  solid: boolean;
  transparent: boolean;
  hardness: number; // seconds to break
  atlasTileX: number; // column in atlas (0-15)
  atlasTileY: number; // row in atlas (0-15)
  sideAtlasX?: number; // for blocks with different side texture (like grass)
  sideAtlasY?: number;
  bottomAtlasX?: number;
  bottomAtlasY?: number;
  lightEmission: number; // 0-15
}

export const BLOCK_DEFS: Record<BlockID, BlockDef> = {
  [BlockID.AIR]:           { id: BlockID.AIR, name: 'Air', solid: false, transparent: true, hardness: 0, atlasTileX: 0, atlasTileY: 0, lightEmission: 0 },
  [BlockID.GRASS]:         { id: BlockID.GRASS, name: 'Grass', solid: true, transparent: false, hardness: 0.6, atlasTileX: 0, atlasTileY: 0, sideAtlasX: 1, sideAtlasY: 0, bottomAtlasX: 2, bottomAtlasY: 0, lightEmission: 0 },
  [BlockID.DIRT]:          { id: BlockID.DIRT, name: 'Dirt', solid: true, transparent: false, hardness: 0.5, atlasTileX: 2, atlasTileY: 0, lightEmission: 0 },
  [BlockID.STONE]:         { id: BlockID.STONE, name: 'Stone', solid: true, transparent: false, hardness: 1.5, atlasTileX: 3, atlasTileY: 0, lightEmission: 0 },
  [BlockID.SAND]:          { id: BlockID.SAND, name: 'Sand', solid: true, transparent: false, hardness: 0.5, atlasTileX: 4, atlasTileY: 0, lightEmission: 0 },
  [BlockID.SANDSTONE]:     { id: BlockID.SANDSTONE, name: 'Sandstone', solid: true, transparent: false, hardness: 2.0, atlasTileX: 5, atlasTileY: 0, lightEmission: 0 },
  [BlockID.SNOW]:          { id: BlockID.SNOW, name: 'Snow', solid: true, transparent: false, hardness: 0.2, atlasTileX: 6, atlasTileY: 0, lightEmission: 0 },
  [BlockID.ICE]:           { id: BlockID.ICE, name: 'Ice', solid: true, transparent: true, hardness: 0.5, atlasTileX: 7, atlasTileY: 0, lightEmission: 0 },
  [BlockID.MUD]:           { id: BlockID.MUD, name: 'Mud', solid: true, transparent: false, hardness: 0.4, atlasTileX: 8, atlasTileY: 0, lightEmission: 0 },
  [BlockID.CRYSTAL]:       { id: BlockID.CRYSTAL, name: 'Crystal', solid: true, transparent: false, hardness: 1.0, atlasTileX: 9, atlasTileY: 0, lightEmission: 12 },
  [BlockID.GLOWSTONE]:     { id: BlockID.GLOWSTONE, name: 'Glowstone', solid: true, transparent: false, hardness: 0.3, atlasTileX: 10, atlasTileY: 0, lightEmission: 15 },
  [BlockID.LAVA]:          { id: BlockID.LAVA, name: 'Lava', solid: false, transparent: true, hardness: -1, atlasTileX: 11, atlasTileY: 0, lightEmission: 15 },
  [BlockID.WATER]:         { id: BlockID.WATER, name: 'Water', solid: false, transparent: true, hardness: -1, atlasTileX: 0, atlasTileY: 0, lightEmission: 0 },
  [BlockID.WOOD]:          { id: BlockID.WOOD, name: 'Wood', solid: true, transparent: false, hardness: 2.0, atlasTileX: 12, atlasTileY: 0, lightEmission: 0 },
  [BlockID.LEAVES]:        { id: BlockID.LEAVES, name: 'Leaves', solid: true, transparent: true, hardness: 0.2, atlasTileX: 13, atlasTileY: 0, lightEmission: 0 },
  [BlockID.CACTUS]:        { id: BlockID.CACTUS, name: 'Cactus', solid: true, transparent: false, hardness: 0.4, atlasTileX: 14, atlasTileY: 0, lightEmission: 0 },
  [BlockID.BEDROCK]:       { id: BlockID.BEDROCK, name: 'Bedrock', solid: true, transparent: false, hardness: -1, atlasTileX: 15, atlasTileY: 0, lightEmission: 0 },
  [BlockID.COAL_ORE]:      { id: BlockID.COAL_ORE, name: 'Coal Ore', solid: true, transparent: false, hardness: 3.0, atlasTileX: 0, atlasTileY: 1, lightEmission: 0 },
  [BlockID.IRON_ORE]:      { id: BlockID.IRON_ORE, name: 'Iron Ore', solid: true, transparent: false, hardness: 3.0, atlasTileX: 1, atlasTileY: 1, lightEmission: 0 },
  [BlockID.GOLD_ORE]:      { id: BlockID.GOLD_ORE, name: 'Gold Ore', solid: true, transparent: false, hardness: 3.0, atlasTileX: 2, atlasTileY: 1, lightEmission: 0 },
  [BlockID.DIAMOND_ORE]:   { id: BlockID.DIAMOND_ORE, name: 'Diamond Ore', solid: true, transparent: false, hardness: 3.0, atlasTileX: 3, atlasTileY: 1, lightEmission: 0 },
  [BlockID.PORTAL_FRAME]:  { id: BlockID.PORTAL_FRAME, name: 'Portal Frame', solid: true, transparent: false, hardness: -1, atlasTileX: 4, atlasTileY: 1, lightEmission: 5 },
  [BlockID.PORTAL_ACTIVE]: { id: BlockID.PORTAL_ACTIVE, name: 'Portal', solid: false, transparent: true, hardness: -1, atlasTileX: 5, atlasTileY: 1, lightEmission: 15 },
  [BlockID.LILY_PAD]:      { id: BlockID.LILY_PAD, name: 'Lily Pad', solid: false, transparent: true, hardness: 0.0, atlasTileX: 6, atlasTileY: 1, lightEmission: 0 },
  [BlockID.SPRUCE_WOOD]:   { id: BlockID.SPRUCE_WOOD, name: 'Spruce Wood', solid: true, transparent: false, hardness: 2.0, atlasTileX: 7, atlasTileY: 1, lightEmission: 0 },
  [BlockID.SPRUCE_LEAVES]: { id: BlockID.SPRUCE_LEAVES, name: 'Spruce Leaves', solid: true, transparent: true, hardness: 0.2, atlasTileX: 8, atlasTileY: 1, lightEmission: 0 },
  [BlockID.PACKED_ICE]:    { id: BlockID.PACKED_ICE, name: 'Packed Ice', solid: true, transparent: false, hardness: 0.5, atlasTileX: 9, atlasTileY: 1, lightEmission: 0 },
};

export function isBlockSolid(id: BlockID): boolean {
  return BLOCK_DEFS[id]?.solid ?? false;
}

export function isBlockTransparent(id: BlockID): boolean {
  return BLOCK_DEFS[id]?.transparent ?? true;
}
