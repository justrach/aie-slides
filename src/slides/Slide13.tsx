"use client";
import { SlideShell, Sub } from "./SlideShell";
import { GrammarDiagram } from "@/components/diagrams";
export default function Slide13() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-12">
        <div className="w-[72vw] max-w-5xl diagram-frame"><GrammarDiagram /></div>
      </div>
      <SlideShell align="right">
        <Sub>Schema-grammar</Sub>
        <p className="slide-title text-2xl md:text-3xl mt-2 text-ink/80 leading-tight">A schema<br/>is a rule.</p>
      </SlideShell>
    </>
  );
}
