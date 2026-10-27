import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Cookie, Check } from 'lucide-react';

interface Props {
  lang: Language;
  onOpenLegal: (tab: 'privacy' | 'legal' | 'cookies') => void;
}

export const CookieBanner: React.FC<Props> = ({ lang, onOpenLegal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bcn_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bcn_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:max-w-md z-40 p-4 rounded-2xl bg-[#090F1B]/95 border border-white/10 backdrop-blur-xl shadow-2xl text-xs text-slate-300 flex flex-col gap-3"
      role="region"
      aria-label="Consentiment de cookies"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center shrink-0 text-cyan-400 mt-0.5">
          <Cookie className="w-4 h-4" />
        </div>
        <p className="leading-relaxed text-[11px] sm:text-xs">
          {lang === 'ca'
            ? 'Utilitzem cookies tècniques per garantir el funcionament del lloc i desar el teu idioma preferit.'
            : lang === 'en'
            ? 'We use essential technical cookies to ensure site functionality and save your preferred language.'
            : 'Utilizamos cookies técnicas para garantizar el funcionamiento del sitio y guardar su idioma preferido.'}{' '}
          <button
            onClick={() => onOpenLegal('cookies')}
            className="text-cyan-400 hover:underline font-semibold cursor-pointer"
          >
            {lang === 'ca' ? 'Més informació' : lang === 'en' ? 'More information' : 'Más información'}
          </button>
        </p>
      </div>

      <div className="flex items-center justify-end gap-2 pt-1 border-t border-slate-800">
        <button
          onClick={() => onOpenLegal('cookies')}
          className="px-3 py-1.5 rounded-lg text-[11px] font-medium text-slate-400 hover:text-white cursor-pointer"
        >
          {lang === 'ca' ? 'Configurar' : lang === 'en' ? 'Settings' : 'Configurar'}
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-[11px] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Check className="w-3.5 h-3.5" />
          <span>{lang === 'ca' ? 'Acceptar' : lang === 'en' ? 'Accept' : 'Aceptar'}</span>
        </button>
      </div>
    </div>
  );
};
