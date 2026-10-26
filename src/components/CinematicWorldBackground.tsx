import React, { useEffect, useRef, useState } from 'react';

interface CinematicScene {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  location: string;
  accent: string;
}

const CINEMATIC_SCENES: CinematicScene[] = [
  {
    id: 'aerotermia-villa',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    title: 'Aerotermia & Confort Sostenible',
    subtitle: 'Vivienda unifamiliar con climatización invisible y suelo radiante',
    location: 'Terrassa • Vallès Occidental',
    accent: '#38BDF8'
  },
  {
    id: 'ducted-minimal',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
    title: 'Climatización por Conductos Airzone',
    subtitle: 'Difusores lineales motorizados integrados en arquitectura moderna',
    location: 'Sant Cugat del Vallès',
    accent: '#06B6D4'
  },
  {
    id: 'heat-pump-exterior',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85',
    title: 'Integración Arquitectónica de Alta Eficiencia',
    subtitle: 'Bombas de calor Daikin & Mitsubishi en terraza exterior',
    location: 'Terrassa • Can Roca',
    accent: '#10B981'
  },
  {
    id: 'copper-precision',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85',
    title: 'Ingeniería Hidráulica y Calefacción',
    subtitle: 'Baterías de cobre soldadas a mano y calderas de condensación',
    location: 'Sabadell • Centre',
    accent: '#F59E0B'
  },
  {
    id: 'water-clarity',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000&q=85',
    title: 'Tratamiento de Agua & Descalcificadores',
    subtitle: 'Eliminación total de cal y sistemas de osmosis pura directa',
    location: 'Terrassa • Les Fonts',
    accent: '#0284C7'
  },
  {
    id: 'twilight-horizon',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
    title: 'Confort Climático los 365 Días',
    subtitle: 'Mantenimiento oficial RITE y cobertura en toda Barcelona',
    location: 'Terrassa & Área Metropolitana',
    accent: '#6366F1'
  }
];

export const CinematicWorldBackground: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 1. Scroll-tracked progress with smooth damping
  useEffect(() => {
    let animId: number;
    let target = 0;
    let current = 0;

    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      target = Math.min(1, Math.max(0, window.scrollY / max));
    };

    const update = () => {
      current += (target - current) * 0.06;
      setScrollProgress(current);
      animId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    animId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  // 2. Ambient Cinematic Air-Particles & Light Streams in Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Subtle floating thermal air currents
    const particles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      pulseSpeed: number;
    }[] = [];

    const numParticles = 40;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.5 + Math.random() * 3,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.3 - Math.random() * 0.5,
        alpha: 0.15 + Math.random() * 0.35,
        pulseSpeed: 0.01 + Math.random() * 0.02
      });
    }

    let frameId: number;
    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle luminous ambient motes (clean air flow)
      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        p.x += p.vx + Math.sin(time + i) * 0.2;
        p.y += p.vy;

        // Wrap around
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = p.alpha + Math.sin(time * 2 + i) * 0.1;

        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
        grad.addColorStop(0, `rgba(56, 189, 248, ${Math.max(0, currentAlpha)})`);
        grad.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const total = CINEMATIC_SCENES.length;
  const floatIndex = scrollProgress * (total - 1);
  const activeIdx = Math.min(total - 1, Math.floor(floatIndex));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Cinematic Photographic Landscapes */}
      {CINEMATIC_SCENES.map((scene, i) => {
        const dist = Math.abs(floatIndex - i);
        let opacity = 0;
        if (dist <= 1.1) {
          opacity = 1 - dist / 1.1;
        }

        const delta = floatIndex - i;
        // Cinematic camera zoom & slow vertical drift following scroll
        const scale = 1.08 + delta * 0.04;
        const translateY = delta * -35;

        return (
          <div
            key={scene.id}
            className="absolute inset-0 transition-opacity duration-300 ease-out will-change-transform"
            style={{
              opacity: Math.max(0, Math.min(1, opacity)),
              transform: `scale(${scale}) translateY(${translateY}px)`
            }}
          >
            <img
              src={scene.image}
              alt={scene.title}
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05] saturate-[1.1]"
              loading={i <= 1 ? 'eager' : 'lazy'}
            />
          </div>
        );
      })}

      {/* 2. Soft Daylight & Twilight Atmospheric Gradient (NOT pitch black!) */}
      {/* Deep sky azure to Mediterranean twilight gradient with rich blue tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#091120]/75 via-[#0A1628]/65 to-[#080E1C]/80 backdrop-blur-[1px]" />
      
      {/* Luminous Sun & Sky Highlights */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-sky-400/20 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 -left-32 w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[160px]" />

      {/* 3. Subtle floating particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
      />

      {/* 4. Cinematic Scene HUD Badge at Bottom-Left */}
      <div className="hidden md:flex absolute bottom-8 left-8 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-xl text-xs font-mono text-slate-200 pointer-events-auto shadow-2xl">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full animate-ping"
            style={{ backgroundColor: CINEMATIC_SCENES[activeIdx]?.accent }}
          />
          <span className="font-bold uppercase tracking-wider text-white text-[11px]">
            {CINEMATIC_SCENES[activeIdx]?.title}
          </span>
        </div>
        <span className="text-slate-600">|</span>
        <span className="text-slate-300 text-[11px] font-sans">
          {CINEMATIC_SCENES[activeIdx]?.subtitle}
        </span>
        <span className="text-slate-600">|</span>
        <span className="text-cyan-400 font-mono text-[10px]">
          {CINEMATIC_SCENES[activeIdx]?.location}
        </span>
      </div>

      {/* 5. Connected Scene Progress Bar on Right */}
      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-2 z-20 pointer-events-none">
        {CINEMATIC_SCENES.map((s, idx) => {
          const isActive = Math.round(floatIndex) === idx;
          return (
            <div
              key={s.id}
              className={`w-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? 'h-7 bg-cyan-400 shadow-md shadow-cyan-400/50'
                  : 'h-1.5 bg-white/20'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
