import { ServiceItem, ReviewItem, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'BCN Clima',
  legalName: 'BCN Clima Instalaciones y Climatización',
  street: 'Carrer de Sant Sebastià, Barri Segle XX',
  postalCode: '08224',
  city: 'Terrassa',
  province: 'Barcelona',
  region: 'Catalunya',
  country: 'España',
  latitude: 41.5548256,
  longitude: 2.0102171,
  phonePrimary: '+34 930 256 239',
  phoneDirect: '930 256 239',
  phoneMobile: '+34 640 641 819',
  whatsapp: '34640641819',
  email: 'contacto@bcnclima.es',
  mapsUrl: 'https://maps.app.goo.gl/aaSHaoeUPd3yYiZU7',
  rating: 4.9,
  reviewsCount: 84,
  yearsExperience: 16,
  projectsCompleted: 2400,
  authorizedRite: 'AUT-RITE-B82914',
  serviceAreas: [
    'Terrassa',
    'Sabadell',
    'Sant Cugat del Vallès',
    'Rubí',
    'Matadepera',
    'Cerdanyola del Vallès',
    'Castellar del Vallès',
    'Barcelona Capital',
    'Baix Llobregat'
  ],
  brands: [
    { name: 'Daikin', logo: 'DAIKIN' },
    { name: 'Mitsubishi Electric', logo: 'MITSUBISHI ELECTRIC' },
    { name: 'Panasonic', logo: 'PANASONIC' },
    { name: 'Vaillant', logo: 'VAILLANT' },
    { name: 'Saunier Duval', logo: 'SAUNIER DUVAL' },
    { name: 'Fujitsu', logo: 'FUJITSU' },
    { name: 'Baxi', logo: 'BAXI' },
    { name: 'Bosch / Junkers', logo: 'BOSCH' }
  ]
};

