// 产品分类数据：6 大真空热处理炉类别
// 规格为行业典型代表值（representative），每台炉按订单工程设计；此声明同步展示于产品页脚注。

export interface SpecRow {
  label: string;
  value: string;
}

export interface SubModel {
  name: string;
  summary: string;
  specs: SpecRow[];
}

export interface Category {
  slug: string;
  icon: 'quench' | 'anneal' | 'temper' | 'sinter' | 'braze' | 'carburizing';
  nav: string;
  title: string;
  heroSummary: string;
  overview: string[];
  features: string[];
  applications: string[];
  models: SubModel[];
}

export const categories: Category[] = [
  {
    slug: 'vacuum-quenching-furnace',
    icon: 'quench',
    nav: 'Quenching',
    title: 'Vacuum Quenching Furnaces',
    heroSummary:
      'High-pressure gas quenching and oil quenching furnaces that harden tool steels and alloys without oxidation, decarburization, or distortion.',
    overview: [
      'Vacuum quenching replaces atmosphere or salt-bath hardening with a clean, controlled process. Parts are heated in vacuum, then cooled under high-pressure gas or quenched in an isolated oil chamber — so surfaces come out bright, with no oxide scale and no carburizing loss.',
      'Our gas quenching furnaces use a high-velocity gas circuit with a heat exchanger to cool the charge rapidly and uniformly, which is essential for through-hardening of high-speed steels, hot-work die steels, and titanium alloys. Oil quenching furnaces place the oil tank under vacuum isolation, letting the charge transfer from the hot chamber into the oil without exposure to air.',
      'Both configurations are available as single-chamber or multi-chamber systems, with loading options from manual front loading to fully automated charging cars for production lines.'
    ],
    features: [
      'High-pressure gas quenching up to 10 bar with N₂, He, Ar, or H₂ mixtures',
      'Vacuum-isolated oil chamber with agitated, temperature-controlled quench oil',
      'Bright, scale-free parts — no post-quench cleaning or straightening',
      'Uniform hardness through the load with adjustable cooling curves',
      'Low distortion thanks to symmetric heating and controlled cooling rates',
      'Recipe-based control with full process data logging and traceability'
    ],
    applications: [
      'Tool & die manufacturing',
      'High-speed steel cutting tools',
      'Aerospace titanium & superalloy parts',
      'Automotive gears and shafts',
      'Fasteners and bearings',
      'Precision machine components'
    ],
    models: [
      {
        name: 'Gas Quenching Vacuum Furnace',
        summary:
          'Single-chamber horizontal furnace with high-pressure gas cooling circuit, for bright hardening of tool steels, stainless steels, and superalloys.',
        specs: [
          { label: 'Max. working temperature', value: '1320 °C (graphite hot zone)' },
          { label: 'Hot zone dimensions', value: '500 × 500 × 800 mm (configurable)' },
          { label: 'Ultimate vacuum', value: '4 × 10⁻³ Pa' },
          { label: 'Pressure rise rate', value: '≤ 0.5 Pa/h' },
          { label: 'Quenching pressure', value: '6 bar N₂ standard (up to 10 bar)' },
          { label: 'Gas cooling options', value: 'N₂ / He / Ar / H₂ mixtures' },
          { label: 'Temperature uniformity', value: '± 5 °C' },
          { label: 'Load capacity', value: 'up to 1000 kg per charge' },
          { label: 'Control system', value: 'PLC + HMI, recipe management, data export' }
        ]
      },
      {
        name: 'Oil Quenching Vacuum Furnace',
        summary:
          'Intermediate-type furnace with a vacuum-isolated oil tank, for martensitic hardening where maximum cooling rate is required.',
        specs: [
          { label: 'Max. working temperature', value: '1200 °C' },
          { label: 'Ultimate vacuum', value: '6 × 10⁻³ Pa' },
          { label: 'Oil tank size', value: '1500 × 600 × 600 mm (configurable)' },
          { label: 'Quenching capacity', value: 'up to 500 kg per charge' },
          { label: 'Oil temperature control', value: '40 – 80 °C, agitated and cooled' },
          { label: 'Transfer time (hot zone → oil)', value: '< 15 s' },
          { label: 'Temperature uniformity', value: '± 5 °C' },
          { label: 'Cooling circuit', value: 'Forced oil circulation with heat exchanger' }
        ]
      }
    ]
  },
  {
    slug: 'vacuum-annealing-furnace',
    icon: 'anneal',
    nav: 'Annealing',
    title: 'Vacuum Annealing Furnaces',
    heroSummary:
      'Bright, stress-free annealing of steels, copper alloys, and precision components in horizontal, vertical, or pit-type configurations.',
    overview: [
      'Vacuum annealing softens, stress-relieves, or recrystallizes metals while keeping surfaces perfectly clean. Because heating takes place in vacuum, no oxidation or discoloration occurs, and degreased, burr-free parts leave the furnace ready for the next operation — no pickling or polishing required.',
      'Furnaces are built in horizontal front-loading, vertical top-loading, or pit configurations to match part geometry and shop layout. Multi-zone heating elements with independent PID control hold temperature uniformity within ± 5 °C across the whole charge.',
      'Typical cycles include bright annealing of stainless steels and copper alloys, stress relief after machining or forming, recrystallization annealing of cold-worked strip and wire, and solution annealing of precipitation-hardening alloys.'
    ],
    features: [
      'Bright, oxide-free surfaces — eliminates pickling and post-cleaning',
      'Horizontal, vertical, and pit-type configurations',
      'Multi-zone heating with ± 5 °C temperature uniformity',
      'Vacuum or partial-pressure (Ar / N₂) operation for volatile alloys',
      'Slow, programmable cooling to avoid re-introducing residual stress',
      'Fully automatic cycle control with recipe storage'
    ],
    applications: [
      'Stainless steel bright annealing',
      'Copper & brass alloy annealing',
      'Cold-rolled strip and wire recrystallization',
      'Stress relief of machined and formed parts',
      'Solution annealing of precipitation-hardening alloys',
      'Capillary and precision tube processing'
    ],
    models: [
      {
        name: 'Horizontal Vacuum Annealing Furnace',
        summary:
          'Front-loading furnace for batch annealing of bars, tubes, and machined parts, with optional loading car for heavier charges.',
        specs: [
          { label: 'Max. working temperature', value: '1200 °C' },
          { label: 'Hot zone dimensions', value: '600 × 600 × 1200 mm (configurable)' },
          { label: 'Ultimate vacuum', value: '4 × 10⁻³ Pa' },
          { label: 'Temperature uniformity', value: '± 5 °C' },
          { label: 'Heating elements', value: 'Graphite felt / metal (Mo, Ta) options' },
          { label: 'Atmosphere', value: 'Vacuum or Ar / N₂ backfill' },
          { label: 'Cooling', value: 'Programmable slow cooling, optional forced gas cooling' }
        ]
      },
      {
        name: 'Vertical / Pit Vacuum Annealing Furnace',
        summary:
          'Top-loading configuration for long shafts, coils, and tall assemblies, minimizing footprint in the shop.',
        specs: [
          { label: 'Max. working temperature', value: '1200 °C' },
          { label: 'Hot zone dimensions', value: 'Ø 800 × 1600 mm (configurable)' },
          { label: 'Ultimate vacuum', value: '4 × 10⁻³ Pa' },
          { label: 'Temperature uniformity', value: '± 5 °C' },
          { label: 'Loading', value: 'Vertical hoist or crane loading' },
          { label: 'Cooling', value: 'Programmable slow cooling to < 100 °C' }
        ]
      }
    ]
  },
  {
    slug: 'vacuum-tempering-furnace',
    icon: 'temper',
    nav: 'Tempering',
    title: 'Vacuum Tempering Furnaces',
    heroSummary:
      'Low-temperature tempering after quenching, with vacuum or protective atmosphere and rapid cooling to prevent temper embrittlement.',
    overview: [
      'Tempering controls the final hardness and toughness of quenched steel, and the atmosphere matters: oxygen and water vapor cause discoloration and surface degradation. Vacuum tempering furnaces keep the charge in vacuum or an inert protective gas, so bright surfaces survive the whole cycle.',
      'Rapid cooling after the tempering hold is just as important — slow cooling through the temper embrittlement range degrades toughness. Our furnaces use a gas circulation cooling circuit that brings the charge down quickly and uniformly, even at low temperatures.',
      'Two-chamber designs pair a tempering chamber with an adjacent heating or loading chamber for higher throughput, and can be integrated with gas quenching furnaces into a single automated hardening line.'
    ],
    features: [
      'Vacuum or protective gas (N₂ / Ar) tempering environment',
      'Fast, uniform gas cooling to avoid temper embrittlement',
      'Bright parts without discoloration or oxidation',
      'Single- and double-chamber configurations',
      'Precise low-temperature control for secondary hardening of high-speed steels',
      'Seamless integration with vacuum quenching furnaces'
    ],
    applications: [
      'Tempering of quenched tool and die steels',
      'Secondary hardening of high-speed steels',
      'Tempering of gears, shafts, and bearings',
      'Ageing of precipitation-hardening alloys',
      'Stress relaxation of welded and machined parts',
      'Bright tempering of stainless components'
    ],
    models: [
      {
        name: 'Single-Chamber Vacuum Tempering Furnace',
        summary:
          'Compact furnace for batch tempering with forced gas circulation cooling, suitable for tool rooms and heat treat shops.',
        specs: [
          { label: 'Max. working temperature', value: '800 °C' },
          { label: 'Hot zone dimensions', value: '600 × 600 × 900 mm (configurable)' },
          { label: 'Ultimate vacuum', value: '10 – 10⁻¹ Pa' },
          { label: 'Temperature uniformity', value: '± 5 °C' },
          { label: 'Cooling', value: 'Forced gas circulation to < 80 °C' },
          { label: 'Atmosphere', value: 'Vacuum or N₂ / Ar' }
        ]
      },
      {
        name: 'Two-Chamber Vacuum Tempering Furnace',
        summary:
          'Higher-throughput design with a separate tempering chamber and loading chamber, integrable into an automated hardening line.',
        specs: [
          { label: 'Max. working temperature', value: '800 °C' },
          { label: 'Hot zone dimensions', value: '700 × 700 × 1200 mm (configurable)' },
          { label: 'Ultimate vacuum', value: '10 – 10⁻¹ Pa' },
          { label: 'Temperature uniformity', value: '± 5 °C' },
          { label: 'Throughput', value: 'Continuous loading while the chamber stays hot' },
          { label: 'Integration', value: 'Compatible with gas quenching furnace lines' }
        ]
      }
    ]
  },
  {
    slug: 'vacuum-sintering-furnace',
    icon: 'sinter',
    nav: 'Sintering',
    title: 'Vacuum Sintering Furnaces',
    heroSummary:
      'High-temperature vacuum sintering for cemented carbide, ceramics, MIM parts, and refractory metals — graphite, tungsten, or molybdenum hot zones.',
    overview: [
      'Sintering densifies powder compacts at high temperature in vacuum, bonding particles without melting the base material. The vacuum environment removes adsorbed gases and contaminants, which is essential for carbide, ceramic, and refractory metal processing where oxygen and nitrogen pickup would ruin the part.',
      'We build sintering furnaces with graphite, tungsten, or molybdenum heating systems covering temperatures from 1600 °C up to 2300 °C, matched to the material being sintered. Vacuum levels down to 10⁻⁴ Pa with diffusion-pump or turbomolecular pumping packages keep volatile binder removal clean and controlled.',
      'Debinding and sintering can be combined in a single furnace cycle with a programmed binder-removal stage, or separated into dedicated debinding and sintering equipment for high-volume production.'
    ],
    features: [
      'Hot zones to 2300 °C with graphite, tungsten, or molybdenum heating elements',
      'Vacuum to 10⁻⁴ Pa with oil diffusion / turbomolecular pumping',
      'Controlled debinding stage for MIM and powder metal parts',
      'Optional hydrogen or argon partial-pressure operation',
      'Multi-zone temperature control for uniform densification',
      'Water-cooled double-wall stainless steel chamber'
    ],
    applications: [
      'Cemented carbide (tungsten carbide) sintering',
      'Ceramic and oxide ceramic sintering',
      'Metal injection molding (MIM) parts',
      'Refractory & rare-earth metals',
      'Magnetic materials',
      'Advanced composite powders'
    ],
    models: [
      {
        name: 'Graphite Hot-Zone Vacuum Sintering Furnace',
        summary:
          'Workhorse sintering furnace for carbide, ceramic, and MIM parts with a graphite heating system and controlled debinding stage.',
        specs: [
          { label: 'Max. working temperature', value: '1600 / 1800 °C' },
          { label: 'Hot zone dimensions', value: '400 × 400 × 700 mm (configurable)' },
          { label: 'Ultimate vacuum', value: '10⁻⁴ Pa' },
          { label: 'Heating elements', value: 'Graphite with graphite felt insulation' },
          { label: 'Temperature uniformity', value: '± 7 °C (at 1500 °C)' },
          { label: 'Debinding', value: 'Integrated programmed binder removal stage' },
          { label: 'Chamber', value: 'Double-wall, water-cooled stainless steel' }
        ]
      },
      {
        name: 'Tungsten / Molybdenum Hot-Zone Furnace',
        summary:
          'Ultra-high-temperature sintering furnace for refractory metals and advanced ceramics requiring a carbon-free hot zone.',
        specs: [
          { label: 'Max. working temperature', value: '2300 °C (W) / 1800 °C (Mo)' },
          { label: 'Hot zone dimensions', value: '300 × 300 × 600 mm (configurable)' },
          { label: 'Ultimate vacuum', value: '10⁻⁴ Pa' },
          { label: 'Heating elements', value: 'Tungsten or molybdenum mesh / rod' },
          { label: 'Atmosphere options', value: 'Vacuum, H₂, or Ar' },
          { label: 'Applications focus', value: 'Refractory metals, high-purity ceramics' }
        ]
      }
    ]
  },
  {
    slug: 'vacuum-brazing-furnace',
    icon: 'braze',
    nav: 'Brazing',
    title: 'Vacuum Brazing Furnaces',
    heroSummary:
      'Clean, flux-free brazing of stainless steel, aluminum, and copper assemblies in high vacuum with tight temperature uniformity.',
    overview: [
      'Vacuum brazing joins components with a filler metal without flux, because the vacuum strips the oxide layers that would otherwise prevent wetting. The result is a clean, strong, corrosion-resistant joint with no flux residue to remove afterwards — a decisive advantage for stainless, aluminum, and copper assemblies.',
      'Temperature uniformity is the heart of a brazing furnace: filler metals melt within a narrow window, so the whole charge must sit inside ± 5 °C while the brazing temperature is held. Multi-zone graphite heating and high-velocity gas circulation deliver that uniformity load after load.',
      'Aluminum brazing runs at lower temperatures under nitrogen partial pressure; stainless steel and high-temperature alloy brazing runs in high vacuum up to 1300 °C. Furnaces are configured for the specific alloy system and joint geometry.'
    ],
    features: [
      'Flux-free brazing with clean, corrosion-resistant joints',
      '± 5 °C temperature uniformity across the full charge',
      'Aluminum brazing (N₂ partial pressure) and high-temperature vacuum brazing',
      'Multi-zone graphite heating with independent control',
      'Controlled heating and cooling ramps to limit thermal distortion',
      'Optional hydrogen atmosphere for difficult-to-wet alloy systems'
    ],
    applications: [
      'Stainless steel heat exchangers & plate heat exchangers',
      'Aluminum brazed assemblies (automotive radiators)',
      'Aerospace superalloy components',
      'Copper electrical contacts & busbars',
      'Carbide tool tips brazed to steel bodies',
      'Food-grade stainless assemblies'
    ],
    models: [
      {
        name: 'High-Temperature Vacuum Brazing Furnace',
        summary:
          'For stainless steel, superalloy, and carbide-to-steel brazing in high vacuum with uniform heating and controlled cooling.',
        specs: [
          { label: 'Max. working temperature', value: '1300 °C' },
          { label: 'Hot zone dimensions', value: '600 × 600 × 900 mm (configurable)' },
          { label: 'Ultimate vacuum', value: '10⁻³ – 10⁻⁴ Pa' },
          { label: 'Temperature uniformity', value: '± 5 °C' },
          { label: 'Heating elements', value: 'Multi-zone graphite' },
          { label: 'Cooling', value: 'Programmable controlled cooling to < 150 °C' }
        ]
      },
      {
        name: 'Aluminum Vacuum Brazing Furnace',
        summary:
          'Low-temperature brazing under nitrogen partial pressure for aluminum assemblies, with rapid gas cooling.',
        specs: [
          { label: 'Max. working temperature', value: '700 °C' },
          { label: 'Hot zone dimensions', value: '1200 × 600 × 600 mm (configurable)' },
          { label: 'Atmosphere', value: 'N₂ partial pressure, controlled O₂ level' },
          { label: 'Temperature uniformity', value: '± 5 °C' },
          { label: 'Cooling', value: 'High-velocity N₂ cooling' },
          { label: 'Typical parts', value: 'Plate heat exchangers, radiators, cold plates' }
        ]
      }
    ]
  },
  {
    slug: 'vacuum-carburizing-nitriding-furnace',
    icon: 'carburizing',
    nav: 'Carburizing & Nitriding',
    title: 'Vacuum Carburizing & Nitriding Furnaces',
    heroSummary:
      'Low-pressure carburizing and plasma nitriding furnaces for deep, uniform case hardening with minimal part distortion.',
    overview: [
      'Vacuum carburizing (low-pressure carburizing, LPC) feeds acetylene into a vacuum chamber at roughly 950 °C in short pulses. Without an oxygen-bearing carrier gas, there is no intergranular oxidation, no soot, and no post-treatment cleaning — and the boost-diffuse pulse pattern lets engineers dial in case depth and surface carbon with precision.',
      'Plasma (ion) nitriding uses a glow-discharge plasma to drive nitrogen into the surface at lower temperatures, which keeps distortion extremely low and allows precise control of the white-layer thickness. It is the standard choice for dies, extrusion screws, and precision shafts.',
      'Both processes are available as single-chamber batch furnaces or multi-chamber systems with integrated loading, quenching, and tempering for high-volume production of gears and wear parts.'
    ],
    features: [
      'Low-pressure carburizing with pulsed acetylene injection',
      'No intergranular oxidation — no post-carburizing cleaning',
      'Precise control of case depth and surface carbon content',
      'Plasma nitriding with controllable compound (white) layer',
      'Minimal distortion from lower nitriding temperatures',
      'Multi-chamber options for automated production lines'
    ],
    applications: [
      'Automotive gears and transmission parts',
      'Die casting and forging dies',
      'Extrusion screws and plastic machinery parts',
      'Precision shafts and spindles',
      'Hydraulic cylinders and rods',
      'Wear parts for construction machinery'
    ],
    models: [
      {
        name: 'Low-Pressure Carburizing (LPC) Furnace',
        summary:
          'Single-chamber furnace for pulsed acetylene carburizing with integrated oil or gas quenching options.',
        specs: [
          { label: 'Max. working temperature', value: '1050 °C (carburizing ~ 950 °C)' },
          { label: 'Hot zone dimensions', value: '600 × 600 × 900 mm (configurable)' },
          { label: 'Ultimate vacuum', value: '10 Pa class' },
          { label: 'Process gas', value: 'Acetylene (C₂H₂) pulses' },
          { label: 'Case depth range', value: '0.1 – 3.0 mm' },
          { label: 'Quenching', value: 'Integrated oil or gas quench option' }
        ]
      },
      {
        name: 'Plasma (Ion) Nitriding Furnace',
        summary:
          'Glow-discharge nitriding furnace with a controllable compound layer for dies, shafts, and precision wear parts.',
        specs: [
          { label: 'Max. working temperature', value: '650 °C' },
          { label: 'Hot zone dimensions', value: 'Ø 800 × 1200 mm (configurable)' },
          { label: 'Process gas', value: 'N₂ / H₂ mixture, pulsed plasma' },
          { label: 'Compound layer thickness', value: '0 – 25 μm (controllable)' },
          { label: 'Case depth', value: 'up to 0.6 mm' },
          { label: 'Distortion', value: 'Minimal — low process temperature' }
        ]
      }
    ]
  }
];

/** 规格代表值声明（产品页脚注） */
export const specNote =
  'Specifications shown are representative values. Every furnace is engineered to your parts, load size, and cycle requirements — contact us for a tailored configuration.';
