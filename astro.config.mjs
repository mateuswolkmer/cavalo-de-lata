import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';
import tinaDirective from './astro-tina-directive/register';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || `https://${process.env.VERCEL_URL}`,
  integrations: [mdx(), sitemap(), react(), tinaDirective()],
  vite: {
    plugins: [tailwindcss()],
  },
});
