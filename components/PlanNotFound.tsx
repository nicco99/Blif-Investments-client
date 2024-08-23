"use client";

import { Ban } from "lucide-react";
import { Button } from "./ui/button";
import { useFilterStore } from "@/store/use-filter-store";

export const PlanNotFound = () => {
  const { filters, reset } = useFilterStore();

  const handleClearFilters = () => {
    reset()
  };
  return (
    <div className="flex flex-col items-center col-span-3 gap-y-3">
      <Ban className="w-12 h-12 text-gray-600" />
      <span className="text-3xl font-bold text-gray-600">No Plans</span>
      {!!filters.bdrm[0] || !!filters.btrm[0] || !!filters.flrs[0] && (
        <Button
          variant="destructive"
          className="px-10 py-8 text-xl rounded-full"
          onClick={handleClearFilters}
        >
          Clear Filters
        </Button>
      )}
    </div>
  );
};
