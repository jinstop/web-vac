import { site } from '../config/site';
import { categories } from '../data/products';

/**
 * llms.txt endpoint (https://llmstxt.org convention).
 * Generated at build time from src/data, so it stays in sync
 * with the site content on every deployment.
 */
export function GET() {
  const lines: string[] = [
    `# ${site.name} — ${site.tagline}`,
    '',
    `> ${site.description}`,
    '',
    `${site.slogan}. Furnace categories: vacuum quenching (gas and oil quenching), vacuum annealing, vacuum tempering, vacuum sintering, vacuum brazing, and vacuum carburizing/nitriding.`,
    '',
    '## Products',
    '',
  ];

  for (const c of categories) {
    lines.push(`- [${c.title}](${site.domain}/products/${c.slug}): ${c.heroSummary}`);
  }

  lines.push(
    '',
    '## Company',
    '',
    `- [About Us](${site.domain}/about): Company overview, engineering capabilities, industries served, and quality commitments.`,
    `- [Contact](${site.domain}/contact): Inquiry form and contact details for quotations and technical questions.`,
    `- [Privacy & Cookie Policy](${site.domain}/privacy): How personal data and cookies are handled on this website.`,
    '',
    '## Indexes',
    '',
    `- [Sitemap](${site.domain}/sitemap-index.xml): XML sitemap of all pages.`,
    `- [llms.txt](${site.domain}/llms.txt): This file. Markdown index of the site for large language models.`,
    ''
  );

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
