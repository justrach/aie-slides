# Evolving Agents — v2 (AIE Singapore · May 2026)

Reworked from speech2.m4a + voice4.m4a (whisper hallucinations cleaned: Raj → Rach, CodeGraph → CodeGraff, Death Swarm → DevSwarm, Muonri → Muonry, Nanoboo → Nanobrew). **18 slides, ~11:30.**

Arc: autobiographical pull → **the engine (sun + entropy)** → **biology→agents bridge** → metaphor → coding-as-environment → the curve (6 AI stages) → receipts on log scale → scaling-laws bet → trajectory (DNA analog) → toolchain → fitness primer → CodeGraff punchline → closer. Coaching frame: **the harness IS the fitness function**, landed on slide 17.

Biology is now the through-line. The sun slide (3) and bridge slide (4) ground the toolchain so the punchline reads as the culmination of one argument, not a metaphor stapled on. DGM (Zhang et al. 2025, arXiv:2505.22954) is the verbal receipt in Q&A.

---

## 1 · Cover (15s)

> "Hi, I''m Rach. I built a harness that does really well on coding tasks. But before I get to that — let me tell you how I got here."

## 2 · A paper, not a benchmark (50s)

> "Early 2023. A friend and I were building diffusion models — architectures nobody had tried. While we were experimenting, I came across a paper on giving agents human-like qualities and letting them evolve in their own environment. The claim: models are now large enough to have a notion of ''human interestingness''. That was my first dive into open-endedness."

## 3 · The sun pays for everything (25s) — NEW

> "Quick aside before we go on. We are entropy engines. Low-entropy photons in from a 5,800-kelvin sun. Higher-entropy infrared out to 3-kelvin space. That gradient is what three billion years of evolution surfed to get from single cells to brains writing code. Agents need their own gradient — that''s the rest of this talk."

- Land the closing line: "**same algorithm, different substrate.**"
- This is the engine for everything that comes after. Don''t rush it.

## 4 · From biology to agents (15s) — NEW

> "Biology needed two things to build us — a free-energy gradient, and a search algorithm. Agents need the same two. A capability gradient. And a search algorithm. The harness is the search algorithm."

- Two-column grid does the lifting visually: sun→compute · DNA→trajectories · selection→the harness · 3B years→3 years.
- If anyone in Q&A asks where the bridge comes from, cite **Darwin Gödel Machine** (Zhang et al. 2025, arXiv:2505.22954) — variation + selection + archive on coding agents took SWE-bench from 20% to 50%. That''s the receipt.

## 5 · Dormammu, I''ve come to bargain (50s)

> "Think of an open-ended agent the way you''d think of Doctor Strange against Dormammu. Every loop the environment shifts. He keeps fighting until he just gets really good at it. The environment is the selection pressure."

## 6 · Code is the environment (55s)

> "Last year a paper extended this idea to code. What if the environment you evolve in is a coding environment? Store the evolutionary state of the environment AND the agent. Let the agent choose its own tools — evolve the tool harness itself."

## 7 · The curve · 6 stages of AI (50s)

> "Forget humans for a second — this is an AI-only curve. Step one: models. Step two, where we are today: models plus harnesses — the scaffolding does the work. Step three: harnesses that evolve themselves — what I built. Step four: agents that evolve themselves, where the harness is just a substrate. Step five: world models — environments rich enough to actually train against. Step six: agents that *come out of* those world models. We''re step two. The galaxy at the top right is step six."

## 8 · 2018 → 2026 · benchmark receipts (50s)

> "Receipts. Here''s AI from 2018 to today. MMLU saturated. HumanEval saturated. SWE-bench Verified went from 2% to 82%. Terminal-Bench went from 30% to 82%. The slope has not changed in nine years. This is not a vibe — it''s a straight line."

- Hand traces a curve as you speak.
- Land the slope, don''t rush.

## 9 · Scaling laws still hold (35s)

