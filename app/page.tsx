import { HeroSection } from "@/components/HeroSection";
import { MarqueeCenter } from "@/components/MarqueeCenter";
import { ScrollableCollections } from "@/components/ScrollableCollections";
import { ScrollablePlans } from "@/components/ScrollablePlans";
import { Counter } from "@/components/Counter";
import { PhotoGrid } from "@/components/PhotoGrid";

export default function Home() {
  const items = [
    "First piece of text",
    "Second piece of text",
    "Third piece of text",
    "Fourth piece of text",
    "Fifth piece of text",
  ];
  const amount = 5;
  const time = 50
  return (
    <main className="w-full">
      <HeroSection />
      <MarqueeCenter />
      <ScrollableCollections />
      <ScrollablePlans />
      <Counter />
      <PhotoGrid />
    </main>
  );
}
