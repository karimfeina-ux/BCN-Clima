import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { ShieldCheck } from 'lucide-react';

interface Props {
  lang: Language;
}

export const ProcessSection: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].process;

  return (
    <section id="metodologia" className="py-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* 5 Simple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {t.steps.map((step, index) => (
            <div
              key={step.num}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-black text-cyan-400 block mb-3">
                  {step.num}
                </span>

                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                {lang === 'ca'
                  ? `Pas ${index + 1} de 5`
                  : lang === 'en'
                  ? `Step ${index + 1} of 5`
                  : `Paso ${index + 1} de 5`}
              </div>
            </div>
          ))}
        </div>

        {/* Clean Commitment Bar */}
        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">
              {lang === 'ca'
                ? 'Garantia de Neteja i Compliment'
                : lang === 'en'
                ? 'Cleanliness & Execution Guarantee'
                : 'Garantía de Limpieza y Cumplimiento'}
            </h4>
            <p className="text-xs text-slate-300">
              {lang === 'ca'
                ? 'Protegim els teus mobles durant el treball, realitzem proves d’estanquitat i deixem l’habitatge perfectament net.'
                : lang === 'en'
                ? 'We protect your furnishings during installation, conduct thorough pressure tests, and leave your home spotless.'
                : 'Protegemos tus muebles durante el trabajo, realizamos pruebas de estanqueidad y dejamos la vivienda perfectamente recogida.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
