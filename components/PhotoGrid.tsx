import Image from "next/image";

export const PhotoGrid = () => {
  return (
    <section className="bg-slate-100">
      <div className="py-24 w-max mx-auto">
        <div className="grid grid-cols-4 gap-2">
          <div className="relative w-[796px] h-[600px] bg-red-500 rounded-xl overflow-hidden col-span-2 row-span-2">
            <Image
              src="/plan1.jpg"
              alt=""
              width={796}
              height={600}
              className="object-cover h-full hover:scale-105 transition-all ease-in-out duration-500"
            />
            <span className="absolute bottom-10 left-10 font-bold text-white text-3xl select-none">Invest in Your Future</span>
          </div>
          <div className="w-[394px] h-[296px] bg-red-500 rounded-xl overflow-hidden">
            <Image
              src="/plan1.jpg"
              alt=""
              width={394}
              height={296}
              className="object-cover h-full hover:scale-105 transition-all ease-in-out duration-500"
            />
          </div>
          <div className="w-[394px] h-[296px] bg-red-500 rounded-xl overflow-hidden">
            <Image
              src="/plan1.jpg"
              alt=""
              width={394}
              height={296}
              className="object-cover h-full hover:scale-105 transition-all ease-in-out duration-500"
            />
          </div>
          <div className="w-[796px] h-[296px] bg-red-500 rounded-xl overflow-hidden col-span-2">
            <Image
              src="/plan1.jpg"
              alt=""
              width={796}
              height={296}
              className="object-cover h-full hover:scale-105 transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
