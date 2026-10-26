import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustBadges } from './components/TrustBadges';
import { ServicesSection } from './components/ServicesSection';
import { EnergyCalculator } from './components/EnergyCalculator';
import { ProcessSection } from './components/ProcessSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationMapSection } from './components/LocationMapSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CinematicWorldBackground } from './components/CinematicWorldBackground';
import { Language, CalculationResult } from './types';
import { BUSINESS_INFO } from './data/translations';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Aerotermia & Suelo Radiante');
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCalculationResult = (result: CalculationResult) => {
    setCalculationResult(result);
    setSelectedService(result.recommendedSystem);
  };

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Cinematic World Background with Atmospheric Mediterranean Air & Motion */}
      <CinematicWorldBackground />

      {/* Top Fixed Header with Generous Breathing Room */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenContactModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Content Flow over Cinematic Background */}
      <main className="relative z-10 flex-1">
        <HeroSection
          lang={lang}
          onOpenContactModal={() => setIsQuoteModalOpen(true)}
        />

        <TrustBadges lang={lang} />

        <ServicesSection
          lang={lang}
          onSelectService={handleSelectService}
        />

        <EnergyCalculator
          lang={lang}
          onSelectResult={handleCalculationResult}
        />

        <ProcessSection lang={lang} />

        <GallerySection lang={lang} />

        <TestimonialsSection lang={lang} />

        <LocationMapSection lang={lang} />

        <FaqSection lang={lang} />

        <ContactSection
          lang={lang}
          prefilledService={selectedService}
          prefilledCalculation={calculationResult}
        />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer lang={lang} />
      </div>

      {/* Modal Drawer */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        lang={lang}
        initialService={selectedService}
      />

      {/* Mobile Floating Quick Action Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 sm:hidden">
        <a
          href={`tel:${BUSINESS_INFO.phonePrimary}`}
          className="w-13 h-13 rounded-full bg-slate-900/90 border border-cyan-400/50 text-cyan-400 flex items-center justify-center shadow-2xl backdrop-blur-md active:scale-95 transition-transform"
          aria-label="Llamar a BCN Clima"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hola%20BCN%20Clima`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 active:scale-95 transition-transform"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
