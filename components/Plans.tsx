import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Plans = () => {
  return (
    <section className="bg-slate-200/50">
      <div className="w-full py-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Link key={index} href="#">
                <div className="relative group rounded-xl w-60 h-52 overflow-hidden cursor-pointer">
                  <Image
                    src="/plan3.jpg"
                    alt="Plan"
                    quality={30}
                    fill
                    className="object-cover group-hover:scale-110 transition ease-in-out duration-500"
                  />
                  <div className="absolute flex items-center justify-between px-6 w-full h-6 bottom-6">
                    <span className="text-white text-base max-w-44 font-bold">
                      2 Bedroom House Plan
                    </span>
                    <div className="hidden group-hover:block bg-white rounded-full p-1 transition-all ease-in-out duration-300">
                      <ChevronRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
