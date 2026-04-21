export class PostProcess {
  private overlay: HTMLDivElement;
  private vignetteStrength: number = 0.3;

  constructor() {
    this.overlay = document.createElement('div');
    this.overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10;background:radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)';
    document.body.appendChild(this.overlay);
  }

  setVignetteStrength(strength: number): void {
    this.vignetteStrength = strength;
    const alpha = strength * 0.6;
    this.overlay.style.background = `radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,${alpha}) 100%)`;
  }

  fadeIn(duration: number, callback?: () => void): void {
    this.overlay.style.transition = `background ${duration}ms`;
    this.overlay.style.background = 'rgba(0,0,0,1)';
    if (callback) setTimeout(callback, duration);
  }

  fadeOut(duration: number, callback?: () => void): void {
    this.overlay.style.transition = `background ${duration}ms`;
    const alpha = this.vignetteStrength * 0.6;
    this.overlay.style.background = `radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,${alpha}) 100%)`;
    if (callback) setTimeout(callback, duration);
  }

  destroy(): void { document.body.removeChild(this.overlay); }
}
