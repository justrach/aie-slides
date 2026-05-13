"use client";
import { SlideShell, Title, Sub, Body } from "./SlideShell";

export default function Slide07() {
  return (
    <SlideShell align="right">
      <Sub>tool · written in zig</Sub>
      <Title>Muonry.</Title>
      <Body>Rust: 4–7 min compiles. Zig: instant. The loop got 10× tighter.</Body>
    </SlideShell>
  );
}
