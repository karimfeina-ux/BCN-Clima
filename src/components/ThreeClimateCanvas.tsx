import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { Snowflake, Flame, Leaf, RotateCw, Wind, Info, CheckCircle2, HelpCircle } from 'lucide-react';

interface Props {
  lang: Language;
  isEmbedded?: boolean;
}

type Mode = 'cooling' | 'heating' | 'eco';

export const ThreeClimateCanvas: React.FC<Props> = ({ lang, isEmbedded = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode>('cooling');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [activeHotspot, setActiveHotspot] = useState<'fan' | 'comp' | 'coil' | null>('fan');
  const t = TRANSLATIONS[lang].interactive3D;

  const modeColors = {
    cooling: {
      accent: 0x0ea5e9, // Pure clean sky blue
      glow: '#0EA5E9',
      label: t.coolingMode,
      description: lang === 'en'
        ? 'Extracts heat from your house and blows cool air indoors.'
        : lang === 'ca'
        ? 'Extreu la calor de casa teva i impulsa aire fresc a les estances.'
        : 'Expulsa el calor de tu casa e introduce aire fresco y puro.',
      spec: 'A+++ / SEER 8.7'
    },
    heating: {
      accent: 0xea580c, // Warm clean orange
      glow: '#EA580C',
      label: t.heatingMode,
      description: lang === 'en'
        ? 'Absorbs renewable heat from outdoor air for radiators & underfloor heating.'
        : lang === 'ca'
        ? 'Absorbeix calor renovable de l’aire exterior per a radiadors i terra radiant.'
        : 'Absorbe calor gratuito del aire exterior para suelo radiante y radiadores.',
      spec: 'A+++ / SCOP 5.1'
    },
    eco: {
      accent: 0x10b981, // Clean emerald
      glow: '#10B981',
      label: t.ecoMode,
      description: lang === 'en'
        ? 'Modulates compressor speed to minimize electricity consumption.'
        : lang === 'ca'
        ? 'Modula la potència del compressor per reduir la factura de llum.'
        : 'Modula la potencia al mínimo para ahorrar hasta un 70% de luz.',
      spec: 'Inverter Eco R32'
    }
  };

  const hotspotInfo = {
    fan: {
      title: lang === 'en' ? 'Silent Aerodynamic Fan' : lang === 'ca' ? 'Ventilador Silenciós' : 'Ventilador Silencioso',
      desc: lang === 'en'
        ? 'Low-vortex curved blades operating at only 19-28 dB. Whisper quiet, won’t disturb neighbors.'
        : lang === 'ca'
        ? 'Aspes corbes de baix vòrtex a només 19-28 dB. No molesta els veïns a la nit.'
        : 'Aspas curvadas de bajo vórtice que funcionan a solo 19-28 dB. No molesta a los vecinos.'
    },
    comp: {
      title: lang === 'en' ? 'Twin-Rotary Inverter Compressor' : lang === 'ca' ? 'Compressor Inverter R32' : 'Compresor Inverter R32',
      desc: lang === 'en'
        ? 'The high-efficiency motor with eco-friendly R32 refrigerant. Adjusts power continuously to cut bills.'
        : lang === 'ca'
        ? 'El motor d’alta eficiència amb gas R32 ecològic. Ajusta la despesa de llum al mil·límetre.'
        : 'El corazón del equipo con gas ecológico R32. Ajusta el gasto eléctrico al milímetro según la temperatura.'
    },
    coil: {
      title: lang === 'en' ? 'Copper Heat Exchanger' : lang === 'ca' ? 'Intercanviador de Coure' : 'Intercambiador Térmico de Cobre',
      desc: lang === 'en'
        ? 'Premium copper piping absorbing up to 70% of thermal energy directly from outdoor ambient air.'
        : lang === 'ca'
        ? 'Bobines de coure que capten fins al 70% de l’energia tèrmica directament de l’aire exterior.'
        : 'Tuberías de cobre de alta pureza que captan hasta el 70% de energía directamente del aire exterior.'
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
    camera.position.set(0, 0.7, 4.3);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'default'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Studio Lighting (Crisp, realistic daylight appearance for a heat pump)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.8);
    fillLight.position.set(-4, 2, 3);
    scene.add(fillLight);

    // Soft colored glow from active mode
    const modeLight = new THREE.PointLight(modeColors[mode].accent, 2.2, 5);
    modeLight.position.set(0.6, 0.1, 0.6);
    scene.add(modeLight);

    // Main Unit Group
    const unitGroup = new THREE.Group();
    scene.add(unitGroup);

    // 1. Sleek Modern Outdoor Unit Chassis (Realistic White / Light Silver Heat Pump Body)
    const chassisGeo = new THREE.BoxGeometry(2.8, 1.8, 0.95);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9, // Crisp clean white/platinum modern HVAC chassis
      metalness: 0.15,
      roughness: 0.3
    });
    const chassis = new THREE.Mesh(chassisGeo, chassisMat);
    unitGroup.add(chassis);

    // Top protective curved roof panel
    const roofGeo = new THREE.BoxGeometry(2.88, 0.08, 1.02);
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.25,
      roughness: 0.2
    });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 0.94;
    unitGroup.add(roof);

    // Support mounting feet
    const footGeo = new THREE.BoxGeometry(0.35, 0.12, 1.05);
    const footMat = new THREE.MeshStandardMaterial({ color: 0x334155 });
    const foot1 = new THREE.Mesh(footGeo, footMat);
    foot1.position.set(-0.9, -0.96, 0);
    unitGroup.add(foot1);

    const foot2 = foot1.clone();
    foot2.position.set(0.9, -0.96, 0);
    unitGroup.add(foot2);

    // 2. Large Circular Fan Intake Grille on the Left
    const grilleRingGeo = new THREE.TorusGeometry(0.65, 0.04, 16, 64);
    const grilleRingMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.6,
      roughness: 0.3
    });
    const grilleRing = new THREE.Mesh(grilleRingGeo, grilleRingMat);
    grilleRing.position.set(-0.68, 0, 0.5);
    unitGroup.add(grilleRing);

    // Grille mesh protection rings
    for (let r = 0.2; r < 0.65; r += 0.14) {
      const ringGeo = new THREE.TorusGeometry(r, 0.015, 12, 48);
      const ring = new THREE.Mesh(ringGeo, grilleRingMat);
      ring.position.set(-0.68, 0, 0.5);
      unitGroup.add(ring);
    }

    // Rotating Fan Blades inside
    const fanGroup = new THREE.Group();
    fanGroup.position.set(-0.68, 0, 0.36);
    unitGroup.add(fanGroup);

    const hubGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.1, 24);
    hubGeo.rotateX(Math.PI / 2);
    const hubMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.8
    });
    const hub = new THREE.Mesh(hubGeo, hubMat);
    fanGroup.add(hub);

    // 3 Aerodynamic Curved Blades
    const bladeGeo = new THREE.BoxGeometry(0.5, 0.14, 0.02);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.4,
      roughness: 0.4
    });
    for (let i = 0; i < 3; i++) {
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      const angle = (i * 2 * Math.PI) / 3;
      blade.position.x = Math.cos(angle) * 0.3;
      blade.position.y = Math.sin(angle) * 0.3;
      blade.rotation.z = angle + 0.25;
      blade.rotation.y = 0.35;
      fanGroup.add(blade);
    }

    // 3. Technical Service Hatch with Visible Copper Manifolds & Compressor on Right
    // Front hatch panel
    const hatchGeo = new THREE.BoxGeometry(1.15, 1.55, 0.04);
    const hatchMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.2
    });
    const hatch = new THREE.Mesh(hatchGeo, hatchMat);
    hatch.position.set(0.72, 0, 0.49);
    unitGroup.add(hatch);

    // BCN Clima Brand Badge on Chassis
    const badgeGeo = new THREE.BoxGeometry(0.7, 0.16, 0.02);
    const badgeMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.1
    });
    const badge = new THREE.Mesh(badgeGeo, badgeMat);
    badge.position.set(0.72, 0.6, 0.52);
    unitGroup.add(badge);

    // Compressor cylinder inside
    const compGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.85, 24);
    const compMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.2
    });
    const compressor = new THREE.Mesh(compGeo, compMat);
    compressor.position.set(0.72, -0.25, 0.1);
    unitGroup.add(compressor);

    // Copper Heat Exchanger Piping
    const pipePoints = [
      new THREE.Vector3(0.72, 0.15, 0.1),
      new THREE.Vector3(0.72, 0.55, 0.1),
      new THREE.Vector3(1.15, 0.55, 0.1),
      new THREE.Vector3(1.15, -0.55, 0.1),
      new THREE.Vector3(0.35, -0.55, 0.1)
    ];
    const pipeCurve = new THREE.CatmullRomCurve3(pipePoints);
    const pipeGeo = new THREE.TubeGeometry(pipeCurve, 32, 0.035, 12, false);
    const pipeMat = new THREE.MeshStandardMaterial({
      color: 0xb45309, // Pure polished copper
      metalness: 0.95,
      roughness: 0.2
    });
    const copperPipe = new THREE.Mesh(pipeGeo, pipeMat);
    unitGroup.add(copperPipe);

    // Glowing Thermal Status LED indicator
    const ledGeo = new THREE.BoxGeometry(0.4, 0.035, 0.02);
    const ledMat = new THREE.MeshBasicMaterial({
      color: modeColors[mode].accent
    });
    const led = new THREE.Mesh(ledGeo, ledMat);
    led.position.set(0.72, 0.44, 0.52);
    unitGroup.add(led);

    // 4. Subtle, calm laminar airflow particles
    const particleCount = 45;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 2.4;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 1.4;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 1.8;
      particleVelocities.push(0.008 + Math.random() * 0.008);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: modeColors[mode].accent,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
      blending: THREE.NormalBlending
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Interactive Drag Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationY = 0.25;
    let targetRotationX = 0.08;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      targetRotationY += deltaX * 0.006;
      targetRotationX += deltaY * 0.004;
      targetRotationX = Math.max(-0.25, Math.min(0.25, targetRotationX));
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      targetRotationY += deltaX * 0.006;
      targetRotationX += deltaY * 0.004;
      targetRotationX = Math.max(-0.25, Math.min(0.25, targetRotationX));
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domEl.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth realistic fan blade rotation
      fanGroup.rotation.z += 0.06;

      // Gentle auto rotation
      if (isRotating && !isDragging) {
        targetRotationY += 0.002;
      }

      unitGroup.rotation.y += (targetRotationY - unitGroup.rotation.y) * 0.07;
      unitGroup.rotation.x += (targetRotationX - unitGroup.rotation.x) * 0.07;

      // Flow particles
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        positions[idx + 2] += particleVelocities[i];
        if (positions[idx + 2] > 2.0) {
          positions[idx + 2] = -1.2;
          positions[idx] = (Math.random() - 0.5) * 2.2;
          positions[idx + 1] = (Math.random() - 0.5) * 1.2;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domEl.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      chassisGeo.dispose();
      chassisMat.dispose();
      roofGeo.dispose();
      roofMat.dispose();
      footGeo.dispose();
      footMat.dispose();
      grilleRingGeo.dispose();
      grilleRingMat.dispose();
      hubGeo.dispose();
      hubMat.dispose();
      bladeGeo.dispose();
      bladeMat.dispose();
      hatchGeo.dispose();
      hatchMat.dispose();
      badgeGeo.dispose();
      badgeMat.dispose();
      compGeo.dispose();
      compMat.dispose();
      pipeGeo.dispose();
      pipeMat.dispose();
      ledGeo.dispose();
      ledMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [mode, isRotating]);

  return (
    <div
      className={
        isEmbedded
          ? 'relative w-full flex flex-col'
          : 'relative w-full rounded-3xl overflow-hidden border border-white/20 bg-slate-950/80 backdrop-blur-2xl shadow-2xl flex flex-col'
      }
    >
      {/* 1. Crystal Clear Explanatory Header */}
      <div className="p-4 sm:p-5 border-b border-white/10 bg-slate-900/60">
        <div className="flex items-center justify-between gap-3 mb-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              {t.tag}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className={`px-2.5 py-1 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                isRotating
                  ? 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
              title={
                lang === 'ca'
                  ? 'Pausar o reprendre rotació 360°'
                  : lang === 'en'
                  ? 'Pause or resume 360° rotation'
                  : 'Pausar o reanudar rotación 360°'
              }
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">360°</span>
            </button>
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-black text-white leading-tight">
          {t.title}
        </h3>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          {t.desc}
        </p>
      </div>

      {/* 2. Three.js 3D Interactive Viewport with Real Outdoor Unit */}
      <div className="relative w-full h-[320px] sm:h-[350px]">
        {/* The 3D WebGL Canvas */}
        <div
          ref={containerRef}
          className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
          title={t.interactiveHint}
        />

        {/* Real-world Part Callouts (Clickable / Inspectable Pills) */}
        <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2 pointer-events-none">
          <button
            onClick={() => setActiveHotspot('fan')}
            className={`pointer-events-auto px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-all border shadow-sm ${
              activeHotspot === 'fan'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                : 'bg-slate-900/80 border-slate-700/70 text-slate-300 hover:bg-slate-800'
            }`}
          >
            1. {t.fanLabel}
          </button>

          <button
            onClick={() => setActiveHotspot('comp')}
            className={`pointer-events-auto px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-all border shadow-sm ${
              activeHotspot === 'comp'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                : 'bg-slate-900/80 border-slate-700/70 text-slate-300 hover:bg-slate-800'
            }`}
          >
            2. {t.compLabel}
          </button>

          <button
            onClick={() => setActiveHotspot('coil')}
            className={`pointer-events-auto px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-all border shadow-sm ${
              activeHotspot === 'coil'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                : 'bg-slate-900/80 border-slate-700/70 text-slate-300 hover:bg-slate-800'
            }`}
          >
            3. {t.copperLabel}
          </button>
        </div>

        {/* Selected Part Explanation Box */}
        {activeHotspot && (
          <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 border border-cyan-500/30 rounded-xl p-3 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xs mb-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{hotspotInfo[activeHotspot].title}</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed">
              {hotspotInfo[activeHotspot].desc}
            </p>
          </div>
        )}
      </div>

      {/* 3. Season / Mode Selector at Bottom with Plain-Language Explanation */}
      <div className="p-4 bg-slate-900/80 border-t border-white/10 space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-slate-400 font-semibold uppercase text-[11px]">
            {lang === 'en' ? 'Select Mode:' : lang === 'ca' ? 'Selecciona Mode:' : 'Selecciona Modo:'}
          </span>
          <span className="font-mono text-[11px] font-bold text-cyan-300">
            {modeColors[mode].spec}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setMode('cooling')}
            className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mode === 'cooling'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Snowflake className="w-3.5 h-3.5" />
            <span className="truncate">{t.coolingMode}</span>
          </button>

          <button
            onClick={() => setMode('heating')}
            className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mode === 'heating'
                ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/25'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span className="truncate">{t.heatingMode}</span>
          </button>

          <button
            onClick={() => setMode('eco')}
            className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mode === 'eco'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Leaf className="w-3.5 h-3.5" />
            <span className="truncate">{t.ecoMode}</span>
          </button>
        </div>

        {/* What this mode does */}
        <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] sm:text-xs text-slate-300 flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>{modeColors[mode].description}</span>
        </div>
      </div>
    </div>
  );
};
