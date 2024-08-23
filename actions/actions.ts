"use server"

import { getPlans } from "@/lib/api";
import { Filters, Plan } from "@/types";

export const filterPlansWithCategoryId = async ({
    categoryId,
    filters,
    sort,
  }: {
    categoryId?: number;
    filters?: Filters;
    sort?: string;
  }) => {
    const plans = await getPlans();
  
    let filteredCategoryPlans: Plan[];
  
    if (categoryId) {
      filteredCategoryPlans = plans.filter(
        (plan: Plan) => plan.category_id === Number(categoryId)
      );
    } else {
      filteredCategoryPlans = plans;
    }
  
    let sortedPlans;
  
    const convert = (value: string) => value?.split(",").map(Number);
  
    const matchesFilter = (planValue: number, filterValues: number[]) =>
      filterValues.some((value) =>
        value === 4 ? planValue >= 4 : planValue === value
      );
  
    const filterPlans = ({ bdrm, btrm, flrs, prce }: Filters) => {
      const [priceMin, priceMax] = prce ? convert(prce) : [0, 10000000];
      const bdrmArr = bdrm ? convert(bdrm) : null;
      const btrmArr = btrm ? convert(btrm) : null;
      const flrsArr = flrs ? convert(flrs) : null;
  
      return filteredCategoryPlans.filter((plan: Plan) => {
        const bdrmMatch = bdrmArr
          ? matchesFilter(plan.no_of_bedrooms, bdrmArr)
          : true;
        const btrmMatch = btrmArr
          ? matchesFilter(plan.no_of_bathrooms, btrmArr)
          : true;
        const flrsMatch = flrsArr ? matchesFilter(plan.floors, flrsArr) : true;
        const priceMatch = prce
          ? plan.price >= priceMin && plan.price <= priceMax
          : true;
  
        return bdrmMatch && btrmMatch && flrsMatch && priceMatch;
      });
    };
  
    if (filters?.bdrm || filters?.btrm || filters?.flrs || filters?.prce) {
      sortedPlans = filterPlans(filters);
    } else {
      sortedPlans = filteredCategoryPlans;
    }
  
    const compare = (a: Plan, b: Plan, key: keyof Plan, asc: boolean) => {
      if (a[key] < b[key]) {
        return asc ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return asc ? 1 : -1;
      }
      return 0;
    };
  
    if (sort) {
      const sortOptions = {
        "name-asc": { key: "plan_name", asc: true },
        "name-desc": { key: "plan_name", asc: false },
        "price-asc": { key: "price", asc: true },
        "price-desc": { key: "price", asc: false },
      } as const;
  
      const option = sortOptions[sort as keyof typeof sortOptions];
  
      if (option) {
        sortedPlans = sortedPlans.toSorted((a: Plan, b: Plan) =>
          compare(a, b, option.key, option.asc)
        );
      }
    }

    return sortedPlans;
  };