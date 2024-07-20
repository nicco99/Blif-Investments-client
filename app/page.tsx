import { HeroSection } from "@/components/HeroSection";
import { MarqueeCenter } from "@/components/MarqueeCenter";
import { ScrollableCollections } from "@/components/ScrollableCollections";
import { ScrollablePlans } from "@/components/ScrollablePlans";
import { Counter } from "@/components/Counter";
import { PhotoGrid } from "@/components/PhotoGrid";

export default function Home() {
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
