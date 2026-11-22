# the-main-branch

Website of the Main Branch Podcast, the Devoxx Greece and Voxxed Days Thessaloniki podcast.
Built with [Astro](https://astro.build) and deployed to GitHub Pages, the same way as devoxx.gr.

## Run it locally

```sh
npm install
npm run dev            # http://localhost:4321
```

## Where things live

| What | Where |
| --- | --- |
| Episodes shown in the log | `src/data/episodes.json` |
| Menu, hero text, channel links, topics, conferences, "suggest a topic" text | `src/data/site.json` |
| Homepage layout | `src/pages/index.astro` |
| Header, footer, `<head>` | `src/layouts/Base.astro` |
| Colours, fonts, layout | `src/styles/global.css` |
| Logo and favicons | `public/images/` |

Common edits:

- **New episode:** add an entry at the top of `src/data/episodes.json`. The highest `number` becomes `HEAD`.
  An episode with a `branch` label is drawn as an orange branch that merges back into main; without one it sits on the main line. `guests` or `note` is the line under the title, and `youtube` / `spotify` are the Watch and Listen links.
- **Topic filter:** `topic` must be one of the `topics` in `src/data/site.json`.
- **Suggest a topic:** the form opens a prefilled issue on the repository set in `repo` in `src/data/site.json`.
- **Channels:** the links and their order are in `channels` in `src/data/site.json`. The one marked `primary` is the highlighted button. Icon shapes are in `src/data/icons.json`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repository settings, set **Pages → Source** to **GitHub Actions**.

Without a custom domain the site is served from `https://softconf.github.io/the-main-branch/`.
