import { Player } from './Player';
import { InputManager } from '../engine/InputManager';
import { Renderer } from '../rendering/Renderer';

export class Camera {
  private player: Player;
  private input: InputManager;
  private renderer: Renderer;
  private headBobPhase = 0;
  private headBobAmplitude = 0.04;

  constructor(player: Player, input: InputManager, renderer: Renderer) {
    this.player = player; this.input = input; this.renderer = renderer;
    const canvas = renderer.getDomElement();
    canvas.addEventListener('click', () => { if (!input.isPointerLocked()) input.requestPointerLock(); });
  }

  update(dt: number): void {
    const v = this.player.velocity;
    const horizontalSpeed = Math.sqrt(v.x * v.x + v.z * v.z);
    const isMoving = horizontalSpeed > 0.5 && this.player.onGround;
    if (isMoving) {
      const bobSpeed = this.player.isSprinting ? 12 : 8;
      this.headBobPhase += dt * bobSpeed;
      const bobY = Math.sin(this.headBobPhase) * this.headBobAmplitude;
      const bobX = Math.cos(this.headBobPhase * 0.5) * this.headBobAmplitude * 0.5;
      const eye = this.player.getEyePosition();
      this.renderer.setMainCameraPosition(eye.x + bobX, eye.y + bobY, eye.z);
    }
  }
}
