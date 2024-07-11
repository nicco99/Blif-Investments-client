import Image from "next/image";
import { Settings2 } from "lucide-react";

import plan3 from "@/public/plan3.jpg";
import { PlanCard } from "@/components/cards/PlanCard";
import { PlanFilters } from "@/components/PlanFilters";
import { FloatingFilter } from "@/components/FloatingFilter";

type Props = {
  params: {
    collectionId: number;
  };
};

const CollectionIdPage = ({ params }: Props) => {
  return (
    <section className="flex flex-col justify-center items-center bg-slate-200 py-8 md:py-10 lg:py-12">
      <div className="px-5 md:px-8 lg:px-12 mb-5 lg:mb-0">
        <div className="flex flex-col w-full gap-y-8 md:gap-y-12 max-w-[1600px] mx-auto">
          <div className="relative flex justify-center items-center h-[23.5rem] md:h-[25rem] xl:h-[28rem] overflow-hidden rounded-3xl before:absolute before:z-10 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
            <Image src={plan3} alt="" className="object-cover h-full z-0" />
            <div className="absolute z-20 flex flex-col gap-y-4 md:gap-y-6 text-center max-w-3xl mx-5 sm:mx-8 lg:mx-0">
              <span className="text-5xl md:text-[4rem] xl:text-[5rem] font-bold text-white">
                1 Bedroom House Plans
              </span>
              <p className="text-sm md:text-base text-white">
                Our bedroom house plans section, where thoughtful design meets
                your dreams of a cozy and comfortable home. Our collection of
                bedroom house plans offers a variety of options to suit your
                lifestyle and preferences.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-6 lg:gap-y-8 lg:gap-x-12 lg:grid grid-cols-4">
            <p className="lg:hidden text-center text-sm md:text-base">
              14 products
            </p>
            <div className="hidden lg:flex items-center space-x-3 col-span-1">
              <Settings2 className="h-5 w-5" />
              <span>Filters</span>
            </div>
            <div className="hidden lg:flex justify-end col-span-3">
              <span className="font-bold">Sort by:</span>
            </div>
            <div className="hidden lg:block col-span-1">
              <PlanFilters />
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8">
              {Array.from({ length: 14 }).map((_, index) => (
                <PlanCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FloatingFilter />
    </section>
  );
};

export default CollectionIdPage;
