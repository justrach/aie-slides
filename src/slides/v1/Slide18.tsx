"use client";
import { SlideShell, Sub, Title, Body } from "./SlideShell";
import { motion } from "motion/react";

const FLOW = [
  { label: "orchestrator", note: "breaks task into sub-tasks" },
  { label: "workers",      note: "run in parallel" },
  { label: "synthesizer",  note: "combines outputs" },
];

export default function Slide18() {
  return (
    <SlideShell align="right">
      <Sub>what’s next · devswarm</Sub>
      <Title>Organism<br/>to colony.</Title>
      <Body>kuri closed the loop on one agent.<br/>devswarm turns that into a colony.</Body>
      <div className="mt-8 space-y-2 max-w-md font-mono text-xs text-ink/60">
        {FLOW.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.25, duration: 0.5 }}
            className="flex items-baseline gap-3">
            <span className="text-gold">→</span>
            <span className="text-ink">{s.label}</span>
            <span className="text-ink/45">· {s.note}</span>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
