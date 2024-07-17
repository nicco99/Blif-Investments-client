"use client";

import Image from "next/image";
import { useState } from "react";
import { ZoomIn } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-a-mountain-reflection-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/21812160/pexels-photo-21812160/free-photo-of-puerta-colonial-color-rojo-de-guanajato-mexico.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  // {
  //   id: 5,
  //   url: "/plan1.jpg",
  // },
  // {
  //   id: 6,
  //   url: "/plan2.jpg",
  // },
  // {
  //   id: 7,
  //   url: "/plan3.jpg",
  // },
  // {
  //   id: 8,
  //   url: "https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  // },
];

export const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover lg:rounded-xl"
        />
        <Dialog>
          <DialogTrigger>
            <div className="hidden lg:block absolute right-5 bottom-5 bg-white p-3 rounded-full">
              <ZoomIn className="h-5 w-5" />
            </div>
          </DialogTrigger>
          <DialogContent className="h-full bg-slate-200">
            <Image
              src={images[index].url}
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
              src={image.url}
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
