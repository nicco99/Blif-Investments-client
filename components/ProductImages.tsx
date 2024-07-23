"use client";

import Image from "next/image";
import { useState } from "react";
import { ZoomIn } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ImageProp } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  images: ImageProp[];
  urlPath: string;
};

export const ProductImages = ({ images, urlPath }: Props) => {
  const [index, setIndex] = useState(0);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const imageParam = searchParams.get("i");

  const imageOnclick = (idx: number) => {
    setIndex(idx);
    router.push(`${pathname}?i=${idx}`);
  };

  const imageUrl = `${urlPath}/${images[Number(imageParam)].image_path}`

  return (
    <div>
      <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] relative">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover lg:rounded-xl"
        />
        <Dialog>
          <DialogTrigger>
            <div className="hidden lg:block hover:scale-110 transition-all ease-in-out duration-150 absolute right-5 bottom-5 bg-white p-3 rounded-full">
              <ZoomIn className="h-5 w-5" />
            </div>
          </DialogTrigger>
          <DialogContent className="bg-[#f3f3f3] h-full">
            <Image
              src={imageUrl}
              alt=""
              fill
              quality={100}
              sizes="100vw"
              className="object-contain"
            />
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
                    sizes="30vw"
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
