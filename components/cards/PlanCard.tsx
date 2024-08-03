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

import { cn } from "@/lib/utils";
import type { Plan } from "@/types";
import { formattedPrice } from "@/hooks/filters";

type Props = {
  aspect?: boolean;
  plan: Plan;
};

export const PlanCard = ({ aspect, plan }: Props) => {
  const planPrice = formattedPrice(plan.price);
  return (
    <div className="flex flex-col group lg:hover:drop-shadow-xl lg:hover:-translate-y-2 transition-all ease-in-out duration-500">
      <div className="relative">
        <Link href={`/plans/${plan.id}`} prefetch={false}>
          <div
            className={cn(
              "relative group rounded-t-lg h-64 overflow-hidden cursor-pointer",
              aspect && "aspect-[4/3]"
            )}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/${plan.images[0].image_path}`}
              alt="Plan"
              fill
              priority
              sizes="50vw"
              quality={30}
              className="absolute object-cover z-[2] hover:opacity-0 transition ease-in-out duration-700"
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/${plan.images[2].image_path}`}
              alt="Plan"
              fill
              sizes="50vw"
              quality={30}
              className="absolute object-cover z-[1]"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col rounded-b-lg w-full p-5 pt-4 bg-white">
        <Link
          href={`/plans/${plan.id}`}
          prefetch={false}
          className="font-bold text-base line-clamp-1"
        >
          {plan.plan_name}
        </Link>
        <p className="text-gray-600 text-base mt-2 mb-3">From {planPrice}</p>
        <div className="grid grid-cols-3 gap-y-4 justify-items-end">
          <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
            <HousePlus className="h-5 w-5" />
            <span className="text-xs font-medium mt-2">
              {plan.floors} Floors
            </span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
            <Bed className="h-5 w-5" />
            <span className="text-xs font-medium mt-2">
              {plan.no_of_bedrooms} Bedrooms
            </span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center">
            <Bath className="h-5 w-5" />
            <span className="text-xs font-medium mt-2">
              {plan.no_of_bathrooms} Bathrooms
            </span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
            <MoveVertical className="h-5 w-5" />
            <span className="text-xs font-medium mt-2">
              {plan.plan_height} m
            </span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
            <MoveHorizontal className="h-5 w-5" />
            <span className="text-xs font-medium mt-2">
              {plan.plan_length} m
            </span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center">
            <MapPinned className="h-5 w-5" />
            <span className="text-xs font-medium mt-2">
              {plan.plan_size} m<sup className="text-xs">2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
