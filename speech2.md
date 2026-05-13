# Evolving Agents — v2 (AIE Singapore · May 2026)

Reworked from speech2.m4a (whisper hallucinations cleaned: Raj → Rach, CodeGraph → CodeGraff, Death Swarm → DevSwarm, Muonri → Muonry, Nanoboo → Nanobrew). 16 slides, ~11 minutes.

Arc: autobiographical pull → metaphor → coding-as-environment → **the curve (6 AI stages)** → **receipts on log scale** → **scaling-laws bet** → trajectory → toolchain → fitness primer → CodeGraff punchline → closer. Coaching frame stays: **the harness IS the fitness function**, landed on slide 15.

---

## 1 · Cover (15s)

> "Hi, I'm Rach. I built a harness that does really well on coding tasks. But before I get to that — let me tell you how I got here."

## 2 · A paper, not a benchmark (50s)

> "Early 2023. A friend and I were building diffusion models — architectures nobody had tried. While we were experimenting, I came across a paper on giving agents human-like qualities and letting them evolve in their own environment. The claim: models are now large enough to have a notion of 'human interestingness'. That was my first dive into open-endedness."

## 3 · Dormammu, I've come to bargain (50s)

> "Think of an open-ended agent the way you'd think of Doctor Strange against Dormammu. Every loop the environment shifts. He keeps fighting until he just gets really good at it. The environment is the selection pressure."

## 4 · Code is the environment (55s)

> "Last year a paper extended this idea to code. What if the environment you evolve in is a coding environment? Store the evolutionary state of the environment AND the agent. Let the agent choose its own tools — evolve the tool harness itself."

## 5 · The curve · 6 stages of AI (50s)

> "Forget humans for a second — this is an AI-only curve. Step one: models. Step two, where we are today: models plus harnesses — the scaffolding does the work. Step three: harnesses that evolve themselves — what I built. Step four: agents that evolve themselves, where the harness is just a substrate. Step five: world models — environments rich enough to actually train against. Step six: agents that *come out of* those world models. Look at the curve. We're step two. The galaxy at the top right is step six."

## 6 · 2017 → today · log scale (45s)

> "Receipts. Here's AI from 2017 to today on a *log scale*. A straight line on log scale means exponential. 2017: Transformers paper. 2020: GPT-3. 2022: ChatGPT and the world wakes up. 2024: Sonnet 3.5, GPT-4o. 2026: Opus 4.7 with a million tokens of context, agents actually shipping. The slope has not changed in nine years. This is not a vibe — it's a straight line."

- Hand traces the line as you speak.
- Land the slope, don't rush.

## 7 · Scaling laws still hold (35s)

> "And scaling laws keep holding — as long as humans stay more interesting than the models. Interestingness is the substrate. The day we stop being more interesting than what we built, the curve flattens. Until then, line goes up."

- Strong claim. Sit with it for a beat before moving on.
- Bridge: "so what do you actually have to build to ride that curve? Let me show you."

## 8 · The trajectory, not the weights (35s)

> "Once an agent is smart enough to interact with the world, the interesting object isn't the weights. It's the trajectory — what the agent learned to keep. That's also what I had to build first: a place to store that trajectory."

## 9 · Iteration loops take a beating (40s)

> "Back to CodeGraff. Building it was its own evolutionary trip. Darwin-Gödel-style loops take a beating. The fastest way to soften that beating is to speed up the tools the agent uses and shrink the tokens it spends per turn. Two levers. Every tool I built downstream attacks one of them."

## 10 · Muonry (45s)

> "First thing I built was Muonry. First Zig tool I ever shipped. The numbers: 47 tokens for an outline vs 2,103 tokens for the default full read — that's 40× leaner file tools. 0.7 ms per op through the daemon. Ten reads in seven milliseconds, batched. Two-megabyte static binary, zero runtime deps. The agent doesn't notice the tools because they don't cost anything anymore."

## 11 · CodeDB (35s)

> "Agents are good at searching text — so I hyper-accelerated that. CodeDB: 538× faster than ripgrep on pre-indexed queries. Trigram v2 with O(1) inverted word index for identifier lookup. Sixteen MCP tools. Zero deps. Search is the agent's first sense organ — make it free and the agent uses it more, reasons less from memory. → github.com/justrach/codedb"
## 12 · Nanobrew (40s)

> "When I sleep, I want my agents to work. The slow part inside the sandbox wasn't compute — it was `apt-get`. Even with snapshots. So I wrote Nanobrew: a drop-in Homebrew + apt-get replacement, in Zig. 13× faster on warm installs. → nanobrew.trilok.ai"

## 13 · DevSwarm (40s)

> "Then DevSwarm. Sequentially orchestrated agents aren't great. What if a swarm just worked on one task together? Telemetry from DevSwarm is what feeds the selector inside CodeGraff."

## 14 · Fitness function (25s)

> "Quick aside, in case you haven't seen the term: a fitness function is the score that decides which variants survive. Straight out of genetic algorithms. In a code agent, the harness is the thing that writes that score every run. Keep that in your head for the next slide."

## 15 · CodeGraff on Forge (60s)

> "CodeGraff is a drop-in MCP upgrade for Claude Code, Codex, Cursor, and Windsurf — built on top of Forge, SOTA on Terminal-Bench. I added a trajectory store, multi-model fan-out, and a selector loop fed by DevSwarm telemetry. Receipts: 344 million tokens saved across installs in the last thirty days. 14 thousand ops in the last week. 0.7 milliseconds per op through the daemon. 47 tokens for an outline instead of 2,103 for the full file your agent would otherwise read. Shipping with Plasma, BotMD, and Trilok. **The harness IS the fitness function.** → codegraff.com"

- The punchline. Land it slowly.

## 16 · Thanks (25s)

> "Everything is open source — github.com/justrach. 2026 is the year we get a real leap on autonomous agents. Excited to see where everyone takes it. Thanks for having me — Agrim, Sherry, Rachel, Adeline. Have a great conference."
