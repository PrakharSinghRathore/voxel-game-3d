import * as THREE from 'three';

// ═══════════════════════════════
// RENDERER — Three.js scene setup
// Dual scene: main + weapon camera
// ═══════════════════════════════

export class Renderer {
  renderer: THREE.WebGLRenderer;
  mainScene: THREE.Scene;
  mainCamera: THREE.PerspectiveCamera;
  weaponScene: THREE.Scene;
  weaponCamera: THREE.PerspectiveCamera;

  constructor() {
    // Main scene
    this.mainScene = new THREE.Scene();
    this.mainCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 400);

    // Weapon scene (rendered on top)
    this.weaponScene = new THREE.Scene();
    this.weaponCamera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.05, 20);

    // WebGL renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.autoClear = false;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;

    // Handle resize
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.mainCamera.aspect = w / h;
    this.mainCamera.updateProjectionMatrix();
    this.weaponCamera.aspect = w / h;
    this.weaponCamera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  getDomElement(): HTMLCanvasElement {
    return this.renderer.domElement;
  }

  render(): void {
    this.renderer.clear();
    this.renderer.render(this.mainScene, this.mainCamera);
    this.renderer.clearDepth();
    this.renderer.render(this.weaponScene, this.weaponCamera);
  }

  setMainCameraPosition(x: number, y: number, z: number): void {
    this.mainCamera.position.set(x, y, z);
  }

  setMainCameraRotation(yaw: number, pitch: number): void {
    this.mainCamera.rotation.order = 'YXZ';
    this.mainCamera.rotation.y = yaw;
    this.mainCamera.rotation.x = pitch;
  }

  setFOV(fov: number): void {
    this.mainCamera.fov = fov;
    this.mainCamera.updateProjectionMatrix();
  }

  destroy(): void {
    this.renderer.dispose();
    window.removeEventListener('resize', this.onResize.bind(this));
  }
}
