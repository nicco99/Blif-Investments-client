import { Metadata } from "next";
import Image from "next/image";
import { Settings2 } from "lucide-react";

import plan3 from "@/public/plan3.jpg";
import { PlanCard } from "@/components/cards/PlanCard";
import { PlanFilters } from "@/components/PlanFilters";
import { FloatingFilter } from "@/components/FloatingFilter";
import { getCategoryWithId } from "@/lib/api";
import { filterPlansWithCategoryId } from "@/hooks/filters";
import { PlanSort } from "@/components/PlanSort";

type Props = {
  params: {
    collectionId: number;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.collectionId}`,
  };
};

const CollectionIdPage = async ({ params }: Props) => {
  const categoryData = getCategoryWithId(params.collectionId);
  const filteredPlansData = filterPlansWithCategoryId(params.collectionId);

  const [category, filteredPlans] = await Promise.all([
    categoryData,
    filteredPlansData,
  ]);

  return (
    <section className="bg-white flex flex-col justify-center items-center py-8 md:py-10 lg:py-12">
      <div className="px-5 md:px-8 lg:px-12 mb-5 lg:mb-0">
        <div className="flex flex-col w-full gap-y-8 md:gap-y-12 max-w-[1600px] mx-auto">
          <div className="relative flex justify-center items-center h-[23.5rem] md:h-[25rem] xl:h-[28rem] overflow-hidden rounded-3xl before:absolute before:z-10 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
            <Image src={plan3} alt="" className="object-cover h-full z-0" />
            <div className="absolute z-20 flex flex-col gap-y-4 md:gap-y-6 text-center max-w-3xl mx-5 sm:mx-8 lg:mx-0">
              <span className="text-5xl md:text-[4rem] xl:text-[5rem] font-bold text-white">
                {category.name}
              </span>
              <p className="text-sm md:text-base text-white">
                {category.description}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col lg:grid grid-cols-4 lg:gap-x-12">
            <p className="lg:hidden text-center text-sm md:text-base">
              14 products
            </p>
            <div className="hidden lg:block items-start col-span-1">
              <div className="flex flex-col gap-y-6 lg:gap-y-8 sticky top-[95px] w-full py-12">
                <div className="flex space-x-3">
                  <Settings2 className="h-5 w-5" />
                  <span>Filters</span>
                </div>
                <PlanFilters />
              </div>
            </div>
            <div className="flex flex-col col-span-3">
              <PlanSort />
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8 lg:px-3">
                {filteredPlans.map((plan: any) => (
                  <PlanCard key={plan.id} plan={plan} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FloatingFilter />
    </section>
  );
};

export default CollectionIdPage;
