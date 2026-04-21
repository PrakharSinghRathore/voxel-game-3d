import * as THREE from 'three';
import { DAY_CYCLE_MS } from '../world/constants';

// ═══════════════════════════════
// DAY/NIGHT CYCLE — Realistic sun/moon + lighting
// ═══════════════════════════════

export class DayNightCycle {
  private sunLight: THREE.DirectionalLight;
  private ambientLight: THREE.AmbientLight;
  private hemisphereLight: THREE.HemisphereLight;
  private sunDirection: THREE.Vector3 = new THREE.Vector3(0, 1, 0);
  private elapsed: number = 0;

  constructor(scene: THREE.Scene) {
    // Main directional sunlight
    this.sunLight = new THREE.DirectionalLight(0xFFF5E0, 1.5);
    this.sunLight.position.set(50, 100, 30);
    scene.add(this.sunLight);

    // Ambient light (sky light contribution)
    this.ambientLight = new THREE.AmbientLight(0x8090C0, 0.4);
    scene.add(this.ambientLight);

    // Hemisphere light (sky above, ground below) for natural fill
    this.hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x444422, 0.5);
    scene.add(this.hemisphereLight);
  }

  update(dt: number): void {
    this.elapsed += dt * 1000;
    const cycleProgress = (this.elapsed % DAY_CYCLE_MS) / DAY_CYCLE_MS;
    const sunAngle = cycleProgress * Math.PI * 2;

    // Sun position - rises in east, sets in west
    const sunX = Math.cos(sunAngle) * 100;
    const sunY = Math.sin(sunAngle) * 100;
    const sunZ = 30; // Slight offset for more interesting shadows
    this.sunLight.position.set(sunX, sunY, sunZ);
    this.sunDirection.set(sunX, sunY, sunZ).normalize();

    const sunHeight = Math.sin(sunAngle);

    if (sunHeight > 0.3) {
      // Full daylight
      this.sunLight.color.setHex(0xFFFAF0);
      this.sunLight.intensity = 1.5;
      this.ambientLight.color.setHex(0x8090C0);
      this.ambientLight.intensity = 0.4;
      this.hemisphereLight.color.setHex(0x87CEEB);
      this.hemisphereLight.groundColor.setHex(0x444422);
      this.hemisphereLight.intensity = 0.5;
    } else if (sunHeight > 0.1) {
      // Morning/evening - warm light
      const t = (sunHeight - 0.1) / 0.2;
      this.sunLight.color.lerpColors(new THREE.Color(0xFF8C00), new THREE.Color(0xFFFAF0), t);
      this.sunLight.intensity = 0.8 + t * 0.7;
      this.ambientLight.intensity = 0.2 + t * 0.2;
      this.hemisphereLight.intensity = 0.3 + t * 0.2;
    } else if (sunHeight > 0.0) {
      // Golden hour - very warm orange light
      const t = sunHeight / 0.1;
      this.sunLight.color.lerpColors(new THREE.Color(0xE65100), new THREE.Color(0xFF8C00), t);
      this.sunLight.intensity = 0.5 + t * 0.3;
      this.ambientLight.color.lerpColors(new THREE.Color(0x1A237E), new THREE.Color(0x8090C0), t);
      this.ambientLight.intensity = 0.1 + t * 0.1;
      this.hemisphereLight.color.lerpColors(new THREE.Color(0xFF6F00), new THREE.Color(0x87CEEB), t);
      this.hemisphereLight.intensity = 0.15 + t * 0.15;
    } else if (sunHeight > -0.1) {
      // Sunset - deep orange/red
      const t = (sunHeight + 0.1) / 0.1;
      this.sunLight.color.lerpColors(new THREE.Color(0x1A237E), new THREE.Color(0xE65100), t);
      this.sunLight.intensity = 0.1 + t * 0.4;
      this.ambientLight.color.lerpColors(new THREE.Color(0x0D1B2A), new THREE.Color(0x1A237E), t);
      this.ambientLight.intensity = 0.05 + t * 0.05;
      this.hemisphereLight.color.lerpColors(new THREE.Color(0x1A1A3E), new THREE.Color(0xFF6F00), t);
      this.hemisphereLight.intensity = 0.05 + t * 0.1;
    } else {
      // Night - moonlight (cool blue)
      this.sunLight.color.setHex(0x4466AA);
      this.sunLight.intensity = 0.15;
      this.ambientLight.color.setHex(0x0D1B2A);
      this.ambientLight.intensity = 0.05;
      this.hemisphereLight.color.setHex(0x111133);
      this.hemisphereLight.groundColor.setHex(0x111111);
      this.hemisphereLight.intensity = 0.05;
    }
  }

  getSunDirection(): THREE.Vector3 { return this.sunDirection; }
  getDayProgress(): number { return (this.elapsed % DAY_CYCLE_MS) / DAY_CYCLE_MS; }
  getSunHeight(): number { return this.sunDirection.y; }
}
