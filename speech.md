# Evolving Agents — How Tooling Shapes Agent Behavior

**AI Engineer Singapore · May 2026 · 10 min (5:53–6:03 PM)**
**Speaker:** Rach Pradhan
**Revision 2** — incorporates Maya (PR) + Aric (skeptical staff engineer) review notes.

Target ~1450 words at ~140 wpm. ~10:20 with breath room — trim WS detail if rehearsal runs long.

---

## Cover  ·  ~0:00–0:15  ·  slide 1

> Hi. I'm Rach. For the next ten minutes I want to talk about how to make agents that evolve themselves — and why the tools you build around them matter more than the model inside them.

---

## Hook — evolution  ·  ~0:15–1:20  ·  slide 2

> Quick show of hands. How many of you can tell me, in one sentence, how evolution works?
>
> [pause, scan the room]
>
> Okay. Let me try.
>
> You have a population. The population varies. The environment selects. The survivors pass on what made them survive. Variation, selection, inheritance. That's it. Three and a half billion years of empirical search compressed into eight words.
>
> Here's why I'm starting there. If we get this right for AI agents, they stop being things engineers babysit — and start being things that improve themselves while you sleep. *(NEW · Maya's bridge — earns the next 9 minutes)*

---

## The why — personal  ·  ~1:20–2:05  ·  slide 3

> I didn't go down this path because I had a thesis. I went down it because it was fun to unpack how agents actually work. And what I found is that they are, in 2026, still pretty rudimentary.
>
> You have to scaffold a lot around them. Prompts. Tools. Retry logic. Context management. Eval loops.
>
> Everyone obsesses over the model. The model is the seed. The harness is the soil, the sunlight, and the pressure that decides whether anything grows. *(REWRITTEN · was "model is 20%, harness is 80%")*
>
> So I started asking — if the model is the agent, and the harness is the environment — what happens if I let the harness shape the agent over time? Like, actually shape it. Like evolution does.

---

## Signpost  ·  ~2:05–2:20  ·  slide 4 transition

> That's the rest of this talk. Three things.
>
> One — agents today are hand-crafted, and that's a bottleneck.
> Two — there's a way to make them evolve themselves, and there's published evidence it works.
> Three — I built the substrate that makes that possible, and the same substrate is why my other projects shipped.

---

## 1 · Hand-crafted  ·  ~2:20–3:05  ·  slide 4

> Look at any production agent right now. Someone wrote the system prompt by hand. Someone wrote the tool schemas by hand. Someone wrote the retry policy by hand. Someone wrote the eval suite by hand. Every line of that scaffold is somebody's taste.
>
> That's fine for one agent. It's a disaster for a thousand. It's why most teams stall after the first demo — the artisanal harness doesn't scale.
>
> From an evolutionary standpoint, this is the moment before life. Lots of effort going into building one organism, by hand. No variation. No selection. No inheritance. Just craft.

---

## 2 · The evolutionary loop  ·  ~3:05–4:30  ·  slides 5–8

### Slide 5 — what if they evolved themselves

> Here's the alternative. It's not new. Genetic algorithms have done this since the 1970s.

### Slide 6 — Darwinian algorithm

> Keep a pool of variants. Score each on a real task. Sample by score and novelty. Have something mutate the winners. Throw the new ones back in the pool. Repeat.

### Slide 7 — Genomics

> Same shape as biology. Genome — the recipe. Mutation — copy errors during replication. Selection — whoever fits, reproduces. Inheritance — the next generation starts from the winners.
>
> The only thing new is the mutator. It used to be random bit-flips. Now it's an LLM rewriting the parent. Which is dramatically smarter.

### Slide 8 — Evolution (DGM)

> Concrete proof this works. Darwin-Gödel Machine, Sakana AI, paper 2505.22954, last May. They took a coding agent at 20% on SWE-bench Verified, let it self-modify and re-evaluate for two weeks, and it came out at 50%. *(SOFTENED · was "Same model. Same problem.")* The model underneath didn't change. The scaffold around it did. The scaffold rewrote itself.
>
> That's the result. But here's the catch every paper hand-waves past — every turn of the loop has to leave behind enough data to be scored, in a format the next mutator can read. That's most of the work. That's what I've been building.

---

## 3 · How I built it  ·  ~4:30–8:15  ·  slides 9–14

### Slide 9 — Point Three opener

> **Point Three.** Here's what I actually built. *(NEW · Maya's re-signpost)*
>
> The project's called Graff. Terminal-first agent stack. The point of it is not the model. The point is the substrate underneath that lets evolution actually work.

### Slide 10 — System shape

> Four pieces. CLI starts a turn. Context builder packs messages, tools, files, settings. Provider adapter speaks HTTP, SSE, or WebSocket to the model. Tool results come back as typed payloads the next step can consume. Boring on purpose. Deliberate.

### Slide 11 — WebSocket transport

> The WebSocket part matters because turn-N can't afford to resend the whole prefix. First turn streams full. Later turns send `previous_response_id` plus only the new messages. Warm socket, conversation-scoped. Latency drops to a delta — at turn 200, that delta is the difference between a thousand-turn evolutionary run that completes and one that doesn't.
>
> From an evolutionary standpoint — if you can't run a thousand turns cheaply, you can't have a population. Speed is selection pressure on the substrate itself.

### Slide 12 — Grammar

