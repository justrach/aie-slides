"use client";
import { SlideShell, Title, Sub, Body } from "./SlideShell";

export default function Slide09() {
  return (
    <SlideShell align="right">
      <Sub>tool · sandbox</Sub>
      <Title>Nanobrew.</Title>
      <Body>When I sleep, my agents work. apt-get inside the sandbox was the slow part — so I wrote a drop-in Homebrew/apt replacement in Zig. 13× faster warm.</Body>
    </SlideShell>
  );
}
