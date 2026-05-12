"use client";
import { SlideShell, Sub } from "./SlideShell";
import { HarnessDiagram } from "@/components/diagrams";
export default function Slide14() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-12">
        <div className="w-[72vw] max-w-5xl diagram-frame"><HarnessDiagram /></div>
      </div>
      <SlideShell align="right">
        <Sub>Harness</Sub>
        <p className="slide-title text-2xl md:text-3xl mt-2 text-ink/80 leading-tight">The fitness<br/>function.</p>
      </SlideShell>
    </>
  );
}
