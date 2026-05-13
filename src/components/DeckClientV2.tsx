"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { slides } from "@/slides/v2/manifest";
import World from "./World";
import SlideRouterV2 from "./SlideRouterV2";

export default function DeckClientV2({ current }: { current: number }) {
  const router = useRouter();
  const [showNotes, setShowNotes] = useState(false);

  const go = useCallback((next: number) => {
    if (next < 1 || next > slides.length) return;
    const navigate = () => router.push(`/deck/v2/${next}`);
    type VTDoc = Document & { startViewTransition?: (cb: () => void) => unknown };
    const doc = document as VTDoc;
    if (doc.startViewTransition) doc.startViewTransition(navigate);
    else navigate();
  }, [router]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") go(current + 1);
      else if (e.key === "ArrowLeft" || e.key === "PageUp") go(current - 1);
      else if (e.key === "n") setShowNotes((v) => !v);
      else if (e.key === "f") document.documentElement.requestFullscreen?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go]);

  const slide = slides.find((s) => s.index === current)!;

  return (
    <main className="fixed inset-0 overflow-hidden bg-cloud text-ink">
      <World layers={slide.layers} bg={slide.bg} />
      <SlideRouterV2 index={current} />
      <nav className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-ink/60 select-none">
        <span>v2 · {String(current).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        <span className="tracking-widest">TRILOK · AIE SG · 2026</span>
        <span>→ next  ←  prev  ·  n notes  ·  f fullscreen</span>
      </nav>
      {showNotes && (
        <aside className="absolute top-4 right-4 max-w-md bg-ink/90 text-cloud p-4 rounded-lg text-sm font-mono leading-relaxed">
          <div className="text-gold mb-2">notes · {slide.durationSec}s</div>
          {slide.notes}
        </aside>
      )}
    </main>
  );
}
