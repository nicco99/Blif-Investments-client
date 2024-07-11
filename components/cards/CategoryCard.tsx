import Image from "next/image";
import Link from "next/link";

import plan3 from "@/public/plan3.jpg";

export const CategoryCard = () => {
  return (
    <Link href="/collections/1">
      <div className="relative group rounded-lg overflow-hidden cursor-pointer before:absolute before:z-10 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
        <Image
          src={plan3}
          alt="Plan"
          quality={30}
          className="object-cover group-hover:scale-110 transition ease-in-out duration-700 -z-10"
        />
        <div className="absolute group-hover:translate-y-2 flex items-center justify-center w-full bottom-4 lg:bottom-12 transition-all ease-in-out duration-700 z-20">
          <span className="text-white max-w-[80%] text-center text-xl sm:text-2xl xl:text-3xl font-bold">
            2 Bedroom House Plans
          </span>
        </div>
      </div>
    </Link>
  );
};
