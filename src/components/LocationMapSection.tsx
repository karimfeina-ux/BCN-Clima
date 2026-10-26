import React from 'react';
import { TRANSLATIONS, BUSINESS_INFO } from '../data/translations';
import { Language } from '../types';
import { MapPin, Navigation, Clock, ExternalLink, Car } from 'lucide-react';

interface Props {
  lang: Language;
}

export const LocationMapSection: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].location;

  const nearbyTimes = [
    { city: 'Terrassa Centre', time: '3-5 min' },
    { city: 'Sabadell', time: '12-14 min' },
    { city: 'Rubí', time: '14-16 min' },
    { city: 'Sant Cugat', time: '18-20 min' },
    { city: 'Barcelona', time: '25-28 min' }
  ];

  return (
    <section id="ubicacion" className="py-20 relative bg-slate-950/40 backdrop-blur-sm border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-2">
            {t.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Column */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Address */}
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase font-semibold block mb-1">
                  {t.addressTitle}
                </span>
                <p className="text-base font-bold text-white">
                  {BUSINESS_INFO.street}
                </p>
                <p className="text-xs text-slate-400">
                  {BUSINESS_INFO.postalCode} {BUSINESS_INFO.city} ({BUSINESS_INFO.province})
                </p>
              </div>

              {/* Hours */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{t.hoursTitle}</span>
                </div>
                <p className="text-xs text-slate-300">
                  {t.hoursText}
                </p>
              </div>

              {/* Service Areas */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono text-cyan-400 uppercase font-semibold block mb-2">
                  {t.serviceAreaTitle}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {BUSINESS_INFO.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Times */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-2">
                  <Car className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.nearbyEstimates}</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {nearbyTimes.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs"
                    >
                      <span className="text-slate-300 text-[11px]">{item.city}</span>
                      <span className="font-mono text-[11px] font-bold text-cyan-400">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <div className="pt-5 mt-5 border-t border-slate-800">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-slate-950" />
                <span>{t.directionsBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-2.5 min-h-[380px] overflow-hidden">
            <iframe
              title="BCN Clima Ubicación en Terrassa"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=2.0002171%2C41.5478256%2C2.0202171%2C41.5618256&layer=mapnik&marker=41.5548256%2C2.0102171`}
              className="w-full h-full min-h-[360px] rounded-xl border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
