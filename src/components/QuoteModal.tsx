import React, { useState } from 'react';
import { TRANSLATIONS, BUSINESS_INFO } from '../data/translations';
import { Language } from '../types';
import { X, Send, CheckCircle2, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialService?: string;
}

export const QuoteModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  initialService = 'Aerotermia & Suelo Radiante'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [town, setTown] = useState('Terrassa');
  const [service, setService] = useState(initialService);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppDirect = () => {
    const text = `Hola BCN Clima,\nSolicitud de presupuesto:\n- Servicio: ${service}\n- Nombre: ${name || 'Cliente'}\n- Población: ${town}\n- Teléfono: ${phone}\n- Notas: ${notes || 'Consulta'}`;
    return `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-5 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              {lang === 'en' ? 'Quote Request Received' : '¡Presupuesto Solicitado!'}
            </h3>
            <p className="text-xs text-slate-300">
              {lang === 'en'
                ? 'We will contact you shortly to coordinate your assessment.'
                : 'Nos pondremos en contacto contigo hoy mismo para coordinar el estudio.'}
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppDirect()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white text-xs font-semibold"
              >
                {lang === 'en' ? 'Close' : 'Cerrar'}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'en' ? 'Official RITE Contractor' : 'Instalador Oficial RITE'}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              {lang === 'en' ? 'Request a Free Quote' : 'Pedir Presupuesto'}
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              {lang === 'en'
                ? 'Direct response within 2 business hours.'
                : 'Respuesta rápida en menos de 2 horas laborables.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  {lang === 'en' ? 'Full Name *' : 'Nombre *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {lang === 'en' ? 'Phone *' : 'Teléfono *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="600 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {lang === 'en' ? 'City / Town *' : 'Población *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  {lang === 'en' ? 'Service' : 'Servicio'}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                >
                  <option value="Aerotermia & Suelo Radiante">Aerotermia & Suelo Radiante</option>
                  <option value="Aire Acondicionado Split">Aire Acondicionado Split</option>
                  <option value="Aire Acondicionado Conductos">Aire Acondicionado Conductos</option>
                  <option value="Caldera Gas Condensación">Caldera Gas Condensación</option>
                  <option value="Fontanería / Descalcificador">Fontanería / Descalcificador</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  {lang === 'en' ? 'Notes (optional)' : 'Notas (opcional)'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Metros aproximados, estancias..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Submit Request' : 'Enviar Solicitud'}</span>
              </button>
            </form>

            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <a
                href={`tel:${BUSINESS_INFO.phonePrimary}`}
                className="hover:text-cyan-400 flex items-center gap-1 font-mono text-xs"
              >
                <Phone className="w-3 h-3 text-cyan-400" />
                <span>930 256 239</span>
              </a>
              <a
                href={getWhatsAppDirect()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 flex items-center gap-1 text-xs"
              >
                <MessageCircle className="w-3 h-3 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
