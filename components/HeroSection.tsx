import Image from "next/image";

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
      <CarouselContent>
        <CarouselItem>
          <div className="relative w-full flex items-center justify-center h-[680px] before:absolute before:z-0 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
            <Image
              src="/plan1.jpg"
              alt="Plan"
              fill
              className="object-cover -z-10"
            />
            <span className="absolute z-20 text-white text-6xl font-bold max-w-4xl text-center">
              Discover Your Dream Home with Our Expertly Designed House Plans.
            </span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative w-full flex items-center justify-center h-[680px] before:absolute before:z-0 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
            <Image
              src="/plan2.jpg"
              alt="Plan"
              fill
              className="object-cover -z-10"
            />
            <span className="absolute z-20 text-white text-6xl font-bold max-w-4xl text-center">
              Crafting Spaces You'll Love to Live In.
            </span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative w-full flex items-center justify-center h-[680px] before:absolute before:z-0 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
            <Image
              src="/plan3.jpg"
              alt="Plan"
              fill
              className="object-cover -z-10"
            />
            <span className="absolute z-20 text-white text-6xl font-bold max-w-4xl text-center">
              Customizable Blueprints to Bring Your Vision to Life.
            </span>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-1 h-14 w-14 border-none bg-white text-black hover:scale-110 hover:bg-white hover:text-black xs:left-[5%] md:left-[10%]" />
      <CarouselNext className="right-1 h-14 w-14 border-none bg-white text-black hover:scale-110 hover:bg-white hover:text-black xs:right-[5%] md:right-[10%]" />
    </Carousel>
  );
};
