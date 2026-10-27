import React from 'react';
import { Language } from '../types';
import { BUSINESS_INFO } from '../data/translations';
import { X, ShieldCheck, Lock, FileText, Cookie } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialTab?: 'privacy' | 'legal' | 'cookies';
}

export const LegalModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  initialTab = 'privacy'
}) => {
  const [tab, setTab] = React.useState<'privacy' | 'legal' | 'cookies'>(initialTab);

  React.useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl relative max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-cyan-400">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              {lang === 'ca'
                ? 'Informació Legal & Privacitat'
                : lang === 'en'
                ? 'Legal & Privacy Information'
                : 'Información Legal & Privacidad'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white"
            aria-label={lang === 'ca' ? 'Tancar modal' : lang === 'en' ? 'Close modal' : 'Cerrar modal'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 py-3 border-b border-slate-800/80">
          <button
            onClick={() => setTab('privacy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              tab === 'privacy'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>{lang === 'ca' ? 'Privacitat' : lang === 'en' ? 'Privacy' : 'Privacidad'}</span>
          </button>

          <button
            onClick={() => setTab('legal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              tab === 'legal'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'ca' ? 'Avís Legal & RITE' : lang === 'en' ? 'Legal Notice' : 'Aviso Legal'}</span>
          </button>

          <button
            onClick={() => setTab('cookies')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              tab === 'cookies'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Cookie className="w-3.5 h-3.5" />
            <span>Cookies</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto py-4 space-y-4 text-xs text-slate-300 leading-relaxed pr-1">
          {tab === 'privacy' && (
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm">
                {lang === 'ca'
                  ? 'Política de Privacitat (RGPD / LOPD-GDD)'
                  : lang === 'en'
                  ? 'Privacy Policy (GDPR Compliance)'
                  : 'Política de Privacidad (RGPD / LOPD-GDD)'}
              </h4>
              <p>
                {lang === 'ca'
                  ? `D’acord amb el Reglament General de Protecció de Dades (RGPD UE 2016/679) i la Llei Orgànica 3/2018 (LOPD-GDD), l'informem que les dades personals facilitades mitjançant el formulari de contacte o sol·licitud de pressupost seran tractades per ${BUSINESS_INFO.legalName}, amb domicili a ${BUSINESS_INFO.street}, ${BUSINESS_INFO.postalCode} ${BUSINESS_INFO.city} (Barcelona).`
                  : lang === 'en'
                  ? `In accordance with the EU General Data Protection Regulation (GDPR 2016/679) and Spanish Organic Law 3/2018 (LOPD-GDD), we inform you that any personal details submitted via our contact or quote request forms will be processed by ${BUSINESS_INFO.legalName}, located at ${BUSINESS_INFO.street}, ${BUSINESS_INFO.postalCode} ${BUSINESS_INFO.city} (Barcelona).`
                  : `De conformidad con el Reglamento General de Protección de Datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018 (LOPD-GDD), le informamos que los datos facilitados a través de los formularios serán tratados por ${BUSINESS_INFO.legalName}, con domicilio en ${BUSINESS_INFO.street}, ${BUSINESS_INFO.postalCode} ${BUSINESS_INFO.city} (Barcelona).`}
              </p>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5 font-mono text-[11px]">
                <div><strong className="text-white">Responsable:</strong> {BUSINESS_INFO.name} ({BUSINESS_INFO.legalName})</div>
                <div><strong className="text-white">Finalitat / Purpose:</strong> {lang === 'ca' ? 'Atenció de consultes, visites tècniques i elaboració de pressupostos.' : lang === 'en' ? 'Answering inquiries, technical site visits, and issuing requested quotes.' : 'Atención de consultas, visitas técnicas y elaboración de presupuestos.'}</div>
                <div><strong className="text-white">Legitimació:</strong> {lang === 'ca' ? 'Consentiment exprés de l’usuari en trametre la sol·licitud.' : lang === 'en' ? 'User consent by submitting the inquiry.' : 'Consentimiento expreso del usuario al remitir la solicitud.'}</div>
                <div><strong className="text-white">Email Drets / Rights:</strong> {BUSINESS_INFO.email}</div>
              </div>

              <p>
                {lang === 'ca'
                  ? 'Pot exercir en qualsevol moment els seus drets d’accés, rectificació, supressió, limitació i portabilitat escrivint al nostre correu electrònic acompanyat d’una còpia del seu document d’identitat.'
                  : lang === 'en'
                  ? 'You may exercise your rights of access, rectification, erasure, restriction, and data portability at any time by sending an email to our contact address.'
                  : 'Puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, limitación y portabilidad enviando un correo electrónico a nuestra dirección de contacto.'}
              </p>
            </div>
          )}

          {tab === 'legal' && (
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm">
                {lang === 'ca'
                  ? 'Avís Legal & Registre Homologat RITE'
                  : lang === 'en'
                  ? 'Legal Notice & Official Certifications'
                  : 'Aviso Legal & Registro Homologado RITE'}
              </h4>
              <p>
                {lang === 'ca'
                  ? `Aquest lloc web és titularitat de ${BUSINESS_INFO.name}. Empresa instal·ladora autoritzada en Instal·lacions Tèrmiques en Edificis (RITE) amb registre oficial ${BUSINESS_INFO.authorizedRite} a la Generalitat de Catalunya.`
                  : lang === 'en'
                  ? `This website is owned and operated by ${BUSINESS_INFO.name}. Officially certified HVAC installation enterprise registered under code ${BUSINESS_INFO.authorizedRite} in Catalonia, Spain.`
                  : `Este sitio web es titularidad de ${BUSINESS_INFO.name}. Empresa instaladora autorizada en Instalaciones Térmicas en Edificios (RITE) con registro oficial ${BUSINESS_INFO.authorizedRite} en la Generalitat de Catalunya.`}
              </p>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5 font-mono text-[11px]">
                <div><strong className="text-white">Empresa:</strong> {BUSINESS_INFO.legalName}</div>
                <div><strong className="text-white">Homologació Oficial:</strong> {BUSINESS_INFO.authorizedRite}</div>
                <div><strong className="text-white">Telèfon:</strong> {BUSINESS_INFO.phonePrimary}</div>
                <div><strong className="text-white">Adreça:</strong> {BUSINESS_INFO.street}, {BUSINESS_INFO.city}</div>
              </div>

              <p>
                {lang === 'ca'
                  ? 'Totes les nostres instal·lacions es realitzen d’acord amb el Reial Decret 1027/2007 (RITE), el Codi Tècnic de l’Edificació (CTE) i la normativa vigent de seguretat en instal·lacions frigorífiques.'
                  : lang === 'en'
                  ? 'All engineering installations are carried out in strict accordance with the Spanish Royal Decree 1027/2007 (RITE), the Technical Building Code (CTE), and safety regulations for fluorinated refrigerants.'
                  : 'Todas nuestras instalaciones se realizan de conformidad con el Real Decreto 1027/2007 (RITE), el Código Técnico de la Edificación (CTE) y la normativa vigente de seguridad para instalaciones térmicas y frigoríficas.'}
              </p>
            </div>
          )}

          {tab === 'cookies' && (
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm">
                {lang === 'ca'
                  ? 'Política de Cookies'
                  : lang === 'en'
                  ? 'Cookie Policy'
                  : 'Política de Cookies'}
              </h4>
              <p>
                {lang === 'ca'
                  ? 'Utilitzem exclusivament cookies tècniques indispensables per recordar les teves preferències d’idioma (català, castellà o anglès) i el funcionament de la calculadora tèrmica. No utilitzem cookies publicitàries de tercers ni venem les teves dades.'
                  : lang === 'en'
                  ? 'We exclusively utilize essential technical cookies required to store your locale preference (Catalan, Spanish, English) and run the thermal calculator. We do not use third-party advertising trackers or sell personal data.'
                  : 'Utilizamos exclusivamente cookies técnicas esenciales para recordar sus preferencias de idioma (catalán, español o inglés) y el funcionamiento de la calculadora térmica. No utilizamos cookies de publicidad invasiva de terceros.'}
              </p>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5 font-mono text-[11px]">
                <div><strong className="text-white">lang_pref:</strong> {lang === 'ca' ? 'Recorda l’idioma triat (Sessió / Persistent)' : lang === 'en' ? 'Stores language preference (Session)' : 'Almacena el idioma preferido'}</div>
                <div><strong className="text-white">cookie_consent:</strong> {lang === 'ca' ? 'Estat d’acceptació de cookies tècniques' : lang === 'en' ? 'Stores consent status' : 'Estado de aceptación de cookies'}</div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Action */}
        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            {lang === 'ca' ? 'Entès' : lang === 'en' ? 'Got it' : 'Entendido'}
          </button>
        </div>
      </div>
    </div>
  );
};
