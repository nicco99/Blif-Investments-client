"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import plan2 from "@/public/plan2.jpg";
import { imageFromPlanToCategory } from "@/hooks/filters";
import type { Category } from "@/types";
import { Skeleton } from "../ui/skeleton";

type Props = {
  category: Category;
};

export const CategoryCard = ({ category }: Props) => {
  const { data } = useQuery({
    queryKey: ["image", category.id],
    queryFn: async () => {
      let image;
      image = await imageFromPlanToCategory(category.id);
      return image;
    },
  });
  return (
    <Link href={`/collections/${category.id}`} prefetch={false}>
      <div className="relative aspect-video group rounded-lg overflow-hidden hover:z-20 lg:hover:drop-shadow-xl transition-all ease-in-out duration-700 cursor-pointer before:absolute before:z-10 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
        {data ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/${data}`}
            alt="Plan"
            fill
            sizes="30vw"
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
