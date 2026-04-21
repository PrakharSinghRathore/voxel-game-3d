// ═══════════════════════════════
// INPUT MANAGER — Keyboard/mouse unified input
// ═══════════════════════════════

export class InputManager {
  private keys: Map<string, boolean> = new Map();
  private mouseButtons: Map<number, boolean> = new Map();
  private mouseDeltaX: number = 0;
  private mouseDeltaY: number = 0;
  private scrollDelta: number = 0;
  private keyJustPressed: Map<string, boolean> = new Map();
  private canvas: HTMLCanvasElement | null = null;

  init(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;

    document.addEventListener('keydown', (e) => {
      if (!this.keys.get(e.code)) {
        this.keyJustPressed.set(e.code, true);
      }
      this.keys.set(e.code, true);
    });

    document.addEventListener('keyup', (e) => {
      this.keys.set(e.code, false);
    });

    document.addEventListener('mousedown', (e) => {
      this.mouseButtons.set(e.button, true);
    });

    document.addEventListener('mouseup', (e) => {
      this.mouseButtons.set(e.button, false);
    });

    document.addEventListener('mousemove', (e) => {
      this.mouseDeltaX += e.movementX;
      this.mouseDeltaY += e.movementY;
    });

    document.addEventListener('wheel', (e) => {
      this.scrollDelta += e.deltaY;
    });

    // Prevent context menu
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  flush(): void {
    this.mouseDeltaX = 0;
    this.mouseDeltaY = 0;
    this.scrollDelta = 0;
    this.keyJustPressed.clear();
  }

  isKeyDown(code: string): boolean {
    return this.keys.get(code) ?? false;
  }

  isKeyJustPressed(code: string): boolean {
    return this.keyJustPressed.get(code) ?? false;
  }

  isMouseButtonDown(button: number): boolean {
    return this.mouseButtons.get(button) ?? false;
  }

  getMouseDeltaX(): number {
    return this.mouseDeltaX;
  }

  getMouseDeltaY(): number {
    return this.mouseDeltaY;
  }

  getScrollDelta(): number {
    return this.scrollDelta;
  }

  isPointerLocked(): boolean {
    return document.pointerLockElement === this.canvas;
  }

  requestPointerLock(): void {
    this.canvas?.requestPointerLock();
  }

  exitPointerLock(): void {
    document.exitPointerLock();
  }

  destroy(): void {
    // Cleanup is handled by garbage collection in browser
  }
}
