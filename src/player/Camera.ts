import { Player } from './Player';
import { InputManager } from '../engine/InputManager';
import { Renderer } from '../rendering/Renderer';

// ═══════════════════════════════
// CAMERA — Head bob + visual effects
// ═══════════════════════════════

export class Camera {
  private player: Player;
  private input: InputManager;
  private renderer: Renderer;
  private headBobPhase = 0;
  private headBobAmplitude = 0.035;
  private shakeIntensity = 0;

  constructor(player: Player, input: InputManager, renderer: Renderer) {
    this.player = player;
    this.input = input;
    this.renderer = renderer;
  }

  update(dt: number): void {
    const v = this.player.velocity;
    const horizontalSpeed = Math.sqrt(v.x * v.x + v.z * v.z);
    const isMoving = horizontalSpeed > 0.5;

    if (isMoving && (this.player.onGround || this.player.isSwimming)) {
      const bobSpeed = this.player.isSprinting ? 11 : 8;
      this.headBobPhase += dt * bobSpeed;
      const bobY = Math.sin(this.headBobPhase) * this.headBobAmplitude;
      const bobX = Math.cos(this.headBobPhase * 0.5) * this.headBobAmplitude * 0.4;
      const eye = this.player.getEyePosition();
      this.renderer.setMainCameraPosition(eye.x + bobX, eye.y + bobY, eye.z);
    }

    // Decay shake
    this.shakeIntensity *= 0.9;
  }

  addShake(intensity: number): void {
    this.shakeIntensity = Math.min(this.shakeIntensity + intensity, 0.3);
  }
}
