"use client";
import { motion } from "motion/react";
import { SlideShell, Sub, Title } from "./SlideShell";

const ROWS: Array<[string, string]> = [
  ["sun",       "compute"],
  ["DNA",       "trajectories"],
  ["selection", "the harness"],
  ["3B years",  "3 years"],
];

export default function SlideBridge() {
  return (
    <SlideShell pos="bottom-right">
      <Sub>same loop · different substrate</Sub>
      <Title>From biology to agents.</Title>
      <div className="mt-5 grid grid-cols-[8rem_2rem_auto] gap-y-2 font-mono text-lg md:text-xl items-baseline">
        <div className="text-ink/55 uppercase tracking-wider text-xs">biology</div>
        <div></div>
        <div className="text-ink/85 uppercase tracking-wider text-xs">agents</div>
        {ROWS.map(([bio, ag], i) => (
          <motion.div
            key={bio}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.18, duration: 0.45 }}
            className="contents"
          >
            <div className="text-ink/70">{bio}</div>
            <div className="text-gold">&rarr;</div>
            <div className="text-ink">{ag}</div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
