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

// v2 — reworked from speech2.m4a. 12 slides, ~10 min.
// Autobiographical arc: open-endedness origin → Doctor Strange → coding env
// paper → trajectory as artifact → my toolchain (Muonry / CodeDB / Nanobrew /
// DevSwarm) feeds CodeGraff on Forge → closer.
// Coaching frame kept: "harness IS the fitness function" lands on slide 11.
export const slides: SlideMeta[] = [
  { index: 1, title: "Cover", durationSec: 15, bg: "slide-01.png",
    layers: [],
    notes: "Kitten · primordial dawn. 'I built a harness that does well on coding tasks. First — how I got here.' Pause." },

  { index: 2, title: "A paper, not a benchmark", durationSec: 50, bg: "slide-02.png",
    layers: [],
    notes: "Kitten · bioluminescent water. 2023, building diffusion with a friend. Came across a paper on agents that evolve in their own environment — models have a notion of 'human interestingness'. My first dive into open-endedness." },

  { index: 3, title: "Dormammu, I've come to bargain", durationSec: 50, bg: "slide-dormammu.png",
    layers: [],
    notes: "Young cat among scattered tools. The Marvel beat. Every loop the environment changes; eventually the agent just wins. This is where world models start mattering — the env isn't static, it's a thing the agent interacts with." },

  { index: 4, title: "Code is the environment", durationSec: 55, bg: "slide-codeenv.png",
    layers: [],
    notes: "Adolescent cat at mature tree. Last year's paper extended open-endedness to code. Evolve the environment AND the agent. Tools aren't given — they get selected for." },

  { index: 5, title: "The trajectory, not the weights", durationSec: 35, bg: "slide-08.png",
    layers: [],
    notes: "Adolescent cat at three shrines. The artifact worth studying isn't the weights — it's the trajectory: what the agent learned to keep. Bridges into 'how I built that store.'" },

  { index: 6, title: "Iteration loops take a beating", durationSec: 40, bg: "slide-09.png",
    layers: [],
    notes: "Adult cat by blooming tree. Back to CodeGraff. Darwin-Gödel-style loops are brutal. Two levers: tool latency, token volume. Everything I built downstream attacks one of those." },

  { index: 7, title: "Muonry", durationSec: 45, bg: "slide-11.png",
    layers: [],
    notes: "Adult cat beside forge. First tool I ever wrote in Zig. Rust compile pain → Zig instant builds. The loop got 10× tighter. Point isn't the language — it's the loop." },

  { index: 8, title: "CodeDB", durationSec: 35, bg: "slide-13.png",
    layers: [],
    notes: "Adult cat beside inscribed tablet. Search is the agent's first sense organ. Make it free, the agent uses it more and reasons less from memory." },

  { index: 9, title: "Nanobrew", durationSec: 40, bg: "slide-14.png",
    layers: [],
    notes: "Mature cat at eval-yard gate. 'When I sleep, I want my agents to work.' Sandbox on a Hetzner cluster. apt-get was the bottleneck — Nanobrew is a drop-in Homebrew/apt replacement in Zig (nanobrew.trilok.ai, github.com/justrach/nanobrew). 13× faster warm. More failures per night = more learning." },

  { index: 10, title: "DevSwarm", durationSec: 40, bg: "slide-18.png",
    layers: [],
    notes: "Older cat + many kittens, triune city. Sequential orchestration is weak. Swarm on one task. The selector inside CodeGraff is fed by DevSwarm telemetry." },

  { index: 11, title: "Fitness function", durationSec: 25, bg: "slide-16.png",
    layers: [],
    notes: "Quick aside before the punchline. A fitness function is the score that decides which variants survive — straight from genetic algorithms. In a code agent, the harness writes that score every run. Sets up slide 12." },

  { index: 12, title: "CodeGraff on Forge", durationSec: 60, bg: "slide-17.png",
    layers: [],
    notes: "Mature cat + many kittens. Forge = SOTA on Terminal-Bench, beautifully written. I added: trajectory store, multi-model fan-out, selector loop. Land the punchline: the harness IS the fitness function." },

  { index: 13, title: "Thanks", durationSec: 25, bg: "slide-19.png",
    layers: [],
    notes: "Old cat at dawn with next generation. All OSS · github.com/justrach. 2026 is the leap year for autonomous agents. Thanks Agrim, Sherry, Rachel, Adeline." },
];
