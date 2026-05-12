"use client";

// Ported from the graff deck. Pure SVG, thin strokes, Trilok palette via CSS vars.
const STROKE = "var(--fg-faint)";
const STROKE_STRONG = "var(--border-strong)";
const ACCENT = "var(--accent)";
const ACCENT_LIGHT = "var(--accent-light)";
const ACCENT_BG = "var(--accent-bg)";
const ACCENT_TEXT = "var(--accent-text)";
const ACCENT_BORDER = "var(--accent-border)";
const FG = "var(--fg)";
const FG_MUTED = "var(--fg-muted)";
const CARD = "var(--bg-card)";

function Defs() {
  return (
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill={ACCENT} />
      </marker>
      <marker id="arrow-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill={STROKE_STRONG} />
      </marker>
    </defs>
  );
}

type Tone = "default" | "accent" | "code";
function Node({ x, y, w, h, title, subtitle, tone = "default" }:
  { x: number; y: number; w: number; h: number; title: string; subtitle?: string; tone?: Tone }) {
  const fill = tone === "accent" ? ACCENT_BG : tone === "code" ? "#11110F" : CARD;
  const stroke = tone === "accent" ? ACCENT : STROKE_STRONG;
  const titleFill = tone === "code" ? "#E5A848" : FG;
  const subFill = tone === "code" ? "rgba(229,168,72,0.6)" : FG_MUTED;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} ry={10} fill={fill} stroke={stroke} strokeWidth={1.4} />
      <text x={x + w / 2} y={y + (subtitle ? h / 2 - 4 : h / 2 + 5)} fill={titleFill}
            fontFamily="var(--font-display)" fontSize={14} fontWeight={600} textAnchor="middle">
        {title}
      </text>
      {subtitle ? (
        <text x={x + w / 2} y={y + h / 2 + 14} fill={subFill}
              fontFamily="var(--font-display)" fontSize={11} textAnchor="middle">
          {subtitle}
        </text>
      ) : null}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, dashed, muted, label, labelOffset = -8 }:
  { x1: number; y1: number; x2: number; y2: number; dashed?: boolean; muted?: boolean; label?: string; labelOffset?: number }) {
  const stroke = muted ? STROKE_STRONG : ACCENT;
  const marker = muted ? "url(#arrow-muted)" : "url(#arrow)";
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={1.6}
            strokeDasharray={dashed ? "4 4" : undefined} markerEnd={marker} />
      {label ? (
        <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 + labelOffset} fill={FG_MUTED}
              fontFamily="var(--font-display)" fontSize={10.5} textAnchor="middle">
          {label}
        </text>
      ) : null}
    </g>
  );
}