> Tool calls go schema-first. Tool catalog generates JSON Schema from typed definitions. The model gets strict normalized schemas. Anything text-shaped that comes back gets repaired by a parser before it touches dispatch.
>
> Why this matters — animals don't evolve in a vacuum. Their environment has rules. A schema is a rule. Without it, mutations produce noise. With it, mutations produce structurally valid variants.

### Slide 13 — Harness

> The harness is a YAML-driven eval runner. `task.yml` defines setup, run commands, sources, timeout, validations. CSV inputs expand into a cross-product of contexts. Handlebars renders command templates per row. Concurrency configurable.
>
> In evolutionary terms — the harness is the fitness function. It's the part that turns messy outcomes into selection pressure.

### Slide 14 — Trajectory

> This is the piece that closes the loop. Every spawn — every agent, every child agent — writes its own trajectory to SQLite. Each child gets its own conversation ID but shares `parent_agent_id` with the spawn that called it.
>
> Per-spawn vector: turns, tool calls, tool errors, wall-clock milliseconds, cost in USD.
>
> *(NEW · Maya's human-scale moment)* I want to tell you one small thing. The first time a child agent rewrote its parent and actually scored better, I stared at the log for ten minutes thinking — I didn't write that. That moment is the entire reason I'm up here.

---

## 4 · Closing the loop  ·  ~8:15–8:50  ·  slide 15 *(NEW · answers Aric's pre-emptive Q&A)*

> Aric, my imaginary skeptic in the front row, has a question. "You've shown me a trajectory store. How does it actually pick the next parent?"
>
> Fair. Here it is, in seven lines of SQL.
>
> ```sql
> SELECT agent_id, score, age
>   FROM agent_runs
>  ORDER BY (sigmoid(score - score_baseline) / (1.0 + spawn_count)) DESC
>  LIMIT 1;
> ```
>
> Score times novelty, Go-Explore style. The denominator keeps the search from collapsing onto one winner. The agent that comes out of that query is the parent for the next mutation. The mutation step is one LLM call that reads the parent's source plus its eval log and emits a patch. Patch goes through the harness. Survives the smoke set, gets admitted. That's the loop, end-to-end, running on Graff today.

---

## Track record  ·  ~8:50–9:25  ·  slide 16

> *(REORDERED · Maya — claim first, then receipts)*
>
> Same playbook. Different surfaces.
>
> Every project I've shipped in the last two years used this same loop — tight feedback, real fitness signal, iterate, ship the winner. The receipts:
>
> turboAPI — FastAPI-compatible Python with a Zig HTTP core. Seven times faster. 971 stars.
> nanobrew — macOS package manager. Three-millisecond warm installs. 1,043 stars.
> codedb — code intelligence for agents. 779 stars.
> kuri — closed-loop browser organism. 298 stars.
> devswarm — MCP server in Zig. One agent spawns a team — orchestrator splits the task, workers run in parallel, a synthesizer stitches the answers back together. 51 stars. The newest one. The bridge to the next slide.
>
> *(I'll update those numbers the morning of the talk.)*

---

## What's next — multi-agent  ·  ~9:25–9:45  ·  slide 17
> Today: one parent, many children, fire-and-forget. The trajectory recorder is plumbed for more — parents that delegate to specialists, peers that argue and converge, watchers that audit.
>
> That's what devswarm is. An orchestrator splits the task. Workers run in parallel. A synthesizer combines the outputs. kuri showed you could close the loop on one agent in the wild. devswarm turns that organism into a colony.

---

## Close  ·  ~9:45–10:00  ·  slide 18

> Three things to take away.
>
> Tools create the environment.
> Traces become genomes.
> Better agents emerge.
>
> Repo, agent docs, my handle — three QR codes. Thank you.

---

## What changed from Rev 1 (audit trail)

| # | Change | Source |
|---|--------|--------|
| 1 | Added bridge after hook (`"agents stop being things engineers babysit"`) | Maya |
| 2 | Rewrote `20%/80%` line as seed/soil/sunlight/pressure metaphor | Maya + Aric (both flagged) |
| 3 | Softened DGM characterization — no longer "same model, same problem" | Aric |
| 4 | Added explicit "Point Three" re-signpost at slide 9 | Maya |
| 5 | Added human-scale moment in Slide 14 (the first time a child rewrote its parent) | Maya |
| 6 | NEW slide 15 — SQL query closing the fitness-vector → selector loop | Aric (his #1 Q&A pre-empt) |
| 7 | Reordered track record — claim first, receipts after | Maya |
| 8 | Removed ADAS/AlphaEvolve/PromptBreeder/Eureka name-drop | Aric |
| 9 | Added date qualifier on star counts | Aric |
| 10 | Added "every paper hand-waves past" framing on DGM catch | Aric (engages with the hard part) |

## Open questions / pre-flight checklist

- [ ] **Verify DGM paper details** — exact arxiv ID, what was actually held constant in the experiment, whether the "scaffold rewrote itself" claim is fair. If it's not, the slide-8 line needs another pass.
- [ ] **Run one before/after eval** on Graff harness vs thin scaffold (Aric's Q&A). Even one number changes the talk's posture from "claim" to "evidence."
- [ ] Update star counts the morning of the talk.
- [ ] Rehearse to 9:30 not 10:00 — leaves Q&A buffer.
- [ ] Test the SQL slide visually — query has to be readable from the back of the room.
