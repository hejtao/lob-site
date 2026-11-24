# Lob

Landing page for Lob. Speak with the voice input already on your iPhone, and Lob types the text into the AI app currently focused on your Mac.

Install both the iPhone and Mac apps to use it.

## Environment

- Node.js 22.12 or later
- Yarn 4. The project uses `nodeLinker: node-modules`, so dependencies are installed in `node_modules`

## Local development

```bash
corepack enable
yarn install
yarn dev
```

The dev server runs at [http://localhost:4321](http://localhost:4321).

## Scripts

| Command | What it does |
| --- | --- |
| `yarn dev` | Start the dev server |
| `yarn build` | Build the static site into `dist/` |
| `yarn preview` | Preview the build |

## Pages

The homepage has four sections:

- Hero: product intro and main image
- About: product description
- Features: six feature descriptions
- Download: iOS QR code, Mac download button, and copyright

About, Features, and Download in the header jump to `#about`, `#features`, and `#download`.

## Download URLs

iOS and Mac download URLs live in `src/components/download.astro`. The QR code is generated at build time from the iOS URL.

The iOS URL is still a placeholder: `https://apps.apple.com`. Replace it with the real App Store link, then rebuild.

The Mac installer is `public/downloads/Lob-1.0.1-macOS-universal.zip`, and the download button points to that file.

## Deploy

The site is published at [https://lob.hejtao.online/](https://lob.hejtao.online/). Pushing to `main` triggers GitHub Actions to build and publish automatically.
