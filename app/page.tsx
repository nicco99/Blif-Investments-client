import { MarqueeComp } from "@/components/Marquee";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="w-full">
      <MarqueeComp />
      <Header />
      <HeroSection />
    </main>
  );
}
