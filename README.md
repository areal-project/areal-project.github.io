# AReaL Website

The official landing site for **AReaL** — a Large-Scale Asynchronous Reinforcement Learning System.
Built with [Docusaurus](https://docusaurus.io/).

## Requirements

- Node.js >= 18
- A package manager (`pnpm`, `npm`, or `yarn`)

## Getting Started

Install dependencies:

```bash
pnpm install   # or: npm install
```

Start the local dev server (with hot reload):

```bash
pnpm start     # or: npm start
```

The site runs at http://localhost:3000/.

Build the static production site into the `build/` directory:

```bash
pnpm build     # or: npm run build
```

Preview the production build locally:

```bash
pnpm serve     # or: npm run serve
```

## Project Structure

```
src/
  components/Landing/   # Home page sections (Hero, Use, Research, Partners)
  data/                 # JSON content that drives the home page
    publications.json   # Research Publications section
    partners.json       # Partner section
  pages/index.tsx       # Home page entry
static/img/areal/       # Logos, paper thumbnails and other images
docusaurus.config.ts    # Site config (title, navbar, footer, fonts)
```

## Updating the Home Page Content

The **Research Publications** and **Partner** sections are data-driven — you can
update them by editing JSON only, no code changes required. Changes appear
automatically while `pnpm start` is running.

### 1. Add / edit a research publication

Edit [`src/data/publications.json`](src/data/publications.json). Each entry:

```json
{
  "image": "img/areal/paper1.png",
  "meta": "2026 · Technical Report",
  "title": "Paper title",
  "abstract": "Short description shown under the title.",
  "actions": [
    { "label": "Read paper", "href": "https://arxiv.org/abs/..." },
    { "label": "Code", "href": "https://github.com/..." }
  ]
}
```

| Field      | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `image`    | Thumbnail path, relative to `static/` (e.g. `img/areal/paper.png`) |
| `meta`     | Small label above the title (year / type)                          |
| `title`    | Publication title                                                  |
| `abstract` | One–two sentence summary                                           |
| `actions`  | List of buttons, each with a `label` and a `href`                  |

### 2. Add / edit a partner

Edit [`src/data/partners.json`](src/data/partners.json). Each entry:

```json
{
  "name": "PyTorch",
  "logo": "img/areal/pytorch-logo.png",
  "href": "https://pytorch.org"
}
```

| Field  | Description                          |
| ------ | ------------------------------------ |
| `name` | Partner name shown under the logo    |
| `logo` | Logo path, relative to `static/`     |
| `href` | Link opened when the tile is clicked |

### 3. Add images

Place new logos or thumbnails in `static/img/areal/`, then reference them in the
JSON using a path relative to `static/` (e.g. `img/areal/my-image.png`).

## Deployment

The `build/` folder is a fully static site and can be hosted on any static host
(GitHub Pages, Netlify, Vercel, etc.). See the
[Docusaurus deployment docs](https://docusaurus.io/docs/deployment) for details.