// ─── Darwinian ────────────────────────────────────────────
export function DarwinianDiagram() {
  const candidates = [
    { x: 86, y: 98, r: 9, fit: false },
    { x: 128, y: 78, r: 12, fit: true },
    { x: 168, y: 106, r: 8, fit: false },
    { x: 96, y: 150, r: 11, fit: true },
    { x: 148, y: 154, r: 10, fit: false },
    { x: 202, y: 82, r: 8, fit: false },
    { x: 206, y: 146, r: 12, fit: true },
  ];
  const offspring = [
    { x: 98, y: 300, label: "A1" },
    { x: 150, y: 322, label: "C7" },
    { x: 202, y: 300, label: "F2" },
  ];
  return (
    <svg viewBox="0 0 720 380" role="img" aria-label="Darwinian algorithm loop">
      <Defs />
      <text x={36} y={28} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>
        {"// population search under selection pressure"}
      </text>
      <rect x={28} y={48} width={220} height={150} rx={14} ry={14} fill="none" stroke={STROKE} strokeDasharray="2 5" />
      <text x={48} y={70} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>population</text>
      {candidates.map((c, i) => (
        <circle key={i} cx={c.x} cy={c.y} r={c.r}
          fill={c.fit ? ACCENT_BG : CARD}
          stroke={c.fit ? ACCENT : STROKE_STRONG} strokeWidth={1.5} />
      ))}
      <Arrow x1={248} y1={123} x2={304} y2={123} label="evaluate" />
      <g transform="translate(304, 48)">
        <rect width={196} height={150} rx={14} ry={14} fill={CARD} stroke={STROKE_STRONG} />
        <text x={20} y={22} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>fitness function</text>
        <path d="M22 112 C48 90 62 118 86 84 C110 50 126 96 154 54 C166 38 176 34 184 30"
              fill="none" stroke={ACCENT} strokeWidth={2.2} />
        <line x1={22} y1={122} x2={184} y2={122} stroke={STROKE} strokeWidth={1} />
        {[{ x: 52, y: 98 }, { x: 98, y: 78 }, { x: 150, y: 58 }].map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={5} fill={ACCENT} />
        ))}
        <text x={22} y={138} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={9.5}>
          task score turns noise into pressure
        </text>
      </g>
      <Arrow x1={500} y1={123} x2={554} y2={123} label="select" />
      <g transform="translate(554, 48)">
        <rect width={132} height={150} rx={14} ry={14} fill={ACCENT_BG} stroke={ACCENT} />
        <text x={18} y={22} fill={ACCENT_TEXT} fontFamily="var(--font-display)" fontSize={11}>parents</text>
        {["best", "novel", "robust"].map((label, i) => (
          <g key={label} transform={`translate(18 ${44 + i * 32})`}>
            <rect width={96} height={22} rx={7} ry={7} fill={CARD} stroke={ACCENT_BORDER} />
            <text x={48} y={15} fill={FG} fontFamily="var(--font-display)" fontSize={10.5} textAnchor="middle">{label}</text>
          </g>
        ))}
      </g>
      <path d="M620 198 L620 260 L380 260" fill="none" stroke={ACCENT} strokeWidth={1.6} markerEnd="url(#arrow)" />
      <text x={530} y={250} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10}>reproduce</text>
      <Node x={300} y={228} w={160} h={64} title="variation" subtitle="mutate + recombine" tone="code" />
      <Arrow x1={300} y1={260} x2={238} y2={260} label="inherit" muted />
      {offspring.map((c) => (
        <g key={c.label}>
          <rect x={c.x - 28} y={c.y - 18} width={56} height={36} rx={9} ry={9} fill={CARD} stroke={ACCENT_BORDER} />
          <text x={c.x} y={c.y + 4} fill={FG} fontFamily="var(--font-display)" fontSize={12} fontWeight={600} textAnchor="middle">{c.label}</text>
        </g>
      ))}
      <path d="M78 282 L78 218" fill="none" stroke={ACCENT} strokeWidth={1.6} strokeDasharray="2 4" markerEnd="url(#arrow)" />
      <text x={92} y={242} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10}>next generation</text>
    </svg>
  );
}

// ─── Genomics ─────────────────────────────────────────────
export function GenomicsDiagram() {
  return (
    <svg viewBox="0 0 720 380" role="img" aria-label="Natural selection">
      <Defs />
      <text x={36} y={28} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>
        {"// natural selection · 3.5B years of empirical search"}
      </text>
      <Node x={36} y={130} w={170} h={80} title="population" subtitle="many genomes" tone="accent" />
      <Arrow x1={206} y1={170} x2={266} y2={170} label="select" />
      <Node x={266} y={130} w={170} h={80} title="parent" subtitle="ATGC·GTAC" />
      <Arrow x1={436} y1={170} x2={496} y2={170} label="copy + vary" />
      <Node x={496} y={130} w={180} h={80} title="variant" subtitle="ATGC·GCAC" tone="accent" />
      <path d="M586 210 L586 270" stroke={ACCENT} strokeWidth={1.6} markerEnd="url(#arrow)" />
      <text x={595} y={246} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10}>express + test</text>
      <Node x={376} y={270} w={300} h={64} title="world" subtitle="who survives → reproduces" tone="code" />
      <path d="M376 302 L121 302 L121 210" stroke={ACCENT} strokeWidth={1.6} strokeDasharray="2 4" markerEnd="url(#arrow)" fill="none" />
      <text x={236} y={296} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10}>inheritance</text>
    </svg>
  );
}

