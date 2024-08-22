"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BEDROOM_DEFAULTS, NONAME, ProductState } from "@/lib/validators";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { formattedPrice } from "@/hooks/filters";

const PRICE_FILTER = [
  { value: [0, 10000000], label: "Any price" },
  { value: [0, 2500000], label: "Under KES 2,500,000" },
  { value: [0, 5000000], label: "Under KES 5,000,000" },
] as const;
const DEFAULT_CUSTOM_PRICE = [0, 10000000] as [number, number];
const DEFAULT_FILTER = {
  bdrm: [],
  btrm: [],
  flrs: [],
  prce: { isCustom: false, range: DEFAULT_CUSTOM_PRICE },
};

export const PlanFilters = () => {
  const [filter, setFilter] = useState<ProductState>(DEFAULT_FILTER);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const applyArrayFilter = ({
    category,
    value,
  }: {
    category: keyof Omit<typeof filter, "prce">;
    value: string;
  }) => {
    const isFilterApplied = filter[category].includes(value as never);

    if (isFilterApplied) {
      setFilter((prev) => ({
        ...prev,
        [category]: prev[category].filter((v) => v !== value),
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        [category]: [...prev[category], value],
      }));
    }
  };

  const minPrice = Math.min(filter.prce.range[0], filter.prce.range[1]);
  const maxPrice = Math.max(filter.prce.range[0], filter.prce.range[1]);
  const disabled =
    !searchParams.get("bdrm") &&
    !searchParams.get("btrm") &&
    !searchParams.get("flrs") &&
    !searchParams.get("prce");

  const disableApplyFilters =
    filter.bdrm.length === 0 &&
    filter.btrm.length === 0 &&
    filter.flrs.length === 0 &&
    !filter.prce.isCustom;

  const sizeSearchParams = new URLSearchParams(searchParams);
  const handleApplyFilter = () => {
    filter.bdrm.length > 0
      ? sizeSearchParams.set("bdrm", filter.bdrm.join(","))
      : sizeSearchParams.delete("bdrm");
    filter.btrm.length > 0
      ? sizeSearchParams.set("btrm", filter.btrm.join(","))
      : sizeSearchParams.delete("btrm");
    filter.flrs.length > 0
      ? sizeSearchParams.set("flrs", filter.flrs.join(","))
      : sizeSearchParams.delete("flrs");
    sizeSearchParams.set("prce", filter.prce.range.join(","));
    router.replace(`${pathname}?${sizeSearchParams}`, { scroll: false });
  };

  const handleClearFilters = () => {
    sizeSearchParams.delete("bdrm");
    sizeSearchParams.delete("btrm");
    sizeSearchParams.delete("flrs");
    sizeSearchParams.delete("prce");
    setFilter(DEFAULT_FILTER);
    router.replace(`${pathname}?${sizeSearchParams}`, { scroll: false });
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      {NONAME.map(({ label, category }) => (
        <AccordionItem
          key={category}
          value={category}
          className="border-b border-gray-400"
        >
          <AccordionTrigger className="font-bold w-full text-start">
            Number of {label}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col">
              {BEDROOM_DEFAULTS.map((value) => (
                <li key={value} className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    checked={filter[category].includes(value)}
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
        <AccordionTrigger className="font-bold w-full text-start">
          Price
        </AccordionTrigger>
        <AccordionContent>
          <ul>
            {PRICE_FILTER.map((option, i) => (
              <li key={option.label} className="flex items-center gap-x-3">
                <input
                  type="radio"
                  checked={
                    !filter.prce.isCustom &&
                    filter.prce.range[0] === option.value[0] &&
                    filter.prce.range[1] === option.value[1]
                  }
                  id={`prce-${i}`}
                  onChange={() => {
                    setFilter((prev) => ({
                      ...prev,
                      prce: {
                        isCustom: false,
                        range: [...option.value],
                      },
                    }));
                  }}
                />
                <label htmlFor={`prce-${i}`} className="text-base">
                  {option.label}
                </label>
              </li>
            ))}
            <li className="flex justify-center flex-col gap-2">
              <div className="flex items-center gap-x-3">
                <input
                  type="radio"
                  checked={filter.prce.isCustom}
                  id={`prce-${PRICE_FILTER.length}`}
                  onChange={() => {
                    setFilter((prev) => ({
                      ...prev,
                      prce: {
                        isCustom: true,
                        range: [0, 10000000],
                      },
                    }));
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
                  {filter.prce.isCustom
                    ? formattedPrice(Number(minPrice.toFixed(0)))
                    : formattedPrice(
                        Number(filter.prce.range[0].toFixed(0))
                      )}{" "}
                  -{" "}
                  {filter.prce.isCustom
                    ? formattedPrice(Number(maxPrice.toFixed(0)))
                    : formattedPrice(Number(filter.prce.range[1].toFixed()))}
                </div>
              </div>
              <Slider
                className={cn({ "opacity-50": !filter.prce.isCustom })}
                disabled={!filter.prce.isCustom}
                onValueChange={(range) => {
                  const [newMin, newMax] = range;

                  setFilter((prev) => ({
                    ...prev,
                    prce: {
                      isCustom: true,
                      range: [newMin, newMax],
                    },
                  }));
                }}
                value={
                  filter.prce.isCustom
                    ? filter.prce.range
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
          variant="secondary"
          disabled={disabled}
          onClick={handleClearFilters}
          className="w-full disabled:opacity-30"
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
