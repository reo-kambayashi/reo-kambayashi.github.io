# Repository Guidelines

## Project Structure & Module Organization
- This Astro site renders from `src/pages/index.astro`; keep layout, content blocks, and scoped styles together there for quick review.
- Reusable UI lives in `src/components/` (see `Welcome.astro` for structure). Share styling via component-level `<style>` blocks or extracted components.
- Place images and SVGs in `src/assets/`; store downloadable artifacts (e.g., `cv.pdf`) inside `public/`.
- Avoid editing the generated `dist/` directory; always regenerate via build commands instead of manual tweaks.

## Build, Test, and Development Commands
- `npm run dev`: launches the Astro dev server at http://localhost:4321/ with hot reload.
- `npm run build`: compiles the static site into `dist/`; run before publishing or creating a preview build.
- `npm run preview`: serves the latest production build locally so you can validate the generated files.

## Coding Style & Naming Conventions
- Use two-space indentation across Astro, HTML, and scripts.
- Prefer kebab-case for CSS classes and IDs (e.g., `hero-section`, `primary-button`).
- In frontmatter scripts, use camelCase for variables and PascalCase for exported components. Keep inline logic minimal and extract shared helpers into components when duplication appears.

## Testing Guidelines
- No automated tests exist yet. When adding interactive behavior, introduce Astro Test Runner and expose it via `npm run test`.
- Place new specs under `tests/` using the `*.test.ts` suffix, grouping by component or feature.
- Document any manual QA steps in the pull request when automated coverage is not yet available.

## Commit & Pull Request Guidelines
- Write commit subjects in short imperative English (≤50 characters), e.g., `add hero section`; expand with a body only if necessary.
- Pull requests should summarize changes, link related issues, and include before/after screenshots for UI changes.
- Call out dependency updates or configuration impacts in bullet lists so reviewers can assess deployment risk.

## Security & Configuration Tips
- Secrets are not required today. If they become necessary, create `env.example`, add `.env` to `.gitignore`, and document variables.
- For Astro upgrades, update `package-lock.json`, run `npm run build`, and note the version change in the pull request.
