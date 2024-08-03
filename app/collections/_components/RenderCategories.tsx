"use client";

import { useQuery } from "@tanstack/react-query";

import { CategoryCard } from "@/components/cards/CategoryCard";
import { getCategories } from "@/lib/api";
import { Category } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

export const RenderCategories = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return (
      <>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i}>
            <Skeleton className="aspect-video bg-slate-300 rounded-xl" />
          </div>
        ))}
      </>
    );
  }
  if (isError) {
    return (
      <div>Error: {error.message}</div>
    )
  }
  return (
    <>
      {data?.map((category: Category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </>
  );
};
