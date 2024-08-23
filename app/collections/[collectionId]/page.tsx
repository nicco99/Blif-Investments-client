import Image from "next/image";
import type { Metadata } from "next";

import plan3 from "@/public/plan3.jpg";
import { FloatingFilter } from "@/components/filters/FloatingFilter";
import { getCategoryWithId } from "@/lib/api";
import { imageFromPlanToCategory } from "@/hooks/filters";
import type { Category } from "@/types";
import ShowPlans from "@/components/filters/ShowPlans";

type Props = {
  params: {
    collectionId: number;
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

const CollectionIdPage = async ({ params }: Props) => {
  const categoryData = getCategoryWithId(params.collectionId);
  const coverImageData = imageFromPlanToCategory(params.collectionId);

  const [category, coverImage] = await Promise.all([
    categoryData,
    coverImageData,
  ]);

  return (
    <section className="flex flex-col items-center justify-center py-8 md:py-10 lg:py-12">
      <div className="w-full px-5 mb-5 md:px-8 lg:px-12 lg:mb-0">
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
            <div className="absolute z-20 flex flex-col max-w-3xl mx-5 text-center gap-y-4 md:gap-y-6 sm:mx-8 lg:mx-0">
              <span className="text-5xl md:text-[4rem] xl:text-[5rem] font-bold text-white">
                {category?.name}
              </span>
              <p className="text-sm text-white md:text-base">
                {category?.description}
              </p>
            </div>
          </div>
          <ShowPlans collectionId={params.collectionId} showPlansCount />
        </div>
      </div>
      <FloatingFilter />
    </section>
  );
};

export default CollectionIdPage;
