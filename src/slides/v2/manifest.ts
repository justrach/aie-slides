export type LayerKey =
  | "shader-soup"
  | "shader-haze"
  | "loop3d"
  | "swarm3d"
  | "city3d";

export interface SlideMeta {
  index: number;
  title: string;
  durationSec: number;
  bg: string;
  layers: LayerKey[];
  notes: string;
}

// v2 — reworked from speech2.m4a. 13 slides, ~10 min.
// Narrative: open-endedness origin → coding env paper → toolchain
// (Muonry/CodeDB/Nanoboo/DevSwarm) → CodeGraph on Forge → closer.
export const slides: SlideMeta[] = [
  { index: 1, title: "Evolving Agents", durationSec: 15, bg: "slide-01.png",
    layers: [],
    notes: "Cover. Kitten · primordial dawn. 'I built a harness that does well on coding tasks. First — how I got here.'" },

  { index: 2, title: "2023 — diffusion, then a paper", durationSec: 40, bg: "slide-02.png",
    layers: [],
    notes: "Kitten · bioluminescent water. Started in diffusion. Paper on human-like agents evolving in their own environment. Models have 'human interestingness.' First dive into open-endedness." },

  { index: 3, title: "A different branch of ML", durationSec: 40, bg: "slide-03.png",
    layers: [],
    notes: "Young cat · petroglyph. SF was scaling-pilled. Open-endedness is about what the agent encounters, not how big it is." },

  { index: 4, title: "Doctor Strange vs Dormammu", durationSec: 45, bg: "slide-05.png",
    layers: [],
    notes: "Young cat among scattered tools. The Marvel beat — environment changes every loop. Agent eventually wins. World models start mattering here." },

  { index: 5, title: "Coding as the environment", durationSec: 50, bg: "slide-07.png",
    layers: [],
    notes: "Adolescent cat at mature tree. Last year's paper: evolve the coding environment AND the agent. Tools are selected for, not given." },

  { index: 6, title: "The shape of the brain", durationSec: 30, bg: "slide-08.png",
    layers: [],
    notes: "Adolescent cat at the three shrines. Once the agent is smart enough, the interesting object isn't the weights — it's the trajectory it kept." },

  { index: 7, title: "Why I started building", durationSec: 40, bg: "slide-09.png",
    layers: [],
    notes: "Adult cat by the blooming tree. Iteration loops in DGM-style setups take a beating. Two levers: tool latency + token volume." },

  { index: 8, title: "Muonry — first Zig tool", durationSec: 45, bg: "slide-11.png",
    layers: [],
    notes: "Adult cat beside forge. Rust comp times → Zig. Iteration loop got 10× tighter. Not about Zig — about the loop." },

  { index: 9, title: "CodeDB", durationSec: 35, bg: "slide-13.png",
    layers: [],
    notes: "Adult cat beside inscribed tablet. Search = the agent's first sense organ. Make it free; the agent uses it more, reasons less from memory." },

  { index: 10, title: "Sandboxes + Nanoboo", durationSec: 40, bg: "slide-14.png",
    layers: [],
    notes: "Mature cat at eval-yard gate. 'When I sleep, I want my agents to work.' Hetzner cluster. apt-get-but-fast." },

  { index: 11, title: "DevSwarm", durationSec: 35, bg: "slide-18.png",
    layers: [],
    notes: "Older cat with many kittens, triune city. Sequential orchestration sucks. Swarm on one task. Telemetry from DevSwarm feeds the selector in CodeGraph." },

  { index: 12, title: "CodeGraph on Forge", durationSec: 60, bg: "slide-17.png",
    layers: [],
    notes: "Mature cat + many kittens. Forge = SOTA on Terminal-Bench. Added: trajectory store, multi-model fan-out, selector loop. Prompt fans out, agents collaborate, fast answer." },

  { index: 13, title: "Thanks", durationSec: 25, bg: "slide-19.png",
    layers: [],
    notes: "Old cat at dawn with next generation. All OSS · github.com/justrach. 2026 = autonomous-agent inflection. Thanks Agrim, Sherry, Rachel, Adeline." },
];
