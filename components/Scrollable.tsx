import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const Scrollable = () => {
  return (
    <section className="bg-slate-200/50 pb-24">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col w-full gap-y-12">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold">
                Plans for every family size
              </h2>
              <p className="mt-8 text-sm">
                We believe that every family deserves a home that perfectly fits
                their unique needs and lifestyle
              </p>
            </div>
            <div className="flex items-end">
              <Link
                href="#"
                className="flex group hover:underline hover:underline-offset-4 transition-all ease-in-out duration-300"
              >
                View all
                <div className="bg-gray-300/70 ml-3 group-hover:bg-black rounded-full p-1 transition-all ease-in-out duration-300">
                  <ChevronRight className="text-black group-hover:text-white h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 7 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <Link href="#">
                    <div className="relative group rounded-lg w-[500px] h-[400px] overflow-hidden cursor-pointer before:absolute before:z-0 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
                      <Image
                        src="/plan2.jpg"
                        alt="Plan"
                        quality={30}
                        fill
                        className="object-cover group-hover:scale-110 transition ease-in-out duration-700 -z-10"
                      />
                      <div className="absolute group-hover:translate-y-2 flex items-center justify-center w-full bottom-12 transition-all ease-in-out duration-700 z-20">
                        <span className="text-white text-3xl font-bold">
                          2 Bedroom House Plan
                        </span>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 h-14 w-14 border-none bg-white text-black hover:scale-110 hover:bg-white hover:text-black xs:left-[5%] md:left-[10%] transition-all ease-in-out duration-300" />
            <CarouselNext className="right-1 h-14 w-14 border-none bg-white text-black hover:scale-110 hover:bg-white hover:text-black xs:right-[5%] md:right-[10%] transition-all ease-in-out duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