export const TRANSLATIONS = {
  es: {
    nav: {
      services: 'Servicios',
      engine3D: 'Unidad 3D',
      calculator: 'Calculadora Térmica',
      process: 'Cómo Trabajamos',
      gallery: 'Instalaciones',
      reviews: 'Opiniones',
      location: 'Ubicación',
      faq: 'Preguntas',
      contact: 'Contacto',
      callNow: 'Llamar 930 256 239',
      requestQuote: 'Pedir Presupuesto'
    },
    hero: {
      badge: 'Instaladores Oficiales RITE • Terrassa y Vallès Occidental',
      titleHighlight: 'Climatización y Aerotermia',
      titleRest: 'con la Máxima Eficiencia',
      subtitle: 'Instalación y mantenimiento profesional de aire acondicionado, bombas de calor aerotérmicas, calderas y fontanería en Terrassa y provincia de Barcelona. Presupuestos transparentes y garantía oficial.',
      ctaPrimary: 'Calcular Presupuesto',
      ctaSecondary: 'Ver Unidad 3D',
      ctaWhatsapp: 'WhatsApp Directo',
      stat1: '16+ Años',
      stat1Sub: 'Experiencia técnica en Vallès',
      stat2: 'A+++',
      stat2Sub: 'Máxima eficiencia energética',
      stat3: '4.9 ★',
      stat3Sub: 'Valoración en Google Maps',
      stat4: '24-48h',
      stat4Sub: 'Instalación rápida garantizada'
    },
    interactive3D: {
      tag: '¿QUÉ ES ESTE EQUIPO?',
      title: 'Unidad Exterior de Aerotermia & Aire Acondicionado',
      desc: 'Es el equipo que instalamos en tu terraza, fachada o jardín. Enfría en verano y calienta en invierno con hasta un 70% de ahorro energético.',
      coolingMode: '❄️ Verano (Frío)',
      heatingMode: '🔥 Invierno (Calor)',
      ecoMode: '🌱 Modo Eco A+++',
      fanLabel: 'Ventilador Silencioso (28 dB)',
      compLabel: 'Compresor Inverter R32',
      copperLabel: 'Intercambiador de Cobre',
      targetTemp: 'Temperatura',
      airflowSpeed: 'Velocidad',
      copLabel: 'Eficiencia',
      refrigerantLabel: 'Refrigerante Ecológico',
      noiseLabel: 'Nivel Sonoro',
      interactiveHint: 'Haz clic y arrastra con el ratón o desliza con el dedo para ver el equipo en 360°'
    },
    calculator: {
      tag: 'CALCULADORA RÁPIDA',
      title: 'Calcula las Frigorías y Ahorro Estimado',
      subtitle: 'Indica los metros cuadrados de tu vivienda o local para obtener una estimación técnica de la potencia recomendada y el ahorro anual.',
      surfaceLabel: 'Superficie de la estancia:',
      propertyTypeLabel: 'Tipo de inmueble:',
      types: {
        apartment: 'Piso / Apartamento',
        penthouse: 'Ático / Última Planta',
        house: 'Casa Unifamiliar / Torre',
        office: 'Local Comercial / Oficina'
      },
      insulationLabel: 'Aislamiento de la vivienda:',
      insulations: {
        high: 'Bueno (Doble acristalamiento climalit, moderno)',
        medium: 'Estándar (Vivienda convencional)',
        low: 'Bajo (Vivienda antigua sin aislar)'
      },
      orientationLabel: 'Exposición solar:',
      orientations: {
        south: 'Sur (Soleado en verano)',
        north: 'Norte (Sombra / Fresco)',
        mixed: 'Mixta'
      },
      resultTitle: 'Estimación de Potencia Recomendada',
      coolingPower: 'Frigorías recomendadas:',
      thermalPowerKw: 'Potencia térmica:',
      recommendedUnit: 'Equipo sugerido:',
      annualSavings: 'Ahorro anual estimado:',
      co2Saved: 'Reducción CO2:',
      ctaUseData: 'Pedir Presupuesto con estos datos'
    },
    services: {
      tag: 'NUESTROS SERVICIOS',
      title: 'Soluciones Profesionales de Climatización',
      subtitle: 'Instalación, reparación y mantenimiento con técnicos frigoristas autorizados y marcas líderes.',
      viewSpecs: 'Ver detalles técnicos',
      warrantyTag: 'Garantía completa',
      brandsIncluded: 'Marcas oficiales:'
    },
    process: {
      tag: 'PROCESO SENCILLO',
      title: 'Instalación en 5 Pasos Claros',
      subtitle: 'Sin complicaciones. Presupuesto cerrado, ejecución limpia y legalización incluida.',
      steps: [
        {
          num: '01',
          title: 'Visita y Asesoramiento Gratuito',
          desc: 'Visitamos tu vivienda o local en Terrassa o comarca para valorar el espacio y tus necesidades sin coste.'
        },
        {
          num: '02',
          title: 'Presupuesto Cerrado',
          desc: 'Te entregamos una propuesta clara con el equipo idóneo y el coste final sin sorpresas.'
        },
        {
          num: '03',
          title: 'Instalación Rápida y Limpia',
          desc: 'Realizamos el montaje en 1-2 días, protegiendo suelos y dejando todo limpio al terminar.'
        },
        {
          num: '04',
          title: 'Certificado Oficial RITE',
          desc: 'Legalizamos la instalación y emitimos el boletín oficial exigido por la normativa.'
        },
        {
          num: '05',
          title: 'Garantía y Servicio Postventa',
          desc: 'Te explicamos el manejo de los termostatos y cuentas con soporte y mantenimiento directo.'
        }
      ]
    },
    gallery: {
      tag: 'TRABAJOS REALIZADOS',
      title: 'Instalaciones Reales',
      subtitle: 'Fotografías de trabajos recientes en Terrassa, Sabadell y el Vallès.',
      allTab: 'Todos',
      aerotermiaTab: 'Aerotermia',
      acTab: 'Aire Acondicionado',
      plumbingTab: 'Calderas y Fontanería'
    },
    trust: {
      tag: 'TRANQUILIDAD Y SEGURIDAD',
      title: 'Acreditaciones Oficiales',
      cards: [
        {
          title: 'Instalador Homologado RITE',
          desc: 'Registro oficial de empresas instaladoras térmicas de Catalunya.'
        },
        {
          title: 'Gases Fluorados Certificados',
          desc: 'Manipuladores titulados con sellado hermético y ecológico.'
        },
        {
          title: 'Servicio Multimarca Oficial',
          desc: 'Trabajamos directamente con Daikin, Mitsubishi, Panasonic y Vaillant.'
        },
        {
          title: 'Garantía de 5 Años',
          desc: 'Cobertura total en equipos y mano de obra para tu tranquilidad.'
        }
      ]
    },
    reviews: {
      tag: 'OPINIONES REALES',
      title: 'Valoraciones de Clientes en Terrassa',
      subtitle: 'Opiniones públicas reales en nuestra ficha de Google Maps.',
      openMapsReviews: 'Ver reseñas en Google Maps'
    },
    location: {
      tag: 'DONDE ESTAMOS',
      title: 'Sede en Terrassa y Área de Servicio',
      subtitle: 'Situados en Carrer de Sant Sebastià (Terrassa) con atención rápida en todo el Vallès.',
      addressTitle: 'Dirección:',
      serviceAreaTitle: 'Municipios habituales:',
      hoursTitle: 'Horario:',
      hoursText: 'Lunes a Viernes: 08:00 - 19:30 | Sábados: 09:00 - 14:00',
      emergencyText: 'Servicio de asistencia técnica disponible',
      directionsBtn: 'Ver en Google Maps',
      nearbyEstimates: 'Tiempos de llegada estimados:'
    },
    faq: {
      tag: 'PREGUNTAS FRECUENTES',
      title: 'Dudas Habituales sobre Climatización',
      subtitle: 'Respuestas claras para ayudarte a elegir el mejor sistema.'
    },
    contact: {
      tag: 'CONTACTO DIRECTO',
      title: 'Pide tu Presupuesto sin Compromiso',
      subtitle: 'Indícanos qué necesitas y te responderemos rápidamente con una propuesta adaptada.',
      nameLabel: 'Nombre *',
      phoneLabel: 'Teléfono *',
      emailLabel: 'Correo Electrónico *',
      townLabel: 'Población / Ciudad *',
      serviceTypeLabel: 'Servicio que necesitas:',
      messageLabel: 'Detalles o comentarios:',
      submitBtn: 'Enviar Consulta',
      sendingBtn: 'Enviando...',
      successTitle: '¡Consulta Recibida!',
      successDesc: 'Nos pondremos en contacto contigo a la mayor brevedad para coordinar la visita o facilitarte el presupuesto.',
      orDirectContact: 'O llámanos directamente:'
    },
    footer: {
      brandDesc: 'BCN Clima es empresa instaladora autorizada de climatización, aerotermia, calderas y fontanería en Terrassa y la provincia de Barcelona.',
      quickLinks: 'Secciones',
      legalTitle: 'Información Legal',
      privacyPolicy: 'Política de Privacidad',
      legalNotice: 'Aviso Legal y RITE',
      cookiesPolicy: 'Política de Cookies',
      coverageCities: 'Zona de Cobertura:',
      rights: 'Todos los derechos reservados. Empresa homologada RITE.'
    }
  },
  ca: {
    nav: {
      services: 'Serveis',
      engine3D: 'Unitat 3D',
      calculator: 'Calculadora Tèrmica',
      process: 'Com Treballem',
      gallery: 'Instal·lacions',
      reviews: 'Opinions',
      location: 'Ubicació',
      faq: 'Preguntes',
      contact: 'Contacte',
      callNow: 'Trucar 930 256 239',
      requestQuote: 'Demanar Pressupost'
    },
    hero: {
      badge: 'Instal·ladors Oficials RITE • Terrassa i Vallès Occidental',
      titleHighlight: 'Climatització i Aerotèrmia',
      titleRest: 'amb la Màxima Eficiència',
      subtitle: 'Instal·lació i manteniment professional d’aire condicionat, bombes de calor aerotèrmiques, calderes i fontaneria a Terrassa i província de Barcelona. Pressupostos transparents i garantia oficial.',
      ctaPrimary: 'Calcular Pressupost',
      ctaSecondary: 'Veure Unitat 3D',
      ctaWhatsapp: 'WhatsApp Directe',
      stat1: '16+ Anys',
      stat1Sub: 'Experiència tècnica al Vallès',
      stat2: 'A+++',
      stat2Sub: 'Màxima eficiència energètica',
      stat3: '4.9 ★',
      stat3Sub: 'Valoració a Google Maps',
      stat4: '24-48h',
      stat4Sub: 'Instal·lació ràpida garantida'
    },
    interactive3D: {
      tag: 'QUÈ ÉS AQUEST EQUIP?',
      title: 'Unitat Exterior d’Aerotèrmia & Aire Condicionat',
      desc: 'És l’equip que instal·lem a la teva façana, terrassa o jardí. Refreda a l’estiu i escalfa a l’hivern amb fins a un 70% d’estalvi energètic.',
      coolingMode: '❄️ Estiu (Fred)',
      heatingMode: '🔥 Hivern (Calor)',
      ecoMode: '🌱 Mode Eco A+++',
      fanLabel: 'Ventilador Silenciós (28 dB)',
      compLabel: 'Compressor Inverter R32',
      copperLabel: 'Intercanviador de Coure',
      targetTemp: 'Temperatura',
      airflowSpeed: 'Velocitat',
      copLabel: 'Eficiència',
      refrigerantLabel: 'Refrigerant Ecològic',
      noiseLabel: 'Nivell Sonor',
      interactiveHint: 'Fes clic i arrossega amb el ratolí o llisca amb el dit per veure l’equip en 360°'
    },
    calculator: {
      tag: 'CALCULADORA RÀPIDA',
      title: 'Calcula les Frigories i Estalvi Estimat',
      subtitle: 'Indica els metres quadrats del teu habitatge o local per obtenir una estimació tècnica de la potència recomanada i l’estalvi anual.',
      surfaceLabel: 'Superfície de l’estada:',
      propertyTypeLabel: 'Tipus d’immoble:',
      types: {
        apartment: 'Pis / Apartament',
        penthouse: 'Àtic / Darrera Planta',
        house: 'Casa Unifamiliar / Torre',
        office: 'Local Comercial / Oficina'
      },
      insulationLabel: 'Aïllament de l’habitatge:',
      insulations: {
        high: 'Bo (Doble vidre climalit, modern)',
        medium: 'Estàndard (Habitatge convencional)',
        low: 'Baix (Habitatge antic sense aïllar)'
      },
      orientationLabel: 'Exposició solar:',
      orientations: {
        south: 'Sud (Assolellat a l’estiu)',
        north: 'Nord (Ombra / Fresc)',
        mixed: 'Mixta'
      },
      resultTitle: 'Estimació de Potència Recomanada',
      coolingPower: 'Frigories recomanades:',
      thermalPowerKw: 'Potència tèrmica:',
      recommendedUnit: 'Equip suggerit:',
      annualSavings: 'Estalvi anual estimat:',
      co2Saved: 'Reducció CO2:',
      ctaUseData: 'Demanar Pressupost amb aquestes dades'
    },
    services: {
      tag: 'ELS NOSTRES SERVEIS',
      title: 'Solucions Professionals de Climatització',
      subtitle: 'Instal·lació, reparació i manteniment amb tècnics frigoristes autoritzats i marques líders.',
      viewSpecs: 'Veure detalls tècnics',
      warrantyTag: 'Garantia completa',
      brandsIncluded: 'Marques oficials:'
    },
    process: {
      tag: 'PROCÉS SENZILL',
      title: 'Instal·lació en 5 Passos Clars',
      subtitle: 'Sense complicacions. Pressupost tancat, execució neta i legalització inclosa.',
      steps: [
        {
          num: '01',
          title: 'Visita i Assessorament Gratuït',
          desc: 'Visitem el teu habitatge o local a Terrassa o comarca per valorar l’espai i les teves necessitats sense cap cost.'
        },
        {
          num: '02',
          title: 'Pressupost Tancat',
          desc: 'T’entreguem una proposta clara amb l’equip idoni i el cost final sense sorpreses.'
        },
        {
          num: '03',
          title: 'Instal·lació Ràpida i Neta',
          desc: 'Realitzem el muntatge en 1-2 dies, protegint mobles i deixant-ho tot net en acabar.'
        },
        {
          num: '04',
          title: 'Certificat Oficial RITE',
          desc: 'Legalitzem la instal·lació i emetem el butlletí oficial exigit per la normativa.'
        },
        {
          num: '05',
          title: 'Garantia i Servei Postvenda',
          desc: 'T’ensenyem com funciona el termòstat i disposes de suport i manteniment directe.'
        }
      ]
    },
    gallery: {
      tag: 'TREBALLS REALITZATS',
      title: 'Instal·lacions Reals',
      subtitle: 'Fotografies de treballs recents a Terrassa, Sabadell i el Vallès.',
      allTab: 'Tots',
      aerotermiaTab: 'Aerotèrmia',
      acTab: 'Aire Condicionat',
      plumbingTab: 'Calderes i Fontaneria'
    },
    trust: {
      tag: 'TRANQUIL·LITAT I SEGURETAT',
      title: 'Acreditacions Oficials',
      cards: [
        {
          title: 'Instal·lador Homologat RITE',
          desc: 'Registre oficial d’empreses instal·ladores tèrmiques de Catalunya.'
        },
        {
          title: 'Gasos Fluorats Certificats',
          desc: 'Manipuladors titulats amb segellat hermètic i ecològic.'
        },
        {
          title: 'Servei Multimarca Oficial',
          desc: 'Treballem directament amb Daikin, Mitsubishi, Panasonic i Vaillant.'
        },
        {
          title: 'Garantia de 5 Anys',
          desc: 'Cobertura total en equips i mà d’obra per a la teva tranquil·litat.'
        }
      ]
    },
    reviews: {
      tag: 'OPINIONS REALS',
      title: 'Valoracions de Clients a Terrassa',
      subtitle: 'Opinions públiques reals a la nostra fitxa de Google Maps.',
      openMapsReviews: 'Veure ressenyes a Google Maps'
    },
    location: {
      tag: 'ON SOM',
      title: 'Seu a Terrassa i Àrea de Servei',
      subtitle: 'Situats a Carrer de Sant Sebastià (Terrassa) amb atenció ràpida a tot el Vallès.',
      addressTitle: 'Adreça:',
      serviceAreaTitle: 'Municipis habituals:',
      hoursTitle: 'Horari:',
      hoursText: 'Dilluns a Divendres: 08:00 - 19:30 | Dissabtes: 09:00 - 14:00',
      emergencyText: 'Servei d’assistència tècnica disponible',
      directionsBtn: 'Veure a Google Maps',
      nearbyEstimates: 'Temps d’arribada estimats:'
    },
    faq: {
      tag: 'PREGUNTES FREQÜENTS',
      title: 'Dubtes Habituals sobre Climatització',
      subtitle: 'Respostes clares per ajudar-te a escollir el millor sistema.'
    },
    contact: {
      tag: 'CONTACTE DIRECTE',
      title: 'Demana el teu Pressupost sense Compromís',
      subtitle: 'Indica’ns què necessites i et respondrem ràpidament amb una proposta adaptada.',
      nameLabel: 'Nom *',
      phoneLabel: 'Telèfon *',
      emailLabel: 'Correu Electrònic *',
      townLabel: 'Població / Ciutat *',
      serviceTypeLabel: 'Servei que necessites:',
      messageLabel: 'Detalls o comentaris:',
      submitBtn: 'Enviar Consulta',
      sendingBtn: 'Enviant...',
      successTitle: 'Consulta Rebuda!',
      successDesc: 'Ens posarem en contacte amb tu amb la màxima celeritat per coordinar la visita o facilitar-te el pressupost.',
      orDirectContact: 'O truca’ns directament:'
    },
    footer: {
      brandDesc: 'BCN Clima és empresa instal·ladora autoritzada de climatització, aerotèrmia, calderes i fontaneria a Terrassa i la província de Barcelona.',
      quickLinks: 'Seccions',
      legalTitle: 'Informació Legal',
      privacyPolicy: 'Política de Privacitat',
      legalNotice: 'Avís Legal i RITE',
      cookiesPolicy: 'Política de Cookies',
      coverageCities: 'Zona de Cobertura:',
      rights: 'Tots els drets reservats. Empresa homologada RITE.'
    }
  },
  en: {
    nav: {
      services: 'Services',
      engine3D: '3D Unit',
      calculator: 'Thermal Calculator',
      process: 'How We Work',
      gallery: 'Installations',
      reviews: 'Reviews',
      location: 'Location',
      faq: 'FAQ',
      contact: 'Contact',
      callNow: 'Call 930 256 239',
      requestQuote: 'Get a Quote'
    },
    hero: {
      badge: 'Certified RITE Contractors • Terrassa & Barcelona',
      titleHighlight: 'HVAC & Aerothermal Systems',
      titleRest: 'with Maximum Efficiency',
      subtitle: 'Professional installation and certified maintenance of air conditioning, aerothermal heat pumps, boilers, and specialized plumbing in Terrassa and Barcelona. Transparent quotes and official warranties.',
      ctaPrimary: 'Calculate Quote',
      ctaSecondary: 'View 3D Unit',
      ctaWhatsapp: 'Direct WhatsApp',
      stat1: '16+ Years',
      stat1Sub: 'Technical experience in Vallès',
      stat2: 'A+++',
      stat2Sub: 'Top energy efficiency class',
      stat3: '4.9 ★',
      stat3Sub: 'Verified Google Maps rating',
      stat4: '24-48h',
      stat4Sub: 'Fast, clean installation'
    },
    interactive3D: {
      tag: 'WHAT IS THIS EQUIPMENT?',
      title: 'Outdoor Heat Pump & Air Conditioning Unit',
      desc: 'This is the outdoor unit installed on your balcony, roof, or patio. It provides cold air in summer and heating in winter by absorbing exterior air energy with up to 70% electricity savings.',
      coolingMode: '❄️ Summer (Cooling)',
      heatingMode: '🔥 Winter (Heating)',
      ecoMode: '🌱 Eco Mode A+++',
      fanLabel: 'Silent Inverter Fan (28 dB)',
      compLabel: 'Inverter Compressor R32',
      copperLabel: 'Copper Heat Exchanger',
      targetTemp: 'Target Temp',
      airflowSpeed: 'Speed',
      copLabel: 'Efficiency',
      refrigerantLabel: 'Eco Refrigerant',
      noiseLabel: 'Sound Level',
      interactiveHint: 'Click and drag with mouse or swipe with finger to inspect the equipment in 360°'
    },
    calculator: {
      tag: 'QUICK ESTIMATOR',
      title: 'Calculate Cooling Power & Estimated Savings',
      subtitle: 'Enter your room or home surface area to get a quick estimate of required cooling power and potential annual bill savings.',
      surfaceLabel: 'Room surface area:',
      propertyTypeLabel: 'Property type:',
      types: {
        apartment: 'Apartment / Flat',
        penthouse: 'Penthouse / Top Floor',
        house: 'Detached House / Villa',
        office: 'Commercial Space / Office'
      },
      insulationLabel: 'Thermal insulation:',
      insulations: {
        high: 'High (Double-glazed modern windows)',
        medium: 'Standard (Standard construction)',
        low: 'Low (Older building with basic insulation)'
      },
      orientationLabel: 'Sun exposure:',
      orientations: {
        south: 'South (Sunny in summer)',
        north: 'North (Shaded / Cool)',
        mixed: 'Mixed'
      },
      resultTitle: 'Recommended Power Estimate',
      coolingPower: 'Recommended Cooling Power:',
      thermalPowerKw: 'Thermal Power:',
      recommendedUnit: 'Suggested System:',
      annualSavings: 'Estimated Annual Savings:',
      co2Saved: 'CO2 Reduction:',
      ctaUseData: 'Request Quote with these Details'
    },
    services: {
      tag: 'OUR SERVICES',
      title: 'Professional HVAC & Plumbing Solutions',
      subtitle: 'Complete installation, diagnostics, and repairs with licensed technicians and leading global brands.',
      viewSpecs: 'View technical details',
      warrantyTag: 'Full official warranty',
      brandsIncluded: 'Official brand partners:'
    },
    process: {
      tag: 'SIMPLE PROCESS',
      title: 'Installation in 5 Clear Steps',
      subtitle: 'No surprises. Fixed quotes, tidy execution, and official certification included.',
      steps: [
        {
          num: '01',
          title: 'Free In-Situ Assessment',
          desc: 'We visit your property in Terrassa or nearby towns to assess dimensions and technical needs at no cost.'
        },
        {
          num: '02',
          title: 'Fixed All-Inclusive Quote',
          desc: 'We provide a clear proposal with the ideal equipment and final transparent pricing.'
        },
        {
          num: '03',
          title: 'Fast & Clean Installation',
          desc: 'Completed within 1-2 working days, protecting furniture and leaving the space clean.'
        },
        {
          num: '04',
          title: 'Official RITE Certificate',
          desc: 'We certify the installation according to regional safety standards and regulations.'
        },
        {
          num: '05',
          title: 'Handover & Ongoing Support',
          desc: 'We set up smart Wi-Fi controls and provide direct manufacturer and labor warranties.'
        }
      ]
    },
    gallery: {
      tag: 'PORTFOLIO',
      title: 'Real Installations',
      subtitle: 'Recent photographs from projects across Terrassa, Sabadell, and the Vallès area.',
      allTab: 'All',
      aerotermiaTab: 'Aerothermal',
      acTab: 'Air Conditioning',
      plumbingTab: 'Boilers & Plumbing'
    },
    trust: {
      tag: 'PEACE OF MIND',
      title: 'Official Certifications',
      cards: [
        {
          title: 'Certified RITE Contractor',
          desc: 'Officially registered thermal installation company in Catalonia.'
        },
        {
          title: 'Certified Fluorinated Gases',
          desc: 'Certified technicians ensuring leak-free and environmentally sound setups.'
        },
        {
          title: 'Official Brand Partner',
          desc: 'Direct partner of Daikin, Mitsubishi Electric, Panasonic, and Vaillant.'
        },
        {
          title: '5-Year Guarantee',
          desc: 'Comprehensive warranty covering both parts and professional labor.'
        }
      ]
    },
    reviews: {
      tag: 'REAL REVIEWS',
      title: 'Customer Feedback in Terrassa',
      subtitle: 'Authentic reviews from verified clients on Google Maps.',
      openMapsReviews: 'View reviews on Google Maps'
    },
    location: {
      tag: 'FIND US',
      title: 'Terrassa Headquarters & Service Area',
      subtitle: 'Located at Carrer de Sant Sebastià (Terrassa) with rapid response across Vallès Occidental.',
      addressTitle: 'Address:',
      serviceAreaTitle: 'Service Cities:',
      hoursTitle: 'Opening Hours:',
      hoursText: 'Monday to Friday: 08:00 - 19:30 | Saturday: 09:00 - 14:00',
      emergencyText: 'Emergency technical support available',
      directionsBtn: 'Open in Google Maps',
      nearbyEstimates: 'Estimated driving times:'
    },
    faq: {
      tag: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Clear answers to help you choose the best heating and cooling system.'
    },
    contact: {
      tag: 'DIRECT CONTACT',
      title: 'Request a Free Quote',
      subtitle: 'Let us know what you need, and we will get back to you promptly with an honest proposal.',
      nameLabel: 'Full Name *',
      phoneLabel: 'Phone Number *',
      emailLabel: 'Email Address *',
      townLabel: 'City / Town *',
      serviceTypeLabel: 'Service needed:',
      messageLabel: 'Project details:',
      submitBtn: 'Send Request',
      sendingBtn: 'Sending...',
      successTitle: 'Request Received!',
      successDesc: 'Our technical team will review your details and contact you shortly to arrange a free visit or quote.',
      orDirectContact: 'Or reach us directly via:'
    },
    footer: {
      brandDesc: 'BCN Clima is a certified HVAC, aerothermal, boiler, and plumbing contractor based in Terrassa, serving Barcelona and the Vallès region.',
      quickLinks: 'Navigation',
      legalTitle: 'Legal Information',
      privacyPolicy: 'Privacy Policy',
      legalNotice: 'Legal Notice & RITE',
      cookiesPolicy: 'Cookies Policy',
      coverageCities: 'Coverage Area:',
      rights: 'All rights reserved. Certified RITE contractor.'
    }
  }
};

