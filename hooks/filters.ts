import { getPlans } from "@/lib/api"

export const filterPlansWithCategoryId = async (categoryId: number) => {
    const plans = await getPlans()

    const filteredPlans = plans.filter((plan: any) => plan.category_id === Number(categoryId))

    return filteredPlans
}

export const imageFromPlanToCategory = async (categoryId: number) => {
    const plans = await getPlans()

    const plan = plans.find((plan:any) => plan.category_id === Number(categoryId))

    return plan?.images[0]?.image_path
}