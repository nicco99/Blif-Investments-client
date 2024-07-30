"use client";

import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "@/lib/utils";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

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
    searchParams.get("sort") === "name-asc" ||
    searchParams.get("sort") === "name-desc" ||
    searchParams.get("sort") === "price-asc" ||
    searchParams.get("sort") === "price-desc"
  ) {
    defaultSort = searchParams.get("sort");
  } else {
    defaultSort = "none";
  }
  const [sort, setSort] = useState(defaultSort);

  const pathname = usePathname();
  const router = useRouter();

  const bdrm = searchParams.get("bdrm")
  const btrm = searchParams.get("btrm")
  const flrs = searchParams.get("flrs")
  const prce = searchParams.get("prce")

  useEffect(() => {
    router.push(`${pathname}?sort=${sort}&bdrm=${bdrm}&btrm=${btrm}&flrs=${flrs}&prce=${prce}`);
  }, [sort]);

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
