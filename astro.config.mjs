import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE and BASE are set by the GitHub Pages workflow. With a custom domain
// BASE is "/"; on the github.io preview it is "/the-main-branch".
const base = process.env.BASE || '/';

// GitHub Pages can report the custom domain as http:// until "Enforce HTTPS" is on.
// Canonical, social and structured-data URLs must always be https.
const site = (process.env.SITE || 'https://mainbranch.fm').replace(/^http:\/\//, 'https://');

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  // The episode list lives on the home page.
  redirects: { '/episodes/': `${base.replace(/\/$/, '')}/#episodes` },
  integrations: [sitemap()],
});
