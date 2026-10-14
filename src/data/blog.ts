export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] };

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: Block[];
}

export const articles: Article[] = [
  {
    slug: 'vacuum-vs-gas-carburizing',
    title: 'Vacuum Carburizing vs. Gas Carburizing: Why Low-Pressure Carburizing Removes the Cleanup Step',
    category: 'Case Hardening',
    date: '2026-10-10',
    readTime: '7 min read',
    excerpt:
      'Conventional gas carburizing works — but it leaves intergranular oxidation and soot that force a shot-blast and cleaning step. Low-pressure (vacuum) carburizing removes that step entirely. Here is why, and when each process fits.',
    content: [
      {
        type: 'p',
        text: 'Carburizing is the workhorse case-hardening process for gears, shafts and wear parts: you diffuse carbon into the surface of a low-carbon steel at high temperature, then quench and temper to build a hard case over a tough core. The classic route is gas carburizing, and it has served industry for decades. But it carries a hidden cost — a cleanup step that many plants treat as unavoidable. Low-pressure carburizing (LPC), also called vacuum carburizing, removes it.'
      },
      { type: 'h2', text: 'The problem with a carrier gas' },
      {
        type: 'p',
        text: 'Gas carburizing runs in an oxygen-bearing atmosphere. A carrier gas (typically generated from natural gas or methanol) is fed into the furnace together with an enriching gas, and the carbon monoxide in that atmosphere transfers carbon to the part surface. The chemistry that makes carburizing possible also introduces oxygen into the furnace.'
      },
      {
        type: 'p',
        text: 'That oxygen reacts with alloying elements — chromium, manganese, titanium — at the grain boundaries of the steel. The result is intergranular oxidation (IGO): a network of oxide fingers that penetrates a few microns below the surface. Alongside it, soot forms from cracking of the hydrocarbon gases. Neither is visible to the naked eye, but both have consequences.'
      },
      { type: 'h2', text: 'What intergranular oxidation actually costs you' },
      {
        type: 'list',
        items: [
          'A brittle, oxidized surface layer that reduces fatigue life — critical on gears that live through millions of load cycles.',
          'A mandatory post-carburizing cleanup: shot blasting or brushing to remove soot and loose oxides, which costs equipment, labor and cycle time.',
          'Consistency risk: oxidation depth varies with atmosphere control, so the effective case can differ from batch to batch.'
        ]
      },
      {
        type: 'p',
        text: 'In practice, the cleanup step is treated as a fact of life. Parts come out of the carburizing furnace dirty and have to be cleaned before they can be quenched, tempered and machined. That is the cost low-pressure carburizing is designed to eliminate.'
      },
      { type: 'h2', text: 'How low-pressure (vacuum) carburizing works' },
      {
        type: 'p',
        text: 'An LPC furnace runs at low pressure — on the order of 10 Pa — and feeds pure acetylene (C₂H₂) in short pulses instead of a carrier-plus-enriching-gas mixture. There is no oxygen-bearing carrier gas, so there is nothing to oxidize the grain boundaries and nothing to form soot. The carbon comes only from the acetylene, and it decomposes cleanly on the hot steel surface.'
      },
      {
        type: 'p',
        text: 'The process alternates between boost and diffuse steps. During the boost, a short acetylene pulse floods the surface with carbon until it saturates; during the longer diffuse step, no gas is injected and the carbon migrates inward to build the case depth. Repeating this pattern lets an engineer dial in the exact surface carbon and case depth the part needs — with a precision that is hard to reach in a continuously flowing atmosphere.'
      },
      { type: 'h2', text: 'The practical differences' },
      {
        type: 'list',
        items: [
          'Surface quality: LPC produces a clean case with no intergranular oxidation and no soot, so the post-carburizing shot-blast and cleaning step can be deleted from the process flow.',
          'Case control: the boost-diffuse pattern gives tight, repeatable control of surface carbon and case depth, which reduces scrap on fine-pitch gears and thin sections.',
          'Distortion: because there is no high-velocity gas flow over the load, LPC tends to hold tight dimensional tolerances on slender parts.',
          'Flexibility: a single vacuum furnace can combine carburizing with oil or gas quenching and tempering in one automated line.'
        ]
      },
      {
        type: 'p',
        text: 'Gas carburizing remains a strong fit for very high-volume, less critical parts where the cleanup step is already amortized and the plant atmosphere is well controlled. But where surface integrity, fatigue life and process cleanliness matter — automotive transmission gears, bearings, precision wear parts — low-pressure carburizing usually wins on total cost once the eliminated cleanup step is counted.'
      },
      { type: 'h2', text: 'Choosing the right route' },
      {
        type: 'p',
        text: 'If you are evaluating a case-hardening upgrade, the questions that decide it are: how critical is fatigue life on your part, how much distortion can your drawings tolerate, and how much does your current post-carburizing cleaning cost you per batch? If those answers point toward surface quality and tight control, it is worth sizing a low-pressure carburizing furnace — or adding LPC as a dedicated cell alongside your existing atmosphere line.'
      }
    ]
  },
  {
    slug: 'gas-vs-oil-quenching-vacuum-furnaces',
    title: 'Gas Quenching vs. Oil Quenching Vacuum Furnaces: How to Choose',
    category: 'Furnace Selection',
    date: '2026-10-03',
    readTime: '6 min read',
    excerpt:
      'Both quench steel in vacuum — but they solve different problems. Gas quenching trades a little cooling rate for cleanliness and low distortion; oil quenching trades cleanliness for maximum cooling rate. Here is how to pick.',
    content: [
      {
        type: 'p',
        text: 'Quenching is what turns austenitized steel into hard martensite: you cool it fast enough that the hard phase forms instead of the softer pearlite or bainite. In a vacuum furnace, the part is heated in vacuum and then cooled — either by high-pressure gas or by transferring it into a vacuum-isolated oil chamber. Both are called vacuum quenching, but they are not interchangeable. The right choice depends on your steel, your geometry and how clean the part has to be.'
      },
      { type: 'h2', text: 'Gas quenching: clean and gentle' },
      {
        type: 'p',
        text: 'In a gas quenching vacuum furnace, the load is cooled by blasting high-pressure gas — nitrogen at up to 10 bar, or helium and argon mixtures for even faster cooling — through the hot chamber and across the parts. A heat exchanger removes the heat from the gas so it can recirculate and keep cooling.'
      },
      {
        type: 'p',
        text: 'Because the whole cycle happens in vacuum, the parts stay bright and scale-free. There is no oil to handle, no vapor, no residue to wash off, and the parts come out ready to temper or ship. The cooling is also more symmetric than a liquid quench, so distortion stays low — a real advantage on slender tools and thin sections.'
      },
      {
        type: 'list',
        items: [
          'Pros: bright, clean parts; low distortion; no oil handling or washing; flexible gas selection; easy integration into an automated line.',
          'Cons: lower cooling rate than oil, so it needs a steel with enough hardenability to harden through in gas — and helium (for the fastest gas cooling) is more expensive to run.'
        ]
      },
      { type: 'h2', text: 'Oil quenching: maximum cooling rate' },
      {
        type: 'p',
        text: 'In an oil quenching vacuum furnace, the oil tank sits under the hot chamber, separated by a vacuum-tight door. When it is time to quench, the door opens and the load transfers down into agitated, temperature-controlled oil — all while still under vacuum, so the hot part never sees air. That transfer can be done in under 15 seconds.'
      },
      {
        type: 'p',
        text: 'Oil pulls heat out faster than gas, which is what lets lower-hardenability steels and thicker sections harden all the way through. The trade-offs are the ones you would expect: oil has to be maintained and eventually replaced, parts carry oil out of the furnace and usually need a cleaning step, and there is some vapor and residue to manage.'
      },
      {
        type: 'list',
        items: [
          'Pros: highest cooling rate, hardens less-hardenable steels and heavier sections; proven, cost-effective for production.',
          'Cons: oil handling, part cleaning after quench, more distortion and vapor than gas quenching.'
        ]
      },
      { type: 'h2', text: 'How to decide' },
      {
        type: 'list',
        items: [
          'Material hardenability: high-speed steels, hot-work die steels and stainless/superalloy grades usually harden fine in gas. Lower-alloy structural steels and thick sections often need the cooling rate of oil.',
          'Distortion tolerance: gas quenching wins when the part cannot tolerate the shock of a liquid quench — long shafts, thin walls, fine-pitch features.',
          'Cleanliness: if the part must come out bright with no oil to wash off — food-grade, medical, or just downstream grinding you want to avoid — gas quenching removes the cleaning step.',
          'Throughput and handling: gas quenching is cleaner to automate and keeps the chamber bright; oil quenching is a mature, lower-cost route for high volume.'
        ]
      },
      {
        type: 'p',
        text: 'In many shops the answer is both. A common configuration pairs a gas quenching furnace for the grades and geometries that harden cleanly in gas, with an oil quenching furnace for the heavier, less-hardenable work — or a multi-chamber line that routes each part to the right quench. The right choice is the one that matches the cooling rate your steel actually needs, with the least distortion and the least cleanup your process can get away with.'
      },
      { type: 'h2', text: 'Start from your part, not the furnace' },
      {
        type: 'p',
        text: 'The reliable way to choose is to work backward from the part: its steel grade and section thickness, the hardness and case you need, the distortion the drawing allows, and how clean the surface has to be. Send those four parameters and the material spec to your furnace supplier, and the quench medium — and the furnace around it — follows from there.'
      }
    ]
  }
];
