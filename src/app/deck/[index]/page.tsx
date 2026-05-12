import { notFound } from "next/navigation";
import { slides } from "@/slides/manifest";
import DeckClient from "@/components/DeckClient";

export function generateStaticParams() {
  return slides.map((s) => ({ index: String(s.index) }));
}

export default async function SlidePage({ params }: { params: Promise<{ index: string }> }) {
  const { index } = await params;
  const i = Number(index);
  const slide = slides.find((s) => s.index === i);
  if (!slide) notFound();
  return <DeckClient current={i} />;
}
