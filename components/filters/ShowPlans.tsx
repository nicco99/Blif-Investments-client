"use client";

import { Settings2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { PlanFilters } from "@/components/filters/PlanFilters";
import { PlanNotFound } from "@/components/PlanNotFound";
import { PlanSort } from "@/components/filters/PlanSort";
import { PlanCard } from "@/components/cards/PlanCard";
import { Plan } from "@/types";
import { useFilterStore } from "@/store/use-filter-store";
import { filterPlansWithCategoryId } from "@/actions/actions";
import { Skeleton } from "../ui/skeleton";
import { useSortStore } from "@/store/use-sort-store";

const ShowPlans = ({
  showPlansCount,
  collectionId,
}: {
  showPlansCount?: boolean;
  collectionId?: number;
}) => {
  const [plans, setPlans] = useState<Plan[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { filters } = useFilterStore();
  const { sortBy } = useSortStore();

  const newFilters = useMemo(
    () => ({
      bdrm: filters.bdrm.join(","),
      btrm: filters.btrm.join(","),
      flrs: filters.flrs.join(","),
      prce: filters.prce.range.join(","),
    }),
    [filters]
  );

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setIsLoading(true);
        const response = await filterPlansWithCategoryId({
          categoryId: collectionId,
          filters: newFilters,
          sort: sortBy,
        });
        setPlans(response);
      } catch (error) {
        console.error("Error fetching plans:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, [newFilters, sortBy, collectionId]);

  return (
    <div className="flex flex-col w-full grid-cols-4 lg:grid lg:gap-x-12">
      {showPlansCount && (
        <p className="text-sm text-center lg:hidden md:text-base">
          {`${plans?.length} product${plans?.length === 1 ? "" : "s"}`}
        </p>
      )}
      <div className="z-30 flex-col hidden w-full col-span-1 py-3 lg:flex">
        <div className="sticky top-[120px]">
          <div className="flex space-x-3">
            <Settings2 className="w-5 h-5" />
            <span className="font-bold">Filters</span>
          </div>
          <div className="flex flex-col w-full gap-y-6 lg:gap-y-8">
            <PlanFilters />
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-3">
        <div className="flex items-center justify-end w-full">
          <PlanSort />
        </div>
        <div className="grid grid-cols-1 pt-3 lg:col-span-3 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8 lg:pb-12 lg:px-3 lg:-mx-3">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-y-4">
                <Skeleton className="aspect-[4/3] h-64 w-full bg-slate-300 rounded-none" />
                <Skeleton className="h-6 ml-5 max-w-40 w-ful bg-slate-300" />
                <Skeleton className="w-full h-6 ml-5 max-w-40 bg-slate-300" />
                <Skeleton className="w-full h-10 ml-5 max-w-80 bg-slate-300" />
                <Skeleton className="w-full h-10 ml-5 max-w-80 bg-slate-300" />
              </div>
            ))
          ) : plans?.length === 0 ? (
            <PlanNotFound />
          ) : (
            plans?.map((plan: Plan) => <PlanCard key={plan.id} plan={plan} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowPlans;
