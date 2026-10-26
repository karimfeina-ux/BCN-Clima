import React from 'react';
import { TRANSLATIONS, REVIEWS_BY_LANG, BUSINESS_INFO } from '../data/translations';
import { Language } from '../types';
import { Star, CheckCircle, ExternalLink, MapPin } from 'lucide-react';

interface Props {
  lang: Language;
}

export const TestimonialsSection: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].reviews;
  const reviews = REVIEWS_BY_LANG[lang];

  return (
    <section id="opiniones" className="py-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-2">
            {t.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            {t.subtitle}
          </p>

          <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="font-mono text-xs font-bold text-white">4.9 / 5.0</span>
            <span className="text-slate-600">|</span>
            <a
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>{t.openMapsReviews}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      <CheckCircle className="w-3 h-3" />
                      Google
                    </span>
                  )}
                </div>

                <span className="font-mono text-xs font-semibold text-cyan-400 mb-2 block">
                  {rev.service}
                </span>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-white text-xs">{rev.author}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{rev.location}</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
