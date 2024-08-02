import { HeroSection } from "@/components/HeroSection";
import { MarqueeCenter } from "@/components/MarqueeCenter";
import { ScrollableCollections } from "@/components/ScrollableCollections";
import { ScrollablePlans } from "@/components/ScrollablePlans";
import { Counter } from "@/components/Counter";
import { PhotoGrid } from "@/components/PhotoGrid";
import { QueryClient } from "@tanstack/react-query";
import { getCategories, getPlans } from "@/lib/api";

const Home = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["plans"],
    queryFn: getPlans
  })
  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getCategories
  })
  
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
