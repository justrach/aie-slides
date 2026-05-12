"use client";
import { SlideShell, Sub } from "./SlideShell";
import { motion } from "motion/react";

const SQL = `SELECT agent_id, score, age
  FROM agent_runs
 ORDER BY (sigmoid(score - baseline)
           / (1.0 + spawn_count)) DESC
 LIMIT 1;`;

export default function Slide16() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-start pl-16 pointer-events-none">
        <motion.pre
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className="font-mono text-base md:text-lg leading-relaxed text-ink bg-cloud/85 backdrop-blur px-7 py-6 rounded-md border border-ink/10 shadow-sm"
        >{SQL}</motion.pre>
      </div>
      <SlideShell align="right">
        <Sub>closing the loop</Sub>
        <p className="slide-title text-3xl md:text-4xl mt-2 leading-tight">
          Score × novelty.<br/>
          <span className="text-gold">That picks the next parent.</span>
        </p>
      </SlideShell>
    </>
  );
}
