"use client";
import { SlideShell, Title, Sub, Body } from "./SlideShell";

export default function Slide07() {
  return (
    <SlideShell pos="top-left">
      <Sub>the bet</Sub>
      <Title>Scaling laws still hold.</Title>
      <Body>
        And they keep holding as long as humans stay more interesting than the models.
      </Body>
      <p className="mt-4 font-mono text-xs text-ink/55">interestingness is the substrate · once we run out, the curve flattens</p>
    </SlideShell>
  );
}
