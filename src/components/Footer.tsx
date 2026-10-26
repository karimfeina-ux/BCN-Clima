import React from 'react';
import { TRANSLATIONS, BUSINESS_INFO } from '../data/translations';
import { Language } from '../types';
import { ThermometerSnowflake, ShieldCheck, MapPin, Phone, Mail, ArrowUp, ExternalLink } from 'lucide-react';

interface Props {
  lang: Language;
}

export const Footer: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070C] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center">
                <ThermometerSnowflake className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                BCN<span className="text-cyan-400">CLIMA</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.brandDesc}
            </p>
            <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>RITE: {BUSINESS_INFO.authorizedRite}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase font-bold text-slate-200 tracking-wider mb-3">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicios" className="hover:text-cyan-400 transition-colors">
                  {TRANSLATIONS[lang].nav.services}
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-cyan-400 transition-colors">
                  {TRANSLATIONS[lang].nav.calculator}
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-cyan-400 transition-colors">
                  {TRANSLATIONS[lang].nav.process}
                </a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-cyan-400 transition-colors">
                  {TRANSLATIONS[lang].nav.reviews}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan-400 transition-colors">
                  {TRANSLATIONS[lang].nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-mono text-xs uppercase font-bold text-slate-200 tracking-wider mb-3">
              Terrassa
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {BUSINESS_INFO.street}<br />
                  {BUSINESS_INFO.postalCode} {BUSINESS_INFO.city} (Barcelona)
                </span>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phonePrimary}`} className="text-slate-300 hover:text-cyan-400 font-mono">
                  {BUSINESS_INFO.phonePrimary}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-300 hover:text-cyan-400">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>
                    {lang === 'ca'
                      ? 'Fitxa Oficial Google Maps'
                      : lang === 'en'
                      ? 'Official Google Maps'
                      : 'Ficha Oficial Google Maps'}
                  </span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="font-mono text-xs uppercase font-bold text-slate-200 tracking-wider mb-3">
              {t.coverageCities}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {BUSINESS_INFO.serviceAreas.map((city) => (
                <span
                  key={city}
                  className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
        <p className="text-slate-400 text-center sm:text-left">
          © {new Date().getFullYear()} {BUSINESS_INFO.name}. {t.rights}
        </p>

        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs cursor-pointer"
          aria-label={lang === 'ca' ? 'Tornar a dalt' : lang === 'en' ? 'Back to top' : 'Volver arriba'}
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
};
