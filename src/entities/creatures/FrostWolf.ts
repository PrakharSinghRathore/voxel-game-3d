import { CreatureBase } from '../CreatureBase';
import { CreatureType } from '../../types/entities';
import { Vec3 } from '../../utils/math';

export class FrostWolf extends CreatureBase {
  constructor(position: Vec3) {
    super(CreatureType.FROST_WOLF, position);
  }

  getAttackDamage(): number { return 10; }
  getAttackCooldown(): number { return 0.8; }
  getWanderSpeed(): number { return 3.0; }
  getChaseSpeed(): number { return 7.0; }
  onDeath(): void { /* Loot handled by LootTable */ }
}
