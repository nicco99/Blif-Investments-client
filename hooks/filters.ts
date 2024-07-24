import { getPlans } from "@/lib/api";
import { Plan } from "@/types";

export const filterPlansWithCategoryId = async (categoryId: number) => {
  const plans = await getPlans();

  const filteredPlans = plans.filter(
    (plan: Plan) => plan.category_id === Number(categoryId)
  );

  return filteredPlans;
};

export const imageFromPlanToCategory = async (categoryId: number) => {
  const plans = await getPlans();

  const plan = plans.find(
    (plan: Plan) => plan.category_id === Number(categoryId)
  );

  return plan?.images[1]?.image_path;
};

export const filterPlanFromCategory = async (
  planId: number,
  categoryId: number
) => {
  const plans = await filterPlansWithCategoryId(categoryId);

  const filteredPlans = plans.filter(
    (plan: Plan) => plan.id !== Number(planId)
  );

  return filteredPlans;
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
  let numberStr = amount.replace(/KES\s|,/g, "");
  let number = parseFloat(numberStr);
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

export const handleSort = (plans: Plan[], value: string) => {
  switch (value) {
    case "name-asc":
      plans.toSorted((a, b) => {
        if (a.plan_name < b.plan_name) {
          return -1;
        }
        if (a.plan_name > b.plan_name) {
          return 1;
        }
        return 0;
      });
      break;
    case "name-desc":
      plans.toSorted((a, b) => {
        if (a.plan_name > b.plan_name) {
          return -1;
        }
        if (a.plan_name < b.plan_name) {
          return 1;
        }
        return 0;
      });
      break;
    default:
      plans
      break;
  }
};
