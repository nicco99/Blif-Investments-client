import Image from "next/image";
import { Settings2 } from "lucide-react";
import type { Metadata } from "next";

import plan3 from "@/public/plan3.jpg";
import { PlanCard } from "@/components/cards/PlanCard";
import { PlanFilters } from "@/components/PlanFilters";
import { FloatingFilter } from "@/components/FloatingFilter";
import { getCategoryWithId } from "@/lib/api";
import {
  filterPlansWithCategoryId,
  imageFromPlanToCategory,
} from "@/hooks/filters";
import { PlanSort } from "@/components/PlanSort";
import type { Category, Plan } from "@/types";

type Props = {
  params: {
    collectionId: number;
  };
  searchParams: {
    sort: "none" | "name-asc" | "name-desc" | "price-asc" | "price-desc";
    bdrm: string;
    btrm: string;
    flrs: string;
    prce: string;
  };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const category: Category = await getCategoryWithId(params.collectionId);

  if (!category) {
    return;
  }
  return {
    title: `${category.name} | Blif Investment`,
    description: category.description,
    openGraph: {
      title: category.name,
      description: category.description,
      type: "article",
      locale: "en_US",
      url: `https://blifinvestment.com/collections/${params.collectionId}`,
      siteName: "Blif Investment",
      images: [
        {
          url: "https://blifinvestment.com/og-image.png",
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
  };
}

const CollectionIdPage = async ({ params, searchParams }: Props) => {
  const filters = {
    bdrm: searchParams?.bdrm,
    btrm: searchParams?.btrm,
    flrs: searchParams?.flrs,
    prce: searchParams?.prce,
  };
  const categoryData = getCategoryWithId(params.collectionId);
  const filteredPlansData = filterPlansWithCategoryId(
    params.collectionId,
    filters,
    searchParams?.sort
  );
  const coverImageData = imageFromPlanToCategory(params.collectionId);

  const [category, filteredPlans, coverImage] = await Promise.all([
    categoryData,
    filteredPlansData,
    coverImageData,
  ]);

  return (
    <section className="bg-[#f3f3f3] flex flex-col justify-center items-center py-8 md:py-10 lg:py-12">
      <div className="px-5 md:px-8 lg:px-12 mb-5 lg:mb-0 w-full">
        <div className="flex flex-col w-full gap-y-8 md:gap-y-12 max-w-[1600px] mx-auto">
          <div className="relative flex w-full justify-center items-center h-[23.5rem] md:h-[25rem] xl:h-[28rem] overflow-hidden rounded-3xl before:absolute before:z-10 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
            <Image
              src={
                { coverImage } ? `${process.env.API_URL!}/${coverImage}` : plan3
              }
              alt=""
              fill
              className="object-cover h-full z-[1]"
            />
            <div className="absolute z-20 flex flex-col gap-y-4 md:gap-y-6 text-center max-w-3xl mx-5 sm:mx-8 lg:mx-0">
              <span className="text-5xl md:text-[4rem] xl:text-[5rem] font-bold text-white">
                {category?.name}
              </span>
              <p className="text-sm md:text-base text-white">
                {category?.description}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col lg:grid grid-cols-4 lg:gap-x-12">
            <p className="lg:hidden text-center text-sm md:text-base">
              {`${filteredPlans?.length} product${
                filteredPlans?.length === 1 ? "" : "s"
              }`}
            </p>
            <div className="sticky top-[95px] hidden lg:flex items-center justify-between z-30 w-full py-3 bg-[#f3f3f3] col-span-4">
              <div className="flex space-x-3">
                <Settings2 className="h-5 w-5" />
                <span>Filters</span>
              </div>
              <PlanSort />
            </div>
            <div className="hidden lg:block items-start col-span-1">
              <div className="flex flex-col gap-y-6 lg:gap-y-8 sticky top-[200px] w-full">
                <PlanFilters />
              </div>
            </div>
            <div className="flex flex-col col-span-3">
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8 pt-3 lg:pb-12 lg:px-3 lg:-mx-3">
                {filteredPlans?.map((plan: Plan) => (
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
