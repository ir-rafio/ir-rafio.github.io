import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each blog lives in src/content/blog/<slug>/index.mdx next to its images.
const blog = defineCollection({
  loader: glob({ pattern: '*/index.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    /** Short teaser for listings. Falls back to the first paragraph. */
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
