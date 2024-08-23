import { getPlans } from "@/lib/api";
import type { Filters, Plan } from "@/types";

export const imageFromPlanToCategory = async (categoryId: number) => {
  const plans = await getPlans();

  const plan: Plan = plans.find(
    (plan: Plan) => plan.category_id === Number(categoryId)
  );
  return plan.images[1]?.image_path;
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
    const keys = ["plan_name", "description"] as const;
    const searchedPlans: Plan[] = plans.filter((plan: Plan) =>
      keys.some(
        (key) =>
          plan[key as keyof Plan] &&
          plan[key as keyof Plan]
            .toString()
            .toLowerCase()
            .includes(search.toLowerCase())
      )
    );

    return searchedPlans;
  }
};
