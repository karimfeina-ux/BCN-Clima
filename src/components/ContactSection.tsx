import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, BUSINESS_INFO } from '../data/translations';
import { Language, CalculationResult } from '../types';
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface Props {
  lang: Language;
  prefilledService?: string;
  prefilledCalculation?: CalculationResult | null;
}

export const ContactSection: React.FC<Props> = ({
  lang,
  prefilledService,
  prefilledCalculation
}) => {
  const t = TRANSLATIONS[lang].contact;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [town, setTown] = useState('Terrassa');
  const [service, setService] = useState(
    lang === 'ca' ? 'Aerotèrmia & Terra Radiant' : lang === 'en' ? 'Aerothermal & Radiant Floor' : 'Aerotermia & Suelo Radiante'
  );
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledCalculation) {
      setMessage(
        `[Estudio Térmico]\nSuperficie: ${prefilledCalculation.surfaceM2} m²\nInmueble: ${prefilledCalculation.propertyType}\nPotencia estimada: ${prefilledCalculation.requiredFrigorias} frig/h (${prefilledCalculation.requiredKw} kW)\nEquipo sugerido: ${prefilledCalculation.recommendedSystem}\nAhorro: ~${prefilledCalculation.estimatedAnnualSavings} €/año`
      );
    }
  }, [prefilledCalculation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const refNumber = `BCN-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(refNumber);
      setIsSubmitting(false);
    }, 600);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hola BCN Clima,\nMe llamo ${fullName || 'Cliente'}.\nServicio: ${service}\nPoblación: ${town}\nTeléfono: ${phone}\nMensaje: ${message || 'Solicito presupuesto y visita técnica gratuita'}`;
    return `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="py-20 relative bg-slate-950/60 backdrop-blur-sm border-t border-slate-800/60">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct channels & business info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">
                Atención Directa
              </h3>

              {/* Call Direct */}
              <a
                href={`tel:${BUSINESS_INFO.phonePrimary}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Llamar Ahora</span>
                  <span className="text-sm font-bold text-white font-mono">
                    {BUSINESS_INFO.phonePrimary}
                  </span>
                </div>
              </a>

              {/* WhatsApp Direct */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[11px] text-emerald-400 block">WhatsApp 24h</span>
                  <span className="text-sm font-bold text-emerald-300 font-mono">
                    {BUSINESS_INFO.phoneMobile}
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Oficina Central</span>
                  <span className="text-xs font-semibold text-white">
                    {BUSINESS_INFO.street}, {BUSINESS_INFO.postalCode} {BUSINESS_INFO.city}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Presupuesto gratuito sin compromiso de contratación.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Instaladores oficiales homologados RITE.</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7">
            {submittedRef ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {t.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  {t.successDesc}
                </p>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block text-left text-xs">
                  <div className="font-mono text-slate-400">Referencia: <strong className="text-cyan-400">{submittedRef}</strong></div>
                  <div className="text-slate-300 mt-1">
                    {fullName} • {town} • {service}
                  </div>
                </div>

                <div className="pt-2 flex justify-center gap-2">
                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setFullName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
                  >
                    Nueva consulta
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-semibold text-slate-200 block mb-1">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-200 block mb-1">
                      {t.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="600 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-semibold text-slate-200 block mb-1">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-200 block mb-1">
                      {t.townLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-200 block mb-1">
                    {t.serviceTypeLabel}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                  >
                    {lang === 'ca' ? (
                      <>
                        <option value="Aerotèrmia & Terra Radiant">Aerotèrmia & Terra Radiant</option>
                        <option value="Aire Condicionat Split">Aire Condicionat Split</option>
                        <option value="Aire Condicionat per Conductes">Aire Condicionat per Conductes</option>
                        <option value="Caldera de Condensació Gas">Caldera de Condensació Gas</option>
                        <option value="Fontaneria & Descalcificador">Fontaneria & Descalcificador</option>
                        <option value="Manteniment Oficial RITE">Manteniment Oficial RITE</option>
                      </>
                    ) : lang === 'en' ? (
                      <>
                        <option value="Aerothermal & Radiant Floor">Aerothermal & Radiant Floor</option>
                        <option value="Split Air Conditioning">Split Air Conditioning</option>
                        <option value="Ducted Air Conditioning">Ducted Air Conditioning</option>
                        <option value="Gas Condensing Boiler">Gas Condensing Boiler</option>
                        <option value="Plumbing & Softener">Plumbing & Water Softener</option>
                        <option value="Official RITE Maintenance">Official RITE Maintenance</option>
                      </>
                    ) : (
                      <>
                        <option value="Aerotermia & Suelo Radiante">Aerotermia & Suelo Radiante</option>
                        <option value="Aire Acondicionado Split">Aire Acondicionado Split</option>
                        <option value="Aire Acondicionado Conductos">Aire Acondicionado por Conductos</option>
                        <option value="Caldera Condensación Gas">Caldera Condensación Gas</option>
                        <option value="Fontanería & Descalcificador">Fontanería & Descalcificador</option>
                        <option value="Mantenimiento RITE">Mantenimiento Oficial RITE</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-200 block mb-1">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Metros aproximados, número de habitaciones, vivienda habitual..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? t.sendingBtn : t.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
