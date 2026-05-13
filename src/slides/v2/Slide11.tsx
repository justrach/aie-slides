"use client";
import { motion } from "motion/react";
import { SlideShell, Sub, Title } from "./SlideShell";

const STATS = [
  ["538×",   "vs ripgrep on pre-indexed queries"],
  ["O(1)",   "inverted word index for identifiers"],
  ["16",     "MCP tools · tree · outline · symbol · search · edit · deps"],
  ["zero",   "runtime deps · single Zig binary"],
];

export default function Slide11() {
  return (
    <SlideShell pos="top-left">
      <Sub>tool · index</Sub>
      <Title>CodeDB.</Title>
      <p className="mt-3 text-sm md:text-base text-ink/75 max-w-md">
        Search is the agent&rsquo;s first sense organ. CodeDB makes it free.
      </p>
      <ul className="mt-5 space-y-1.5 font-mono text-sm md:text-base text-ink/85">
        {STATS.map(([n, label], i) => (
          <motion.li
            key={n}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 + i * 0.15, duration: 0.4 }}
            className="flex items-baseline gap-3"
          >
            <span className="text-gold w-16">{n}</span>
            <span>{label}</span>
          </motion.li>
        ))}
      </ul>
      <p className="mt-4 font-mono text-xs text-ink/55">github.com/justrach/codedb</p>
    </SlideShell>
  );
}
