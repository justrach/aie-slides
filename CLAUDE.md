# aie-slides — Evolving Agents talk (AI Engineer SG, May 2026)

Next.js + motion + three.js deck. 12 slides, ~10 minutes.

## How to edit

- Each slide is its own component under `src/slides/SlideNN.tsx`. Edit text directly there.
- Slide metadata (background image, world layers, speaker notes) lives in `src/slides/manifest.ts`.
- Backgrounds in `public/bg/trilok-slide-NN.png`. Regenerate via `bash scripts/gen-bg.sh`.
- 3D scenes in `src/components/layers/{Loop3D,Swarm3D,City3D}.tsx`.
- Real survivor heatmap data: drop into `src/components/SurvivorHeatmap.tsx`.

## Run

```bash
bun dev
# open http://localhost:3000  (auto-redirects to /deck/1)
```

## Keys during talk

- → / Space / PageDown → next
- ← / PageUp → prev
- n → toggle speaker notes
- f → fullscreen

## TODO

- [ ] Add Lessons Learned + Pitfalls slide (user wants this; defer until after first dry-run)
- [ ] Real heatmap data on slide 10
- [ ] Confirm backgrounds rendered (check public/bg/)
