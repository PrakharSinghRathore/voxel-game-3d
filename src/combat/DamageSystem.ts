import { CreatureBase } from '../entities/CreatureBase';
import { EntityManager } from '../entities/EntityManager';
import { Player } from '../player/Player';
import { SurvivalStats } from '../player/SurvivalStats';
import { Vec3 } from '../utils/math';
import { BulletPool } from './BulletPool';

export class DamageSystem {
  private entityManager: EntityManager;
  private player: Player;
  private survivalStats: SurvivalStats;
  private bulletPool: BulletPool;

  constructor(entityManager: EntityManager, player: Player, survivalStats: SurvivalStats, bulletPool: BulletPool) {
    this.entityManager = entityManager;
    this.player = player;
    this.survivalStats = survivalStats;
    this.bulletPool = bulletPool;
  }

  update(dt: number): void {
    // Check creature attacks on player
    const creatures = this.entityManager.getCreatures();
    for (const c of creatures) {
      if (c.state !== 2) continue; // CHASE state
      const dx = c.position.x - this.player.position.x;
      const dz = c.position.z - this.player.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < 1.5 && c.attackCooldownTimer <= 0) {
        this.survivalStats.addHealth(-c.getAttackDamage());
      }
    }

    // Check bullet hits on creatures
    const bullets = this.bulletPool.getActiveBullets();
    for (const b of bullets) {
      for (const c of creatures) {
        if (c.state === 4) continue; // DEAD
        const dx = c.position.x - b.x;
        const dy = c.position.y - b.y;
        const dz = c.position.z - b.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.0) {
          c.takeDamage(30); // bullet damage
          b.alive = false;
          break;
        }
      }
    }
  }
}
