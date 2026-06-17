# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no tests configured in this project.

## Architecture

Single-page Next.js 16 (App Router) portfolio site using React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

**Page structure:** `Hero` → `Tabs` (Projects / Experience / Tools) → `Footer`

- `src/app/` — App Router root: `layout.tsx` (fonts, ThemeProvider), `page.tsx` (composes the page), `globals.css` (CSS variables for theming)
- `src/components/` — Section-level components (`Nav`, `Hero`, `Tabs`, `Projects`, `Experience`, `Tools`, `Footer`) plus `ThemeProvider` and `Typewriter`
- `src/data/` — Static content arrays: `projects.tsx`, `experience.tsx`, `tools.tsx` — **edit these to update portfolio content**
- `src/types/index.tsx` — Shared TypeScript interfaces (`Project`, `Tool`, `Experience`)

### Blog

A file-based MDX blog lives at the `/blog` (list) and `/blog/[slug]` (post) routes — these are **separate App Router pages**, not in-page tabs, so each post has a shareable, statically-generated URL.

- **Write a post**: add `src/content/blog/<slug>.mdx` with frontmatter (`title`, `date`, `excerpt`, `tags?`, `cover?`, `draft?`) then commit. Drafts (`draft: true`) show in dev only.
- `src/lib/blog.ts` — server-only filesystem reader: `getAllPosts()` (newest-first, drafts hidden in prod), `getPostBySlug()`, `getAllSlugs()`, `formatDate()`.
- `src/components/blog/mdx-components.tsx` — dark/teal-styled element overrides for rendered MDX.
- Rendering: `next-mdx-remote/rsc` in the Server Component, with `remark-gfm` + `rehype-pretty-code` (shiki, `github-dark-dimmed`) for syntax highlighting. Posts are statically generated via `generateStaticParams`.
- `Nav.tsx` is route-aware (`usePathname`): on `/blog*`, section links point to `/#section` and "Blog" is the active pill.

## Key Decisions

- **Theme**: The site supports **dark (default) and light** themes with a toggle in `Nav.tsx`. The dark palette lives on `:root` in `globals.css`; the light palette overrides those variables under a `.light` selector. `ThemeProvider` (`src/components/ThemeProvider.tsx`) holds the active theme, toggles the `light`/`dark` class on `<html>`, and persists the choice to `localStorage`. An inline script in `layout.tsx` applies the saved theme before paint to avoid a flash. Theme-aware bits beyond colors: dotted-grid opacity (`--dot-opacity`) and card shadows (`--shadow-color`/`--shadow-strong`/`--shadow-soft`).
- **Styling**: Tailwind CSS v4 via `@import "tailwindcss"` in `globals.css`. CSS custom properties (HSL variables) are used for colors — use `hsl(var(--primary))` etc. rather than hardcoded colors.
- **Animations**: Framer Motion with `whileInView` + `viewport={{ once: true }}` for scroll-triggered entrance animations. The `AnimatePresence` + `layoutId="activeTab"` pattern drives the tab switching animation in `Tabs.tsx`.
- **React Compiler**: Enabled (`reactCompiler: true` in `next.config.ts`) — avoid manual `useMemo`/`useCallback` unless profiling shows a need.
- **Icons**: `@iconify/react` for tool icons; `lucide-react` for UI icons.
- **Fonts**: Inter (`--font-inter`) and JetBrains Mono (`--font-mono`) loaded via `next/font/google`.
