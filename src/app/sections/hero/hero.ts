import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  viewChild,
} from '@angular/core';

interface HeroStat {
  value: string;
  label: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
}

interface TrailPoint {
  x: number;
  y: number;
  life: number;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly destroyRef = inject(DestroyRef);
  private readonly particleCanvas = viewChild<HTMLCanvasElement>('particles');
  private readonly trailCanvas = viewChild<HTMLCanvasElement>('trail');
  private readonly cta = viewChild<HTMLAnchorElement>('cta');

  protected readonly stats: HeroStat[] = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '8+', label: 'Years of Expertise' },
    { value: '99%', label: 'On-time Delivery' },
  ];

  private frame = 0;
  private particles: Particle[] = [];
  private trail: TrailPoint[] = [];
  private ctaActive = false;
  private reduceMotion = false;

  constructor() {
    afterNextRender(() => this.start());
    this.destroyRef.onDestroy(() => cancelAnimationFrame(this.frame));
  }

  protected onCtaEnter(): void {
    this.ctaActive = true;
  }

  protected onCtaLeave(): void {
    this.ctaActive = false;
  }

  protected onCtaMove(event: PointerEvent): void {
    const canvas = this.trailCanvas();
    const button = this.cta();
    if (!canvas || !button) {
      return;
    }

    const rect = button.getBoundingClientRect();
    this.trail.push({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      life: 1,
    });
    if (this.trail.length > 28) {
      this.trail.shift();
    }
  }

  private start(): void {
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (this.reduceMotion) {
      return;
    }

    this.resizeCanvases();
    this.seedParticles();
    const onResize = () => {
      this.resizeCanvases();
      this.seedParticles();
    };
    window.addEventListener('resize', onResize);
    this.destroyRef.onDestroy(() => window.removeEventListener('resize', onResize));
    this.tick();
  }

  private resizeCanvases(): void {
    const particleEl = this.particleCanvas();
    if (particleEl) {
      const parent = particleEl.parentElement;
      if (parent) {
        this.fitCanvas(particleEl, parent.clientWidth, parent.clientHeight);
      }
    }

    const trailEl = this.trailCanvas();
    const button = this.cta();
    if (trailEl && button) {
      this.fitCanvas(trailEl, button.clientWidth, button.clientHeight);
    }
  }

  private fitCanvas(canvas: HTMLCanvasElement, width: number, height: number): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  private seedParticles(): void {
    const canvas = this.particleCanvas();
    if (!canvas) {
      return;
    }

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const count = Math.round(Math.min(110, Math.max(48, (width * height) / 12000)));
    const colors = ['#1b4dff', '#38bdf8', '#7c3aed', '#a78bfa', '#60a5fa'];
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0.12 + Math.random() * 0.28,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.8 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }

  private tick = (): void => {
    this.drawParticles();
    this.drawTrail();
    this.frame = requestAnimationFrame(this.tick);
  };

  private drawParticles(): void {
    const canvas = this.particleCanvas();
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
      return;
    }

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    ctx.clearRect(0, 0, width, height);

    for (const particle of this.particles) {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x > width + 12) {
        particle.x = -12;
      } else if (particle.x < -12) {
        particle.x = width + 12;
      }
      if (particle.y > height + 12) {
        particle.y = -12;
      } else if (particle.y < -12) {
        particle.y = height + 12;
      }
    }

    for (let i = 0; i < this.particles.length; i++) {
      const a = this.particles[i];
      for (let j = i + 1; j < this.particles.length; j++) {
        const b = this.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 128) {
          const fade = 1 - dist / 128;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.22 * fade})`;
          ctx.lineWidth = 1;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const particle of this.particles) {
      ctx.beginPath();
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = 0.7;
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  private drawTrail(): void {
    const canvas = this.trailCanvas();
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
      return;
    }

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    ctx.clearRect(0, 0, width, height);

    this.trail = this.trail
      .map((point) => ({ ...point, life: point.life - 0.045 }))
      .filter((point) => point.life > 0);

    if (!this.ctaActive && this.trail.length === 0) {
      return;
    }

    for (let i = 1; i < this.trail.length; i++) {
      const prev = this.trail[i - 1];
      const point = this.trail[i];
      ctx.beginPath();
      ctx.strokeStyle = `rgba(125, 211, 252, ${point.life * 0.9})`;
      ctx.lineWidth = 6 * point.life;
      ctx.lineCap = 'round';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 18;
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    }
  }
}
