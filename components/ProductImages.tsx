"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ZoomIn } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import type { Image as ImageProp } from "@/types";

type Props = {
  images: ImageProp[];
  urlPath: string;
};

export const ProductImages = ({ images, urlPath }: Props) => {
  const searchParams = useSearchParams();
  const [index, setIndex] = useState(Number(searchParams.get("i")));
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIndex(Number(searchParams.get("i")));
  }, [searchParams]);

  const imageOnclick = (idx: number) => {
    setIndex(idx);
    router.replace(`${pathname}?i=${idx}`, { scroll: false });
  };

  const imageUrl = `${urlPath}/${images[Number(index)].image_path}`;

  return (
    <div>
      <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] relative">
        <Image
          src={imageUrl}
          alt=""
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8/RMAArUB1huQdQEAAAAASUVORK5CYII="
          sizes="(max-width: 1023px) 100vw, 40vw"
          className="object-cover lg:rounded-xl"
        />
        <Dialog>
          <DialogTrigger>
            <div className="hidden lg:block hover:scale-110 transition-all ease-in-out duration-150 absolute right-5 bottom-5 bg-white p-3 rounded-full">
              <ZoomIn className="h-5 w-5" />
            </div>
          </DialogTrigger>
          <DialogContent className="bg-[#f3f3f3] h-full">
            <div className="flex items-center justify-center">
              <Image
                src={imageUrl}
                alt=""
                height={800}
                width={1200}
                quality={100}
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAYAAABLLYUHAAAAE0lEQVR42mM8efr0TwYoYCSOAwCQ5Q1lp1rsQAAAAABJRU5ErkJggg=="
                className="aspect-[3/2] object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex overflow-x-scroll no-scrollbar gap-4 p-3 lg:p-0 lg:mt-8">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image: ImageProp, idx: number) => (
              <CarouselItem
                className="basis-28 sm:basis-36 lg:basis-28 xl:basis-36"
                key={image.id}
              >
                <div
                  className="aspect-square w-full relative cursor-pointer"
                  onClick={() => imageOnclick(idx)}
                >
                  <Image
                    src={`${urlPath}/${image.image_path}`}
                    alt=""
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8/RMAArUB1huQdQEAAAAASUVORK5CYII="
                    sizes="20vw"
                    className="object-cover rounded-lg lg:rounded-xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:h-10 lg:h-12 xl:h-14 md:w-10 lg:w-12 xl:w-14 border-none bg-white text-black hover:scale-110 hover:bg-white hover:text-black left-6  sm:left-[5%] md:left-[5%] transition-all ease-in-out duration-700 ring-1 ring-gray-500" />
          <CarouselNext className="md:h-10 lg:h-12 xl:h-14 md:w-10 lg:w-12 xl:w-14 border-none bg-white text-black hover:scale-110 hover:bg-white hover:text-black right-6  sm:right-[5%] md:right-[5%] transition-all ease-in-out duration-700 ring-1 ring-gray-500" />
        </Carousel>
      </div>
    </div>
  );
};
