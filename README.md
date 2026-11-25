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

`src/assets/lob.mp4` and `src/assets/lob-1280.mp4` are committed in their web-ready form: H.264 High profile, yuv420p, no audio, fast-start (`moov` before `mdat`). Do not commit the master recording: it is 7078×4320 HEVC with an AAC track, far too heavy for the page, and Chrome, Firefox and Edge cannot play it.

The hero script gives phones (≤767px) `lob-1280.mp4` and everything wider `lob.mp4`, so decode and download stay cheap on a phone. Nothing is fetched until the clip is on screen, and playback pauses when the tab is hidden, when the hero scrolls away, or when the visitor asked for reduced motion.

The player draws the clip two pixels larger than its frame on the right and bottom and lets the frame clip the overhang. Chromium occasionally paints the trailing edge of a playing video layer black for one frame — mostly while scrolling or at some zoom levels — and keeping the clip's own edge out of the frame hides it. Only the trailing edges overhang, so the recording's left and top framing is untouched; the picture has white or light grey margins there, so the cropped pixels are invisible. Safari shows a black hairline at the video layer's edge instead, so the element also keeps a 1px white border, which covers the left and top edges and is invisible against the page.

The master has a 1px black line along its top and bottom edge. Cropping `7078:4316:0:2` drops the line (and one extra row, to keep the even height that yuv420p needs). Adjust the crop if a future recording is framed differently:

```bash
ffmpeg -i master.mp4 \
  -vf "crop=7078:4316:0:2,scale=2560:1560:flags=lanczos,format=yuv420p" \
  -c:v libx264 -preset slow -crf 20 -profile:v high -level 5.1 \
  -g 60 -keyint_min 30 -sc_threshold 0 \
  -colorspace bt709 -color_primaries bt709 -color_trc bt709 \
  -movflags +faststart -an -map_metadata -1 \
  src/assets/lob.mp4
```

The phone clip is the same footage at 1280×780:

```bash
ffmpeg -i master.mp4 \
  -vf "crop=7078:4316:0:2,scale=1280:780:flags=lanczos,format=yuv420p" \
  -c:v libx264 -preset slow -crf 23 -profile:v high -level 4.0 \
  -g 60 -keyint_min 30 -sc_threshold 0 \
  -colorspace bt709 -color_primaries bt709 -color_trc bt709 \
  -movflags +faststart -an -map_metadata -1 \
  src/assets/lob-1280.mp4
```

Then regenerate the poster from the first frame so it matches the clip:

```bash
ffmpeg -ss 0.1 -i master.mp4 -frames:v 1 \
  -vf "crop=7078:4316:0:2,scale=2560:1560:flags=lanczos" \
  -c:v libwebp -quality 80 -y src/assets/lob-poster.webp
```

`-an` keeps the clip silent: the hero is muted anyway, and a stray audio track only makes autoplay less reliable. `-movflags +faststart` lets the browser start decoding before the whole file has arrived. Keep the poster and video dimensions in sync; the `<video>` element uses the poster's width and height to reserve space and avoid layout shift.

## Download URLs

iOS and Mac download URLs live in `src/components/download.astro`. The QR code is generated at build time from the iOS URL.

The iOS URL is still a placeholder: `https://apps.apple.com`. Replace it with the real App Store link, then rebuild.

The Mac installer is `public/downloads/Lob-1.0.1-macOS-universal.zip`, and the download button points to that file.

## Deploy

The site is published at [https://hejtao.github.io/lob-site/](https://hejtao.github.io/lob-site/). Pushing to `main` triggers GitHub Actions to build and publish automatically.
