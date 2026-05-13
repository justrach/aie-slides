"use client";
import { SlideShell, Title, Sub, Body } from "./SlideShell";

export default function Slide11() {
  return (
    <SlideShell align="right">
      <Sub>the harness · on Forge</Sub>
      <Title>CodeGraff.</Title>
      <Body>Forge is SOTA on Terminal-Bench. I added a trajectory store, multi-model fan-out, and a selector loop. The harness IS the fitness function.</Body>
    </SlideShell>
  );
}
