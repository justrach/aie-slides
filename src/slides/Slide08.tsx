"use client";
import { SlideShell, Sub } from "./SlideShell";
import { GenomicsDiagram } from "@/components/diagrams";
export default function Slide08() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-12">
        <div className="w-[68vw] max-w-5xl diagram-frame"><GenomicsDiagram /></div>
      </div>
      <SlideShell align="right">
        <Sub>Genome · Mutation · Selection</Sub>
        <p className="slide-title text-2xl md:text-3xl mt-2 text-ink/80 leading-tight">The mutator<br/>is what changed.</p>
      </SlideShell>
    </>
  );
}
