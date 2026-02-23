// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://shift-media.pages.dev',
  output: 'static',
  integrations: [
    sitemap(),
    mdx(),
  ],
  // Cloudflare Pages uses static output by default
  // Switch to adapter if you need SSR later:
  // adapter: cloudflare(),
});
