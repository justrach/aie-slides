#!/usr/bin/env bash
# Generate the 12 Trilok evolution backgrounds via codex+imagegen.
# Codex sandbox can only write to /tmp, so we tell it to write there
# and then mv into the deck's public/bg/ dir.
# Runs serially. Re-runnable: skips files that already exist in DEST.
set -uo pipefail

DEST="/Users/rachpradhan/aie-slides/public/bg"
TMP="/tmp"
mkdir -p "$DEST"

BRAND="Studio Ghibli x Japanese ukiyo-e painterly watercolor. Palette: Cloud White #F8F4EA, Ink Black #11110F, Sky Blue #8ECBEA, Forest Green #52765A, Moss Green #9BAE78, Lantern Gold #E5A848, Underworld Red #9B3A32, Deep Night #20293A. 16:9 widescreen 1792x1024. Soft brushwork, atmospheric depth. Negative space on the right for text. From slide 2 onwards, a small motionless ink-black cat silhouette sits in lower-left, never holding tools, simply part of the landscape."

gen() {
  local n="$1"; local file="$2"; shift 2
  local prompt="$*"
  if [[ -f "$DEST/$file" ]]; then echo "[$n] skip — $file exists"; return; fi
  echo "[$n] generating $file..."
  rm -f "$TMP/$file"
  codex exec -C /Users/rachpradhan/trilok_frontend \
    "Use the imagegen skill to create a 1792x1024 PNG. Save it to $TMP/$file. Prompt: $BRAND $prompt" \
    2>&1 | tail -4
  if [[ -f "$TMP/$file" ]]; then
    mv "$TMP/$file" "$DEST/$file"
    echo "[$n] ✓ moved to $DEST/$file"
  else
    echo "[$n] ✗ codex did not produce $TMP/$file"
  fi
}

gen 01 trilok-slide-01.png "Primordial dawn. Empty world: distant misty mountain, still water foreground, pale Sky Blue + Cloud White pre-sunrise, single faint star. No cat yet."
gen 02 trilok-slide-02.png "Same camera as slide 1. Water glows faintly with bioluminescent cells. Tiny black cat silhouette appears lower-left. First moss on rocks."
gen 03 trilok-slide-03.png "Same camera. Moss spreads across stones in Moss Green. Faint cave-painting petroglyphs on a boulder. Cat silhouette sits quietly. Soft Lantern Gold dawn breaking."
gen 04 trilok-slide-04.png "Early-village feel. Stone tools, scrolls, half-built lanterns scattered around a sapling. Slightly chaotic and artisanal. Cat silhouette lower-left."
gen 05 trilok-slide-05.png "Young tree at center. Wind. Dandelion seeds drifting across the frame. Several faint cat silhouettes in mid-ground. Hopeful."
gen 06 trilok-slide-06.png "Mature ancient tree center-left. Three shrines emerging: cloud-borne Heaven temple above (Sky Blue), Forest Green grove around the tree, glowing red torii with embers below."
gen 07 trilok-slide-07.png "Same scene at dusk, Deep Night sky with first stars. Subtle circular path traced in Lantern Gold around the tree connecting the three shrines."
gen 08 trilok-slide-08.png "World populated with magical objects: hanging Lantern Gold lantern, small forge with embers, stylized birds in the sky as a swarm, glowing rune-stone."
gen 09 trilok-slide-09.png "Village at golden hour. Many cats of subtly different shapes — some glowing luminous, some faded at edges. Warm, communal, slightly bittersweet."
gen 10 trilok-slide-10.png "Same village at night. Only luminous surviving cats remain, haloed in Lantern Gold. Empty spaces where faded ones used to be. Quiet, reverent."
gen 11 trilok-slide-11.png "Wide triune city alive. Cloud-temple bustling overhead, forest village middle, Underworld ember-glow base. Swarms of cats on floating bridges. Maximal, awe-inducing."
gen 12 trilok-slide-12.png "Mirror of slide 1 — dawn again, same camera, same mountain. Now the full triune world visible in the distance. Cat silhouette lower-left. Quiet, resolved."

echo "Done."
