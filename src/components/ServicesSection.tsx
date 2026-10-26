import React, { useState } from 'react';
import { TRANSLATIONS, SERVICES_BY_LANG } from '../data/translations';
import { Language, ServiceItem } from '../types';
import { Flame, Wind, Zap, Droplets, Building2, ShieldCheck, Check, ArrowRight, X, ChevronRight } from 'lucide-react';

interface Props {
  lang: Language;
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<Props> = ({ lang, onSelectService }) => {
  const t = TRANSLATIONS[lang].services;
  const servicesList = SERVICES_BY_LANG[lang];
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Flame': return <Flame className="w-5 h-5 text-orange-400" />;
      case 'Wind': return <Wind className="w-5 h-5 text-cyan-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-blue-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-indigo-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="servicios" className="py-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-2">
            {t.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid (6 clean cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-800/80">
                    {service.efficiencyBadge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>{t.viewSpecs}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>
                    {lang === 'ca' ? 'Pressupost' : lang === 'en' ? 'Quote' : 'Presupuesto'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Details */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
              aria-label={lang === 'ca' ? 'Tancar' : lang === 'en' ? 'Close' : 'Cerrar'}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="font-mono text-xs text-cyan-400 font-bold uppercase block">
                  {selectedService.tag}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              {selectedService.fullDesc}
            </p>

            <div className="mb-5">
              <h4 className="font-mono text-xs font-bold uppercase text-slate-400 mb-2.5">
                {lang === 'ca'
                  ? 'Especificacions Tècniques:'
                  : lang === 'en'
                  ? 'Technical Specifications:'
                  : 'Especificaciones Técnicas:'}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedService.specs.map((spec, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block">{spec.label}</span>
                    <span className="text-xs font-bold text-slate-100">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const s = selectedService.title;
                setSelectedService(null);
                onSelectService(s);
              }}
              className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
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
      )}
    </section>
  );
};
