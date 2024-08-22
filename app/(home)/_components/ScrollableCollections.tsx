import { ChevronRight } from "lucide-react";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { getCategories } from "@/lib/api";
import type { Category } from "@/types";
import { sliceArray } from "@/hooks/filters";

export const ScrollableCollections = async () => {
  const categories = await getCategories();
  const slicedCategories = sliceArray(categories, 8);

  return (
    <section className=" pt-5 sm:pt-0 pb-8 md:pb-10 lg:pb-12 xl:pb-16">
      <div className="px-3 sm:px-5 md:px-8 lg:px-12">
        <div className="flex flex-col w-full gap-y-12 max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row space-y-4 justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Plans for every family size
              </h2>
              <p className="mt-5 lg:mt-8 text-sm sm:text-base">
                We believe that every family deserves a home that perfectly fits
                their unique needs and lifestyle
              </p>
            </div>
            <div className="flex lg:items-end">
              <Link
                prefetch={false}
                href="/collections"
                className="flex items-center gap-x-3 group text-xs sm:text-sm hover:underline hover:underline-offset-4 transition-all ease-in-out duration-700"
              >
                View all
                <div className="bg-gray-300/70 group-hover:bg-black rounded-full p-1 transition-all ease-in-out duration-700">
                  <ChevronRight className="text-black group-hover:text-white h-3 w-3" />
                </div>
              </Link>
            </div>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {slicedCategories.map((category: Category) => (
                <CarouselItem
                  key={category.id}
                  className="basis-3/4 sm:basis-1/2 md:basis-5/12 lg:basis-1/3 xl:basis-1/4"
                >
                  <CategoryCard category={category} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="md:h-10 lg:h-12 xl:h-14 md:w-10 lg:w-12 xl:w-14 border-none bg-white text-black hover:scale-110 hover:bg-white hover:text-black left-6  sm:left-[5%] md:left-[10%] transition-all ease-in-out duration-700" />
            <CarouselNext className="md:h-10 lg:h-12 xl:h-14 md:w-10 lg:w-12 xl:w-14 border-none bg-white text-black hover:scale-110 hover:bg-white hover:text-black right-6  sm:right-[5%] md:right-[10%] transition-all ease-in-out duration-700" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
