import { defineConfig } from 'astro/config';

// SITE and BASE are set by the GitHub Pages workflow. With a custom domain
// BASE is "/"; on the github.io preview it is "/the-main-branch".
const base = process.env.BASE || '/';

export default defineConfig({
  site: process.env.SITE || 'https://mainbranch.fm',
  base,
  trailingSlash: 'always',
});
