# Adeptus Titancus Terminals

A [Next.js](https://nextjs.org) app, built as a static site and hosted on GitHub Pages.

## Development

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/app/          App Router pages, layout and global CSS
src/components/   Shared React components
src/lib/          Shared non-component code (helpers, clients, types)
public/           Static assets served from the site root
```

Imports use the `@/` alias, which maps to `src/` — e.g. `import Button from "@/components/Button"`.

## Build

```bash
bun run build
```

`next.config.ts` sets `output: "export"`, so the build writes a fully static site to `out/`. That rules out anything needing a server at request time: Server Actions, dynamic route handlers, `cookies()`, rewrites/redirects/headers, and ISR.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `out/` to GitHub Pages at
<https://v0ren.github.io/adeptus-titancus-terminals/>.

Because the site is served from a sub-path, the build needs a matching `basePath`. The workflow takes it from the `configure-pages` action and passes it as `PAGES_BASE_PATH`, so nothing is hardcoded — it keeps working if the repo is renamed or moved to a custom domain. Local builds leave the variable unset and serve from `/`.

To reproduce what Pages gets:

```bash
PAGES_BASE_PATH=/adeptus-titancus-terminals bun run build
```

**One-time setup:** in the repository's **Settings → Pages → Source**, choose **GitHub Actions**. The deploy job fails until that is set.
