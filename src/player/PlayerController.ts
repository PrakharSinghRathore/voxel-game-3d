import { Player } from './Player';
import { InputManager } from '../engine/InputManager';
import { Renderer } from '../rendering/Renderer';

export class PlayerController {
  private player: Player;
  private input: InputManager;
  private renderer: Renderer;
  private walkSpeed = 5.0;
  private sprintSpeed = 8.0;
  private swimSpeed = 3.0;
  private mouseSensitivity = 0.002;
  private targetFov = 75;

  constructor(player: Player, input: InputManager, renderer: Renderer) {
    this.player = player; this.input = input; this.renderer = renderer;
  }

  update(dt: number): void {
    if (!this.input.isPointerLocked()) return;
    this.player.yaw -= this.input.getMouseDeltaX() * this.mouseSensitivity;
    this.player.pitch -= this.input.getMouseDeltaY() * this.mouseSensitivity;
    this.player.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, this.player.pitch));
    this.player.isSprinting = this.input.isKeyDown('ShiftLeft') && !this.player.isSwimming;
    const speed = this.player.isSwimming ? this.swimSpeed : this.player.isSprinting ? this.sprintSpeed : this.walkSpeed;
    const forward = { x: -Math.sin(this.player.yaw), y: 0, z: -Math.cos(this.player.yaw) };
    const right = { x: Math.cos(this.player.yaw), y: 0, z: -Math.sin(this.player.yaw) };
    let moveX = 0; let moveZ = 0;
    if (this.input.isKeyDown('KeyW')) { moveX += forward.x; moveZ += forward.z; }
    if (this.input.isKeyDown('KeyS')) { moveX -= forward.x; moveZ -= forward.z; }
    if (this.input.isKeyDown('KeyA')) { moveX -= right.x; moveZ -= right.z; }
    if (this.input.isKeyDown('KeyD')) { moveX += right.x; moveZ += right.z; }
    const len = Math.sqrt(moveX * moveX + moveZ * moveZ);
    if (len > 0) { moveX = (moveX / len) * speed; moveZ = (moveZ / len) * speed; }
    this.player.velocity.x = moveX; this.player.velocity.z = moveZ;
    if (this.input.isKeyDown('Space')) this.player.jump();
    this.targetFov = this.player.isSprinting ? 82 : 75;
    const currentFov = this.renderer.mainCamera.fov;
    this.renderer.setFOV(currentFov + (this.targetFov - currentFov) * dt * 8);
    const eye = this.player.getEyePosition();
    this.renderer.setMainCameraPosition(eye.x, eye.y, eye.z);
    this.renderer.setMainCameraRotation(this.player.yaw, this.player.pitch);
  }
}
