import { CreatureBase } from '../CreatureBase';
import { CreatureType } from '../../types/entities';
import { Vec3 } from '../../utils/math';

export class AshWraith extends CreatureBase {
  constructor(position: Vec3) {
    super(CreatureType.ASH_WRAITH, position);
  }

  getAttackDamage(): number { return 12; }
  getAttackCooldown(): number { return 1.2; }
  getWanderSpeed(): number { return 2.0; }
  getChaseSpeed(): number { return 5.5; }
  onDeath(): void { /* Loot handled by LootTable */ }
}