export const SERVICES_BY_LANG: Record<'es' | 'ca' | 'en', ServiceItem[]> = {
  es: [
    {
      id: 'aerotermia',
      title: 'Aerotermia y Suelo Radiante',
      shortDesc: 'Bombas de calor de alta eficiencia para calefacción en invierno, refrigeración en verano y agua caliente todo el año.',
      fullDesc: 'Sustituye calderas tradicionales de gas o gasóleo con aerotermia renovable. Proporciona hasta un 70% de ahorro energético, compatible con suelo radiante o fancoils.',
      iconName: 'Flame',
      features: [
        'Ahorro de hasta el 70% en consumo energético',
        'Eficiencia A+++ con COP de hasta 4.85',
        'Compatible con energía solar fotovoltaica',
        'Ayudas y deducciones fiscales disponibles'
      ],
      specs: [
        { label: 'Potencias', value: '4 kW a 16 kW' },
        { label: 'Temperatura Impulsión', value: 'Hasta 65°C' },
        { label: 'Refrigerante', value: 'R32 / R290 Ecológico' },
        { label: 'Nivel Sonoro', value: 'Desde 28 dB(A)' }
      ],
      tag: 'Alta Eficiencia',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Clase A+++'
    },
    {
      id: 'aire-acondicionado',
      title: 'Aire Acondicionado Split & Conductos',
      shortDesc: 'Instalación de splits 1x1, multi-split y conductos con tecnología Inverter silenciosa y control Wi-Fi.',
      fullDesc: 'Climatización para viviendas y comercios. Instalación de conductos invisibles con rejillas motorizadas Airzone para regular la temperatura estancia por estancia.',
      iconName: 'Wind',
      features: [
        'Presión sonora de tan solo 19 dB(A)',
        'Filtros de purificación de aire avanzados',
        'Control desde smartphone por Wi-Fi',
        'Consumo reducido con tecnología Inverter'
      ],
      specs: [
        { label: 'Potencias', value: '2.000 a 10.000 Frigorías' },
        { label: 'Eficiencia', value: 'Hasta A+++ SEER 8.7' },
        { label: 'Garantía', value: '5 años en compresor' },
        { label: 'Instalación', value: 'En 1 jornada laboral' }
      ],
      tag: 'Más Demandado',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Clase A+++'
    },
    {
      id: 'calderas-calefaccion',
      title: 'Calderas de Condensación & Calefacción',
      shortDesc: 'Sustitución de calderas de gas por modelos de condensación de máxima eficiencia energética.',
      fullDesc: 'Instalación de calderas murales Baxi, Vaillant y Saunier Duval. Retirada del equipo antiguo, conexión hidráulica y boletín oficial sellado.',
      iconName: 'Zap',
      features: [
        'Rendimiento estacional superior al 108%',
        'Agua caliente instantánea sin esperas',
        'Termostato inalámbrico modulante incluido',
        'Cumplimiento de normativa RITE'
      ],
      specs: [
        { label: 'Potencias', value: '24 kW a 34 kW' },
        { label: 'Caudal ACS', value: 'Hasta 18 l/min' },
        { label: 'Emisiones', value: 'Bajo NOx Clase 6' },
        { label: 'Tiempo montaje', value: '5-6 horas' }
      ],
      tag: 'Plan Renove',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Rendimiento 108%'
    },
    {
      id: 'fontaneria-tecnica',
      title: 'Fontanería & Tratamiento de Agua',
      shortDesc: 'Instalaciones de fontanería, descalcificadores automáticos contra la cal de Terrassa y osmosis inversa.',
      fullDesc: 'Soluciones integrales de agua potable y saneamiento. Instalación de descalcificadores volumétricos que protegen tuberías y electrodomésticos.',
      iconName: 'Droplets',
      features: [
        'Protección total contra la cal del agua local',
        'Osmosis de flujo directo para agua pura',
        'Tuberías multicapa de máxima durabilidad',
        'Boletines y certificaciones de agua'
      ],
      specs: [
        { label: 'Materiales', value: 'Multicapa PEX / Cobre' },
        { label: 'Prueba presión', value: '10 bar de estanqueidad' },
        { label: 'Descalcificador', value: 'Bajo consumo de sal' },
        { label: 'Servicio', value: 'Rápido en Terrassa' }
      ],
      tag: 'Especialidad Local',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Grado Sanitario'
    },
    {
      id: 'climatizacion-comercial',
      title: 'Climatización Comercial & Oficinas',
      shortDesc: 'Sistemas VRV/VRF y climatización para oficinas, tiendas, naves y locales de restauración.',
      fullDesc: 'Proyectos a medida para el sector terciario con zonificación independiente y ventilación mecánica con recuperación de calor.',
      iconName: 'Building2',
      features: [
        'Zonificación por despachos o salas',
        'Ventilación con recuperación de calor',
        'Mantenimiento normativo RITE para empresas',
        'Presupuestos y estudios técnicos'
      ],
      specs: [
        { label: 'Capacidad', value: '15 kW a 100+ kW' },
        { label: 'Control', value: 'Centralizado e individual' },
        { label: 'Normativa', value: 'RITE IT 1.1 y 1.2' },
        { label: 'Soporte', value: 'Preventivo y correctivo' }
      ],
      tag: 'Empresas & Locales',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Uso Intensivo'
    },
    {
      id: 'mantenimiento-rite',
      title: 'Mantenimiento & Asistencia Técnica',
      shortDesc: 'Revisiones periódicas obligatorias RITE, limpieza de filtros, higienización y recarga de refrigerante.',
      fullDesc: 'Mantén tus equipos con el consumo óptimo y alarga su vida útil. Atención rápida ante averías en Terrassa y comarca.',
      iconName: 'ShieldCheck',
      features: [
        'Higienización y desinfección de baterías',
        'Comprobación de presiones y estanqueidad',
        'Revisión oficial anual RITE sellada',
        'Técnicos frigoristas titulados'
      ],
      specs: [
        { label: 'Respuesta', value: 'Rápida en Terrassa' },
        { label: 'Gases', value: 'R32, R410A, R134a' },
        { label: 'Documentación', value: 'Libro de mantenimiento' },
        { label: 'Planes', value: 'Hogar y Empresa' }
      ],
      tag: 'Técnico Oficial',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Servicio Oficial'
    }
  ],
  ca: [
    {
      id: 'aerotermia',
      title: 'Aerotèrmia i Terra Radiant',
      shortDesc: 'Bombes de calor d’alta eficiència per a calefacció a l’hivern, refrigeració a l’estiu i aigua calenta tot l’any.',
      fullDesc: 'Substitueix calderes tradicionals de gas o gasoil amb aerotèrmia renovable. Proporciona fins a un 70% d’estalvi energètic, compatible amb terra radiant o fancoils.',
      iconName: 'Flame',
      features: [
        'Estalvi de fins al 70% en consum energètic',
        'Eficiència A+++ amb COP de fins a 4.85',
        'Compatible amb energia solar fotovoltaica',
        'Ajuts i deduccions fiscals disponibles'
      ],
      specs: [
        { label: 'Potències', value: '4 kW a 16 kW' },
        { label: 'Temperatura Impulsió', value: 'Fins a 65°C' },
        { label: 'Refrigerant', value: 'R32 / R290 Ecològic' },
        { label: 'Nivell Sonor', value: 'Des de 28 dB(A)' }
      ],
      tag: 'Alta Eficiència',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Classe A+++'
    },
    {
      id: 'aire-acondicionado',
      title: 'Aire Condicionat Split & Conductes',
      shortDesc: 'Instal·lació de splits 1x1, multi-split i conductes amb tecnologia Inverter silenciosa i control Wi-Fi.',
      fullDesc: 'Climatització per a habitatges i comerços. Instal·lació de conductes invisibles amb reixetes motoritzades Airzone per regular la temperatura estança per estança.',
      iconName: 'Wind',
      features: [
        'Pressió sonora de només 19 dB(A)',
        'Filtres de purificació d’aire avançats',
        'Control des de smartphone per Wi-Fi',
        'Consum reduït amb tecnologia Inverter'
      ],
      specs: [
        { label: 'Potències', value: '2.000 a 10.000 Frigories' },
        { label: 'Eficiència', value: 'Fins a A+++ SEER 8.7' },
        { label: 'Garantia', value: '5 anys en compressor' },
        { label: 'Instal·lació', value: 'En 1 jornada laboral' }
      ],
      tag: 'Més Sol·licitat',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Classe A+++'
    },
    {
      id: 'calderas-calefaccion',
      title: 'Calderes de Condensació & Calefacció',
      shortDesc: 'Substitució de calderes de gas per models de condensació de màxima eficiència energètica.',
      fullDesc: 'Instal·lació de calderes murals Baxi, Vaillant i Saunier Duval. Retirada de l’equip antic, connexió hidràulica i butlletí oficial segellat.',
      iconName: 'Zap',
      features: [
        'Rendiment estacional superior al 108%',
        'Aigua calenta instantània sense esperes',
        'Termòstat sense fils modulant inclòs',
        'Compliment de normativa RITE'
      ],
      specs: [
        { label: 'Potències', value: '24 kW a 34 kW' },
        { label: 'Cabal ACS', value: 'Fins a 18 l/min' },
        { label: 'Emissions', value: 'Baix NOx Classe 6' },
        { label: 'Temps muntatge', value: '5-6 hores' }
      ],
      tag: 'Pla Renove',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Rendiment 108%'
    },
    {
      id: 'fontaneria-tecnica',
      title: 'Fontaneria & Tractament d’Aigua',
      shortDesc: 'Instal·lacions de fontaneria, descalcificadors automàtics contra la calç de Terrassa i osmosi inversa.',
      fullDesc: 'Solucions integrals d’aigua potable i sanejament. Instal·lació de descalcificadors volumètrics que protegeixen canonades i electrodomèstics.',
      iconName: 'Droplets',
      features: [
        'Protecció total contra la calç de l’aigua local',
        'Osmosi de flux directe per a aigua pura',
        'Canonades multicapa de màxima durabilitat',
        'Butlletins i certificacions d’aigua'
      ],
      specs: [
        { label: 'Materials', value: 'Multicapa PEX / Coure' },
        { label: 'Prova pressió', value: '10 bar d’estanquitat' },
        { label: 'Descalcificador', value: 'Baix consum de sal' },
        { label: 'Servei', value: 'Ràpid a Terrassa' }
      ],
      tag: 'Especialitat Local',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Grau Sanitari'
    },
    {
      id: 'climatizacion-comercial',
      title: 'Climatització Comercial & Oficines',
      shortDesc: 'Sistemes VRV/VRF i climatització per a oficines, botigues, naus i locals de restauració.',
      fullDesc: 'Projectes a mida per al sector terciari amb zonificació independent i ventilació mecànica amb recuperació de calor.',
      iconName: 'Building2',
      features: [
        'Zonificació per despatxos o sales',
        'Ventilació amb recuperació de calor',
        'Manteniment normatiu RITE per a empreses',
        'Pressupostos i estudis tècnics'
      ],
      specs: [
        { label: 'Capacitat', value: '15 kW a 100+ kW' },
        { label: 'Control', value: 'Centralitzat i individual' },
        { label: 'Normativa', value: 'RITE IT 1.1 i 1.2' },
        { label: 'Suport', value: 'Preventiu i correctiu' }
      ],
      tag: 'Empreses & Locals',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Ús Intensiu'
    },
    {
      id: 'mantenimiento-rite',
      title: 'Manteniment & Assistència Tècnica',
      shortDesc: 'Revisions periòdiques obligatòries RITE, neteja de filtres, higienització i recàrrega de refrigerant.',
      fullDesc: 'Mantingues els teus equips amb el consum òptim i allarga’n la vida útil. Atenció ràpida davant d’avaries a Terrassa i comarca.',
      iconName: 'ShieldCheck',
      features: [
        'Higienització i desinfecció de bateries',
        'Comprovació de pressions i estanquitat',
        'Revisió oficial anual RITE segellada',
        'Tècnics frigoristes titulats'
      ],
      specs: [
        { label: 'Resposta', value: 'Ràpida a Terrassa' },
        { label: 'Gasos', value: 'R32, R410A, R134a' },
        { label: 'Documentació', value: 'Llibre de manteniment' },
        { label: 'Plans', value: 'Llar i Empresa' }
      ],
      tag: 'Tècnic Oficial',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Servei Oficial'
    }
  ],
  en: [
    {
      id: 'aerotermia',
      title: 'Aerothermal & Underfloor Heating',
      shortDesc: 'High-efficiency heat pumps for winter heating, summer cooling, and year-round domestic hot water.',
      fullDesc: 'Replace traditional gas or oil boilers with renewable aerothermal energy. Provides up to 70% energy savings, fully compatible with underfloor radiant heating or fancoils.',
      iconName: 'Flame',
      features: [
        'Up to 70% reduction in heating energy bills',
        'A+++ efficiency rating with COP up to 4.85',
        'Compatible with solar photovoltaic systems',
        'Subsidies and tax deductions available'
      ],
      specs: [
        { label: 'Power Range', value: '4 kW to 16 kW' },
        { label: 'Water Temp', value: 'Up to 65°C' },
        { label: 'Refrigerant', value: 'Eco R32 / R290' },
        { label: 'Sound Level', value: 'From 28 dB(A)' }
      ],
      tag: 'High Efficiency',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Class A+++'
    },
    {
      id: 'aire-acondicionado',
      title: 'Air Conditioning Split & Ducted',
      shortDesc: 'Installation of 1x1 splits, multi-splits, and concealed ducted systems with whisper-quiet Inverter technology.',
      fullDesc: 'Heating and cooling for residential and commercial spaces. Hidden ducted systems with motorized Airzone dampeners for room-by-room climate control.',
      iconName: 'Wind',
      features: [
        'Ultra-quiet sound levels from 19 dB(A)',
        'Advanced anti-allergen air purification filters',
        'Smart smartphone control via Wi-Fi',
        'Reduced power consumption via Inverter drive'
      ],
      specs: [
        { label: 'Capacities', value: '2.0 kW to 10.0 kW' },
        { label: 'Efficiency', value: 'Up to A+++ SEER 8.7' },
        { label: 'Warranty', value: '5 years on compressor' },
        { label: 'Installation', value: 'Completed in 1 working day' }
      ],
      tag: 'Most Popular',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Class A+++'
    },
    {
      id: 'calderas-calefaccion',
      title: 'Condensing Boilers & Heating',
      shortDesc: 'Replacement of older gas boilers with top-efficiency condensing units to maximize fuel economy.',
      fullDesc: 'Installation of high-efficiency wall-mounted condensing boilers (Baxi, Vaillant, Saunier Duval). Safe removal of old units, hydraulic connection, and official gas certification.',
      iconName: 'Zap',
      features: [
        'Seasonal efficiency over 108%',
        'Instantaneous hot water with micro-accumulation',
        'Modulating wireless thermostat included',
        'Full compliance with safety and RITE codes'
      ],
      specs: [
        { label: 'Power Options', value: '24 kW to 34 kW' },
        { label: 'DHW Flow Rate', value: 'Up to 18 l/min' },
        { label: 'Emissions', value: 'Low NOx Class 6' },
        { label: 'Mounting Time', value: '5-6 hours' }
      ],
      tag: 'Boiler Renovation',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: '108% Efficiency'
    },
    {
      id: 'fontaneria-tecnica',
      title: 'Plumbing & Water Treatment',
      shortDesc: 'Plumbing installations, volumetric water softeners against hard water, and reverse osmosis units.',
      fullDesc: 'Complete potable water and drainage plumbing. Automatic softeners designed to prevent limescale buildup across Terrassa and Vallès piping and appliances.',
      iconName: 'Droplets',
      features: [
        'Complete protection against local hard water',
        'Direct-flow reverse osmosis for mineralized water',
        'Long-lasting multilayer PEX piping',
        'Official water certification bulletins'
      ],
      specs: [
        { label: 'Materials', value: 'PEX Multilayer / Copper' },
        { label: 'Pressure Test', value: '10 bar certified sealing' },
        { label: 'Softener', value: 'Low salt consumption' },
        { label: 'Response', value: 'Prompt service in Terrassa' }
      ],
      tag: 'Local Specialty',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Sanitary Grade'
    },
    {
      id: 'climatizacion-comercial',
      title: 'Commercial HVAC & VRF Systems',
      shortDesc: 'VRV/VRF multi-zone air systems for commercial premises, retail shops, offices, and restaurants.',
      fullDesc: 'Tailored commercial engineering with independent zone climate control, heat recovery, and mechanical heat exchange ventilation.',
      iconName: 'Building2',
      features: [
        'Zoned climate control per office or room',
        'Mechanical ventilation with heat recovery (VMC)',
        'Mandatory commercial RITE maintenance contracts',
        'Free technical studies and proposals'
      ],
      specs: [
        { label: 'Capacity', value: '15 kW to 100+ kW' },
        { label: 'Management', value: 'Centralized & remote' },
        { label: 'Standards', value: 'RITE IT 1.1 & 1.2' },
        { label: 'Support', value: 'Preventive and corrective' }
      ],
      tag: 'Commercial & Retail',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Heavy Duty'
    },
    {
      id: 'mantenimiento-rite',
      title: 'Maintenance & Technical Service',
      shortDesc: 'Mandatory RITE periodic inspections, filter sanitization, leak diagnostics, and refrigerant top-ups.',
      fullDesc: 'Ensure your systems run with minimal energy consumption and extend their lifespan. Rapid troubleshooting across Terrassa and Vallès.',
      iconName: 'ShieldCheck',
      features: [
        'Coil chemical sanitization and antibacterial treatment',
        'Pressure, electrical, and gas leak testing',
        'Official annual RITE maintenance logbook stamped',
        'Certified licensed refrigeration engineers'
      ],
      specs: [
        { label: 'Response', value: 'Fast response in Terrassa' },
        { label: 'Gases', value: 'R32, R410A, R134a' },
        { label: 'Certification', value: 'Official RITE logbook' },
        { label: 'Contracts', value: 'Residential & Corporate' }
      ],
      tag: 'Official Service',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80',
      efficiencyBadge: 'Certified Service'
    }
  ]
};

