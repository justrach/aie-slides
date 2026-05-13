"use client";
import { SlideShell, Sub } from "./SlideShell";
import { motion } from "motion/react";

const PROJECTS = [
  { name: "turboAPI",  stat: "971 ★",   tag: "FastAPI in Zig · 7× faster" },
  { name: "nanobrew",  stat: "1,043 ★", tag: "3ms warm installs" },
  { name: "codedb",    stat: "779 ★",   tag: "code intelligence for agents" },
  { name: "kuri",      stat: "298 ★",   tag: "closed-loop browser organism" },
  { name: "devswarm",  stat: "51 ★",    tag: "MCP orchestrator · parallel sub-agents" },
];

export default function Slide17() {
  return (
    <SlideShell align="right">
      <Sub>track record</Sub>
      <p className="slide-title text-4xl md:text-5xl leading-tight mt-2">Same playbook.<br/><span className="text-gold">Different surfaces.</span></p>
      <div className="mt-8 space-y-2 max-w-md">
        {PROJECTS.map((p, i) => (
          <motion.div key={p.name}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
            className="flex items-baseline justify-between gap-4 font-mono text-sm">
            <span className="text-ink">{p.name}</span>
            <span className="text-ink/50 flex-1">· {p.tag}</span>
            <span className="text-gold">{p.stat}</span>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
