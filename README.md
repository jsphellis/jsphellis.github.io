# Joseph Ellis portfolio

A minimal portfolio and separate writing space, built with Next.js 15, React 19,
TypeScript, and Tailwind CSS 4. The site exports static HTML for GitHub Pages.

## Development

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
```

The production export is written to `out/`. Keep `trailingSlash: true` so routes
such as `/blog/` and `/projects/chatdb/` export to directories with `index.html`.

## Content

- `src/components/`: introduction, selected projects, experience, and background.
- `src/data/projects.ts`: homepage summaries and project write-ups.
- `src/data/posts.ts`: blog metadata and article content.
- `src/app/projects/[slug]/`: static project pages.
- `src/app/blog/`: separate writing index and articles.
- `src/app/globals.css`: theme tokens, typography helpers, and motion.
- `public/`: intentionally public assets, including `Joseph-Ellis-Resume.pdf`.

The résumé served by this site is a public edition without employer-internal
metrics. Keep application-specific résumés and working notes outside `public/`.
Everything inside `public/` is copied to the published site.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `out/` to GitHub Pages. Local branch changes are not deployed until
merged and pushed.
