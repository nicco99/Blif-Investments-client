"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useSortStore } from "@/store/use-sort-store";
import { cn } from "@/lib/utils";

const SORT_OPTIONS = [
  { value: "none", label: "None" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A-Z" },
  { value: "name-desc", label: "Name: Z-A" },
] as const;

export const PlanSort = () => {
  const { sortBy, setSortBy } = useSortStore();

  const handleApplySort = (value: string) => {
    setSortBy(value);
  };

  return (
    <div className="flex items-center justify-end w-full max-w-52">
      <span className="font-bold">Sort by:</span>
      <Select
        value={sortBy ? sortBy : "none"}
        onValueChange={(value) => handleApplySort(value)}
      >
        <SelectTrigger className="w-2/3 bg-transparent">
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
                  sortBy === option.value && "text-black font-semibold"
                )}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