// ─── System shape ─────────────────────────────────────────
export function SystemDiagram() {
  return (
    <svg viewBox="0 0 720 380" role="img" aria-label="Graff system shape">
      <Defs />
      <rect x={8} y={8} width={704} height={364} rx={14} ry={14} fill="none" stroke={STROKE} strokeDasharray="2 5" />
      <text x={28} y={36} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11} letterSpacing="0.06em">{"// turn loop"}</text>
      <Node x={36} y={66} w={150} h={70} title="CLI / TUI" subtitle="conversation id" />
      <Node x={222} y={66} w={172} h={70} title="Context Builder" subtitle="msgs · tools · files" />
      <Node x={428} y={66} w={172} h={70} title="Provider Adapter" subtitle="HTTP · SSE · WS" tone="accent" />
      <Node x={620} y={66} w={70} h={70} title="GPT-5.5" tone="code" />
      <Arrow x1={186} y1={101} x2={222} y2={101} />
      <Arrow x1={394} y1={101} x2={428} y2={101} />
      <Arrow x1={600} y1={101} x2={620} y2={101} />
      <Node x={428} y={210} w={172} h={70} title="Tool Dispatcher" subtitle="parallel calls" />
      <Node x={222} y={210} w={172} h={70} title="Tool Result" subtitle="typed payload" />
      <path d="M655 136 L655 245 L600 245" fill="none" stroke={ACCENT_LIGHT} strokeWidth={1.6} markerEnd="url(#arrow)" />
      <text x={665} y={195} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10} textAnchor="middle">stream</text>
      <Arrow x1={428} y1={245} x2={394} y2={245} />
      <path d="M222 245 L160 245 L160 145" fill="none" stroke={ACCENT} strokeWidth={1.6} strokeDasharray="3 3" markerEnd="url(#arrow)" />
      <text x={102} y={200} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10}>next step</text>
    </svg>
  );
}

// ─── Websocket ────────────────────────────────────────────
export function WebsocketDiagram() {
  return (
    <svg viewBox="0 0 720 380" role="img" aria-label="Responses WebSocket flow">
      <Defs />
      <rect x={28} y={20} width={664} height={50} rx={10} ry={10} fill={ACCENT_BG} stroke={ACCENT} strokeDasharray="3 4" />
      <text x={48} y={42} fill={FG} fontFamily="var(--font-display)" fontSize={13} fontWeight={600}>warm socket cache</text>
      <text x={48} y={58} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10.5}>
        prev_response_id · prefix sig · open WS · conversation-scoped
      </text>
      <text x={36} y={102} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>{"// turn 1 — full request"}</text>
      <Node x={36} y={114} w={150} h={64} title="Graff" subtitle="full prefix" />
      <path d="M186 146 L348 146" stroke={ACCENT} strokeWidth={1.8} markerEnd="url(#arrow)" />
      <text x={267} y={138} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10} textAnchor="middle">response.create</text>
      <Node x={348} y={114} w={172} h={64} title="GPT-5.5" subtitle="streamed events" tone="code" />
      <path d="M520 146 L548 146" stroke={ACCENT} strokeWidth={1.6} markerEnd="url(#arrow)" />
      <Node x={548} y={114} w={144} h={64} title="response.id" tone="accent" />
      <text x={36} y={222} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>{"// turn N — delta only"}</text>
      <Node x={36} y={234} w={150} h={64} title="Graff" subtitle="new msgs only" />
      <path d="M186 266 L348 266" stroke={ACCENT} strokeWidth={1.8} markerEnd="url(#arrow)" />
      <text x={267} y={258} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10} textAnchor="middle">prev_response_id +</text>
      <text x={267} y={280} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10} textAnchor="middle">new user/tool items</text>
      <Node x={348} y={234} w={172} h={64} title="GPT-5.5" subtitle="resumes context" tone="code" />
      <path d="M520 266 L548 266" stroke={ACCENT} strokeWidth={1.6} markerEnd="url(#arrow)" />
      <Node x={548} y={234} w={144} h={64} title="response.id'" tone="accent" />
      <path d="M434 178 L434 234" stroke={STROKE_STRONG} strokeWidth={1.4} strokeDasharray="4 4" />
      <g transform="translate(440, 200)">
        <text fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10}>on WS error</text>
        <text y={14} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10}>fall back → HTTP/SSE</text>
      </g>
    </svg>
  );
}

