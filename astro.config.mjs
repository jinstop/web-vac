import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vac.mokc.top',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto'
  }
});
