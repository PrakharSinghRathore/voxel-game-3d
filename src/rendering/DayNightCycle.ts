import * as THREE from 'three';
import { DAY_CYCLE_MS } from '../world/constants';

export class DayNightCycle {
  private sunLight: THREE.DirectionalLight;
  private ambientLight: THREE.AmbientLight;
  private sunDirection: THREE.Vector3 = new THREE.Vector3(0, 1, 0);
  private elapsed: number = 0;

  constructor(scene: THREE.Scene) {
    this.sunLight = new THREE.DirectionalLight(0xFFF5E0, 1.0);
    this.sunLight.position.set(0, 100, 0);
    scene.add(this.sunLight);
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(this.ambientLight);
  }

  update(dt: number): void {
    this.elapsed += dt * 1000;
    const cycleProgress = (this.elapsed % DAY_CYCLE_MS) / DAY_CYCLE_MS;
    const sunAngle = cycleProgress * Math.PI * 2;
    const sunX = Math.cos(sunAngle) * 100;
    const sunY = Math.sin(sunAngle) * 100;
    this.sunLight.position.set(sunX, sunY, 0);
    this.sunDirection.set(sunX, sunY, 0).normalize();
    const sunHeight = Math.sin(sunAngle);
    if (sunHeight > 0.2) {
      this.sunLight.color.setHex(0xFFF5E0);
      this.sunLight.intensity = 1.0;
      this.ambientLight.intensity = 0.6;
    } else if (sunHeight > -0.1) {
      const t = (sunHeight + 0.1) / 0.3;
      this.sunLight.color.lerpColors(new THREE.Color(0x1A237E), new THREE.Color(0xFF7043), t);
      this.sunLight.intensity = 0.3 + t * 0.7;
      this.ambientLight.intensity = 0.08 + t * 0.52;
    } else {
      this.sunLight.color.setHex(0x1A237E);
      this.sunLight.intensity = 0.1;
      this.ambientLight.intensity = 0.08;
    }
  }

  getSunDirection(): THREE.Vector3 { return this.sunDirection; }
  getDayProgress(): number { return (this.elapsed % DAY_CYCLE_MS) / DAY_CYCLE_MS; }
}
