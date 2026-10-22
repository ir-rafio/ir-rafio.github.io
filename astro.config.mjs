// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://ir-rafio.github.io',
  integrations: [mdx(), sitemap()],
  markdown: { smartypants: false, remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] },
  prefetch: { prefetchAll: true },
});
