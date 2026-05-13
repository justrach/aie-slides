"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";

// v2 shell: text always sits on a soft cream scrim so painterly backgrounds
// never fight readability.
export function SlideShell({ children, align = "right" }: { children: ReactNode; align?: "left" | "right" | "center" }) {
  const pos =
    align === "left" ? "items-end justify-start pl-10 md:pl-16" :
    align === "center" ? "items-center justify-center px-8" :
    "items-end justify-end pr-10 md:pr-16";
  return (
    <div className={`absolute inset-0 flex ${pos} pb-20 pointer-events-none`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
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