> "And scaling laws keep holding — as long as humans stay more interesting than the models. Interestingness is the substrate. The day we stop being more interesting than what we built, the curve flattens. Until then, line goes up."

- Strong claim. Sit with it for a beat before moving on.
- Bridge: "so what do you actually have to build to ride that curve? Let me show you."

## 10 · The trajectory, not the weights (35s)

> "**DNA kept what worked. Trajectories keep what your agent learned.** Once an agent is smart enough to interact with the world, the interesting object isn''t the weights — it''s the path. That''s the artifact worth studying. And that''s also what I had to build first: a place to store it."

- The DNA line is the biology hook. Say it crisply.

## 11 · Iteration loops take a beating (40s)

> "Back to the harness — it''s called CodeGraff. Building it was its own evolutionary trip. **Short-lifespan species win in biology. Fast loops win here.** Two levers: speed up the tools the agent uses, shrink the tokens it spends per turn. Every tool I built downstream attacks one of them."

## 12 · Muonry (45s)

> "First thing I built was Muonry. It''s a drop-in MCP upgrade for Claude Code, Codex, Cursor, and Windsurf — stops your agents burning weekly caps on full-file reads. Receipts: 344.5 million tokens saved across installs in the last thirty days. 14 thousand ops in the last week. 0.7 milliseconds per op through the daemon. 47 tokens for an outline instead of 2,103 for the full file your agent would otherwise read — 40× leaner. Shipping with Plasma, BotMD, and Trilok. → codegraff.com"

## 13 · CodeDB (35s)

> "Agents are good at searching text — so I hyper-accelerated that. CodeDB: 538× faster than ripgrep on pre-indexed queries. Trigram v2 with O(1) inverted word index for identifier lookup. Sixteen MCP tools. Zero deps. Search is the agent''s first sense organ — make it free and the agent uses it more, reasons less from memory. Now at 800+ stars on github. → github.com/justrach/codedb"

## 14 · Nanobrew (40s)

> "When I sleep, I want my agents to work. The slow part inside the sandbox wasn''t compute — it was `apt-get`. Even with snapshots. So I wrote Nanobrew: a drop-in Homebrew + apt-get replacement, in Zig. 13× faster on warm installs. Crossed 1,100 stars on github. → nanobrew.trilok.ai"

## 15 · DevSwarm (40s)

> "Then DevSwarm. Sequentially orchestrated agents aren''t great. What if a swarm just worked on one task together? Telemetry from DevSwarm is what feeds the selector inside CodeGraff. → github.com/justrach/devswarm"

## 16 · Fitness function (25s)

> "Quick aside, in case you haven''t seen the term: a fitness function is the score that decides which variants survive. Straight out of genetic algorithms. In a code agent, the harness is the thing that writes that score every run. Keep that in your head for the next slide."

## 17 · CodeGraff (60s)

> "CodeGraff is the harness — built on top of Forge, SOTA on Terminal-Bench. The authors wrote a beautiful base; I added a trajectory store with fitness vectors per spawn, multi-model fan-out so the agents collaborate in parallel, and a selector loop fed by DevSwarm telemetry. When you prompt CodeGraff it doesn''t go to a single model — it fans out and the answers come back fast. **The harness IS the fitness function.**"

- The punchline. Land it slowly.
- Verbal receipt if asked: "Clune''s group published the Darwin Gödel Machine last year — they ran variation + selection + archive on coding agents and got SWE-bench from 20% to 50%. CodeGraff is my version of that loop."
- → github.com/justrach/codegraff

## 18 · Thanks (25s)

> "Everything is open source — github.com/justrach. **2026 is another year that everything handcrafted gets replaced by everything learnt.** Thanks for having me — Agrim, Sherry, Rachel, Adeline. Have a great conference."

- Two QR codes on screen: github.com/justrach and x.com/rachpradhan. Encourage scans.
