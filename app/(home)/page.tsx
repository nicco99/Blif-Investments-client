import { HeroSection } from "@/app/(home)/_components/HeroSection";
import { MarqueeCenter } from "@/app/(home)/_components/MarqueeCenter";
import { ScrollableCollections } from "@/app/(home)/_components/ScrollableCollections";
import { ScrollablePlans } from "@/app/(home)/_components/ScrollablePlans";
import { Counter } from "@/app/(home)/_components/Counter";
import { PhotoGrid } from "@/app/(home)/_components/PhotoGrid";

const Home = () => {
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
};

export default Home;
