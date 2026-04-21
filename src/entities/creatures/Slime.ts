import { CreatureBase } from '../CreatureBase';
import { CreatureType } from '../../types/entities';
import { Vec3 } from '../../utils/math';

export class Slime extends CreatureBase {
  constructor(position: Vec3) {
    super(CreatureType.SLIME, position);
  }

  getAttackDamage(): number { return 4; }
  getAttackCooldown(): number { return 1.5; }
  getWanderSpeed(): number { return 1.0; }
  getChaseSpeed(): number { return 3.0; }
  onDeath(): void { /* Split into 2 half-hp slimes handled by EntityManager */ }
}
