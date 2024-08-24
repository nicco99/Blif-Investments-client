import Image from "next/image";
import Link from "next/link";

import { imageFromPlanToCategory } from "@/hooks/filters";
import type { Category } from "@/types";
import { Skeleton } from "../ui/skeleton";

type Props = {
  category: Category;
};

export const CategoryCard = async ({ category }: Props) => {
  const image = await imageFromPlanToCategory(category.id);

  return (
    <Link href={`/collections/${category.id}`} prefetch={false}>
      <div className="relative aspect-video group rounded-lg overflow-hidden hover:z-20 lg:hover:drop-shadow-xl transition-all ease-in-out duration-700 cursor-pointer before:absolute before:z-10 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
        {image ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
            alt="Plan"
            fill
            sizes="(min-width: 1800px) 388px, (min-width: 1280px) calc(20.8vw + 18px), (min-width: 1040px) calc(33.18vw - 41px), (min-width: 780px) calc(41.67vw - 36px), (min-width: 640px) calc(50vw - 28px), calc(75vw - 22px)"
            quality={30}
            className="object-cover group-hover:scale-110 transition ease-in-out duration-700 z-[1]"
          />
        ) : (
          <Skeleton className="aspect-video bg-slate-300 rounded-xl" />
        )}
        <div className="absolute lg:group-hover:translate-y-2 transition-all ease-in-out duration-700 flex items-center justify-center w-full bottom-4 lg:bottom-12 z-20">
          <span className="text-white max-w-[80%] text-center text-xl sm:text-2xl xl:text-3xl font-bold line-clamp-1">
            {category.name}
          </span>
        </div>
      </div>
    </Link>
  );
};
