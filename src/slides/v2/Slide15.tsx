"use client";
import { motion } from "motion/react";
import { SlideShell, Sub, Title } from "./SlideShell";

const STATS = [
  ["344.5M", "tokens saved · last 30d · across installs"],
  ["14k",    "ops · last 7d"],
  ["0.7ms",  "per op · daemon"],
  ["47t",    "outline vs 2,103t full read"],
];

export default function Slide15() {
  return (
    <SlideShell pos="top-left">
      <Sub>the harness · drop-in MCP upgrade</Sub>
      <Title>CodeGraff.</Title>
      <p className="mt-3 text-sm md:text-base text-ink/80 max-w-md">
        Stops your engineers&rsquo; agents from burning weekly caps on full-file reads. Works with Claude Code, Codex, Cursor, Windsurf. <span className="text-ink font-semibold">The harness IS the fitness function.</span>
      </p>
      <ul className="mt-5 space-y-1.5 font-mono text-sm md:text-base text-ink/85">
        {STATS.map(([n, label], i) => (
          <motion.li
            key={n}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
            className="flex items-baseline gap-3"
          >
            <span className="text-gold w-20">{n}</span>
            <span>{label}</span>
          </motion.li>
        ))}
      </ul>
      <p className="mt-4 font-mono text-xs text-ink/55">codegraff.com  ·  shipping with Plasma · BotMD · Trilok</p>
    </SlideShell>
  );
}
