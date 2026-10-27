import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';

interface CinematicScene {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  location: string;
  accent: string;
}

const getCinematicScenes = (lang: Language): CinematicScene[] => [
  {
    id: 'aerotermia-villa',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    title: lang === 'ca' ? 'Aerotèrmia & Confort Sostenible' : lang === 'en' ? 'Aerothermal & Sustainable Comfort' : 'Aerotermia & Confort Sostenible',
    subtitle: lang === 'ca' ? 'Habitatge unifamiliar amb climatització invisible i terra radiant' : lang === 'en' ? 'Detached home with concealed HVAC & underfloor heating' : 'Vivienda unifamiliar con climatización invisible y suelo radiante',
    location: lang === 'en' ? 'Terrassa • Barcelona Region' : 'Terrassa • Vallès Occidental',
    accent: '#38BDF8'
  },
  {
    id: 'ducted-minimal',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
    title: lang === 'ca' ? 'Climatització per Conductes Airzone' : lang === 'en' ? 'Airzone Concealed Ducted AC' : 'Climatización por Conductos Airzone',
    subtitle: lang === 'ca' ? 'Difusors lineals motoritzats integrats en arquitectura moderna' : lang === 'en' ? 'Motorized linear diffusers integrated into modern architecture' : 'Difusores lineales motorizados integrados en arquitectura moderna',
    location: 'Sant Cugat del Vallès',
    accent: '#06B6D4'
  },
  {
    id: 'heat-pump-exterior',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85',
    title: lang === 'ca' ? 'Integració Arquitectònica d’Alta Eficiència' : lang === 'en' ? 'High-Efficiency Architectural Integration' : 'Integración Arquitectónica de Alta Eficiencia',
    subtitle: lang === 'ca' ? 'Bombes de calor Daikin & Mitsubishi en terrassa exterior' : lang === 'en' ? 'Daikin & Mitsubishi heat pumps installed on exterior terrace' : 'Bombas de calor Daikin & Mitsubishi en terraza exterior',
    location: 'Terrassa • Can Roca',
    accent: '#10B981'
  },
  {
    id: 'copper-precision',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85',
    title: lang === 'ca' ? 'Enginyeria Hidràulica i Calefacció' : lang === 'en' ? 'Hydronic Engineering & Heating' : 'Ingeniería Hidráulica y Calefacción',
    subtitle: lang === 'ca' ? 'Bateries de coure soldades a mà i calderes de condensació' : lang === 'en' ? 'Hand-welded copper pipework and condensing boilers' : 'Baterías de cobre soldadas a mano y calderas de condensación',
    location: 'Sabadell • Centre',
    accent: '#F59E0B'
  },
  {
    id: 'water-clarity',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000&q=85',
    title: lang === 'ca' ? 'Tractament d’Aigua & Descalcificadors' : lang === 'en' ? 'Water Treatment & Softeners' : 'Tratamiento de Agua & Descalcificadores',
    subtitle: lang === 'ca' ? 'Eliminació total de calç i sistemes d’osmosi pura directa' : lang === 'en' ? 'Total limescale elimination and direct reverse osmosis' : 'Eliminación total de cal y sistemas de osmosis pura directa',
    location: 'Terrassa • Les Fonts',
    accent: '#0284C7'
  },
  {
    id: 'twilight-horizon',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
    title: lang === 'ca' ? 'Confort Climàtic els 365 Dies' : lang === 'en' ? 'Climate Comfort 365 Days a Year' : 'Confort Climático los 365 Días',
    subtitle: lang === 'ca' ? 'Manteniment oficial RITE i cobertura a tot el Vallès i Barcelona' : lang === 'en' ? 'Official RITE maintenance and coverage across Barcelona' : 'Mantenimiento oficial RITE y cobertura en toda Barcelona',
    location: lang === 'en' ? 'Terrassa & Greater Barcelona' : 'Terrassa & Área Metropolitana',
    accent: '#6366F1'
  }
];

interface Props {
  lang?: Language;
}

export const CinematicWorldBackground: React.FC<Props> = ({ lang = 'ca' }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scenes = getCinematicScenes(lang);

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

    const numParticles = 18;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.2 + Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.25,
        alpha: 0.12 + Math.random() * 0.2,
        pulseSpeed: 0.006 + Math.random() * 0.01
      });
    }

    let frameId: number;
    let time = 0;

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle luminous ambient motes (gentle clean air flow)
      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        p.x += p.vx + Math.sin(time + i) * 0.15;
        p.y += p.vy;

        // Wrap around
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = p.alpha + Math.sin(time * 1.5 + i) * 0.05;

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

  const total = scenes.length;
  const floatIndex = scrollProgress * (total - 1);
  const activeIdx = Math.min(total - 1, Math.floor(floatIndex));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Cinematic Photographic Landscapes */}
      {scenes.map((scene, i) => {
        const dist = Math.abs(floatIndex - i);
        let opacity = 0;
        if (dist <= 1.1) {
          opacity = 1 - dist / 1.1;
        }

        const delta = floatIndex - i;
        // Cinematic camera zoom & slow vertical drift following scroll
        const scale = 1.05 + delta * 0.03;
        const translateY = delta * -25;

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
              className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.02] saturate-[1.05]"
              loading={i <= 1 ? 'eager' : 'lazy'}
            />
          </div>
        );
      })}

      {/* 2. Soft Daylight & Mediterranean Twilight Atmospheric Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080E1C]/85 via-[#0A1628]/75 to-[#060A14]/90 backdrop-blur-[1px]" />
      
      {/* Subtle Luminous Highlights - calmed down */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[160px]" />
      <div className="absolute top-1/2 -left-32 w-[450px] h-[450px] bg-cyan-600/08 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-blue-700/08 rounded-full blur-[160px]" />

      {/* 3. Subtle floating particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      {/* 4. Elegant, calm Scene Indicator at Bottom-Left */}
      <div className="hidden md:flex absolute bottom-6 left-8 z-20 items-center gap-3 px-3.5 py-2 rounded-xl bg-slate-950/60 border border-white/08 backdrop-blur-md text-[11px] font-mono text-slate-300 pointer-events-auto">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: scenes[activeIdx]?.accent }}
          />
          <span className="font-semibold text-white">
            {scenes[activeIdx]?.title}
          </span>
        </div>
        <span className="text-slate-600">·</span>
        <span className="text-slate-400 font-sans text-[11px]">
          {scenes[activeIdx]?.subtitle}
        </span>
        <span className="text-slate-600">·</span>
        <span className="text-cyan-400 font-mono text-[10px]">
          {scenes[activeIdx]?.location}
        </span>
      </div>

      {/* 5. Minimalist Scene Progress Bar on Right */}
      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-1.5 z-20 pointer-events-none">
        {scenes.map((s, idx) => {
          const isActive = Math.round(floatIndex) === idx;
          return (
            <div
              key={s.id}
              className={`w-1 rounded-full transition-all duration-300 ${
                isActive
                  ? 'h-5 bg-cyan-400/80'
                  : 'h-1 bg-white/15'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
