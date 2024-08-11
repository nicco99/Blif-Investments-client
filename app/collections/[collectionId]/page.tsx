import Image from "next/image";
import type { Metadata } from "next";

import plan3 from "@/public/plan3.jpg";
import { FloatingFilter } from "@/components/filters/FloatingFilter";
import { getCategoryWithId } from "@/lib/api";
import {
  filterPlansWithCategoryId,
  imageFromPlanToCategory,
} from "@/hooks/filters";
import type { Category } from "@/types";
import ShowPlans from "@/components/filters/ShowPlans";

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
  const sort = searchParams?.sort;

  const categoryData = getCategoryWithId(params.collectionId);
  const plansData = filterPlansWithCategoryId({
    categoryId: params.collectionId,
    filters,
    sort,
  });
  const coverImageData = imageFromPlanToCategory(params.collectionId);

  const [category, plans, coverImage] = await Promise.all([
    categoryData,
    plansData,
    coverImageData,
  ]);

  return (
    <section className="bg-[#f3f3f3] flex flex-col justify-center items-center py-8 md:py-10 lg:py-12">
      <div className="px-5 md:px-8 lg:px-12 mb-5 lg:mb-0 w-full">
        <div className="flex flex-col w-full gap-y-8 md:gap-y-12 max-w-[1600px] mx-auto">
          <div className="relative flex w-full justify-center items-center h-[23.5rem] md:h-[25rem] xl:h-[28rem] overflow-hidden rounded-3xl before:absolute before:z-10 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
            <Image
              src={
                { coverImage }
                  ? `${process.env.NEXT_PUBLIC_API_URL!}/${coverImage}`
                  : plan3
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
          <ShowPlans plans={plans} showPlansCount />
        </div>
      </div>
      <FloatingFilter />
    </section>
  );
};

export default CollectionIdPage;
