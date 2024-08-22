import Image from "next/image";

import grid5 from "@/public/grid5.jpg";
import grid8 from "@/public/grid8.jpg";
import grid6 from "@/public/grid6.jpg";
import grid7 from "@/public/grid7.jpg";

export const PhotoGrid = () => {
  return (
    <section className=" hidden sm:block pb-8 md:pb-10 lg:pb-12 xl:pb-16">
      <div className="px-3 sm:px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[160px] min-[1000px]:auto-rows-[223px] gap-4 max-w-[1600px] w-full mx-auto">
          <div className="relative rounded-xl overflow-hidden col-span-2 row-span-2">
            <Image
              src={grid6}
              alt=""
              placeholder="blur"
              sizes="50vw"
              className="object-cover h-full hover:scale-105 transition-all ease-in-out duration-700"
            />
            <span className="absolute bottom-10 left-10 font-bold text-white text-3xl md:text-4xl select-none">
              Invest in Your Future
            </span>
          </div>
          <div className="rounded-xl overflow-hidden col-span-1 row-span-1">
            <Image
              src={grid5}
              alt=""
              placeholder="blur"
              sizes="30vw"
              className="object-cover h-full hover:scale-105 transition-all ease-in-out duration-700"
            />
          </div>
          <div className="rounded-xl overflow-hidden col-span-1 row-span-1">
            <Image
              src={grid7}
              alt=""
              placeholder="blur"
              sizes="30vw"
              className="object-cover h-full hover:scale-105 transition-all ease-in-out duration-700"
            />
          </div>
          <div className="rounded-xl overflow-hidden col-span-2">
            <Image
              src={grid8}
              alt=""
              placeholder="blur"
              sizes="50vw"
              className="object-cover h-full hover:scale-105 transition-all ease-in-out duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
