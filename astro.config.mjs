import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  server: {
    port: 3000
  },
  site: 'https://andrewcarvajal97.github.io/Colegio_Militar_General_Santander',
  base: '/',
  output: 'static',
  build: {
    assets: '_astro'
  }
});
