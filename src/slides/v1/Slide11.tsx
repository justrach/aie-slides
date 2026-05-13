"use client";
import { SlideShell, Sub } from "./SlideShell";
import { SystemDiagram } from "@/components/diagrams";
export default function Slide11() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-12">
        <div className="w-[72vw] max-w-5xl diagram-frame"><SystemDiagram /></div>
      </div>
      <SlideShell align="right">
        <Sub>system shape</Sub>
        <p className="slide-title text-2xl md:text-3xl mt-2 text-ink/80 leading-tight">Four pieces.<br/>Boring on purpose.</p>
      </SlideShell>
    </>
  );
}
