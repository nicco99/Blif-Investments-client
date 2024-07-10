import Image from "next/image";

import plan1 from "@/public/plan1.jpg"

export const PhotoGrid = () => {
  return (
    <section className="bg-slate-200 pb-8 md:pb-10 lg:pb-12 xl:pb-16">
      <div className="px-3 sm:px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[160px] min-[1000px]:auto-rows-[223px] gap-2 max-w-[1600px] w-full mx-auto">
          <div className="relative rounded-xl overflow-hidden col-span-2 row-span-2">
            <Image
              src={plan1}
              alt=""
              className="object-cover h-full hover:scale-105 transition-all ease-in-out duration-500"
            />
            <span className="absolute bottom-10 left-10 font-bold text-white text-2xl md:text-3xl select-none">Invest in Your Future</span>
          </div>
          <div className="rounded-xl overflow-hidden col-span-1 row-span-1">
            <Image
              src={plan1}
              alt=""
              className="object-cover h-full hover:scale-105 transition-all ease-in-out duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden col-span-1 row-span-1">
            <Image
              src={plan1}
              alt=""
              className="object-cover h-full hover:scale-105 transition-all ease-in-out duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden col-span-2">
            <Image
              src={plan1}
              alt=""
              className="object-cover h-full hover:scale-105 transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
