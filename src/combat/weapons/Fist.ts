export interface WeaponDef {
  name: string;
  type: 'melee' | 'hitscan' | 'magic';
  damage: number;
  range: number;
  cooldown: number;
  ammoPerShot: number;
  manaCost: number;
}

export const FIST_DEF: WeaponDef = {
  name: 'Fist',
  type: 'melee',
  damage: 5,
  range: 2.5,
  cooldown: 0.8,
  ammoPerShot: 0,
  manaCost: 0,
};
