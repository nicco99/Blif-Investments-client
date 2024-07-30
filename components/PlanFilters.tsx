"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { PlanSort } from "./PlanSort";
import { BEDROOM_DEFAULTS, ProductState } from "@/lib/validators";
import { Slider } from "./ui/slider";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PRICE_FILTER = [
  { value: [0, 10000000], label: "Any price" },
  { value: [0, 2500000], label: "Under KSH 2,500,000" },
  { value: [0, 5000000], label: "Under KSH 5,000,000" },
] as const;
const DEFAULT_CUSTOM_PRICE = [0, 10000000] as [number, number];

export const PlanFilters = () => {
  const [filter, setFilter] = useState<ProductState>({
    bdrm: ["1", "2", "3", "4"],
    btrm: ["1", "2", "3", "4"],
    flrs: ["1", "2", "3", "4"],
    prce: { isCustom: false, range: DEFAULT_CUSTOM_PRICE },
  });

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

  const sort = searchParams.get("sort")

  const handleApplyFilter = () => {
    router.push(`${pathname}?sort=${sort}&bdrm=${filter.bdrm}&btrm=${filter.btrm}&flrs=${filter.flrs}&prce=${filter.prce.range}`);
  };
  
  return (
    <Accordion type="single" className="w-full">
      <div className="lg:hidden w-full flex justify-center items-center my-3">
        <PlanSort />
      </div>
      <AccordionItem value="bedroom" className="border-b border-gray-400">
        <AccordionTrigger className="font-bold w-full text-start">
          Number of Bedrooms
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col">
            {BEDROOM_DEFAULTS.map((value) => (
              <li key={value} className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  checked={filter.bdrm.includes(value)}
                  id={`bdrm-${value}`}
                  onChange={() => {
                    applyArrayFilter({
                      category: "bdrm",
                      value,
                    });
                  }}
                />
                <label htmlFor={`bdrm-${value}`} className="text-base">
                  {value === "1"
                    ? "1 Bedroom"
                    : value === "4"
                    ? `${value}+ Bedrooms`
                    : `${value} Bedrooms`}
                </label>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="bathroom" className="border-b border-gray-400">
        <AccordionTrigger className="font-bold w-full text-start">
          Number of Bathrooms
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col">
            {BEDROOM_DEFAULTS.map((value) => (
              <li key={value} className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  checked={filter.btrm.includes(value)}
                  id={`btrm-${value}`}
                  onChange={() => {
                    applyArrayFilter({
                      category: "btrm",
                      value,
                    });
                  }}
                />
                <label htmlFor={`btrm-${value}`} className="text-base">
                  {value === "1"
                    ? "1 Bathroom"
                    : value === "4"
                    ? `${value}+ Bathrooms`
                    : `${value} Bathrooms`}
                </label>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="floor" className="border-b border-gray-400">
        <AccordionTrigger className="font-bold w-full text-start">
          Number of Floors
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col">
            {BEDROOM_DEFAULTS.map((value) => (
              <li key={value} className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  checked={filter.flrs.includes(value)}
                  id={`flrs-${value}`}
                  onChange={() => {
                    applyArrayFilter({
                      category: "flrs",
                      value,
                    });
                  }}
                />
                <label htmlFor={`flrs-${value}`} className="text-base">
                  {value === "1"
                    ? "1 Floor"
                    : value === "4"
                    ? `${value}+ Floors`
                    : `${value} Floors`}
                </label>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
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
                        range: [0, 100],
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
                  $
                  {filter.prce.isCustom
                    ? minPrice.toFixed(0)
                    : filter.prce.range[0].toFixed(0)}{" "}
                  - $
                  {filter.prce.isCustom
                    ? maxPrice.toFixed(0)
                    : filter.prce.range[1].toFixed()}
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
                step={1000000}
              />
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <Button className="w-full mt-10" onClick={handleApplyFilter}>
        Apply Filter
      </Button>
    </Accordion>
  );
};
