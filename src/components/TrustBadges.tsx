import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { Shield, Award, FileCheck2, Cpu } from 'lucide-react';

interface Props {
  lang: Language;
}

export const TrustBadges: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].trust;

  const icons = [
    <FileCheck2 className="w-5 h-5 text-cyan-400" key="1" />,
    <Cpu className="w-5 h-5 text-emerald-400" key="2" />,
    <Award className="w-5 h-5 text-amber-400" key="3" />,
    <Shield className="w-5 h-5 text-blue-400" key="4" />
  ];

  return (
    <section className="py-14 relative bg-slate-950/40 backdrop-blur-sm border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.cards.map((card, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-3">
                {icons[idx]}
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
