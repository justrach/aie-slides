"use client";
import { SlideShell, Sub, Title } from "./SlideShell";
import BenchmarkChart from "@/components/BenchmarkChart";

export default function Slide06() {
  return (
    <>
      <BenchmarkChart />
      <SlideShell pos="top-left">
        <Sub>receipts · benchmarks 2018&ndash;2026</Sub>
        <Title>2017 &rarr; today.</Title>
        <p className="mt-3 text-sm md:text-base text-ink/75 max-w-md">
          MMLU saturated. HumanEval saturated. SWE-bench from 2% &rarr; 82%. Terminal-Bench is where the action moved.
        </p>
      </SlideShell>
    </>
  );
}
