"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import type { LayerKey } from "@/slides/manifest";

function Bg({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => { setFailed(false); }, [src]);
  if (failed) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/bg/${src}`}
      alt=""
      onError={() => setFailed(true)}
      className="absolute inset-0 w-full h-full object-cover"
      aria-hidden
    />
  );
}

// 3D / shader layers removed — the painterly backgrounds carry the metaphor
// on their own. Layer infrastructure is kept so per-slide overlays can return
// later without restructuring the manifest.
export default function World({ bg }: { layers: LayerKey[]; bg: string }) {
  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="sync">
        <motion.div
          key={bg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="world-layer"
          style={{ viewTransitionName: "world-bg" } as React.CSSProperties}
        >
          <Bg src={bg} />
          <div className="absolute inset-0 bg-gradient-to-r from-cloud/0 via-cloud/10 to-cloud/40" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
