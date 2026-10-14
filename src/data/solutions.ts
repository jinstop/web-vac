export interface SolutionResult {
  metric: string;
  label: string;
}

export interface Solution {
  slug: string;
  industry: string;
  title: string;
  client: string;
  summary: string;
  challenge: string[];
  solution: string[];
  furnaceModel: string;
  furnaceHighlights: string[];
  results: SolutionResult[];
  relatedSlug: string;
}

export const solutions: Solution[] = [
  {
    slug: 'hss-cutting-tool-gas-quenching',
    industry: 'Cutting Tools',
    title: 'Bright Hardening of High-Speed Steel Cutters',
    client:
      'A European precision cutting-tool manufacturer supplying the automotive and mold sectors.',
    summary:
      'Replaced salt-bath and atmosphere hardening with a high-pressure gas quenching vacuum furnace — eliminating decarburization, scale and the rework grinding that was eroding margin.',
    challenge: [
      'The client hardened high-speed steel drills, end mills and form tools in salt baths and controlled-atmosphere furnaces. Both routes left a soft, decarburized skin and a heavy oxide scale that had to be ground off before the cutter could be sharpened — an extra grinding allowance of roughly 0.15 mm per side on every flute.',
      'That rework was expensive and slow, and batch-to-batch hardness still drifted, so a share of tools came back from customers for regrinding under warranty.'
    ],
    solution: [
      'We supplied a single-chamber gas quenching vacuum furnace with a 6 bar nitrogen cooling circuit. Parts are heated in vacuum and hardened under high-velocity gas, so surfaces come out bright and scale-free with no decarburized layer.',
      'Recipe-based control locks the heating, soak and gas-cooling profile to each tool family, and the full cycle is data-logged for traceability. A single operator now runs the whole hardening operation without the salt-bath handling and cleaning overhead.'
    ],
    furnaceModel: 'Gas Quenching Vacuum Furnace',
    furnaceHighlights: [
      'Quenching pressure 6 bar N₂ (up to 10 bar, or He / Ar mixtures)',
      'Hot zone 500 × 500 × 800 mm, ± 5 °C uniformity',
      'Bright, scale-free parts with no decarburized skin',
      'Recipe management with full process data logging'
    ],
    results: [
      { metric: '~0.15 mm', label: 'Grinding allowance eliminated per side' },
      { metric: '± 1 HRC', label: 'Batch-to-batch hardness consistency' },
      { metric: '> 98%', label: 'First-pass yield (up from ~88%)' },
      { metric: '0', label: 'Post-quench cleaning / decarb rework' }
    ],
    relatedSlug: 'vacuum-quenching-furnace'
  },
  {
    slug: 'stainless-heat-exchanger-vacuum-brazing',
    industry: 'Heat Exchangers',
    title: 'Flux-Free Brazing of Stainless Plate Heat Exchangers',
    client:
      'A manufacturer of food-grade stainless steel plate heat exchangers for the dairy and beverage industry.',
    summary:
      'Moved from flux brazing to high-temperature vacuum brazing — removing corrosive flux residue, the acid cleaning line, and the joint-quality variability that came with manual fluxing.',
    challenge: [
      'Brazing stainless plate packs under flux left a corrosive residue that had to be removed with aggressive acid cleaning. Any residue that survived became a pitting and corrosion risk in food-grade service, and the cleaning step added cost, wastewater handling and inspection load.',
      'Joint quality also varied with how evenly operators applied flux and loaded the furnace, so braze coverage was inconsistent across a charge.'
    ],
    solution: [
      'We supplied a high-temperature vacuum brazing furnace. In high vacuum the oxide films are stripped from the stainless surface, so the nickel filler wets and flows without any flux — producing a clean, sound, corrosion-resistant joint with nothing to remove afterwards.',
      'Multi-zone graphite heating holds the full charge of plates within ± 5 °C while the brazing temperature is held, so the filler melts uniformly across the whole pack. Controlled heating and cooling ramps limit thermal distortion of the thin plates.'
    ],
    furnaceModel: 'High-Temperature Vacuum Brazing Furnace',
    furnaceHighlights: [
      'Flux-free brazing in high vacuum up to 1300 °C',
      '± 5 °C uniformity across the full charge',
      'Multi-zone graphite heating, controlled ramp cooling',
      'Clean, corrosion-resistant joints — no acid cleaning'
    ],
    results: [
      { metric: '100%', label: 'Flux-free — cleaning step removed' },
      { metric: '± 5 °C', label: 'Uniformity for even braze fillets' },
      { metric: '0', label: 'Corrosive residue / acid cleaning' },
      { metric: 'Higher', label: 'Throughput from batch loading' }
    ],
    relatedSlug: 'vacuum-brazing-furnace'
  },
  {
    slug: 'automotive-gear-low-pressure-carburizing',
    industry: 'Automotive Powertrain',
    title: 'Low-Pressure Carburizing of Transmission Gears',
    client:
      'An automotive Tier-1 manufacturer of transmission gears and differential components.',
    summary:
      'Switched from conventional gas carburizing to low-pressure carburizing with integrated oil quench — eliminating intergranular oxidation, the shot-blast cleanup step and the case-depth scatter.',
    challenge: [
      'Gas carburizing of fine-pitch gears produced intergranular oxidation and soot, which forced a shot-blasting step after hardening and left a brittle surface layer that hurt fatigue life.',
      'Case depth also scattered beyond tolerance on the harder geometries, driving scrap and rework, and the thin gear sections distorted more than the drawing allowed.'
    ],
    solution: [
      'We supplied a low-pressure carburizing (LPC) furnace with pulsed acetylene injection and an integrated oil quench. The boost-diffuse pulse pattern lets engineers dial in surface carbon and case depth precisely, without the oxygen-bearing carrier gas that causes oxidation.',
      'The result is a clean case with no intergranular oxidation and no soot — so the post-carburizing shot-blast and cleaning step disappears entirely. Quenching and tempering can be integrated into a single automated line.'
    ],
    furnaceModel: 'Low-Pressure Carburizing (LPC) Furnace',
    furnaceHighlights: [
      'Pulsed acetylene (C₂H₂) carburizing at ~950 °C',
      'Case depth 0.1 – 3.0 mm, tightly controlled',
      'Integrated oil or gas quench option',
      'No intergranular oxidation, no post-carb cleaning'
    ],
    results: [
      { metric: '0', label: 'Intergranular oxidation / soot' },
      { metric: '± 0.05 mm', label: 'Case-depth control' },
      { metric: '1 step', label: 'Post-carburizing cleaning removed' },
      { metric: 'Higher', label: 'Gear fatigue life' }
    ],
    relatedSlug: 'vacuum-carburizing-nitriding-furnace'
  },
  {
    slug: 'carbide-insert-vacuum-sintering',
    industry: 'Cemented Carbide',
    title: 'Sintering of Cemented-Carbide Inserts',
    client:
      'A producer of tungsten-carbide turning inserts and milling cutting edges.',
    summary:
      'Replaced hydrogen-atmosphere pusher sintering with a graphite hot-zone vacuum furnace with integrated debinding — delivering pore-free, on-carbon inserts with higher transverse rupture strength.',
    challenge: [
      'Sintering carbide in a hydrogen pusher furnace caused carbon loss and binder contamination on thin, intricate insert edges, and the residual porosity limited transverse rupture strength and edge toughness.',
      'Density varied across the tray, so a share of inserts were rejected after grinding for chipping on the cutting edge.'
    ],
    solution: [
      'We supplied a graphite hot-zone vacuum sintering furnace with an integrated, programmed debinding stage. A vacuum level of 10⁻⁴ Pa keeps binder removal clean and prevents oxidation, and the graphite hot zone protects the carbide carbon balance.',
      'Multi-zone temperature control gives uniform densification across the whole charge, so inserts come out pore-free with consistent density — including the thin edges that used to fail.'
    ],
    furnaceModel: 'Graphite Hot-Zone Vacuum Sintering Furnace',
    furnaceHighlights: [
      'Max. working temperature 1600 / 1800 °C (graphite)',
      'Ultimate vacuum 10⁻⁴ Pa, integrated debinding stage',
      '± 7 °C uniformity at 1500 °C for even densification',
      'Water-cooled double-wall stainless chamber'
    ],
    results: [
      { metric: 'Pore-free', label: 'Sintered structure, incl. thin edges' },
      { metric: 'On-carbon', label: 'No carbon loss vs. H₂ sintering' },
      { metric: 'Higher', label: 'Transverse rupture strength' },
      { metric: 'Consistent', label: 'Batch density, fewer edge rejects' }
    ],
    relatedSlug: 'vacuum-sintering-furnace'
  },
  {
    slug: 'precision-tube-vacuum-bright-annealing',
    industry: 'Precision Tubing',
    title: 'Bright Annealing of Stainless & Copper Capillary Tubes',
    client:
      'A manufacturer of stainless steel and copper capillary and precision tubes for medical and instrumentation use.',
    summary:
      'Adopted vacuum bright annealing to replace controlled-atmosphere annealing and pickling — tubes now leave the furnace bright, oxide-free and ready to use, with no acid line.',
    challenge: [
      'Bright annealing in controlled-atmosphere furnaces still left faint discoloration on the thin-wall stainless tubes, and copper scaled enough that a pickling step was needed before drawing.',
      'The pickling line was a cost, a wastewater burden and a source of thickness variation on the thin walls — and residual acid was a recurring quality complaint from medical-device customers.'
    ],
    solution: [
      'We supplied a horizontal vacuum annealing furnace with multi-zone heating and ± 5 °C temperature uniformity. Because heating takes place in vacuum, no oxidation or discoloration occurs, and degreased, burr-free tubes leave the furnace ready for the next operation.',
      'Slow, programmable cooling avoids re-introducing residual stress and gives a uniform grain size, which matters for the tight dimensional and formability requirements of capillary tube.'
    ],
    furnaceModel: 'Horizontal Vacuum Annealing Furnace',
    furnaceHighlights: [
      'Bright, oxide-free surfaces — no pickling',
      'Hot zone 600 × 600 × 1200 mm, ± 5 °C uniformity',
      'Vacuum or Ar / N₂ backfill for volatile alloys',
      'Programmable slow cooling for uniform grain size'
    ],
    results: [
      { metric: '0', label: 'Pickling / acid cleaning' },
      { metric: 'Bright', label: 'Oxide-free stainless & copper' },
      { metric: '± 5 °C', label: 'Uniformity, uniform grain size' },
      { metric: 'Less', label: 'Thickness loss vs. pickling' }
    ],
    relatedSlug: 'vacuum-annealing-furnace'
  }
];
