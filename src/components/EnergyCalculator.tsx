import React, { useState, useId } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language, CalculationResult } from '../types';
import { Calculator, Zap, Leaf, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
  lang: Language;
  onSelectResult?: (result: CalculationResult) => void;
}

export const EnergyCalculator: React.FC<Props> = ({ lang, onSelectResult }) => {
  const t = TRANSLATIONS[lang].calculator;
  const surfaceId = useId();
  const propertyTypeId = useId();
  const insulationId = useId();
  const orientationId = useId();

  const [surface, setSurface] = useState<number>(80);
  const [propertyType, setPropertyType] = useState<'apartment' | 'penthouse' | 'house' | 'office'>('apartment');
  const [insulation, setInsulation] = useState<'high' | 'medium' | 'low'>('medium');
  const [orientation, setOrientation] = useState<'south' | 'north' | 'mixed'>('south');

  let baseFrigPerM2 = 100;
  if (propertyType === 'penthouse') baseFrigPerM2 *= 1.25;
  if (propertyType === 'house') baseFrigPerM2 *= 1.15;
  if (propertyType === 'office') baseFrigPerM2 *= 1.3;

  if (insulation === 'high') baseFrigPerM2 *= 0.85;
  if (insulation === 'low') baseFrigPerM2 *= 1.25;

  if (orientation === 'south') baseFrigPerM2 *= 1.15;
  if (orientation === 'north') baseFrigPerM2 *= 0.9;

  const totalFrigorias = Math.round(surface * baseFrigPerM2);
  const totalKw = +(totalFrigorias * 0.001163).toFixed(1);

  let recommendedSystem = '';
  if (surface <= 45) {
    recommendedSystem = lang === 'en'
      ? 'Ultra-quiet 1x1 Inverter Split (Daikin / Mitsubishi A+++)'
      : 'Mono-Split 1x1 Inverter Ultra Silencioso (Daikin o Mitsubishi Electric A+++)';
  } else if (surface <= 95) {
    recommendedSystem = lang === 'en'
      ? 'Multi-Split 2x1 / 3x1 or Concealed Ducted AC with Airzone'
      : 'Multi-Split 2x1 / 3x1 o Climatización por Conductos Airzone';
  } else {
    recommendedSystem = lang === 'en'
      ? 'Complete Aerothermal Heat Pump System (Heating, Cooling & DHW) A+++'
      : 'Bomba de Calor Aerotermia Completa (Calefacción, Frío y ACS) A+++';
  }

  const estimatedSavings = Math.round(surface * 9.5 + (insulation === 'low' ? 300 : 180));
  const co2Reduction = Math.round(surface * 14);

  const handleApply = () => {
    const res: CalculationResult = {
      surfaceM2: surface,
      propertyType: t.types[propertyType],
      requiredFrigorias: totalFrigorias,
      requiredKw: totalKw,
      recommendedSystem,
      estimatedAnnualSavings: estimatedSavings,
      co2ReductionKg: co2Reduction,
      copEfficiency: 4.85
    };
    if (onSelectResult) {
      onSelectResult(res);
    }
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculadora" className="py-20 relative bg-slate-950/40 backdrop-blur-sm border-y border-slate-800/60">
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
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6">
            {/* Surface Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={surfaceId} className="text-xs font-semibold text-slate-200">
                  {t.surfaceLabel}
                </label>
                <span className="font-mono text-base font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-800/60">
                  {surface} m²
                </span>
              </div>
              <input
                id={surfaceId}
                type="range"
                min="20"
                max="250"
                step="5"
                value={surface}
                onChange={(e) => setSurface(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                <span>20 m²</span>
                <span>80 m²</span>
                <span>150 m²</span>
                <span>250+ m²</span>
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label htmlFor={propertyTypeId} className="text-xs font-semibold text-slate-200 block mb-2">
                {t.propertyTypeLabel}
              </label>
              <div id={propertyTypeId} className="grid grid-cols-2 gap-2">
                {(['apartment', 'penthouse', 'house', 'office'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPropertyType(type)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-colors cursor-pointer ${
                      propertyType === type
                        ? 'bg-cyan-500/15 border-cyan-500 text-cyan-200'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {t.types[type]}
                  </button>
                ))}
              </div>
            </div>

            {/* Insulation */}
            <div>
              <label htmlFor={insulationId} className="text-xs font-semibold text-slate-200 block mb-1.5">
                {t.insulationLabel}
              </label>
              <select
                id={insulationId}
                value={insulation}
                onChange={(e) => setInsulation(e.target.value as 'high' | 'medium' | 'low')}
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-cyan-500"
              >
                <option value="high">{t.insulations.high}</option>
                <option value="medium">{t.insulations.medium}</option>
                <option value="low">{t.insulations.low}</option>
              </select>
            </div>

            {/* Orientation */}
            <div>
              <label htmlFor={orientationId} className="text-xs font-semibold text-slate-200 block mb-1.5">
                {t.orientationLabel}
              </label>
              <div id={orientationId} className="grid grid-cols-3 gap-2">
                {(['south', 'mixed', 'north'] as const).map((ori) => (
                  <button
                    key={ori}
                    type="button"
                    onClick={() => setOrientation(ori)}
                    className={`py-2 px-2 rounded-lg border text-center text-xs font-medium transition-colors cursor-pointer ${
                      orientation === ori
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {ori === 'south' ? 'Sur' : ori === 'mixed' ? 'Mixta' : 'Norte'}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Cálculo estimativo para la zona climática de Terrassa y Vallès.</span>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                {t.resultTitle}
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-bold font-mono">
                A+++
              </span>
            </div>

            {/* Power Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">
                  {t.coolingPower}
                </span>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                  {totalFrigorias.toLocaleString()} <span className="text-xs text-cyan-400">fg/h</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">
                  {t.thermalPowerKw}
                </span>
                <div className="text-xl sm:text-2xl font-bold text-cyan-300 font-mono">
                  {totalKw} <span className="text-xs text-slate-400">kW</span>
                </div>
              </div>
            </div>

            {/* Recommended System */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs text-cyan-400 font-semibold block mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t.recommendedUnit}
              </span>
              <p className="text-xs font-medium text-slate-200">
                {recommendedSystem}
              </p>
            </div>

            {/* Savings */}
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.annualSavings}</span>
                </div>
                <span className="font-mono font-bold text-emerald-400">
                  ~{estimatedSavings} €/año
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.co2Saved}</span>
                </div>
                <span className="font-mono font-medium text-slate-200">
                  -{co2Reduction} kg CO2
                </span>
              </div>
            </div>

            {/* Apply Action */}
            <button
              onClick={handleApply}
              className="w-full py-3.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>{t.ctaUseData}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