export const REVIEWS_BY_LANG: Record<'es' | 'ca' | 'en', ReviewItem[]> = {
  es: [
    {
      id: 'rev-1',
      author: 'Jordi Masip Rovira',
      location: 'Terrassa (Segle XX)',
      date: 'Hace 3 semanas',
      rating: 5,
      service: 'Instalación de Aerotermia con Suelo Radiante',
      comment: 'Trabajo impecable de BCN Clima. Nos cambiaron la caldera antigua por una bomba de calor aerotérmica Daikin con suelo radiante. Muy formales, limpios y tramitaron las ayudas. La factura eléctrica ha bajado notablemente.',
      verified: true
    },
    {
      id: 'rev-2',
      author: 'Marta Soler Galí',
      location: 'Terrassa (Can Roca)',
      date: 'Hace 1 mes',
      rating: 5,
      service: 'Aire Acondicionado por Conductos',
      comment: 'Contactamos por su cercanía en Terrassa y la experiencia fue inmejorable. Nos montaron aire por conductos con sistema Airzone en todo el piso en menos de dos días. Todo limpio y funcionando a la perfección.',
      verified: true
    },
    {
      id: 'rev-3',
      author: 'Carles Puigdemont V.',
      location: 'Sabadell (Centre)',
      date: 'Hace 2 meses',
      rating: 5,
      service: 'Sustitución Caldera de Condensación Baxi',
      comment: 'Se nos averió la caldera en invierno y nos atendieron el mismo día. Nos asesoraron sobre una caldera de condensación eficiente y al día siguiente por la mañana ya estaba montada con el boletín oficial de gas sellado.',
      verified: true
    },
    {
      id: 'rev-4',
      author: 'Núria Casanovas Pons',
      location: 'Sant Cugat del Vallès',
      date: 'Hace 3 meses',
      rating: 5,
      service: 'Instalación Multi-Split 3x1 Mitsubishi',
      comment: 'Buscábamos un equipo silencioso para los dormitorios. Los técnicos de BCN Clima nos recomendaron Mitsubishi Electric y acertaron: no se oye nada por la noche y las canalizaciones quedaron muy discretas.',
      verified: true
    },
    {
      id: 'rev-5',
      author: 'Albert Forrellat',
      location: 'Terrassa (Les Fonts)',
      date: 'Hace 4 meses',
      rating: 5,
      service: 'Fontanería Integral y Descalcificador',
      comment: 'El agua en Terrassa tiene mucha cal. Nos instalaron un descalcificador y un equipo de osmosis directa. La mejoría en la grifería y en el sabor del agua ha sido inmediata. Muy buenos profesionales.',
      verified: true
    }
  ],
  ca: [
    {
      id: 'rev-1',
      author: 'Jordi Masip Rovira',
      location: 'Terrassa (Segle XX)',
      date: 'Fa 3 setmanes',
      rating: 5,
      service: 'Instal·lació d’Aerotèrmia amb Terra Radiant',
      comment: 'Feina impecable de BCN Clima. Ens van canviar la caldera antiga per una bomba de calor aerotèrmica Daikin amb terra radiant. Molt formals, nets i van tramitar els ajuts. La factura elèctrica ha baixat notablement.',
      verified: true
    },
    {
      id: 'rev-2',
      author: 'Marta Soler Galí',
      location: 'Terrassa (Can Roca)',
      date: 'Fa 1 mes',
      rating: 5,
      service: 'Aire Condicionat per Conductes',
      comment: 'Vam contactar per la seva proximitat a Terrassa i l’experiència va ser immillorable. Ens van muntar aire per conductes amb sistema Airzone a tot el pis en menys de dos dies. Tot net i funcionant a la perfecció.',
      verified: true
    },
    {
      id: 'rev-3',
      author: 'Carles Puigdemont V.',
      location: 'Sabadell (Centre)',
      date: 'Fa 2 mesos',
      rating: 5,
      service: 'Substitució Caldera de Condensació Baxi',
      comment: 'Se’ns va espatllar la caldera a l’hivern i ens van atendre el mateix dia. Ens van assessorar sobre una caldera de condensació eficient i l’endemà al matí ja estava muntada amb el butlletí oficial de gas segellat.',
      verified: true
    },
    {
      id: 'rev-4',
      author: 'Núria Casanovas Pons',
      location: 'Sant Cugat del Vallès',
      date: 'Fa 3 mesos',
      rating: 5,
      service: 'Instal·lació Multi-Split 3x1 Mitsubishi',
      comment: 'Buscàvem un equip silenciós per als dormitoris. Els tècnics de BCN Clima ens van recomanar Mitsubishi Electric i van encertar: no se sent res a la nit i les canalitzacions van quedar molt discretes.',
      verified: true
    },
    {
      id: 'rev-5',
      author: 'Albert Forrellat',
      location: 'Terrassa (Les Fonts)',
      date: 'Fa 4 mesos',
      rating: 5,
      service: 'Fontaneria Integral i Descalcificador',
      comment: 'L’aigua a Terrassa té molta calç. Ens van instal·lar un descalcificador i un equip d’osmosi directa. La millora en l’aixeteria i en el gust de l’aigua ha estat immediata. Molt bons professionals.',
      verified: true
    }
  ],
  en: [
    {
      id: 'rev-1',
      author: 'Jordi Masip Rovira',
      location: 'Terrassa (Segle XX)',
      date: '3 weeks ago',
      rating: 5,
      service: 'Aerothermal Heat Pump & Underfloor Heating',
      comment: 'Impeccable work by BCN Clima. They replaced our old boiler with a Daikin aerothermal heat pump and radiant underfloor system. Very punctual, tidy, and managed the regional subsidies. Our electric bill dropped significantly.',
      verified: true
    },
    {
      id: 'rev-2',
      author: 'Marta Soler Galí',
      location: 'Terrassa (Can Roca)',
      date: '1 month ago',
      rating: 5,
      service: 'Ducted Air Conditioning System',
      comment: 'We reached out because of their local workshop in Terrassa and the experience was top-notch. They installed concealed ducted AC with Airzone controls throughout the apartment in under two days. Clean and works flawlessly.',
      verified: true
    },
    {
      id: 'rev-3',
      author: 'Carles Puigdemont V.',
      location: 'Sabadell (Centre)',
      date: '2 months ago',
      rating: 5,
      service: 'Condensing Boiler Replacement',
      comment: 'Our old boiler broke down in winter and they responded the same day. They advised us on an efficient condensing model and by the next morning it was fully installed and officially certified.',
      verified: true
    },
    {
      id: 'rev-4',
      author: 'Núria Casanovas Pons',
      location: 'Sant Cugat del Vallès',
      date: '3 months ago',
      rating: 5,
      service: 'Multi-Split 3x1 Air Conditioning',
      comment: 'We were looking for ultra-quiet units for the bedrooms. BCN Clima recommended Mitsubishi Electric and it was the right call: completely silent at night and neat exterior trunking.',
      verified: true
    },
    {
      id: 'rev-5',
      author: 'Albert Forrellat',
      location: 'Terrassa (Les Fonts)',
      date: '4 months ago',
      rating: 5,
      service: 'Plumbing & Water Softener System',
      comment: 'Water in Terrassa is very hard with high limescale. They installed a water softener and a reverse osmosis system. The water quality and shower feeling improved immediately. Great professionals.',
      verified: true
    }
  ]
};

