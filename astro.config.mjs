import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner, repo] = repository.split('/');
const ownerSlug = owner?.toLowerCase() ?? '';
const repoSlug = repo?.toLowerCase() ?? '';
const isUserPagesRepo = repoSlug === `${ownerSlug}.github.io`;

const pagesSite = owner
  ? `https://${ownerSlug}.github.io${isUserPagesRepo ? '' : `/${repo}`}`
  : undefined;

const site = process.env.CI && pagesSite ? pagesSite : 'http://localhost:4321';
const base =
  process.env.CI && repo
    ? isUserPagesRepo
      ? '/'
      : `/${repo}`
    : '/';

// GitHub Pages での公開時に site/base を自動で合わせる
export default defineConfig({
  site,
  base,
  trailingSlash: 'never'
});
