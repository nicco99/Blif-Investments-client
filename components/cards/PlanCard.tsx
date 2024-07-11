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

import { Button } from "../ui/button";
import plan1 from "@/public/plan1.jpg";
import plan3 from "@/public/plan3.jpg";

export const PlanCard = () => {
  return (
    <div className="flex flex-col group sm:w-full">
      <div className="relative">
        <Link href="#">
          <div className="relative group rounded-t-lg h-64 overflow-hidden cursor-pointer">
            <Image
              src={plan1}
              alt="Plan"
              fill
              quality={30}
              className="absolute object-cover hover:opacity-0 transition ease-in-out duration-300"
            />
            <Image
              src={plan3}
              alt="Plan"
              fill
              quality={30}
              className="absolute object-cover -z-10"
            />
          </div>
        </Link>
        <Button className="hidden group-hover:block bg-black hover:bg-black/80 text-xs absolute bottom-4 right-4 rounded-3xl">
          + Quick add
        </Button>
      </div>
      <div className="flex flex-col bg-white rounded-b-lg w-full p-5 pt-4">
        <Link href="#" className="font-bold text-sm">
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
