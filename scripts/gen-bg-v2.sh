#!/usr/bin/env bash
# Generate v2 deck backgrounds (12 of them) via codex+imagegen.
# Codex sandbox can only write to /tmp, so we save there then mv into public/bg/.
# Runs in batches of 4 in parallel. Re-runnable: skips files that already exist in DEST.
# Old slide-01..slide-19.png are LEFT IN PLACE — these new ones have descriptive names.
set -uo pipefail

DEST="/Users/rachpradhan/aie-slides/public/bg"
TMP="/tmp"
mkdir -p "$DEST"

BRAND="Studio Ghibli x Japanese ukiyo-e painterly watercolor. Palette: Cloud White #F8F4EA, Ink Black #11110F, Sky Blue #8ECBEA, Forest Green #52765A, Moss Green #9BAE78, Lantern Gold #E5A848, Underworld Red #9B3A32, Deep Night #20293A. 16:9 widescreen 1792x1024. Soft brushwork, atmospheric depth. The deck follows a cat-aging arc: each later slide shows an older cat (kitten → young → adolescent → adult → mature → mature with many kittens → old with next generation). Cat silhouette is ink-black and motionless — part of the landscape, never holding tools."

gen() {
  local n="$1"; local file="$2"; shift 2
  local prompt="$*"
  if [[ -f "$DEST/$file" ]]; then echo "[$n] skip — $file already in DEST"; return; fi
  echo "[$n] generating $file..."
  rm -f "$TMP/$file"
  codex exec -C /Users/rachpradhan/trilok_frontend \
    "Use the imagegen skill to create a 1792x1024 PNG. Save it to $TMP/$file. Prompt: $BRAND $prompt" \
    >/tmp/codex-$n.log 2>&1
  if [[ -f "$TMP/$file" ]]; then
    mv "$TMP/$file" "$DEST/$file"
    echo "[$n] OK  $DEST/$file"
  else
    echo "[$n] FAIL — see /tmp/codex-$n.log"
  fi
}

# Batch 1
gen 01 slide-cover.png      "Cover slide. Primordial dawn over a misty Ghibli valley. Tiny BLACK KITTEN silhouette in lower-left on a mossy rock, looking out at distant mountains. Pale Sky Blue + Cloud White pre-sunrise. Single faint Lantern Gold star above the horizon. Vast negative space on the RIGHT for the title text. Quiet, hopeful, beginning." &
gen 02 slide-paper.png      "2023, the paper that started everything. Young scholarly KITTEN in lower-left curled around an open scroll whose ink lines glow Lantern Gold and faintly rearrange themselves like equations or agent trajectories. Bioluminescent pond reflecting moonlight in background. Soft mossy clearing. Sense of first discovery. Negative space on the RIGHT for text." &
gen 06 slide-trajectory.png "ADOLESCENT cat sits beside a tall stone tablet engraved with a glowing trail of footprints — its own past trajectory. The footprints behind it on the path are faintly luminous; the path ahead has yet to be carved. Forest Green moss, Lantern Gold engravings, Cloud White morning mist. Quiet, contemplative. Negative space on the RIGHT for text." &
gen 07 slide-loops.png      "ADULT BLACK CAT tends a small forge ring at dusk. Iteration loops are visualized as 4 concentric spiraling rings of Lantern Gold sparks and Underworld Red embers orbiting a glowing tool on the anvil — the rings pulse like a heartbeat. Deep Night sky above. Cat looks focused, slightly weary. Negative space on the RIGHT." &
wait

# Batch 2
gen 05 slide-worldmodels.png "VAST landscape that IS an exponential graph. A smooth glowing Lantern Gold curve rises like a comet trail from the lower-left horizon to the upper-right, soaring high into a Deep Night sky filled with faint constellations. Subtle x-axis along the bottom (a Ghibli horizon line of mountains). Subtle y-axis on the far left (a vertical cliff face). THREE luminous markers on the curve: a small flickering candle at lower-left (labelled by position only — 'humans / today'), a brighter lantern halfway up (current AI), and a blazing sun-galaxy at upper-right (world-model agents). An ADOLESCENT BLACK CAT silhouette stands on a small cliff in the lower-middle watching the curve rise. The curve must clearly read as exponential growth. Awe-inducing, cosmic. Negative space on the LEFT for text." &
gen 08 slide-muonry.png     "ADULT BLACK CAT in a Ghibli mountainside workshop. In front of the cat: a small luminous BLUE-glowing zig-shaped binary artifact on a stone (compact, instant). Beside it on the ground: a discarded chunky ORANGE rusting compiler-engine (Rust) with cobwebs forming. Speed-streak lines between them. Forest Green workshop walls, Lantern Gold lantern hanging overhead. Negative space on the RIGHT for text." &
gen 09 slide-codedb.png     "ADULT BLACK CAT with whiskers extended like sense-organs sits before a large stone tablet whose carved characters LIGHT UP in Lantern Gold wherever the cat is looking — a search beam. One small KITTEN sits watching the parent work. Quiet library / temple ambience, Forest Green and Moss Green stone. Negative space on the RIGHT for text." &
gen 10 slide-nanobrew.png   "MATURE BLACK CAT at a small mountain-side apothecary bench in a Hetzner-server-rack-shaped stone shrine. Glowing flasks each labelled with a package name (ffmpeg, jq, node) sit ready. One KITTEN excitedly pours one flask into a sandbox bowl, motion-blur speed lines. Lantern Gold dominant, Forest Green stone. Negative space on the RIGHT for text." &
wait

# Batch 3
gen 11 slide-devswarm.png   "MATURE BLACK CAT at center watches a colony of 6 to 8 small KITTENS working together on a single shared glowing object — they gather around it from all directions, coordinated like a flock. Distant triune-city silhouette across the valley. Joyful, coordinated, swarming. Lantern Gold + Forest Green palette. Negative space on the RIGHT for text." &
gen 12 slide-fitness.png    "MATURE BLACK CAT sits before a glowing Lantern Gold scales-of-judgement / selection altar on a stone plinth. On one side: bright variants of objects (representing agents) glowing brightly — selected. On the other side: dim variants fading — culled. Several KITTENS watch from the steps. Quiet, reverent. Underworld Red embers glow in the background. Negative space on the RIGHT for text." &
gen 13 slide-codegraff.png  "MATURE BLACK CAT plus many KITTENS stand on a high summit overlooking the FULL TRIUNE CITY — Cloud Temple bustling overhead (Sky Blue), Forest village in middle (Forest Green), Underworld embers below (Underworld Red). In the foreground: a vast glowing HARNESS-MACHINE orchestrates beams of Lantern Gold light upward toward many models suspended in the clouds (multi-model fan-out). Maximal, awe-inducing, the punchline of the talk. Negative space on the RIGHT for text." &
gen 14 slide-thanks.png     "Mirror of the cover. Same misty mountain valley at dawn — but now an OLDER BLACK CAT sits with the NEXT GENERATION around: several adult cats and kittens nestled together on the mossy rock. Soft Lantern Gold sunrise spreading. Quiet, resolved, grateful. Negative space CENTER for closing text." &
wait

echo "Done."
