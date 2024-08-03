import { QueryClient } from "@tanstack/react-query";

import { HeroSection } from "@/app/(home)/_components/HeroSection";
import { MarqueeCenter } from "@/app/(home)/_components/MarqueeCenter";
import { ScrollableCollections } from "@/app/(home)/_components/ScrollableCollections";
import { ScrollablePlans } from "@/app/(home)/_components/ScrollablePlans";
import { Counter } from "@/app/(home)/_components/Counter";
import { PhotoGrid } from "@/app/(home)/_components/PhotoGrid";
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
