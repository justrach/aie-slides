"use client";
// Trilok logomark — motionless, lower-left. Never a character, never animated.
// Per the brand system, in technical decks the mark stays put as a silhouette.
export default function TrilokMark() {
  return (
    <div className="absolute bottom-3 left-3 pointer-events-none select-none flex items-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/trilok_logo_transparent.png"
        alt=""
        aria-hidden
        className="h-12 w-12 md:h-14 md:w-14 opacity-85"
        style={{ filter: "drop-shadow(0 2px 6px rgba(17,17,15,0.30))" }}
      />
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/55">trilok</span>
    </div>
  );
}
