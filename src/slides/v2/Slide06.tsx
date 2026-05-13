"use client";
import { motion } from "motion/react";
import { SlideShell, Sub, Title } from "./SlideShell";

const ROWS = [
  ["2017", "Transformer"],
  ["2020", "GPT-3"],
  ["2022", "ChatGPT"],
  ["2024", "Sonnet 3.5 / GPT-4o"],
  ["2026", "Opus 4.7 · agents shipping"],
];

export default function Slide06() {
  return (
    <SlideShell pos="top-left">
      <Sub>receipts · log scale</Sub>
      <Title>2017 &rarr; today.</Title>
      <p className="mt-3 text-base md:text-lg text-ink/75 max-w-md">A straight line on log scale. That&rsquo;s an exponential.</p>
      <ul className="mt-5 space-y-1 font-mono text-sm md:text-base text-ink/85">
        {ROWS.map(([year, label], i) => (
          <motion.li
            key={year}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 + i * 0.18, duration: 0.45 }}
            className="flex items-baseline gap-3"
          >
            <span className="text-gold w-12">{year}</span>
            <span>{label}</span>
          </motion.li>
        ))}
      </ul>
    </SlideShell>
  );
}
