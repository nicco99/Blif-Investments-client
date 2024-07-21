import Image from "next/image";

import plan1 from "@/public/plan1.jpg"
import plan2 from "@/public/plan2.jpg"
import plan3 from "@/public/plan3.jpg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const HeroSection = () => {
  return (
    <Carousel className="w-full select-none">
      <CarouselContent className="transition-all ease-linear">
        <CarouselItem>
          <div className="relative w-full flex items-center justify-center h-[180px] sm:h-56 md:h-[280px] lg:h-[368px] xl:h-[680px] before:absolute before:z-0 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
            <Image
              src={plan1}
              alt="Plan"
              fill
              priority
              placeholder="blur"
              className="object-cover -z-10"
            />
            <span className="absolute z-20 animate-slide-up text-white sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-60 sm:max-w-80 md:max-w-xl lg:max-w-2xl xl:max-w-4xl text-center">
              Discover Your Dream Home with Our Expertly Designed House Plans.
            </span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative w-full flex items-center justify-center h-[180px] sm:h-56 md:h-[280px] lg:h-[368px] xl:h-[680px] before:absolute before:z-0 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
            <Image
              src={plan2}
              alt="Plan"
              fill
              placeholder="blur"
              className="object-cover -z-10"
            />
            <span className="absolute z-20 text-white sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-60 sm:max-w-80 md:max-w-xl lg:max-w-2xl xl:max-w-4xl text-center">
              Crafting Spaces You&apos;ll Love to Live In.
            </span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative w-full flex items-center justify-center h-[180px] sm:h-56 md:h-[280px] lg:h-[368px] xl:h-[680px] before:absolute before:z-0 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
            <Image
              src={plan3}
              alt="Plan"
              fill
              placeholder="blur"
              className="object-cover -z-10"
            />
            <span className="absolute z-20 text-white sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-60 sm:max-w-80 md:max-w-xl lg:max-w-2xl xl:max-w-4xl text-center">
              Customizable Blueprints to Bring Your Vision to Life.
            </span>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="md:h-10 lg:h-12 xl:h-14 md:w-10 lg:w-12 xl:w-14 border-none bg-white text-black hover:scale-110 transition-all ease-in-out duration-700 hover:bg-white hover:text-black left-6  sm:left-[5%] md:left-[10%]" />
      <CarouselNext className="md:h-10 lg:h-12 xl:h-14 md:w-10 lg:w-12 xl:w-14 border-none bg-white text-black hover:scale-110 transition-all ease-in-out duration-700 hover:bg-white hover:text-black right-6  sm:right-[5%] md:right-[10%]" />
    </Carousel>
  );
};
