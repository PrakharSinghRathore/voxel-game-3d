import { Player } from './Player';
import { InputManager } from '../engine/InputManager';
import { Renderer } from '../rendering/Renderer';

// ═══════════════════════════════
// PLAYER CONTROLLER — WASD + mouse look
// ═══════════════════════════════

export class PlayerController {
  private player: Player;
  private input: InputManager;
  private renderer: Renderer;
  private walkSpeed = 4.317; // Minecraft walk speed
  private sprintSpeed = 5.612; // Minecraft sprint speed
  private swimSpeed = 2.5;
  private mouseSensitivity = 0.002;
  private targetFov = 75;
  private currentFov = 75;

  constructor(player: Player, input: InputManager, renderer: Renderer) {
    this.player = player;
    this.input = input;
    this.renderer = renderer;

    // Setup pointer lock on canvas click
    const canvas = renderer.getDomElement();
    canvas.addEventListener('click', () => {
      if (!input.isPointerLocked()) {
        input.requestPointerLock();
      }
    });
  }

  update(dt: number): void {
    // Always update camera rotation when pointer is locked
    if (this.input.isPointerLocked()) {
      this.player.yaw -= this.input.getMouseDeltaX() * this.mouseSensitivity;
      this.player.pitch -= this.input.getMouseDeltaY() * this.mouseSensitivity;
      this.player.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, this.player.pitch));
    }

    // Movement input (works when playing state, even without pointer lock for key presses)
    this.player.isSprinting = this.input.isKeyDown('ShiftLeft') && !this.player.isSwimming;
    const speed = this.player.isSwimming ? this.swimSpeed : this.player.isSprinting ? this.sprintSpeed : this.walkSpeed;

    const forward = { x: -Math.sin(this.player.yaw), y: 0, z: -Math.cos(this.player.yaw) };
    const right = { x: Math.cos(this.player.yaw), y: 0, z: -Math.sin(this.player.yaw) };

    let moveX = 0;
    let moveZ = 0;
    if (this.input.isKeyDown('KeyW')) { moveX += forward.x; moveZ += forward.z; }
    if (this.input.isKeyDown('KeyS')) { moveX -= forward.x; moveZ -= forward.z; }
    if (this.input.isKeyDown('KeyA')) { moveX -= right.x; moveZ -= right.z; }
    if (this.input.isKeyDown('KeyD')) { moveX += right.x; moveZ += right.z; }

    const len = Math.sqrt(moveX * moveX + moveZ * moveZ);
    if (len > 0) {
      moveX = (moveX / len) * speed;
      moveZ = (moveZ / len) * speed;
    }

    this.player.velocity.x = moveX;
    this.player.velocity.z = moveZ;

    // Jump / swim up
    if (this.input.isKeyDown('Space')) {
      this.player.jump();
    }

    // Swim down with Shift in water
    if (this.player.isSwimming && this.input.isKeyDown('ShiftLeft')) {
      this.player.dive();
    }

    // FOV change for sprinting
    this.targetFov = this.player.isSprinting ? 82 : 75;
    this.currentFov += (this.targetFov - this.currentFov) * dt * 8;
    this.renderer.setFOV(this.currentFov);

    // Always update camera position and rotation
    const eye = this.player.getEyePosition();
    this.renderer.setMainCameraPosition(eye.x, eye.y, eye.z);
    this.renderer.setMainCameraRotation(this.player.yaw, this.player.pitch);
  }
}