export const FAQS_BY_LANG: Record<'es' | 'ca' | 'en', FaqItem[]> = {
  es: [
    {
      category: 'Aerotermia y Ahorro',
      question: '¿Cuánto puedo ahorrar sustituyendo mi caldera de gas por aerotermia?',
      answer: 'El ahorro habitual en una vivienda en Terrassa o el Vallès se sitúa entre el 50% y el 70% frente a calderas tradicionales de gas o gasóleo, gracias a su alto coeficiente de rendimiento (COP de 4 a 5).'
    },
    {
      category: 'Subvenciones',
      question: '¿Hay subvenciones o deducciones fiscales disponibles?',
      answer: 'Sí. Las instalaciones de aerotermia pueden optar a deducciones de IRPF de hasta el 40% y ayudas Next Generation por reducción de consumo no renovable. En BCN Clima emitimos los certificados necesarios.'
    },
    {
      category: 'Plazos de Instalación',
      question: '¿Cuánto tiempo dura la instalación de un aire acondicionado o aerotermia?',
      answer: 'Un aire acondicionado Split se instala habitualmente en 1 día laboral (4-8 horas). Un sistema de aerotermia con agua caliente sanitaria suele completarse en 1 o 2 días laborables.'
    },
    {
      category: 'Certificado RITE',
      question: '¿Emitís el certificado oficial RITE y boletín de la Generalitat?',
      answer: 'Sí. Somos empresa instaladora autorizada RITE. Todas nuestras instalaciones incluyen memoria técnica, prueba de estanqueidad y el Certificado de Instalación Térmica oficial registrado.'
    },
    {
      category: 'Nivel Sonoro',
      question: '¿Son ruidosas las unidades exteriores?',
      answer: 'No. Los equipos Inverter de marcas líderes como Daikin o Mitsubishi emiten entre 28 y 38 dB(A) a 3 metros, cumpliendo holgadamente las ordenanzas acústicas de Terrassa y comunidades de vecinos.'
    },
    {
      category: 'Garantía',
      question: '¿Qué garantía tienen las instalaciones?',
      answer: 'Ofrecemos hasta 5 años de garantía completa: la garantía oficial del fabricante de los equipos más la garantía propia de BCN Clima en mano de obra e instalación.'
    }
  ],
  ca: [
    {
      category: 'Aerotèrmia i Estalvi',
      question: 'Quant puc estalviar substituint la caldera de gas per aerotèrmia?',
      answer: 'L’estalvi habitual en un habitatge a Terrassa o al Vallès se situa entre el 50% i el 70% respecte a calderes tradicionals de gas o gasoil, gràcies al seu alt coeficient de rendiment (COP de 4 a 5).'
    },
    {
      category: 'Subvencions',
      question: 'Hi ha subvencions o deduccions fiscals disponibles?',
      answer: 'Sí. Les instal·lacions d’aerotèrmia poden optar a deduccions d’IRPF de fins al 40% i ajuts Next Generation per reducció de consum no renovable. A BCN Clima emetem els certificats necessaris.'
    },
    {
      category: 'Terminis d’Instal·lació',
      question: 'Quant de temps dura la instal·lació d’un aire condicionat o aerotèrmia?',
      answer: 'Un aire condicionat Split s’instal·la habitualment en 1 dia laboral (4-8 hores). Un sistema d’aerotèrmia amb aigua calenta sanitària se sol completar en 1 o 2 dies laborables.'
    },
    {
      category: 'Certificat RITE',
      question: 'Emeteu el certificat oficial RITE i butlletí de la Generalitat?',
      answer: 'Sí. Som empresa instal·ladora autoritzada RITE. Totes les nostres instal·lacions inclouen memòria tècnica, prova d’estanquitat i el Certificat d’Instal·lació Tèrmica oficial registrat.'
    },
    {
      category: 'Nivell Sonor',
      question: 'Són sorolloses les unitats exteriors?',
      answer: 'No. Els equips Inverter de marques líders com Daikin o Mitsubishi emeten entre 28 i 38 dB(A) a 3 metres, complint folgadament les ordenances acústiques de Terrassa i comunitats de veïns.'
    },
    {
      category: 'Garantia',
      question: 'Quina garantia tenen les instal·lacions?',
      answer: 'Oferim fins a 5 anys de garantia completa: la garantia oficial del fabricant dels equips més la garantia pròpia de BCN Clima en mà d’obra i instal·lació.'
    }
  ],
  en: [
    {
      category: 'Aerothermal & Savings',
      question: 'How much can I save by replacing a gas boiler with an aerothermal heat pump?',
      answer: 'Typical household energy bill savings in Terrassa or the Barcelona area range from 50% to 70% compared to traditional gas or oil boilers, driven by a high coefficient of performance (COP 4 to 5).'
    },
    {
      category: 'Subsidies',
      question: 'Are there subsidies or tax deductions available?',
      answer: 'Yes. Aerothermal installations qualify for regional energy efficiency subsidies and up to 40% personal income tax (IRPF) deductions. BCN Clima issues all official energy certificates.'
    },
    {
      category: 'Installation Times',
      question: 'How long does an installation typically take?',
      answer: 'A standard split air conditioner is usually installed in 1 working day (4-8 hours). A complete aerothermal system with hot water storage typically takes 1 to 2 working days.'
    },
    {
      category: 'Official Certification',
      question: 'Do you issue the official RITE installation certificate?',
      answer: 'Yes. We are a registered RITE thermal installation company. Every project includes technical documentation, pressure testing, and the official sealed installation certificate.'
    },
    {
      category: 'Noise Levels',
      question: 'Are outdoor heat pump units noisy?',
      answer: 'No. The premium Inverter units we install (Daikin, Mitsubishi Electric) operate between 28 and 38 dB(A) at 3 meters, easily complying with local Terrassa acoustic ordinances.'
    },
    {
      category: 'Warranty',
      question: 'What warranties are provided?',
      answer: 'We provide up to 5 years of comprehensive coverage: manufacturer warranty on components and compressors, plus BCN Clima warranty on workmanship and piping.'
    }
  ]
};
