import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import plan3 from "@/public/plan3.jpg"

export const Plans = () => {
  return (
    <section className="bg-slate-200">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 py-8 md:py-10 lg:py-12 xl:py-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex -mx-5 sm:-mx-8 md:-mx-10 px-3 sm:px-5 md:px-8 lg:mx-0 lg:px-0 gap-x-3 max-[1023px]:overflow-x-scroll no-scrollbar lg:grid lg:grid-cols-6 lg:gap-x-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <Link key={index} href="#">
                <div className="relative group w-[32vw] sm:w-[30vw] md:w-[25vw] lg:w-full lg:h-full rounded-lg overflow-hidden cursor-pointer">
                  <Image
                    src={plan3}
                    alt="Plan"
                    placeholder="blur"
                    className="object-cover group-hover:scale-110 transition ease-in-out duration-500"
                  />
                  <div className="absolute flex items-center justify-between px-6 w-full h-6 bottom-6">
                    <span className="text-white text-xs min-[425px]:text-sm xl:text-base max-w-44 font-bold">
                      2 Bedroom House Plan
                    </span>
                    <div className="hidden group-hover:block bg-white rounded-full p-1 transition-all ease-in-out duration-300">
                      <ChevronRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};