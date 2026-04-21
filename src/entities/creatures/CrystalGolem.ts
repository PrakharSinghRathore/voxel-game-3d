import { CreatureBase } from '../CreatureBase';
import { CreatureType } from '../../types/entities';
import { Vec3 } from '../../utils/math';

export class CrystalGolem extends CreatureBase {
  constructor(position: Vec3) {
    super(CreatureType.CRYSTAL_GOLEM, position);
  }

  getAttackDamage(): number { return 20; }
  getAttackCooldown(): number { return 2.0; }
  getWanderSpeed(): number { return 0.8; }
  getChaseSpeed(): number { return 2.5; }
  onDeath(): void { /* Loot handled by LootTable */ }
}