// ─── Grammar ──────────────────────────────────────────────
export function GrammarDiagram() {
  return (
    <svg viewBox="0 0 720 380" role="img" aria-label="Tool grammar flow">
      <Defs />
      <text x={36} y={36} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>{"// build"}</text>
      <Node x={36} y={50} w={170} h={64} title="Tool Catalog" subtitle="typed defs" />
      <Arrow x1={206} y1={82} x2={250} y2={82} label="generate" />
      <Node x={250} y={50} w={170} h={64} title="JSON Schema" subtitle="strict normalized" tone="accent" />
      <Arrow x1={420} y1={82} x2={464} y2={82} label="send" />
      <Node x={464} y={50} w={216} h={64} title="GPT-5.5" subtitle="native tool path" tone="code" />
      <text x={36} y={172} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>{"// receive"}</text>
      <Node x={464} y={186} w={216} h={64} title="Argument Stream" subtitle="deltas + tool_call_id" />
      <path d="M572 250 L572 286" stroke={ACCENT} strokeWidth={1.6} markerEnd="url(#arrow)" />
      <Node x={464} y={286} w={216} h={64} title="Dispatch" subtitle="typed request" tone="accent" />
      <Node x={36} y={186} w={170} h={64} title="Text-shaped Call" subtitle="no native call" />
      <path d="M206 218 L250 218" stroke={STROKE_STRONG} strokeWidth={1.4} strokeDasharray="4 4" markerEnd="url(#arrow-muted)" />
      <Node x={250} y={186} w={170} h={64} title="Parser + Coerce" subtitle="repair into schema" />
      <path d="M420 218 L464 218" stroke={ACCENT} strokeWidth={1.6} markerEnd="url(#arrow)" />
      <path d="M335 114 L335 186" stroke={ACCENT} strokeWidth={1.4} strokeDasharray="2 4" />
      <text x={342} y={150} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10}>validate</text>
    </svg>
  );
}

// ─── Harness ──────────────────────────────────────────────
export function HarnessDiagram() {
  return (
    <svg viewBox="0 0 720 380" role="img" aria-label="Harness eval flow">
      <Defs />
      <Node x={28} y={50} w={168} h={84} title="task.yml" subtitle="setup · run · validate" tone="accent" />
      <text x={224} y={32} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>cross product</text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={224} y={50 + i * 22} width={168} height={16} rx={4} ry={4} fill={CARD} stroke={STROKE_STRONG} strokeWidth={1} />
          <text x={234} y={62 + i * 22} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10}>row {i + 1} · ctx {i + 1}</text>
        </g>
      ))}
      <Arrow x1={196} y1={92} x2={224} y2={92} />
      <Arrow x1={392} y1={92} x2={420} y2={92} label="hbs render" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={420} y={50 + i * 30} width={150} height={22} rx={5} ry={5} fill={CARD} stroke={STROKE_STRONG} />
          <text x={428} y={66 + i * 30} fill={FG} fontFamily="var(--font-display)" fontSize={11}>$ run {i + 1}</text>
          <rect x={534} y={56 + i * 30} width={32} height={10} rx={2} ry={2} fill={ACCENT} opacity={0.7 - i * 0.18} />
        </g>
      ))}
      <text x={420} y={32} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>parallel runs</text>
      <Arrow x1={570} y1={88} x2={604} y2={88} />
      <Node x={604} y={50} w={88} h={84} title="✓ pass" subtitle="regex · sh" tone="accent" />
      <rect x={28} y={172} width={664} height={94} rx={12} ry={12} fill={CARD} stroke={STROKE_STRONG} strokeDasharray="3 4" />
      <text x={48} y={196} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11} letterSpacing="0.06em">{"// runner internals"}</text>
      <g transform="translate(48, 210)">
        {[
          { k: "concurrency", v: "configurable" },
          { k: "live validations", v: "stop early" },
          { k: "debug log", v: "per row" },
          { k: "summary", v: "pass / fail" },
        ].map((item, i) => (
          <g key={item.k} transform={`translate(${i * 156}, 0)`}>
            <text fill={FG} fontFamily="var(--font-display)" fontSize={12} fontWeight={600}>{item.k}</text>
            <text y={18} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>{item.v}</text>
          </g>
        ))}
      </g>
      <text x={36} y={300} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>{"// outputs"}</text>
      <Node x={36} y={314} w={196} h={48} title="csv summary" />
      <Node x={262} y={314} w={196} h={48} title="json artifact" />
      <Node x={488} y={314} w={196} h={48} title="exit code" tone="accent" />
    </svg>
  );
}

