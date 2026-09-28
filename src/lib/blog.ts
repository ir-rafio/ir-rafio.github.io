import { getCollection, type CollectionEntry } from 'astro:content';

export type Blog = CollectionEntry<'blog'>;

export async function getBlogs(): Promise<Blog[]> {
  const all = await getCollection('blog', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date, month: 'long' | 'short' = 'long'): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month, day: 'numeric', timeZone: 'UTC' });
}

/** Summary from frontmatter, or the first prose paragraph of the post. */
export function excerpt(blog: Blog, max = 220): string {
  if (blog.data.summary) return blog.data.summary;
  const para =
    (blog.body ?? '')
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .find((p) => p && !/^(import |<|---|#)/.test(p)) ?? '';
  const text = para.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '');
  return text.length > max ? text.slice(0, max).replace(/\s+\S*$/, '') + '…' : text;
}
