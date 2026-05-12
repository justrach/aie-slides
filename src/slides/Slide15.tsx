"use client";
import { SlideShell, Sub } from "./SlideShell";
import { TrajectoryDiagram } from "@/components/diagrams";
import { motion } from "motion/react";

export default function Slide15() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-12">
        <div className="w-[68vw] max-w-5xl diagram-frame opacity-95"><TrajectoryDiagram /></div>
      </div>
      <SlideShell align="right">
        <Sub>Trajectory</Sub>
        <p className="slide-title text-2xl md:text-3xl text-ink/80 leading-tight mt-2">Genome + body<br/>+ score — one row.</p>
        <motion.blockquote
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 max-w-md text-ink/70 italic border-l-2 border-gold pl-4 text-base"
        >
          “The first time a child agent rewrote its parent and actually scored better, I stared at the log for ten minutes thinking — I didn’t write that.”
        </motion.blockquote>
      </SlideShell>
    </>
  );
}
