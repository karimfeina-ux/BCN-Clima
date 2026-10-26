import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, BUSINESS_INFO } from '../data/translations';
import { Language } from '../types';
import { Phone, Menu, X } from 'lucide-react';

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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focused, essential 4 links to keep the navigation bar clean and uncluttered
  const navLinks = [
    { href: '#servicios', label: t.services },
    { href: '#calculadora', label: t.calculator },
    { href: '#proyectos', label: t.gallery },
    { href: '#contacto', label: t.contact }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080D18]/85 backdrop-blur-xl border-b border-white/10 shadow-lg py-3.5'
          : 'bg-[#080D18]/50 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* 1. Clean, Minimal Wordmark Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
            <span className="text-lg font-bold tracking-tight text-white">
              BCN <span className="font-light text-slate-300">Clima</span>
            </span>
          </a>

          {/* 2. Focused, Essential Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* 3. Lightweight Action Area (Clean Language Toggle + Call + Quote) */}
          <div className="hidden sm:flex items-center gap-5">
            {/* Minimalist Text-Only Language Toggle */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
              {(['ca', 'es', 'en'] as const).map((l, idx) => (
                <React.Fragment key={l}>
                  {idx > 0 && <span className="text-slate-600">·</span>}
                  <button
                    onClick={() => onLanguageChange(l)}
                    className={`uppercase transition-colors cursor-pointer ${
                      lang === l
                        ? 'text-cyan-400 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {l}
                  </button>
                </React.Fragment>
              ))}
            </div>

            {/* Direct Phone Number Link */}
            <a
              href={`tel:${BUSINESS_INFO.phonePrimary}`}
              className="text-xs font-mono font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{BUSINESS_INFO.phoneDirect}</span>
            </a>

            {/* Clean Quote Button */}
            <button
              onClick={onOpenContactModal}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-slate-950 text-xs font-bold transition-all cursor-pointer shadow-sm"
            >
              {t.requestQuote}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Minimalist Language Switcher for Mobile */}
            <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
              {(['ca', 'es', 'en'] as const).map((l, idx) => (
                <React.Fragment key={l}>
                  {idx > 0 && <span className="text-slate-600">·</span>}
                  <button
                    onClick={() => onLanguageChange(l)}
                    className={`uppercase ${lang === l ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}
                  >
                    {l}
                  </button>
                </React.Fragment>
              ))}
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phonePrimary}`}
              className="p-1.5 text-cyan-400"
              aria-label={lang === 'ca' ? 'Trucar' : lang === 'en' ? 'Call' : 'Llamar'}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-200"
              aria-label={lang === 'en' ? 'Menu' : 'Menú'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080D18]/95 border-b border-white/10 px-6 py-5 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-cyan-400 py-1.5 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phonePrimary}`}
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-center text-xs font-bold text-white flex items-center justify-center gap-2 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{BUSINESS_INFO.phonePrimary}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 text-center text-xs font-bold uppercase tracking-wider"
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
