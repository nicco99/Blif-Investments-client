"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BEDROOM_DEFAULTS,
  DEFAULT_CUSTOM_PRICE,
  DEFAULT_FILTER,
  NONAME,
} from "@/lib/validators";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { formattedPrice } from "@/hooks/filters";
import { useFilterStore } from "@/store/use-filter-store";

const PRICE_FILTER = [
  { value: [0, 10000000], label: "Any price" },
  { value: [0, 2500000], label: "Under KES 2,500,000" },
  { value: [0, 5000000], label: "Under KES 5,000,000" },
] as const;

export const PlanFilters = () => {
  const { filters, setFilters, reset } = useFilterStore();

  // Local state to hold filter values temporarily
  const [localFilters, setLocalFilters] = useState(filters);

  const applyArrayFilter = ({
    category,
    value,
  }: {
    category: keyof Omit<typeof filters, "prce">;
    value: string;
  }) => {
    const isFilterApplied = localFilters[category].includes(value as never);

    setLocalFilters({
      ...localFilters,
      [category]: isFilterApplied
        ? localFilters[category].filter((v) => v !== value)
        : [...localFilters[category], value],
    });
  };

  const minPrice = Math.min(
    localFilters.prce.range[0],
    localFilters.prce.range[1]
  );
  const maxPrice = Math.max(
    localFilters.prce.range[0],
    localFilters.prce.range[1]
  );
  const disabled =
    filters.bdrm.length === 0 &&
    filters.btrm.length === 0 &&
    filters.flrs.length === 0 &&
    !filters.prce.isCustom &&
    !(
      filters.prce.range[0] !== DEFAULT_CUSTOM_PRICE[0] ||
      filters.prce.range[1] !== DEFAULT_CUSTOM_PRICE[1]
    );

  const disableApplyFilters =
    localFilters.bdrm.length === 0 &&
    localFilters.btrm.length === 0 &&
    localFilters.flrs.length === 0 &&
    !localFilters.prce.isCustom &&
    !(
      localFilters.prce.range[0] !== DEFAULT_CUSTOM_PRICE[0] ||
      localFilters.prce.range[1] !== DEFAULT_CUSTOM_PRICE[1]
    );

  const handleApplyFilter = () => {
    setFilters(localFilters);
  };

  const handleClearFilters = () => {
    reset();
    setLocalFilters(DEFAULT_FILTER);
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      {NONAME.map(({ label, category }) => (
        <AccordionItem
          key={category}
          value={category}
          className="border-b border-gray-400"
        >
          <AccordionTrigger className="w-full font-bold text-start">
            Number of {label}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col">
              {BEDROOM_DEFAULTS.map((value) => (
                <li key={value} className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    checked={localFilters[category].includes(value)}
                    id={`${category}-${value}`}
                    onChange={() => {
                      applyArrayFilter({
                        category,
                        value,
                      });
                    }}
                  />
                  <label htmlFor={`${category}-${value}`} className="text-base">
                    {value === "1"
                      ? `1 ${label.slice(0, -1)}`
                      : value === "4"
                      ? `${value}+ ${label}`
                      : `${value} ${label}`}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
      <AccordionItem value="price" className="border-b border-gray-400">
        <AccordionTrigger className="w-full font-bold text-start">
          Construction Cost
        </AccordionTrigger>
        <AccordionContent>
          <ul>
            {PRICE_FILTER.map((option, i) => (
              <li key={option.label} className="flex items-center gap-x-3">
                <input
                  type="radio"
                  checked={
                    !localFilters.prce.isCustom &&
                    localFilters.prce.range[0] === option.value[0] &&
                    localFilters.prce.range[1] === option.value[1]
                  }
                  id={`prce-${i}`}
                  onChange={() => {
                    setLocalFilters({
                      ...localFilters,
                      prce: {
                        isCustom: false,
                        range: [...option.value],
                      },
                    });
                  }}
                />
                <label htmlFor={`prce-${i}`} className="text-base">
                  {option.label}
                </label>
              </li>
            ))}
            <li className="flex flex-col justify-center gap-2">
              <div className="flex items-center gap-x-3">
                <input
                  type="radio"
                  checked={localFilters.prce.isCustom}
                  id={`prce-${PRICE_FILTER.length}`}
                  onChange={() => {
                    setLocalFilters({
                      ...localFilters,
                      prce: {
                        isCustom: true,
                        range: [0, 10000000],
                      },
                    });
                  }}
                />
                <label
                  htmlFor={`prce-${PRICE_FILTER.length}`}
                  className="text-base"
                >
                  Custom
                </label>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Price</p>
                <div className="">
                  {localFilters.prce.isCustom
                    ? formattedPrice(Number(minPrice.toFixed(0)))
                    : formattedPrice(
                        Number(localFilters.prce.range[0].toFixed(0))
                      )}{" "}
                  -{" "}
                  {localFilters.prce.isCustom
                    ? formattedPrice(Number(maxPrice.toFixed(0)))
                    : formattedPrice(
                        Number(localFilters.prce.range[1].toFixed())
                      )}
                </div>
              </div>
              <Slider
                className={cn({ "opacity-50": !localFilters.prce.isCustom })}
                disabled={!localFilters.prce.isCustom}
                onValueChange={(range) => {
                  const [newMin, newMax] = range;

                  setLocalFilters({
                    ...localFilters,
                    prce: {
                      isCustom: true,
                      range: [newMin, newMax],
                    },
                  });
                }}
                value={
                  localFilters.prce.isCustom
                    ? localFilters.prce.range
                    : DEFAULT_CUSTOM_PRICE
                }
                min={DEFAULT_CUSTOM_PRICE[0]}
                max={DEFAULT_CUSTOM_PRICE[1]}
                defaultValue={DEFAULT_CUSTOM_PRICE}
                step={250000}
              />
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <div className="flex mt-10 gap-x-2">
        <Button
          variant="destructive"
          disabled={disabled}
          onClick={handleClearFilters}
          className="w-full"
        >
          Clear Filters
        </Button>
        <Button
          className="w-full"
          disabled={disableApplyFilters}
          onClick={handleApplyFilter}
        >
          Apply Filters
        </Button>
      </div>
    </Accordion>
  );
};
