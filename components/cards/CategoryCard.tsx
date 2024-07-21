import Image from "next/image";
import Link from "next/link";

import plan3 from "@/public/plan3.jpg";
import { imageFromPlanToCategory } from "@/hooks/filters";
import { Category } from "@/types";

type Props = {
  category: Category;
};

export const CategoryCard = async ({ category }: Props) => {
  const imageUrl = await imageFromPlanToCategory(category.id);
  return (
    <Link href={`/collections/${category.id}`} prefetch={false}>
      <div className="relative aspect-video group rounded-lg overflow-hidden lg:hover:-translate-y-2 hover:z-20 lg:hover:drop-shadow-xl transition-all ease-in-out duration-700 cursor-pointer before:absolute before:z-10 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
        <Image
          src={{ imageUrl } ? `${process.env.API_URL!}/${imageUrl}` : plan3}
          alt="Plan"
          fill
          quality={30}
          className="object-cover group-hover:scale-110 transition ease-in-out duration-700 z-[1]"
        />
        <div className="absolute lg:group-hover:translate-y-2 transition-all ease-in-out duration-700 flex items-center justify-center w-full bottom-4 lg:bottom-12 z-20">
          <span className="text-white max-w-[80%] text-center text-xl sm:text-2xl xl:text-3xl font-bold">
            {category.name}
          </span>
        </div>
      </div>
    </Link>
  );
};
