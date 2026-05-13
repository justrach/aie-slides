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

// v2 — reworked from speech2.m4a. 16 slides, ~11 min.
// Arc: open-endedness origin → Doctor Strange → coding env → the curve
// (6 stages, AI-only) → 2017→today receipts on log scale → scaling-laws bet
// → trajectory → toolchain (Muonry / CodeDB / Nanobrew / DevSwarm) → fitness
// primer → CodeGraff on Forge punchline → thanks.
// Coaching frame: "harness IS the fitness function" lands on slide 15.
export const slides: SlideMeta[] = [
  { index: 1, title: "Cover", durationSec: 15, bg: "slide-cover.png",
    layers: [],
    notes: "Kitten · primordial dawn. 'I built a harness that does well on coding tasks. First — how I got here.' Pause." },

  { index: 2, title: "A paper, not a benchmark", durationSec: 50, bg: "slide-paper.png",
    layers: [],
    notes: "Kitten · scroll with glowing equations. 2023, diffusion with a friend. Paper on agents that evolve in their own environment. First dive into open-endedness." },

  { index: 3, title: "Dormammu, I've come to bargain", durationSec: 50, bg: "slide-dormammu.png",
    layers: [],
    notes: "Young cat vs flaming Dormammu. The Marvel beat. Every loop the environment changes; eventually the agent just wins." },

  { index: 4, title: "Code is the environment", durationSec: 55, bg: "slide-codeenv.png",
    layers: [],
    notes: "Adolescent cat watching golden code-rivers. Last year's paper: evolve env AND agent. Tools selected for." },

  { index: 5, title: "The curve · 6 stages of AI", durationSec: 50, bg: "slide-worldmodels.png",
    layers: [],
    notes: "Forget humans — AI-only. 6 stages: models → models+harnesses → models+self-evolving harnesses → self-evolving agents → world models → agents from world models. We're step 2. The galaxy at top-right is step 6." },

  { index: 6, title: "2017 → today · log scale", durationSec: 45, bg: "slide-logscale.png",
    layers: [],
    notes: "Receipts. Plot AI progress 2017→today on a log scale and the line is straight — meaning it's been exponential the whole time. 2017 Transformer · 2020 GPT-3 · 2022 ChatGPT · 2024 Sonnet 3.5 / GPT-4o · 2026 Opus 4.7. Hand on the line — 'this is real, not a vibe.'" },

  { index: 7, title: "Scaling laws still hold", durationSec: 35, bg: "slide-scaling.png",
    layers: [],
    notes: "The bet. Scaling laws keep holding as long as humans remain more interesting than the models. Interestingness is the substrate — when we run out, the curve flattens. Strong claim, sit with it for a beat." },

  { index: 8, title: "The trajectory, not the weights", durationSec: 35, bg: "slide-trajectory.png",
    layers: [],
    notes: "Adolescent cat beside footprint tablet. The artifact worth studying isn't the weights — it's the trajectory: what the agent learned to keep. Bridges into 'how I built that store.'" },

  { index: 9, title: "Iteration loops take a beating", durationSec: 40, bg: "slide-loops.png",
    layers: [],
    notes: "Adult cat at forge with spiraling iteration rings. Back to CodeGraff. Two levers: tool latency, token volume." },

  { index: 10, title: "Muonry", durationSec: 45, bg: "slide-muonry.png",
    layers: [],
    notes: "Adult cat with Zig binary vs rusting Rust compiler. First Zig tool. Loop got 10× tighter." },

  { index: 11, title: "CodeDB", durationSec: 35, bg: "slide-codedb.png",
    layers: [],
    notes: "Adult cat with search-beam whiskers. Search is the agent's first sense organ. Make it free." },

  { index: 12, title: "Nanobrew", durationSec: 40, bg: "slide-nanobrew.png",
    layers: [],
    notes: "Mature cat + kitten at apothecary bench. apt-get inside the sandbox was the bottleneck → Nanobrew: drop-in Homebrew/apt replacement in Zig (nanobrew.trilok.ai). 13× faster warm." },

  { index: 13, title: "DevSwarm", durationSec: 40, bg: "slide-devswarm.png",
    layers: [],
    notes: "Mature cat + 6-8 kittens on one shared object. Sequential orchestration is weak. Swarm on one task. Telemetry feeds the CodeGraff selector." },

  { index: 14, title: "Fitness function", durationSec: 25, bg: "slide-fitness.png",
    layers: [],
    notes: "Mature cat at scales-of-judgement altar. Primer before the punchline. Fitness function = the score that decides which variants survive. In a code agent, the harness writes it every run. Slide scrim sits bottom-right so the painting reads cleanly." },

  { index: 15, title: "CodeGraff on Forge", durationSec: 60, bg: "slide-codegraff.png",
    layers: [],
    notes: "Mature cat + kittens on summit; harness orchestrating multi-model fan-out. Forge = SOTA on Terminal-Bench. I added trajectory store, multi-model fan-out, selector loop. Land it: the harness IS the fitness function." },

  { index: 16, title: "Thanks", durationSec: 25, bg: "slide-thanks.png",
    layers: [],
    notes: "Old cat at dawn with next generation around. All OSS · github.com/justrach. 2026 is the leap year for autonomous agents. Thanks Agrim, Sherry, Rachel, Adeline." },
];
