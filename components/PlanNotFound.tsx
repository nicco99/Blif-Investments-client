"use client";

import { Ban } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const PlanNotFound = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const sizeSearchParams = new URLSearchParams(searchParams);

  const handleClearFilters = () => {
    sizeSearchParams.delete("bdrm");
    sizeSearchParams.delete("btrm");
    sizeSearchParams.delete("flrs");
    sizeSearchParams.delete("prce");
    router.replace(`${pathname}?${sizeSearchParams}`, { scroll: false });
  };
  return (
    <div className="col-span-3 items-center flex flex-col gap-y-3">
      <Ban className="h-12 w-12 text-gray-600" />
      <span className="font-bold text-3xl text-gray-600">No Plans</span>
      {sizeSearchParams.size > 0 && (
        <Button
          variant="destructive"
          className="rounded-full text-xl py-8 px-10"
          onClick={handleClearFilters}
        >
          Clear Filters
        </Button>
      )}
    </div>
  );
};
