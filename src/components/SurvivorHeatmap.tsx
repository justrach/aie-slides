"use client";
import { motion } from "motion/react";

// Placeholder until you drop real results in. Rows = agent shapes, cols = tasks.
// Each cell: fitness 0–1. Survivors glow gold; dead cells fade.
const shapes = ["sonnet-solo", "sonnet+codedb", "codex-solo", "codex+devswarm", "opus+graff", "haiku-swarm"];
const tasks = ["refactor", "bugfix", "feature", "review", "infra", "docs"];
const seed = (r: number, c: number) => {
  const x = Math.sin(r * 13.7 + c * 5.3) * 10000;
  return x - Math.floor(x);
};

export default function SurvivorHeatmap() {
  return (
    <div className="font-mono text-xs text-ink">
      <div className="grid" style={{ gridTemplateColumns: `9rem repeat(${tasks.length}, 1fr)` }}>
        <div />
        {tasks.map((t) => (
          <div key={t} className="text-center text-ink/60 pb-2 uppercase tracking-widest">{t}</div>
        ))}
        {shapes.map((s, r) => (
          <div key={s} className="contents">
            <div className="text-ink/70 pr-3 self-center">{s}</div>
            {tasks.map((t, c) => {
              const v = seed(r, c);
              const alive = v > 0.35;
              return (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + (r * tasks.length + c) * 0.03 }}
                  className="aspect-square m-1 rounded-sm"
                  style={{
                    background: alive
                      ? `rgba(229,168,72,${0.25 + v * 0.7})`
                      : `rgba(17,17,15,${0.06})`,
                    boxShadow: alive ? `0 0 ${8 + v * 16}px rgba(229,168,72,${v * 0.5})` : "none",
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <p className="mt-6 text-ink/40">placeholder — swap in real results in SurvivorHeatmap.tsx</p>
    </div>
  );
}
