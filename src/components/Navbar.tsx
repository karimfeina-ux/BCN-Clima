import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, BUSINESS_INFO } from '../data/translations';
import { Language } from '../types';
import { Phone, Menu, X, Globe, ThermometerSnowflake } from 'lucide-react';

interface Props {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<Props> = ({ lang, onLanguageChange, onOpenContactModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicios', label: t.services },
    { href: '#calculadora', label: t.calculator },
    { href: '#metodologia', label: t.process },
    { href: '#proyectos', label: t.gallery },
    { href: '#opiniones', label: t.reviews },
    { href: '#ubicacion', label: t.location },
    { href: '#faq', label: t.faq }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#091120]/90 backdrop-blur-xl border-b border-white/10 shadow-xl py-4 sm:py-5'
          : 'bg-[#091120]/70 backdrop-blur-md border-b border-white/5 py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Logo with generous spacing */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform">
              <ThermometerSnowflake className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-white">
                  BCN<span className="text-cyan-400">CLIMA</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-cyan-950/80 border border-cyan-700/60 text-cyan-300">
                  RITE
                </span>
              </div>
              <span className="text-[11px] text-slate-300 -mt-0.5 hidden sm:block">
                Terrassa • Barcelona
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with generous breathing room */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-colors tracking-wide py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Bar (Language Switcher, Call, Quote) */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0">
            {/* 3-Language Toggle: ES | CA | EN */}
            <div className="flex items-center bg-slate-900/90 border border-slate-700/70 rounded-xl p-1 text-xs font-mono shadow-sm">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1.5" />
              {(['es', 'ca', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => onLanguageChange(l)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase transition-colors cursor-pointer ${
                    lang === l
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Direct Call Phone Button */}
            <a
              href={`tel:${BUSINESS_INFO.phonePrimary}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-100 text-xs font-bold transition-colors font-mono shadow-sm"
              title="Llamar directamente a BCN Clima"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{BUSINESS_INFO.phoneDirect}</span>
            </a>

            {/* Quote CTA Button */}
            <button
              onClick={onOpenContactModal}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-slate-950 text-xs font-extrabold tracking-wide transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              {t.requestQuote}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2.5 lg:hidden">
            {/* Mobile Language Switch */}
            <div className="flex items-center bg-slate-900/90 border border-slate-700 rounded-xl p-1 text-xs font-mono">
              {(['es', 'ca', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => onLanguageChange(l)}
                  className={`px-2 py-0.5 rounded-md text-[11px] uppercase font-bold ${
                    lang === l ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phonePrimary}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400"
              aria-label="Llamar"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#091120]/98 border-b border-white/10 px-6 py-6 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/80"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phonePrimary}`}
                className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 text-center text-xs font-bold text-white flex items-center justify-center gap-2 font-mono"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{BUSINESS_INFO.phonePrimary}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 text-center text-xs font-extrabold uppercase tracking-wider shadow-lg"
              >
                {t.requestQuote}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
