import { cache } from "react";
import axios from "axios";

export const URL: string = process.env.API_URL!;

export const getPlans = cache(async () => {
  try {
    const data = await axios.get(`${URL}/plans`).then((res) => res.data);
    return data.plans;
  } catch (error) {
    console.log("[Get Plans Error]", error);
  }
});

export const getPlanWithId = cache(async (planId: number) => {
  try {
    const data = await axios
      .get(`${URL}/plans/${planId}`)
      .then((res) => res.data);
    return data.plan;
  } catch (error) {
    console.log("[Get PlanWithId Error]", error);
  }
});

export const getCategories = cache(async () => {
  try {
    const data = await axios.get(`${URL}/categories`).then((res) => res.data);
    return data.categories;
  } catch (error) {
    console.log("[Get Categories Error]", error);
  }
});

export const getCategoryWithId = cache(async (categoryId: number) => {
  try {
    const data = await axios
      .get(`${URL}/categories/${categoryId}`)
      .then((res) => res.data);
    return data.category;
  } catch (error) {
    console.log("[Get CategoryWithId Error]", error);
  }
});
