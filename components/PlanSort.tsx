"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "@/lib/utils";

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
  const [sort, setSort] = useState("none");
  // console.log(sort);

  return (
    <div className="sticky top-[95px] hidden lg:flex aspect-w-1 aspect-h-1 items-center justify-end z-30 w-full py-6 lg:py-8 bg-[#f3f3f3]">
      <span className="font-bold">Sort by:</span>
      <Select value={sort} onValueChange={(value) => setSort(value)}>
        <SelectTrigger className="w-1/5 bg-transparent">
          <SelectValue placeholder="None" className="text-lg" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {SORT_OPTIONS.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className={cn("text-gray-700", sort === option.value && "text-black font-semibold")}
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
