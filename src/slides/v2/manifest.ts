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

// v2 — reworked from speech2.m4a. 14 slides, ~10 min.
// Autobiographical arc: open-endedness origin → Doctor Strange → coding env
// paper → world-models horizon (exponential graph) → trajectory as artifact
// → toolchain (Muonry / CodeDB / Nanobrew / DevSwarm) → fitness primer →
// CodeGraff on Forge (punchline) → thanks.
// Coaching frame kept: "harness IS the fitness function" lands on slide 13.
// Each bg is custom codex-generated and follows the cat-aging arc.
export const slides: SlideMeta[] = [
  { index: 1, title: "Cover", durationSec: 15, bg: "slide-cover.png",
    layers: [],
    notes: "Kitten · primordial dawn. 'I built a harness that does well on coding tasks. First — how I got here.' Pause." },

  { index: 2, title: "A paper, not a benchmark", durationSec: 50, bg: "slide-paper.png",
    layers: [],
    notes: "Kitten · scroll with glowing equations. 2023, diffusion with a friend. Came across a paper on agents that evolve in their own environment — models have a notion of 'human interestingness'. My first dive into open-endedness." },

  { index: 3, title: "Dormammu, I've come to bargain", durationSec: 50, bg: "slide-dormammu.png",
    layers: [],
    notes: "Young cat vs flaming Dormammu. The Marvel beat. Every loop the environment changes; eventually the agent just wins. This is where world models start mattering." },

  { index: 4, title: "Code is the environment", durationSec: 55, bg: "slide-codeenv.png",
    layers: [],
    notes: "Adolescent cat watching golden code-rivers in a Ghibli forest. Last year's paper extended open-endedness to code. Evolve env AND agent. Tools selected for." },

  { index: 5, title: "Look at the evolution · world models", durationSec: 40, bg: "slide-worldmodels.png",
    layers: [],
    notes: "Adolescent cat watches the exponential curve climb. Drop an agent into a real world model and the intelligence curve goes exponential. Today is the small candle at lower-left — world-model agents are the blazing sun at upper-right. This is what's coming." },

  { index: 6, title: "The trajectory, not the weights", durationSec: 35, bg: "slide-trajectory.png",
    layers: [],
    notes: "Adolescent cat beside footprint tablet. The artifact worth studying isn't the weights — it's the trajectory: what the agent learned to keep. Bridges into 'how I built that store.'" },

  { index: 7, title: "Iteration loops take a beating", durationSec: 40, bg: "slide-loops.png",
    layers: [],
    notes: "Adult cat at forge with spiraling iteration rings. Back to CodeGraff. Darwin-Gödel-style loops are brutal. Two levers: tool latency, token volume." },

  { index: 8, title: "Muonry", durationSec: 45, bg: "slide-muonry.png",
    layers: [],
    notes: "Adult cat with Zig binary vs rusting Rust compiler. First Zig tool. Rust compile pain → Zig instant builds. Loop got 10× tighter. Point isn't the language — it's the loop." },

  { index: 9, title: "CodeDB", durationSec: 35, bg: "slide-codedb.png",
    layers: [],
    notes: "Adult cat with search-beam whiskers; one kitten watching. Search is the agent's first sense organ. Make it free." },

  { index: 10, title: "Nanobrew", durationSec: 40, bg: "slide-nanobrew.png",
    layers: [],
    notes: "Mature cat + kitten at apothecary bench. 'When I sleep, my agents work.' apt-get inside the sandbox was the bottleneck → Nanobrew: drop-in Homebrew/apt replacement in Zig (nanobrew.trilok.ai). 13× faster warm." },

  { index: 11, title: "DevSwarm", durationSec: 40, bg: "slide-devswarm.png",
    layers: [],
    notes: "Mature cat + 6-8 kittens working on one shared object. Sequential orchestration is weak. Swarm on one task. Telemetry feeds the CodeGraff selector." },

  { index: 12, title: "Fitness function", durationSec: 25, bg: "slide-fitness.png",
    layers: [],
    notes: "Mature cat at scales-of-judgement altar. Primer before the punchline. Fitness function = the score that decides which variants survive. In a code agent, the harness writes it every run." },

  { index: 13, title: "CodeGraff on Forge", durationSec: 60, bg: "slide-codegraff.png",
    layers: [],
    notes: "Mature cat + kittens on summit; vast harness-machine fanning out to many models. Forge = SOTA on Terminal-Bench. I added trajectory store, multi-model fan-out, selector loop. Land it: the harness IS the fitness function." },

  { index: 14, title: "Thanks", durationSec: 25, bg: "slide-thanks.png",
    layers: [],
    notes: "Old cat at dawn with next generation around — mirror of cover. All OSS · github.com/justrach. 2026 is the leap year for autonomous agents. Thanks Agrim, Sherry, Rachel, Adeline." },
];
