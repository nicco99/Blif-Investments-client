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
    <div className="flex flex-col transition-all duration-500 ease-in-out border rounded-lg group lg:hover:drop-shadow-xl border-slate-300 lg:hover:-translate-y-2">
      <div className="relative">
        <Link href={`/plans/${plan.id}`} prefetch={false}>
          <div
            className={cn(
              "relative group rounded-t-lg h-64 overflow-hidden cursor-pointer",
              aspect && "aspect-[4/3]"
            )}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/${plan?.images[0]?.image_path}`}
              alt="Plan"
              fill
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8/RMAArUB1huQdQEAAAAASUVORK5CYII="
              sizes="(min-width: 1800px) 376px, (min-width: 1280px) 20.8vw, (min-width: 1040px) calc(33.18vw - 56px), (min-width: 780px) calc(41.67vw - 45px), calc(50vw - 38px)"
              quality={30}
              className="absolute object-cover z-[2] hover:opacity-0 transition ease-in-out duration-700"
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/${plan?.images[2]?.image_path}`}
              alt="Plan"
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8/RMAArUB1huQdQEAAAAASUVORK5CYII="
              sizes="(min-width: 1800px) 376px, (min-width: 1280px) 20.8vw, (min-width: 1040px) calc(33.18vw - 56px), (min-width: 780px) calc(41.67vw - 45px), calc(50vw - 38px)"
              quality={30}
              className="absolute object-cover z-[1]"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col w-full p-5 pt-4 bg-white rounded-b-lg">
        <Link
          href={`/plans/${plan.id}`}
          prefetch={false}
          className="text-base font-bold line-clamp-1"
        >
          {plan.plan_name}
        </Link>
        <p className="mt-2 mb-3 text-base text-gray-600">From {planPrice}</p>
        <div className="grid grid-cols-3 gap-y-4 justify-items-end">
          <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
            <HousePlus className="w-5 h-5" />
            <span className="mt-2 text-xs font-medium">
              {plan.floors} Floors
            </span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
            <Bed className="w-5 h-5" />
            <span className="mt-2 text-xs font-medium">
              {plan.no_of_bedrooms} Bedrooms
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-full col-span-1">
            <Bath className="w-5 h-5" />
            <span className="mt-2 text-xs font-medium">
              {plan.no_of_bathrooms} Bathrooms
            </span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
            <MoveVertical className="w-5 h-5" />
            <span className="mt-2 text-xs font-medium">
              {plan.plan_height} m
            </span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
            <MoveHorizontal className="w-5 h-5" />
            <span className="mt-2 text-xs font-medium">
              {plan.plan_length} m
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-full col-span-1">
            <MapPinned className="w-5 h-5" />
            <span className="mt-2 text-xs font-medium">
              {plan.plan_size} m<sup className="text-xs">2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
