#!/usr/bin/env bash
# Cat-aging arc — one unique bg per slide, codex calls in parallel.
# Concurrency: PARALLEL_N (default 4).
set -uo pipefail

DEST="/Users/rachpradhan/aie-slides/public/bg"
TMP="/tmp"
mkdir -p "$DEST"
PARALLEL_N="${PARALLEL_N:-4}"

BRAND="Studio Ghibli x Japanese ukiyo-e painterly watercolor. Palette: Cloud White #F8F4EA, Ink Black #11110F, Sky Blue #8ECBEA, Forest Green #52765A, Moss Green #9BAE78, Lantern Gold #E5A848, Underworld Red #9B3A32, Deep Night #20293A. 16:9 widescreen 1792x1024. Soft brushwork, atmospheric depth. Right-side negative space for slide text."

# Cat aging arc baked into each prompt. No apostrophes (replaced with backticks
# or rephrased) to keep things shell-friendly across pipes.
declare -a FILES=(
  "slide-01.png" "slide-02.png" "slide-03.png" "slide-04.png" "slide-05.png"
  "slide-06.png" "slide-07.png" "slide-08.png" "slide-09.png" "slide-10.png"
  "slide-11.png" "slide-12.png" "slide-13.png" "slide-14.png" "slide-15.png"
  "slide-16.png" "slide-17.png" "slide-18.png" "slide-19.png"
)
declare -a PROMPTS=(
  "Primordial dawn. Distant misty mountain, still water foreground, single faint star, pale Sky Blue and Cloud White. A TINY KITTEN silhouette barely visible in lower-left at the edge of still water. First stirring of life."
  "Same camera as slide 1. Water now glowing faintly with bioluminescent cells. The SAME TINY KITTEN sitting still at the water edge, looking up. First moss on rocks. Pale dawn."
  "Small YOUNG CAT sitting on moss-covered stones, head slightly tilted. Faint cave-painting petroglyphs on a boulder behind it. Lantern Gold dawn breaking through. Contemplative."
  "Three small stone lanterns lit in a row along a forest path receding into mist. A YOUNG CAT silhouette at the start of the path, lower-left. Mature pines around. Lantern Gold pools of light. Anticipation."
  "YOUNG CAT silhouette sitting among scattered stone tools, half-built lanterns, and an open scroll, beside a sapling. Slightly chaotic and artisanal. Cat watching, not participating."
  "ADOLESCENT CAT silhouette watching dandelion seeds drift across the frame on the wind. A young tree at center. Several faint additional cat silhouettes in mid-ground suggesting possibilities. Hopeful."
  "ADOLESCENT CAT silhouette at the base of a mature ancient tree. Ground around the tree marked with a faint circular pattern of stones. Forest Green grove. Dusk approaching."
  "ADOLESCENT CAT silhouette in front of three small shrines arranged in a triangle: cloud-borne Heaven temple above (Sky Blue), Forest grove around middle, glowing red torii with embers below."
  "ADULT CAT silhouette beside a young tree mid-growth, sudden burst of warm Lantern Gold light blooming around the tree crown. Dawn breaking sharply. Sense of breakthrough, transformation, not violence. The cat sits and watches."
  "ADULT CAT silhouette at the threshold of a small village under the ancient tree, lanterns lit. Composed, surveying. Forest grove all around."
  "ADULT CAT silhouette beside a small open-air forge with glowing embers, ironwork tools on a workbench. Lantern Gold light. Twilight."
  "ADULT CAT silhouette under a hanging Lantern Gold lantern with a flock of stylized birds streaking across the sky above the tree. Wind, motion overhead, stillness at the cat."
  "ADULT CAT silhouette beside an upright inscribed stone tablet, characters faintly visible, lantern light playing across them. Night air."
  "MATURE CAT silhouette in an open eval-yard: rows of small fenced plots stretching into the distance, each with its own lantern. Mountain still in the background. The cat sits at the gate."
  "MATURE CAT silhouette with a SINGLE KITTEN beside it, both sitting still under the ancient tree at deep night, a soft Lantern Gold glow from a single hanging lantern. Quiet, intimate. The first child."
  "MATURE CAT and ONE KITTEN beside a propped stone tablet faintly inscribed with lines, under a single hanging Lantern Gold lantern. Deep night. Late hour of study."
  "MATURE CAT silhouette with THREE OR FOUR KITTENS scattered nearby, four small paper lanterns drifting up into a Deep Night sky over the village. Stars above. Calm pride."
  "OLDER CAT silhouette on a high ridge overlooking a wide triune city: cloud-temple above, forest village middle, ember-glow base. MANY KITTENS on the ridge with the cat, looking out. Floating bridges between realms. Awe."
  "Mirror of slide 1: same camera, same mountain, same dawn light. Now an OLD CAT in the foreground with SEVERAL KITTENS scattered around it, all looking out at a horizon where the full triune world is visible in the distance. Quiet, resolved. Generations passed."
)

generate_one() {
  local file="$1" scene="$2"
  if [[ -f "$DEST/$file" ]]; then echo "skip · $file exists"; return; fi
  echo "→ start $file"
  rm -f "$TMP/$file"
  codex exec -C /Users/rachpradhan/trilok_frontend \
    "Use the imagegen skill to create a 1792x1024 PNG. Save to $TMP/$file. Prompt: $BRAND $scene" \
    > "$TMP/${file}.codex.log" 2>&1
  if [[ -f "$TMP/$file" ]]; then
    mv "$TMP/$file" "$DEST/$file"
    echo "✓ done $file"
  else
    echo "✗ FAIL $file"
  fi
}

# Bash-native concurrency limiter
N=0
for i in "${!FILES[@]}"; do
  generate_one "${FILES[$i]}" "${PROMPTS[$i]}" &
  N=$((N + 1))
  if (( N >= PARALLEL_N )); then
    wait -n
    N=$((N - 1))
  fi
done
wait
echo
echo "All done. Files in $DEST:"
ls -1 "$DEST"
