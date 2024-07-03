import { HeroSection } from "@/components/HeroSection";
import { Plans } from "@/components/Plans";
import { MarqueeCenter } from "@/components/MarqueeCenter";
import { Scrollable } from "@/components/Scrollable";
import { ScrollableCards } from "@/components/ScrollableCards";
import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <Plans />
      <MarqueeCenter />
      <Scrollable />
      <ScrollableCards />
      <Counter />
    </main>
  );
}
