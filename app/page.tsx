import { MarqueeComp } from "@/components/Marquee";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Plans } from "@/components/Plans";

export default function Home() {
  return (
    <main className="w-full">
      <MarqueeComp />
      <Header />
      <HeroSection />
      <Plans />
    </main>
  );
}
