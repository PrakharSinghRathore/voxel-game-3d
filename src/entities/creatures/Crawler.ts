import { CreatureBase } from '../CreatureBase';
import { CreatureType } from '../../types/entities';
import { Vec3 } from '../../utils/math';

export class Crawler extends CreatureBase {
  constructor(position: Vec3) {
    super(CreatureType.CRAWLER, position);
  }

  getAttackDamage(): number { return 6; }
  getAttackCooldown(): number { return 1.0; }
  getWanderSpeed(): number { return 1.5; }
  getChaseSpeed(): number { return 4.0; }
  onDeath(): void { /* Loot handled by LootTable */ }
}
