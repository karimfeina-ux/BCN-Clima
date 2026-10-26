import React, { useEffect, useState } from 'react';

interface BackgroundImage {
  url: string;
  title: string;
  location: string;
  tag: string;
}

const BUSINESS_PHOTOS: BackgroundImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=85',
    title: 'Climatización & Unidades Inverter',
    location: 'Terrassa • Barri Segle XX',
    tag: 'Aire Acondicionado'
  },
  {
    url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1920&q=85',
    title: 'Bomba de Calor Aerotérmica Monobloc',
    location: 'Terrassa • Can Roca',
    tag: 'Aerotermia A+++'
  },
  {
    url: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=1920&q=85',
    title: 'Climatización por Conductos Airzone',
    location: 'Sant Cugat del Vallès',
    tag: 'Zonificación Inteligente'
  },
  {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=85',
    title: 'Caldera de Condensación de Gas',
    location: 'Sabadell • Centre',
    tag: 'Calefacción de Alta Eficiencia'
  },
  {
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=85',
    title: 'Batería Hidráulica y Descalcificador',
    location: 'Terrassa • Les Fonts',
    tag: 'Fontanería & Antical'
  },
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85',
    title: 'Instalación Comercial & VRF Industrial',
    location: 'Terrassa • Parc Vallès',
    tag: 'Sector Terciario'
  }
];

export const ScrollBackgroundShowcase: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let targetProgress = 0;
    let currentProgress = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
    };

    const updateLoop = () => {
      // Smooth lerp easing for silky smooth transitions in both scroll directions
      currentProgress += (targetProgress - currentProgress) * 0.08;
      setScrollProgress(currentProgress);
      animationFrameId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animationFrameId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const totalImages = BUSINESS_PHOTOS.length;
  // Calculate continuous float index based on scroll progress
  const activeFloat = scrollProgress * (totalImages - 1);
  const activeIndex = Math.min(totalImages - 1, Math.floor(activeFloat));
  const nextIndex = Math.min(totalImages - 1, activeIndex + 1);
  const blendFactor = activeFloat - activeIndex;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Connected Business Photos with Scroll Interpolation */}
      {BUSINESS_PHOTOS.map((photo, index) => {
        // Distance from current scroll position
        const dist = Math.abs(activeFloat - index);
        // Calculate opacity based on proximity to active scroll point
        let opacity = 0;
        if (dist <= 1) {
          opacity = 1 - dist;
        }

        // Smooth subtle pan & scale transformation tied to scroll position
        const delta = activeFloat - index;
        const scale = 1.05 + delta * 0.03;
        const translateY = delta * -25; // Gentle parallax vertical movement

        return (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-150 ease-out will-change-transform"
            style={{
              opacity: Math.max(0, Math.min(1, opacity)),
              transform: `scale(${scale}) translateY(${translateY}px)`
            }}
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.1] saturate-[0.85]"
              loading={index <= 2 ? 'eager' : 'lazy'}
            />
          </div>
        );
      })}

      {/* Dark Ambient Gradient Overlays for High Legibility & Professional Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06080F]/90 via-[#070A12]/85 to-[#06080F]/92 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#06080F]/50 to-[#06080F]/95" />

      {/* Subtle Floating Photo Caption Tracker at Bottom Left (shows current business project as you scroll) */}
      <div className="hidden md:flex absolute bottom-6 left-6 z-10 items-center gap-3 px-3.5 py-2 rounded-xl bg-slate-950/75 border border-slate-800/80 backdrop-blur-md text-xs font-mono text-slate-300 pointer-events-auto">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 font-bold uppercase text-[10px]">
            {BUSINESS_PHOTOS[activeIndex]?.tag}
          </span>
        </div>
        <span className="text-slate-600">|</span>
        <span className="text-[11px] text-slate-200">
          {BUSINESS_PHOTOS[activeIndex]?.title}
        </span>
        <span className="text-slate-600">|</span>
        <span className="text-[10px] text-slate-400">
          {BUSINESS_PHOTOS[activeIndex]?.location}
        </span>
      </div>

      {/* Subtle Connected Scroll Progress Bar on Right Edge */}
      <div className="hidden lg:flex fixed right-3 top-1/2 -translate-y-1/2 flex-col items-center gap-1.5 z-20 pointer-events-none">
        {BUSINESS_PHOTOS.map((_, i) => {
          const isActive = Math.round(activeFloat) === i;
          return (
            <div
              key={i}
              className={`w-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? 'h-6 bg-cyan-400 shadow-sm shadow-cyan-400/50'
                  : 'h-1.5 bg-slate-700/60'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
