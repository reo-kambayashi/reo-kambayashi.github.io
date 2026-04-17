# Repository Guidelines

## Project Structure & Module Organization
- This Astro site renders the profile pages from `src/pages/index.astro` (ja) and `src/pages/en/index.astro` (en).
- Content lives in `src/data/profile.ts`; update profile text, publications, education history, and contact links there before changing component markup.
- Section components live in `src/components/sections/`:
  `HeroSection`, `AboutSection`, `PublicationsSection`, `EducationSection`, and `ContactSection`.
- Global layout, navigation, and shared visual tokens live in `src/layouts/SiteLayout.astro`.
- The competitive-programming study archive lives under `src/pages/study/competitive-programming/`:
  `index.astro` is the list page, `[slug].astro` renders each article via `getStaticPaths`.
  Article metadata is defined in `src/data/studyArticles.ts`; PDF files go in `public/study/competitive-programming/pdfs/`.
  The study pages share visual tokens but use the separate `src/layouts/StudyLayout.astro`.
- Place images and SVGs in `src/assets/`. Do not edit generated files in `dist/`.

## Build, Test, and Development Commands
- `npm run dev`: start the Astro dev server at `http://localhost:4321`.
- `npm run build`: build the static site into `dist/`.
- `npm run preview`: serve the built site locally for final review.

## Coding Style & Naming Conventions
- Use two-space indentation in Astro, HTML, CSS, and TypeScript.
- Keep component styles scoped unless a rule is intentionally global in `SiteLayout.astro`.
- Prefer kebab-case for CSS classes and IDs.
- Keep page structure simple and content-first; avoid adding decorative wrappers unless they improve readability.
- Follow the current visual direction: white and blue base, minimal ornament, no gradients, no shadows, and restrained motion.

## Content & Design Notes
- The site is Japanese-first. Keep labels and UI copy in Japanese unless external proper nouns require English.
- The current section order is `プロフィール / 研究・業績 / 経歴 / 連絡先`; preserve this unless the user asks to change it.
- `EducationSection` uses a vertical timeline. When editing it, keep the marker and center line visually aligned.
- Contact rows should read cleanly as information rows; avoid underlines, separators, or card effects that make them look noisy.

## Testing Guidelines
- No automated tests exist yet.
- After any code or content change, run `npm run build`.
- For UI changes, also manually check the page in desktop and mobile widths via `npm run dev`.

## Commit & Pull Request Guidelines
- Write commit subjects in short imperative English, e.g. `refine education timeline`.
- Pull requests should summarize the visible changes and include screenshots when layout or styling changes.
- Mention any data-shape or content-structure changes so reviewers know whether `src/data/profile.ts` needs follow-up edits.

## Security & Configuration Tips
- No secrets are required.
- If environment variables are introduced later, add an `env.example`, ignore `.env`, and document every variable.
