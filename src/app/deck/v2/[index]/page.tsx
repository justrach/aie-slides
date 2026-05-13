import { notFound } from "next/navigation";
import { slides } from "@/slides/v2/manifest";
import DeckClientV2 from "@/components/DeckClientV2";

export function generateStaticParams() {
  return slides.map((s) => ({ index: String(s.index) }));
}

export default async function SlidePage({ params }: { params: Promise<{ index: string }> }) {
  const { index } = await params;
  const i = Number(index);
  const slide = slides.find((s) => s.index === i);
  if (!slide) notFound();
  return <DeckClientV2 current={i} />;
}
