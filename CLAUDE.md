# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server (localhost:8000)
npm run develop
# or
yarn develop

# Production build
npm run build

# Serve production build locally
npm run serve

# Clear Gatsby cache (run when seeing stale build issues)
npm run clean

# Format code
npm run format
```

> `NODE_OPTIONS=--openssl-legacy-provider` is injected automatically via `cross-env` in the npm scripts — required for Gatsby v2 compatibility with Node 18.

## Docker

```bash
docker-compose up --build
```

Serves the production build at port 8000.

## Architecture

This is a **Gatsby v2** single-page app (`src/pages/app.js`) that performs real-time LIBRAS (Brazilian Sign Language) alphabet recognition using the webcam.

### Detection pipeline

`src/pages/app.js` is the entire application. On mount it:
1. Loads the TensorFlow.js **Handpose** model (`@tensorflow-models/handpose`)
2. Polls the webcam every 100ms via `setInterval`
3. For each frame with a detected hand, runs **Fingerpose** `GestureEstimator` with confidence threshold `6.5`
4. Maps the winning gesture name to a sign image and updates state

### Gesture definitions (`src/handsigns/`)

Each file (`Asign.js` … `Zsign.js`) exports a `GestureDescription` built with Fingerpose's `Finger`, `FingerCurl`, and `FingerDirection` primitives. `index.js` re-exports all signs as a single `Handsigns` object.

### Sign images (`src/handimage/`)

- `X.svg` — LIBRAS hand-sign diagram shown when a gesture is detected (`Signimage` map, keyed by gesture name)
- `Xhand.svg` — prompt image shown to the user as the target letter (`Signpass` array used in the game loop)

`index.js` exports both `Signimage` (object keyed by letter) and `Signpass` (shuffled array for the game sequence).

### Game flow

`started` → user shows thumbs-up → `played` (cycles through shuffled `Signpass` letters, advancing on correct match) → loops when all letters completed.

### Canvas overlay

`src/components/handposeutil.js` exports `drawHand`, which draws gold joint lines and navy landmark dots onto the `<canvas>` overlaid on the webcam feed.

## Code style

Prettier config: no semicolons, no arrow-function parens. Run `npm run format` before committing.
