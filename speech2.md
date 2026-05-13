# Evolving Agents — v2 (AIE Singapore · May 2026)

Talk reworked from speech2.m4a transcript. ~10 minutes. Narrative arc: origin in open-endedness → why coding environments are the natural substrate → the toolchain I built around that idea (Muonry / CodeDB / Nanoboo / DevSwarm) → CodeGraph as the harness those tools feed into → closer.

---

## 1 · Cover (15s)

> "Hi, I'm Raj. I'm going to talk about a harness I built that performs really well on coding tasks. But first — how I got here."

- Title: **Evolving Agents**
- Sub: CodeGraph · Raj · AI Engineer Singapore · May 2026

## 2 · 2023 — diffusion, then a paper (40s)

> "Early 2023. A friend and I were building diffusion models with architectures nobody had tried. While we were experimenting, I came across a paper on giving agents human-like qualities and letting them evolve in their own environment."

- The paper claimed: models are large enough to have a notion of "human interestingness."
- That was my first dive into **open-endedness**.

## 3 · A different branch of ML (40s)

> "I got to know the author. They introduced me to a whole branch of ML I hadn't really seen. SF in 2023 was all about scaling things up — no one talked about fundamentals. This felt refreshing."

- Pivot: scaling ≠ progress.
- Open-endedness is about **what the agent gets to encounter**, not how big it is.

## 4 · Doctor Strange vs Dormammu (45s)

> "Think of an agent the way you'd think of Doctor Strange against Dormammu — every loop the environment changes. He just keeps fighting until he gets really good at it. That's an open-ended agent."

- An ever-changing environment is the selection pressure.
- This is also where **world models** start to matter — the environment isn't a static benchmark, it's a thing the agent interacts with.

## 5 · Coding as the environment (50s)

> "Last year a paper extended this idea to code. What if the environment you evolve in is a coding environment? Store the evolutionary state of the environment AND the agent. Let the agent choose its own tools — evolve the tool harness itself."

- Two evolving objects: the **agent** and the **environment**.
- Tools aren't given — they're selected for.

## 6 · The shape of the brain (30s)

> "Once an agent is smart enough to actually interact with the world, the shape of its brain — what it learned to keep — becomes the interesting object."

- The artifact worth studying isn't the weights, it's the trajectory.

## 7 · Why I started building (40s)

> "Back to CodeGraph. Building it was its own evolutionary trip. The iteration loops in the Darwin-Gödel-style setup take a beating. The fastest way to soften that beating is to speed up the tools the agent uses and shrink the tokens it spends per turn."

- Two levers: **tool latency** and **token volume**.
- Everything I built downstream attacks one of those two.

## 8 · Muonry — first Zig tool (45s)

> "First thing I built was a tool called Muonry. First thing I ever wrote in Zig — I'd written a lot of Rust before. When I saw the compile times I went: oh. I'm not waiting four to seven minutes for a binary anymore."

- Zig: Turing-complete, fast, great for shipping agent-facing binaries.
- The point isn't Zig. The point is the iteration loop got 10× tighter.

## 9 · CodeDB (35s)

> "Agents are good at searching text — so I hyper-accelerated that. CodeDB out-frameworks every other indexer I've thrown at it."

- The agent's first sense organ is search.
- Make search free; the agent uses it more, reasons less from memory.

## 10 · Sandboxes + Nanoboo (40s)

> "When I sleep, I want my agents to work. So I built one of the fastest sandboxes I know of — sitting in a Hetzner cluster. They were running apt-get a lot, and even with snapshots it was slow. So Nanoboo was born: apt-get, but fast."

- Sandbox = where the agent fails safely.
- Snapshot + fast package install = more failures per night = more learning.

## 11 · DevSwarm (35s)

> "Then DevSwarm. Sequentially orchestrated agents aren't great. What if a swarm just worked on one task together?"

- Parallel beats sequential when the loop is cheap.
- Telemetry from DevSwarm is what feeds the selector in CodeGraph.

## 12 · CodeGraph (60s)

> "CodeGraph is built on top of Forge — SOTA on Terminal-Bench. The authors wrote a beautiful harness. I added evolutionary steps drawn from DevSwarm's telemetry. When you prompt it, it doesn't go to a single model — it fans out, the agents collaborate, orchestrate, and you get the answer fast."

- Forge: solid base.
- Added: trajectory store, multi-model fan-out, selector loop.

## 13 · Closer (25s)

> "Everything is open source — github.com/justrach. I believe 2026 is the year we get a real leap on autonomous agents. Excited to see where everyone takes it. Thank you."

- All open source.
- 2026 = the autonomous-agent inflection.
- Thanks: Agrim, Sherry, Rachel, Adeline.
