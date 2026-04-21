export interface PlayerSave {
  position: [number, number, number];
  rotation: [number, number];
  stats: {
    health: number;
    hunger: number;
    thirst: number;
    stamina: number;
    temperature: number;
    mana: number;
  };
  dimension: 'overworld' | 'void';
}

export interface ItemStack {
  id: number;
  count: number;
}

export interface BlockDelta {
  x: number;
  y: number;
  z: number;
  newBlock: number;
}

export interface CreatureSave {
  type: number;
  position: [number, number, number];
  hp: number;
  state: number;
}

export interface SaveData {
  version: number;
  seed: number;
  timestamp: number;
  player: PlayerSave;
  inventory: (ItemStack | null)[];
  deltas: Record<string, BlockDelta[]>;
  creatures: CreatureSave[];
}
