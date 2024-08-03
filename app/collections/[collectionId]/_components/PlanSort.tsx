"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SORT_OPTIONS = [
  {
    name: "None",
    value: "none",
  },
  {
    name: "Name: A - Z",
    value: "name-asc",
  },
  {
    name: "Name: Z - A",
    value: "name-desc",
  },
  {
    name: "Price: Low to High",
    value: "price-asc",
  },
  {
    name: "Price: High to Low",
    value: "price-desc",
  },
] as const;

export const PlanSort = () => {
  const searchParams = useSearchParams();

  let defaultSort;
  if (
    searchParams.get("sort") === "none" ||
    "name-asc" ||
    "name-desc" ||
    "price-asc" ||
    "price-desc"
  ) {
    defaultSort = searchParams.get("sort");
  }
  const [sort, setSort] = useState<string>(defaultSort || "");

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const sizeSearchParams = new URLSearchParams(searchParams);
    sort ? sizeSearchParams.set("sort", sort) : sizeSearchParams.delete("sort");
    router.replace(`${pathname}?${sizeSearchParams}`, { scroll: false });
  }, [sort, pathname, router, searchParams]);

  return (
    <div className="flex items-center justify-end max-w-52 w-full">
      <span className="font-bold">Sort by:</span>
      <Select
        value={sort ? sort : "none"}
        onValueChange={(value) => setSort(value)}
      >
        <SelectTrigger className="bg-transparent w-2/3">
          <SelectValue placeholder="None" className="text-lg" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {SORT_OPTIONS.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className={cn(
                  "text-gray-700",
                  sort === option.value && "text-black font-semibold"
                )}
              >
                {option.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
