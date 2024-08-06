import { getPlans } from "@/lib/api";
import type { Plan } from "@/types";
import { number } from "zod";

type Filters = {
  bdrm: string;
  btrm: string;
  flrs: string;
  prce: string;
};

export const filterPlansWithCategoryId = async (
  categoryId: number,
  filters: Filters,
  sort?: string
) => {
  const plans = await getPlans();

  const filteredCategoryPlans = plans.filter(
    (plan: Plan) => plan.category_id === Number(categoryId)
  );
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

  if (filters.bdrm || filters.btrm || filters.flrs || filters.prce) {
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
    if (sort === "name-asc") {
      sortedPlans = sortedPlans.toSorted((a: Plan, b: Plan) =>
        compare(a, b, "plan_name", true)
      );
    } else if (sort === "name-desc") {
      sortedPlans = sortedPlans.toSorted((a: Plan, b: Plan) =>
        compare(a, b, "plan_name", false)
      );
    } else if (sort === "price-asc") {
      sortedPlans = sortedPlans.toSorted((a: Plan, b: Plan) =>
        compare(a, b, "price", true)
      );
    } else if (sort === "price-desc") {
      sortedPlans = sortedPlans.toSorted((a: Plan, b: Plan) =>
        compare(a, b, "price", false)
      );
    }
  }
  return sortedPlans;
};

export const imageFromPlanToCategory = async (categoryId: number) => {
  const plans = await getPlans();

  const plan: Plan = plans.find(
    (plan: Plan) => plan.category_id === Number(categoryId)
  );
  return plan?.images[1]?.image_path;
};

export const filterPlanFromCategory = async (
  planId: number,
  categoryId: number
) => {
  const plans = await getPlans();

  const filteredPlans = plans.filter(
    (plan: Plan) => plan.category_id === Number(categoryId)
  );

  const newFilteredPlans = filteredPlans?.filter(
    (plan: Plan) => plan.id !== Number(planId)
  );

  return newFilteredPlans;
};

export const sliceArray = (array: [], items: number) => {
  return array.slice(0, items);
};

export const formattedPrice = (number: number) => {
  return number
    .toLocaleString("en", { style: "currency", currency: "KES" })
    .replace(/(\.\d{2})$/, "");
};

export const formattedPrice2 = (amount: string) => {
  const numberStr = amount.replace(/KES\s|,/g, "");
  const number = parseFloat(numberStr);
  let newNumber;
  switch (true) {
    case number >= 1000000:
      newNumber = (number / 1000000).toFixed(2) + "M";
      break;
    case number >= 100000:
      newNumber = (number / 1000).toFixed() + "K";
      break;
    default:
      return amount;
  }
  return "KES " + newNumber;
};

export const searchPlanWithName = async (search: string | undefined) => {
  if (search) {
    const plans = await getPlans();
    // const searchedPlans: Plan[] | undefined = plans.filter((plan: Plan) =>
    //   plan.plan_name.toLowerCase().includes(search.toLowerCase())
    // );
    const keys = ["plan_name", "description"];
    const searchedPlans: Plan[] = plans.filter((plan: Plan) =>
      keys.some(
        // @ts-ignore
        (key) => plan[key] && plan[key].toString().toLowerCase().includes(search.toLowerCase())
      )
    );

    return searchedPlans;
  }
};
