#!/usr/bin/env bash
# Extra backgrounds for slides that deserve their own composition.
# Run AFTER gen-bg.sh has finished (or in parallel — codex CLI is serialized anyway).
set -uo pipefail

DEST="/Users/rachpradhan/aie-slides/public/bg"
TMP="/tmp"
mkdir -p "$DEST"

BRAND="Studio Ghibli x Japanese ukiyo-e painterly watercolor. Palette: Cloud White #F8F4EA, Ink Black #11110F, Sky Blue #8ECBEA, Forest Green #52765A, Moss Green #9BAE78, Lantern Gold #E5A848, Underworld Red #9B3A32, Deep Night #20293A. 16:9 widescreen 1792x1024. Soft brushwork, atmospheric depth. Right-side negative space for text. Small motionless ink-black cat silhouette lower-left, part of the landscape, never holding anything."

gen() {
  local file="$1"; shift
  local prompt="$*"
  if [[ -f "$DEST/$file" ]]; then echo "skip — $file exists"; return; fi
  echo "generating $file..."
  rm -f "$TMP/$file"
  codex exec -C /Users/rachpradhan/trilok_frontend \
    "Use the imagegen skill to create a 1792x1024 PNG. Save to $TMP/$file. Prompt: $BRAND $prompt" \
    2>&1 | tail -3
  if [[ -f "$TMP/$file" ]]; then mv "$TMP/$file" "$DEST/$file"; echo "✓ $file"; else echo "✗ $file"; fi
}

# Slide 4 — signpost. Three lanterns lit in a row, single path.
gen trilok-slide-signpost.png "Three small stone lanterns lit in a row along a forest path. Mist between them. Mature pines. Lantern Gold light. Quiet anticipation."

# Slide 9 — the DGM 20→50 moment. Single sapling growing out of the moss with sudden bloom of golden light around it.
gen trilok-slide-bloom.png "A single small tree rising fast from moss-covered ground. Sudden burst of warm Lantern Gold light blooming around its crown. Dawn light breaking. Sense of breakthrough, not violence."

# Slide 16 — SQL selector. Stone tablet with faintly inscribed lines, lantern-lit study at night.
gen trilok-slide-tablet.png "Close shot of an old stone tablet propped against a tree at night, faintly inscribed lines visible. A single hanging Lantern Gold lantern. Quiet study, late hour."

# Slide 17 — track record. Four small lanterns floating up into a Deep Night sky over the village.
gen trilok-slide-lanterns.png "Four small Lantern Gold paper lanterns drifting up into a Deep Night sky, over a sleeping village. Stars above. Calm pride, not celebration."

echo "Done. Edit src/slides/manifest.ts to point slides at the new files."
