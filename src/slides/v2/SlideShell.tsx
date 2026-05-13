"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";

// v2 shell: card sits TOP-LEFT by default — natural reading position,
// painterly bg fills the rest. `align` retained for compatibility but
// only swaps the horizontal slot.
export function SlideShell({ children, align = "left" }: { children: ReactNode; align?: "left" | "right" | "center" }) {
  const horiz =
    align === "right"  ? "justify-end pr-10 md:pr-16" :
    align === "center" ? "justify-center px-8" :
                         "justify-start pl-10 md:pl-16";
  return (
    <div className={`absolute inset-0 flex items-start ${horiz} pt-20 md:pt-24 pointer-events-none`}>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
        className="relative max-w-[42rem] text-ink px-8 py-7 rounded-xl"
        style={{
          background: "rgba(248, 244, 234, 0.82)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 10px 40px rgba(17,17,15,0.12)",
          border: "1px solid rgba(17,17,15,0.06)",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Title({ children }: { children: ReactNode }) {
  return <h1 className="slide-title text-4xl md:text-6xl leading-[1.05]">{children}</h1>;
}
export function Sub({ children }: { children: ReactNode }) {
  return <p className="mt-3 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-ink/65">{children}</p>;
}
export function Body({ children }: { children: ReactNode }) {
  return <p className="mt-5 text-lg md:text-xl leading-snug text-ink/85">{children}</p>;
}
