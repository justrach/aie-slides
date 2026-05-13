# Evolving Agents — v2 (AIE Singapore · May 2026)

Reworked from the speech2.m4a transcript (whisper hallucinations cleaned up: "Raj" → Rach, "CodeGraph" → CodeGraff, "Death Swarm" → DevSwarm, "Muonri" → Muonry, "Nanoboo" → Nanobrew). 14 slides, ~10 minutes.

Arc: autobiographical pull → metaphor → coding-as-environment → **world models horizon (where this points)** → trajectory → toolchain → fitness primer → CodeGraff punchline → closer. Coaching frame from the v1 dry-run stays: **the harness IS the fitness function**, landed on slide 13.

---

## 1 · Cover (15s)

> "Hi, I'm Rach. I built a harness that does really well on coding tasks. But before I get to that — let me tell you how I got here."

- Title: **Evolving agents.**
- Name + venue. Pause two seconds.

## 2 · A paper, not a benchmark (50s)

> "Early 2023. A friend and I were building diffusion models — architectures nobody had tried. While we were experimenting, I came across a paper on giving agents human-like qualities and letting them evolve in their own environment. The claim was that models, now that they're large enough, have a notion of 'human interestingness'. That was my first dive into open-endedness."

- One sentence on stage: **"Agents that evolve in their own environment."**

## 3 · Dormammu, I've come to bargain (50s)

> "Think of an open-ended agent the way you'd think of Doctor Strange against Dormammu. Every loop the environment shifts. He keeps fighting until he just gets really good at it. The environment is the selection pressure."

- Marvel beat lands the metaphor.

## 4 · Code is the environment (55s)

> "Last year a paper extended this idea to code. What if the environment you evolve in is a coding environment? Store the evolutionary state of the environment AND the agent. Let the agent choose its own tools — evolve the tool harness itself."

- Two evolving objects: **agent** + **environment**.
- Tools aren't given. They're selected for.

## 5 · Look at the evolution · world models (40s)

> "And now zoom out. The environment doesn't have to stay 2-D. The natural next step is a real world model — an environment rich enough that an agent can actually interact with it, the way Doctor Strange interacts with Dormammu. Look at the curve. The little candle on the left? That's us today. The blazing sun on the right? That's where an agent in a real world model could end up — exponentially higher. This is what's coming."

- Quiet, aspirational beat.
- Point at the curve. Don't over-explain.
- Bridges: "and that's why the things I'm about to show you matter — they're the substrate that gets us there."

## 6 · The trajectory, not the weights (35s)

> "Once an agent is smart enough to interact with the world, the interesting object isn't the weights. It's the trajectory — what the agent learned to keep. That's also what I had to build first: a place to store that trajectory."

## 7 · Iteration loops take a beating (40s)

> "Back to CodeGraff. Building it was its own evolutionary trip. Darwin-Gödel-style loops take a beating. The fastest way to soften that beating is to speed up the tools the agent uses and shrink the tokens it spends per turn. Two levers. Every tool I built downstream attacks one of them."

## 8 · Muonry (45s)

> "First thing I built was a tool called Muonry. First thing I ever wrote in Zig — I'd written a lot of Rust before. When I saw the compile times I went: oh. I'm not waiting four to seven minutes for a binary anymore. The point isn't Zig. The point is the iteration loop got ten times tighter."

## 9 · CodeDB (35s)

> "Agents are good at searching text. So I hyper-accelerated that. CodeDB out-frameworks every other indexer I've thrown at it. Search is the agent's first sense organ. Make it free; the agent uses it more, and reasons less from memory."

## 10 · Nanobrew (40s)

> "When I sleep, I want my agents to work. The slow part inside the sandbox wasn't compute — it was `apt-get`. Even with snapshots. So I wrote Nanobrew: a drop-in Homebrew + apt-get replacement, in Zig. 13× faster on warm installs. More failures per night = more learning. → nanobrew.trilok.ai"

## 11 · DevSwarm (40s)

> "Then DevSwarm. Sequentially orchestrated agents aren't great. What if a swarm just worked on one task together? Telemetry from DevSwarm is what feeds the selector inside CodeGraff."

## 12 · Fitness function (25s)

> "Quick aside, in case you haven't seen the term: a fitness function is the score that decides which variants survive. Straight out of genetic algorithms. In a code agent, the harness is the thing that writes that score every run. Keep that in your head for the next slide."

- Aside, not a lecture.

## 13 · CodeGraff on Forge (60s)

> "CodeGraff is built on top of Forge — SOTA on Terminal-Bench. The authors wrote a beautiful harness; I just added a few evolutionary steps drawn from DevSwarm's telemetry. When you prompt CodeGraff, it doesn't go to a single model. It fans out, the agents collaborate, orchestrate, and you get the answer fast. **The harness IS the fitness function.**"

- The punchline.
- Land it slowly.

## 14 · Thanks (25s)

> "Everything is open source — github.com/justrach. 2026 is the year we get a real leap on autonomous agents. Excited to see where everyone takes it. Thanks for having me — Agrim, Sherry, Rachel, Adeline. Have a great conference."
