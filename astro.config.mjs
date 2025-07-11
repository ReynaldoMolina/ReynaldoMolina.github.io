// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import react from '@astrojs/react';
import svgr from 'vite-plugin-svgr';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), svgr()]
  },
  site: 'https://reynaldomolina.github.io/',
  integrations: [icon(), react()]
});