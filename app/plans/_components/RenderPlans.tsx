"use client";

import { useQuery } from "@tanstack/react-query";

import { PlanCard } from "@/components/cards/PlanCard";
import { getPlans } from "@/lib/api";
import { Plan } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

export const RenderPlans = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["plans"],
    queryFn: getPlans,
  });

  if (isLoading) {
    return (
      <>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i}>
            <Skeleton className="aspect-[4/3] bg-slate-300 rounded-t-lg rounded-b-none" />
            <Skeleton className="h-4 w-full mt-3 bg-slate-300" />
            <Skeleton className="h-4 w-full mt-3 bg-slate-300" />
            <Skeleton className="h-4 w-full mt-3 bg-slate-300" />
          </div>
        ))}
      </>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data?.map((plan: Plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </>
  );
};
