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
