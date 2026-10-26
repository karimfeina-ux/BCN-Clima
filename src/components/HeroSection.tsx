import React, { useState } from 'react';
import { TRANSLATIONS, BUSINESS_INFO } from '../data/translations';
import { Language } from '../types';
import { ShieldCheck, ArrowRight, MessageCircle, Phone, Star, MapPin, CheckCircle2, Zap, Award, Sparkles } from 'lucide-react';

interface Props {
  lang: Language;
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<Props> = ({ lang, onOpenContactModal }) => {
  const t = TRANSLATIONS[lang].hero;
  const [activeTab, setActiveTab] = useState<'aerotermia' | 'clima' | 'calefaccion'>('aerotermia');

  const showcaseData = {
    aerotermia: {
      title: lang === 'en' ? 'Aerothermal Heat Pump & Radiant Floor' : lang === 'ca' ? 'Aerotèrmia & Terra Radiant' : 'Aerotermia & Suelo Radiante',
      subtitle: lang === 'en' ? 'Sustainable renewable heating, cooling, and hot water' : lang === 'ca' ? 'Calefacció, fred i aigua calenta amb energia renovable' : 'Calefacción, refrigeración y agua caliente con energía renovable',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      badge: 'A+++ • COP 4.85',
      saving: lang === 'en' ? 'Up to 70% energy bill savings' : lang === 'ca' ? 'Fins al 70% d’estalvi elèctric' : 'Hasta un 70% de ahorro eléctrico',
      feature: lang === 'en' ? 'Replaces old gas/oil boilers • Compatible with solar PV' : lang === 'ca' ? 'Substitueix antigues calderes • Compatible amb solar' : 'Sustituye calderas antiguas • Compatible con placas solares',
      location: 'Terrassa • Barri Segle XX'
    },
    clima: {
      title: lang === 'en' ? 'Inverter Split & Concealed Ducted AC' : lang === 'ca' ? 'Aire Condicionat Split & Conductes' : 'Aire Acondicionado Split & Conductos',
      subtitle: lang === 'en' ? 'Whisper-quiet air conditioning with Airzone smart zoning' : lang === 'ca' ? 'Climatització ultra silenciosa amb zonificació Airzone' : 'Climatización ultra silenciosa con control zonificado Airzone',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      badge: '19 dB(A) • SEER 8.7',
      saving: lang === 'en' ? 'Maximum energy efficiency rating' : lang === 'ca' ? 'Màxima classificació energètica' : 'Máxima eficiencia energética A+++',
      feature: lang === 'en' ? 'Wi-Fi smartphone control • Anti-allergen Nanoe-X filters' : lang === 'ca' ? 'Control Wi-Fi mòbil • Filtres purificadors' : 'Control Wi-Fi desde móvil • Filtros purificadores Nanoe-X',
      location: 'Sant Cugat del Vallès'
    },
    calefaccion: {
      title: lang === 'en' ? 'High-Efficiency Condensing Boilers' : lang === 'ca' ? 'Calderes de Condensació de Gas' : 'Calderas de Condensación de Gas',
      subtitle: lang === 'en' ? 'Instant hot water and rapid home heating' : lang === 'ca' ? 'Aigua calenta instantània i màxim confort' : 'Agua caliente instantánea y máximo confort en radiadores',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
      badge: lang === 'ca' ? '108% Rendiment' : lang === 'en' ? '108% Efficiency' : '108% Rendimiento',
      saving: lang === 'en' ? '30% gas consumption reduction' : lang === 'ca' ? '30% menys consum de gas' : '30% menos consumo de gas natural',
      feature: lang === 'en' ? 'Official RITE sealed certificate • Rapid 24h installation' : lang === 'ca' ? 'Butlletí oficial RITE • Instal·lació en 24h' : 'Boletín oficial de gas sellado • Instalación limpia en 1 día',
      location: 'Sabadell • Centre'
    }
  };

  const current = showcaseData[activeTab];

  return (
    <section className="relative pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Clean Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/15 text-xs text-cyan-300 font-mono backdrop-blur-md shadow-md">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{t.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
              <span className="text-cyan-400">{t.titleHighlight}</span>{' '}
              <span>{t.titleRest}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal drop-shadow">
              {t.subtitle}
            </p>

            {/* Address */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-300 font-mono">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{BUSINESS_INFO.street} • 08224 Terrassa</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenContactModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-cyan-500/25"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hola%20BCN%20Clima`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-400/50 text-emerald-200 font-bold text-xs backdrop-blur-md transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{t.ctaWhatsapp}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phonePrimary}`}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 text-slate-100 font-mono text-xs font-bold backdrop-blur-md transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>930 256 239</span>
              </a>
            </div>

            {/* Verified Google Maps Rating Banner */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-300">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div>
                <strong className="text-white font-bold">4.9/5</strong>{' '}
                {lang === 'ca' ? 'a Google Maps • ' : lang === 'en' ? 'on Google Maps • ' : 'en Google Maps • '}
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  {lang === 'ca' ? 'Veure fitxa BCN Clima' : lang === 'en' ? 'View BCN Clima profile' : 'Ver ficha BCN Clima'}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Perfect Real-World Project & Engineering Showcase Card */}
          <div className="lg:col-span-6" id="simulador-3d">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-slate-950/80 backdrop-blur-2xl shadow-2xl flex flex-col">
              {/* Category Tab Switcher - Fully localized across CA, ES, EN */}
              <div className="p-3 bg-slate-900/80 border-b border-white/10 flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => setActiveTab('aerotermia')}
                  className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                    activeTab === 'aerotermia'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {lang === 'ca' ? 'Aerotèrmia' : lang === 'en' ? 'Aerothermal' : 'Aerotermia'}
                </button>
                <button
                  onClick={() => setActiveTab('clima')}
                  className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                    activeTab === 'clima'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {lang === 'ca' ? 'Aire Condicionat' : lang === 'en' ? 'Air Conditioning' : 'Aire Acondicionado'}
                </button>
                <button
                  onClick={() => setActiveTab('calefaccion')}
                  className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                    activeTab === 'calefaccion'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {lang === 'ca' ? 'Calderes' : lang === 'en' ? 'Boilers' : 'Calderas'}
                </button>
              </div>

              {/* Crisp Magazine-Grade Photo of the Installation */}
              <div className="relative h-64 sm:h-72 overflow-hidden group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Floating Badges on Top of Photo */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-md shadow-md">
                    {current.badge}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 text-slate-300 text-xs font-mono border border-white/10 backdrop-blur-md">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{current.location}</span>
                </div>

                {/* Title overlay at bottom of photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">
                    {current.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 drop-shadow">
                    {current.subtitle}
                  </p>
                </div>
              </div>

              {/* Benefits & Action Footer */}
              <div className="p-5 sm:p-6 bg-slate-950/90 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-semibold">{current.saving}</span>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{current.feature}</span>
                  </div>
                </div>

                {/* Direct Action Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>
                      {lang === 'ca'
                        ? 'Garantia Oficial BCN Clima: 5 Anys'
                        : lang === 'en'
                        ? 'Official Warranty: 5 Years'
                        : 'Garantía Oficial BCN Clima: 5 Años'}
                    </span>
                  </div>

                  <button
                    onClick={onOpenContactModal}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                  >
                    <span>
                      {lang === 'ca'
                        ? 'Demanar Pressupost'
                        : lang === 'en'
                        ? 'Request a Quote'
                        : 'Pedir Presupuesto'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Clean Stats with Frosted Glass Look */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-md shadow-lg">
            <span className="font-mono text-2xl sm:text-3xl font-extrabold text-cyan-400 block">
              {t.stat1}
            </span>
            <span className="text-xs text-slate-300 mt-1 block font-medium">
              {t.stat1Sub}
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-md shadow-lg">
            <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400 block">
              {t.stat2}
            </span>
            <span className="text-xs text-slate-300 mt-1 block font-medium">
              {t.stat2Sub}
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-md shadow-lg">
            <span className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400 block">
              {t.stat3}
            </span>
            <span className="text-xs text-slate-300 mt-1 block font-medium">
              {t.stat3Sub}
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-md shadow-lg">
            <span className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-100 block">
              {t.stat4}
            </span>
            <span className="text-xs text-slate-300 mt-1 block font-medium">
              {t.stat4Sub}
            </span>
          </div>
        </div>

        {/* Brand Partners Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-7 sm:gap-10 opacity-75">
          {BUSINESS_INFO.brands.map((b) => (
            <span
              key={b.name}
              className="font-mono text-xs font-bold text-slate-300 tracking-wider hover:text-cyan-400 transition-colors"
            >
              {b.logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
