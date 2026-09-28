# ir-rafio.github.io

Personal academic website of Md. Irfanur Rahman Rafio, built with [Astro](https://astro.build) and TypeScript. Pages are rendered to static HTML at build time, so the site ships almost no JavaScript.

## Commands

Requires Node.js 22.12 or newer.

| Command           | What it does                             |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start a local server at `localhost:4321` |
| `npm run build`   | Type-check and build the site to `dist/` |
| `npm run preview` | Serve the built site locally             |

Pushing to `main` deploys the site through GitHub Actions (`.github/workflows/deploy.yml`). In the repository settings, set **Pages > Source** to **GitHub Actions**.

## Where things live

Almost all content is plain data. Edit these files and the pages update.

```
src/
  data/            Content for every section
    site.ts        Name, email, CV path, social links, navbar order
    profile.ts     About text and the timeline on the home page
    education.ts   experience.ts   research.ts   achievements.ts
    teaching.ts    Teaching story, inspiring teachers, courses
    contests.ts    Contests as a participant and as a setter
    skills.ts      projects.ts   activities.ts   gallery.ts
    logos.ts       Registry of logo images in src/assets/logos
    tags.ts        Blog tag colors
  content/blog/    One folder per blog: index.mdx plus its images
  components/      Navbar, footer and one component per home section
  pages/           index, research, teaching, contests, blog
public/            Files served as is: cv.pdf, PDFs, videos, favicon
```

In the data files, wrap text in `**double asterisks**` to make it bold.

## Writing a blog

Create `src/content/blog/<slug>/index.mdx`:

```mdx
---
title: My New Blog
date: 2026-01-01
tags: [Life, Teaching]
---

Text in Markdown. Put images next to this file and import them.
```

Tags get a Notion-style color automatically. To pin a color, add the tag to `src/data/tags.ts`. The blog in the large card on the home page is set by `highlightedBlog` in `src/data/site.ts`. Write math with `$...$` (inline) or `$$...$$` (display); it is rendered with KaTeX at build time. Useful components for posts are in `src/components/blog/` (`Gallery` for images, `PdfPreview` for PDFs).