// ─── Trajectory ───────────────────────────────────────────
export function TrajectoryDiagram() {
  return (
    <svg viewBox="0 0 720 380" role="img" aria-label="Trajectory recorder">
      <Defs />
      <text x={36} y={28} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>{"// AgentExecutor · child_for_agent()"}</text>
      <Node x={240} y={48} w={240} h={64} title="Parent Agent" subtitle="recorder attached" tone="accent" />
      <Arrow x1={310} y1={112} x2={160} y2={166} label="parent_agent_id" labelOffset={-10} />
      <Arrow x1={410} y1={112} x2={560} y2={166} label="parent_agent_id" labelOffset={-10} />
      <Node x={60} y={166} w={200} h={64} title="Child Agent A" subtitle="own conversation_id" />
      <Node x={460} y={166} w={200} h={64} title="Child Agent B" subtitle="own conversation_id" />
      <text x={160} y={252} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11} textAnchor="middle">TrajectoryRecorder</text>
      <text x={560} y={252} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11} textAnchor="middle">TrajectoryRecorder</text>
      <path d="M360 112 L360 296" stroke={ACCENT} strokeWidth={1.4} strokeDasharray="2 4" />
      <text x={368} y={196} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10}>shared repo</text>
      <Arrow x1={160} y1={262} x2={250} y2={310} />
      <Arrow x1={560} y1={262} x2={470} y2={310} />
      <Node x={140} y={300} w={440} h={62} title="trajectory.sqlite" subtitle="AgentRun · AgentRunEnd · cost_usd" tone="code" />
    </svg>
  );
}

// ─── Evolve (DGM loop) ────────────────────────────────────
export function EvolveDiagram() {
  return (
    <svg viewBox="0 0 720 380" role="img" aria-label="DGM-style evolutionary loop">
      <Defs />
      <text x={36} y={28} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={11}>{"// arxiv:2505.22954 · DGM"}</text>
      <Node x={36} y={130} w={170} h={80} title="archive A" subtitle="agents + scores" tone="accent" />
      <Arrow x1={206} y1={170} x2={266} y2={170} label="sample" />
      <text x={236} y={200} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10} textAnchor="middle">σ(λ(αᵢ−α₀))·1/(1+nᵢ)</text>
      <Node x={266} y={130} w={150} h={80} title="parent p" subtitle="code + eval log" />
      <Arrow x1={416} y1={170} x2={466} y2={170} label="p.modify(p)" />
      <Node x={466} y={130} w={150} h={80} title="variant c" subtitle="patched code" tone="accent" />
      <path d="M541 210 L541 270" stroke={ACCENT} strokeWidth={1.6} markerEnd="url(#arrow)" />
      <text x={550} y={246} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10}>evaluate(c, B)</text>
      <Node x={376} y={270} w={300} h={64} title="smoke (10) → full (60–200)" subtitle="SWE-bench · Polyglot" tone="code" />
      <path d="M376 302 L121 302 L121 210" stroke={ACCENT} strokeWidth={1.6} strokeDasharray="2 4" markerEnd="url(#arrow)" fill="none" />
      <text x={236} y={296} fill={FG_MUTED} fontFamily="var(--font-display)" fontSize={10}>{"A ∪ {(c, s)} if c.is_valid()"}</text>
    </svg>
  );
}
