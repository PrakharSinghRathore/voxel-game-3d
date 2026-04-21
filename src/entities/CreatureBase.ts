import { FSMState, CreatureType, CREATURE_STATS } from '../types/entities';
import { Vec3, ddaRaycast } from '../utils/math';
import { isBlockSolid } from '../types/blocks';
import { BlockID } from '../types/blocks';

export abstract class CreatureBase {
  type: CreatureType;
  hp: number;
  maxHp: number;
  state: FSMState = FSMState.IDLE;
  position: Vec3;
  target: Vec3 = { x: 0, y: 0, z: 0 };
  instanceId: number = -1;
  stateTimer: number = 0;
  attackCooldownTimer: number = 0;
  deadTimer: number = 0;

  constructor(type: CreatureType, position: Vec3) {
    this.type = type;
    const stats = CREATURE_STATS[type];
    this.hp = stats.maxHp;
    this.maxHp = stats.maxHp;
    this.position = { ...position };
    this.stateTimer = 3 + Math.random() * 5;
  }

  abstract getAttackDamage(): number;
  abstract getAttackCooldown(): number;
  abstract getWanderSpeed(): number;
  abstract getChaseSpeed(): number;
  abstract onDeath(): void;

  updateFSM(dt: number, playerPos: Vec3, isPlayerVisible: (from: Vec3, to: Vec3) => boolean): void {
    if (this.state === FSMState.DEAD) {
      this.deadTimer += dt;
      return;
    }

    const stats = CREATURE_STATS[this.type];
    const distToPlayer = Math.sqrt(
      (this.position.x - playerPos.x) ** 2 +
      (this.position.y - playerPos.y) ** 2 +
      (this.position.z - playerPos.z) ** 2
    );

    this.attackCooldownTimer = Math.max(0, this.attackCooldownTimer - dt);
    this.stateTimer -= dt;

    switch (this.state) {
      case FSMState.IDLE:
        if (this.stateTimer <= 0) {
          this.state = FSMState.WANDER;
          this.stateTimer = 3 + Math.random() * 5;
          this.target = {
            x: this.position.x + (Math.random() - 0.5) * 10,
            y: this.position.y,
            z: this.position.z + (Math.random() - 0.5) * 10,
          };
        }
        if (distToPlayer < stats.aggroRange && isPlayerVisible(this.position, playerPos)) {
          this.state = FSMState.CHASE;
        }
        break;

      case FSMState.WANDER:
        if (this.stateTimer <= 0) {
          this.state = FSMState.IDLE;
          this.stateTimer = 2 + Math.random() * 6;
        }
        if (distToPlayer < stats.aggroRange && isPlayerVisible(this.position, playerPos)) {
          this.state = FSMState.CHASE;
        }
        break;

      case FSMState.CHASE:
        this.target = { ...playerPos };
        if (distToPlayer < 1.5) {
          this.state = FSMState.ATTACK;
        }
        if (distToPlayer > stats.deaggroRange) {
          this.state = FSMState.WANDER;
          this.stateTimer = 3 + Math.random() * 4;
          this.target = {
            x: this.position.x + (Math.random() - 0.5) * 10,
            y: this.position.y,
            z: this.position.z + (Math.random() - 0.5) * 10,
          };
        }
        break;

      case FSMState.ATTACK:
        if (this.attackCooldownTimer <= 0) {
          this.attackCooldownTimer = this.getAttackCooldown();
          this.state = FSMState.CHASE;
        }
        if (distToPlayer > 2.0) {
          this.state = FSMState.CHASE;
        }
        break;
    }

    if (this.hp <= 0) {
      this.state = FSMState.DEAD;
      this.deadTimer = 0;
    }
  }

  getSpeed(): number {
    switch (this.state) {
      case FSMState.WANDER: return this.getWanderSpeed();
      case FSMState.CHASE: return this.getChaseSpeed();
      default: return 0;
    }
  }

  takeDamage(amount: number): void {
    this.hp -= amount;
    if (this.hp <= 0) {
      this.hp = 0;
      this.state = FSMState.DEAD;
      this.deadTimer = 0;
    }
  }
}
