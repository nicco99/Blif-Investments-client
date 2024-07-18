import Link from "next/link";
import Image from "next/image";
import {
  Bath,
  Bed,
  HousePlus,
  MapPinned,
  MoveHorizontal,
  MoveVertical,
} from "lucide-react";

import plan1 from "@/public/plan1.jpg";
import plan3 from "@/public/plan3.jpg";
import { cn } from "@/lib/utils";

type Props = {
  aspect?: boolean;
};

export const PlanCard = ({ aspect }: Props) => {
  return (
    <div className="flex flex-col group sm:w-full">
      <div className="relative">
        <Link href="/plan/1" prefetch={false}>
          <div className={cn(
            "relative group rounded-t-lg h-64 overflow-hidden cursor-pointer",
            aspect && "aspect-[4/3]"
          )}>
            <Image
              src={plan1}
              alt="Plan"
              fill
              placeholder="blur"
              quality={30}
              className="absolute object-cover z-[2] hover:opacity-0 transition ease-in-out duration-300"
            />
            <Image
              src={plan3}
              alt="Plan"
              fill
              quality={30}
              className="absolute object-cover z-[1]"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col bg-white rounded-b-lg w-full p-5 pt-4">
        <Link href="/plan/1" className="font-bold text-sm">
          Modern 5 Bedroom Double Storey House - ID 25506
        </Link>
        <p className="text-gray-600 text-sm mt-2 mb-3">From $76.90</p>
        <div className="grid grid-cols-3 gap-y-4 justify-items-center">
          <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
            <HousePlus className="h-5 w-5" />
            <span className="text-xs font-medium mt-2">2 Floors</span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
            <Bed className="h-5 w-5" />
            <span className="text-xs font-medium mt-2">5 Bedrooms</span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center">
            <Bath className="h-5 w-5" />
            <span className="text-xs font-medium mt-2">5 Bathrooms</span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
            <MoveVertical className="h-5 w-5" />
            <span className="text-xs font-medium mt-2">17.5 m</span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
            <MoveHorizontal className="h-5 w-5" />
            <span className="text-xs font-medium mt-2">14.1 m</span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center">
            <MapPinned className="h-5 w-5" />
            <span className="text-xs font-medium mt-2">427 Area</span>
          </div>
        </div>
      </div>
    </div>
  );
};
