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

// 19-slide arc matching speech.md rev 2.
// Each slide has its own bg with a CAT AGE: kitten → young → adolescent →
// adult → mature (with first kitten) → older (with several kittens) → old
// (with next generation). The cat-aging arc visually mirrors the agent-
// evolution argument of the talk.
export const slides: SlideMeta[] = [
  { index: 1, title: "Cover", durationSec: 15, bg: "slide-01.png",
    layers: [],
    notes: "Tiny kitten · primordial dawn. Title. AI Engineer SG · May 2026. Pause." },

  { index: 2, title: "How does evolution work?", durationSec: 65, bg: "slide-02.png",
    layers: [],
    notes: "Tiny kitten · bioluminescent water. Show of hands. Eight-word definition. Bridge: 'agents stop being things engineers babysit'." },

  { index: 3, title: "Agents are rudimentary.", durationSec: 45, bg: "slide-03.png",
    layers: [],
    notes: "Young cat on moss · petroglyph. Personal why. Model = seed, harness = soil/sunlight/pressure." },

  { index: 4, title: "Three things.", durationSec: 15, bg: "slide-04.png",
    layers: [],
    notes: "Young cat at start of path · 3 lanterns. Signpost: (1) hand-crafted bottleneck, (2) evolutionary loop works, (3) I built the substrate." },

  { index: 5, title: "Agents today are hand-crafted.", durationSec: 45, bg: "slide-05.png",
    layers: [],
    notes: "Young cat among scattered tools. Point 1/3. Artisanal pain. 'The moment before life.'" },

  { index: 6, title: "What if they evolved themselves?", durationSec: 30, bg: "slide-06.png",
    layers: [],
    notes: "Adolescent cat watching seeds. Pivot. GAs since the 1970s." },
  { index: 7, title: "Darwinian algorithm", durationSec: 60, bg: "slide-07.png",
    layers: [],
    notes: "Adolescent cat at mature tree. DarwinianDiagram. Pool · score · sample · mutate · repeat." },

  { index: 8, title: "Genome · Mutation · Selection", durationSec: 45, bg: "slide-08.png",
    layers: [],
    notes: "Adolescent cat at the three shrines. GenomicsDiagram. The only new piece is the mutator." },

  { index: 9, title: "20% → 50%", durationSec: 60, bg: "slide-09.png",
    layers: [],
    notes: "Adult cat by the blooming tree — breakthrough. DGM stat moment. Big number does the work. Speech: 'model didn't change, scaffold did.'" },

  { index: 10, title: "Point Three — How I built this.", durationSec: 30, bg: "slide-10.png",
    layers: [],
    notes: "Adult cat at village threshold. Re-signpost. 'Project's called Graff. Terminal-first.'" },

  { index: 11, title: "System shape", durationSec: 45, bg: "slide-11.png",
    layers: [],
    notes: "Adult cat beside forge. SystemDiagram. Four pieces. CLI · context · provider · tools." },

  { index: 12, title: "WebSocket transport", durationSec: 45, bg: "slide-12.png",
    layers: [],
    notes: "Adult cat with bird-swarm overhead. WebsocketDiagram. Speed is selection pressure." },

  { index: 13, title: "Schema-grammar", durationSec: 45, bg: "slide-13.png",
    layers: [],
    notes: "Adult cat beside inscribed tablet. GrammarDiagram. A schema is a rule." },

  { index: 14, title: "Harness", durationSec: 45, bg: "slide-14.png",
    layers: [],
    notes: "Mature cat at eval-yard gate. HarnessDiagram. The harness IS the fitness function." },

  { index: 15, title: "Trajectory — fitness vector per spawn", durationSec: 60, bg: "slide-15.png",
    layers: [],
    notes: "Mature cat with FIRST KITTEN — the inheritance moment. TrajectoryDiagram. THE 'I stared at the log thinking — I didn't write that' beat. Land it slowly." },

  { index: 16, title: "Closing the loop", durationSec: 45, bg: "slide-16.png",
    layers: [],
    notes: "Mature cat + kitten beside stone tablet under lantern. SQL query. Score × novelty." },

  { index: 17, title: "Track record — same playbook", durationSec: 35, bg: "slide-17.png",
    layers: [],
    notes: "Mature cat with 3–4 kittens, 4 lanterns drifting up. 'Same playbook. Different surfaces.'" },

  { index: 18, title: "Multi-agent — organism to colony", durationSec: 25, bg: "slide-18.png",
    layers: [],
    notes: "Older cat on ridge with many kittens, triune city below. Inter-agent protocol. kuri showed one organism; multi-agent = colony." },

  { index: 19, title: "Close · Tools create the environment.", durationSec: 20, bg: "slide-19.png",
    layers: [],
    notes: "Old cat at dawn with next generation around — mirror of slide 1. Three takeaways. Repo · agent docs · handle." },
];
