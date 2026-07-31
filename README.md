# jsphellis.github.io

Personal portfolio and online résumé for Joseph Ellis, served at
[jsphellis.github.io](https://jsphellis.github.io).

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4

Built as a fully static site (`output: 'export'`) — no server runtime. `trailingSlash: true`
is required so the export emits `blog/index.html` rather than `blog.html`, which keeps
URLs with a trailing slash from 404ing on GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Writes the static site to `out/`.

## Structure

```
src/app/           routes — landing page, /blog, /blog/[slug]
src/components/    landing page sections (Hero, About, Experience, Projects,
                   Skills, Honors, Contact) plus Navbar and BackToTop
public/            static assets served at the site root
```

Content lives in the components themselves, not in a CMS or markdown files — experience,
projects, skills, and blog posts are typed arrays at the top of their respective files.

Anything that must be reachable by URL — the résumé PDF, images, blog reports — has to sit
in `public/`. With `output: 'export'`, files elsewhere in the repo are not copied into `out/`.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `out/` to GitHub Pages. No manual step is needed.
