import {
  Bath,
  Bed,
  ChevronRight,
  HousePlus,
  MapPinned,
  MoveHorizontal,
  MoveVertical,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

export const ScrollableCards = () => {
  return (
    <section className="bg-slate-100 pb-24">
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
            <CarouselContent className="pb-4">
              {Array.from({ length: 7 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/4 shadow-m">
                  <div className="flex flex-col group w-96">
                    <div className="relative">
                      <Link href="#">
                        <div className="relative group rounded-t-lg h-64 overflow-hidden cursor-pointer">
                          <Image
                            src="/plan1.jpg"
                            alt="Plan"
                            quality={30}
                            fill
                            className="absolute object-cover hover:opacity-0 transition ease-in-out duration-300"
                          />
                          <Image
                            src="/plan3.jpg"
                            alt="Plan"
                            quality={30}
                            fill
                            className="absolute object-cover -z-10"
                          />
                        </div>
                      </Link>
                      <Button className="hidden group-hover:block bg-black hover:bg-black/80 text-xs absolute bottom-4 right-4 rounded-3xl">
                        + Quick add
                      </Button>
                    </div>
                    <div className="flex flex-col bg-white rounded-b-lg w-full p-9 pt-6">
                      <Link href="#" className="font-bold text-sm">
                        Modern 5 Bedroom Double Storey House - ID 25506
                      </Link>
                      <p className="text-gray-600 text-sm mt-2 mb-3">
                        From $76.90
                      </p>
                      <div className="grid grid-cols-3 gap-y-4 justify-items-center">
                        <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                          <HousePlus className="h-5 w-5" />
                          <span className="text-xs font-medium mt-2">
                            2 Floors
                          </span>
                        </div>
                        <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                          <Bed className="h-5 w-5" />
                          <span className="text-xs font-medium mt-2">
                            5 Bedrooms
                          </span>
                        </div>
                        <div className="col-span-1 flex w-full flex-col items-center justify-center">
                          <Bath className="h-5 w-5" />
                          <span className="text-xs font-medium mt-2">
                            5 Bathrooms
                          </span>
                        </div>
                        <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                          <MoveVertical className="h-5 w-5" />
                          <span className="text-xs font-medium mt-2">
                            17.5 m
                          </span>
                        </div>
                        <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                          <MoveHorizontal className="h-5 w-5" />
                          <span className="text-xs font-medium mt-2">
                            14.1 m
                          </span>
                        </div>
                        <div className="col-span-1 flex w-full flex-col items-center justify-center">
                          <MapPinned className="h-5 w-5" />
                          <span className="text-xs font-medium mt-2">
                            427 Area
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 h-14 w-14 border-none bg-gray-200 text-black hover:bg-gray-200 ring-1 ring-gray-400 hover:scale-110 xs:left-[5%] md:left-[10%] transition-all ease-in-out duration-300" />
            <CarouselNext className="right-1 h-14 w-14 border-none bg-gray-200 text-black hover:bg-gray-200 ring-1 ring-gray-400 hover:scale-110 xs:right-[5%] md:right-[10%] transition-all ease-in-out duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
