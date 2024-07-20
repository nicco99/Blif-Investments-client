"use client";

import Image from "next/image";
import { useState } from "react";
import { ZoomIn } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

type Props = {
  images: [
    {
      id: number;
      image_path: string;
    }
  ];
};

const url = "http://13.37.100.57:5001"

export const ProductImages = ({ images }: Props) => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] relative">
        <Image
          src={`${url}/${images[index].image_path}`}
          alt=""
          fill
          sizes="50vw"
          className="object-cover lg:rounded-xl"
        />
        <Dialog>
          <DialogTrigger>
            <div className="hidden lg:block hover:scale-110 transition-all ease-in-out duration-150 absolute right-5 bottom-5 bg-white p-3 rounded-full">
              <ZoomIn className="h-5 w-5" />
            </div>
          </DialogTrigger>
          <DialogContent className="bg-white h-full">
            <Image
              src={`${url}/${images[index].image_path}`}
              alt=""
              fill
              quality={100}
              sizes="100vw"
              className="object-contain"
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-4 gap-4 p-3 md:p- lg:p-0 lg:mt-8">
        {images.map((image: any, index: number) => (
          <div
            key={image.id}
            className="aspect-square md:aspect-[4/3] relative cursor-pointer"
            onClick={() => setIndex(index)}
          >
            <Image
              src={`${url}/${image.image_path}`}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-lg lg:rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
