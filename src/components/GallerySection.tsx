import React, { useState } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { MapPin } from 'lucide-react';

interface Props {
  lang: Language;
}

interface ProjectItem {
  id: string;
  title: string;
  category: 'aerotermia' | 'ac' | 'plumbing';
  location: string;
  image: string;
  badge: string;
  description: string;
}

export const GallerySection: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].gallery;
  const [filter, setFilter] = useState<'all' | 'aerotermia' | 'ac' | 'plumbing'>('all');

  const projects: ProjectItem[] = [
    {
      id: 'proj-1',
      title: 'Aerotermia Monobloc Daikin Altherma 3',
      category: 'aerotermia',
      location: 'Terrassa (Segle XX)',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
      badge: 'COP 4.85 • A+++',
      description: 'Sustitución de caldera de gasóleo por bomba de calor con suelo radiante y ACS.'
    },
    {
      id: 'proj-2',
      title: 'Aire Acondicionado por Conductos Invisibles',
      category: 'ac',
      location: 'Terrassa (Can Roca)',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      badge: 'Airzone',
      description: 'Climatización integral en falso techo con difusores lineales motorizados.'
    },
    {
      id: 'proj-3',
      title: 'Batería Hidráulica y Descalcificador',
      category: 'plumbing',
      location: 'Sabadell (Centre)',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      badge: 'Tratamiento Antical',
      description: 'Instalación de tuberías multicapa PEX y descalcificador para agua de alta dureza.'
    },
    {
      id: 'proj-4',
      title: 'Multi-Split 3x1 Mitsubishi Electric Inverter',
      category: 'ac',
      location: 'Sant Cugat del Vallès',
      image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80',
      badge: 'Silencioso 19dB',
      description: 'Tres unidades interiores con una sola condensadora exterior oculta en patio.'
    },
    {
      id: 'proj-5',
      title: 'Caldera de Condensación Vaillant ecoTEC Plus',
      category: 'plumbing',
      location: 'Terrassa (Les Fonts)',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      badge: 'Rendimiento 108%',
      description: 'Renovación de caldera mural con termostato modulante Wi-Fi y certificado de gas.'
    },
    {
      id: 'proj-6',
      title: 'Climatización VRF Comercial',
      category: 'ac',
      location: 'Terrassa (Polígon Nord)',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      badge: 'Sector Terciario',
      description: 'Instalación en oficinas corporativas con zonificación independiente.'
    }
  ];

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="py-20 relative bg-slate-950/40 backdrop-blur-sm border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-2">
            {t.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Clean Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {(['all', 'aerotermia', 'ac', 'plumbing'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filter === cat
                  ? 'bg-cyan-500 text-slate-950'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'all'
                ? t.allTab
                : cat === 'aerotermia'
                ? t.aerotermiaTab
                : cat === 'ac'
                ? t.acTab
                : t.plumbingTab}
            </button>
          ))}
        </div>

        {/* Clean Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-950/80 text-cyan-300 border border-slate-700">
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-cyan-400 mb-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
