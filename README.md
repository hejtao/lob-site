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

## Hero media

The hero clip lives in `src/assets/lob.mp4` and is committed in its web-ready form: H.264, 2560×1560, no audio, fast-start. Do not commit the 8K master recording; it is far too heavy for the page and is usually HEVC, which many browsers cannot decode.

The 8K export has a thin black frame around the image (2px on the left and right, 5–6px on the top and bottom). The crop below removes it. Adjust those values if a future master is framed differently:

```bash
ffmpeg -i master.mp4 \
  -vf "crop=7074:4308:2:6,scale=2560:1560:flags=lanczos,format=yuv420p" \
  -c:v libx264 -preset slow -crf 20 -profile:v high -level 5.1 \
  -g 60 -keyint_min 30 -sc_threshold 0 \
  -movflags +faststart -an -map_metadata -1 \
  src/assets/lob.mp4
```

Phones get the smaller `src/assets/lob-1280.mp4`; the hero script chooses between the two files from the viewport width. Regenerate it as well:

```bash
ffmpeg -i master.mp4 \
  -vf "crop=7074:4308:2:6,scale=1280:780:flags=lanczos,format=yuv420p" \
  -c:v libx264 -preset slow -crf 23 -profile:v high -level 4.0 \
  -g 60 -keyint_min 30 -sc_threshold 0 \
  -movflags +faststart -an -map_metadata -1 \
  src/assets/lob-1280.mp4
```

Then regenerate the poster from the first frame so it matches the clip:

```bash
ffmpeg -ss 0.1 -i master.mp4 -frames:v 1 \
  -vf "crop=7074:4308:2:6,scale=2560:1560:flags=lanczos" \
  -c:v libwebp -quality 80 -y src/assets/lob-poster.webp
```

Keep the poster and video dimensions in sync; the video element uses the poster's dimensions to reserve space and avoid layout shift.

## Download URLs

iOS and Mac download URLs live in `src/components/download.astro`. The QR code is generated at build time from the iOS URL.

The iOS URL is still a placeholder: `https://apps.apple.com`. Replace it with the real App Store link, then rebuild.

The Mac installer is `public/downloads/Lob-1.0.1-macOS-universal.zip`, and the download button points to that file.

## Deploy

The site is published at [https://hejtao.github.io/lob-site/](https://hejtao.github.io/lob-site/). Pushing to `main` triggers GitHub Actions to build and publish automatically.
