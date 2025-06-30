import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  server: {
    port: 3000
  },
  site: 'https://andrewcarvajal97.github.io/frontend_Hackaton',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
