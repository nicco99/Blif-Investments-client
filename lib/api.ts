import { cache } from "react";
import axios from "axios";

export const URL: string = process.env.NEXT_PUBLIC_API_URL!;

export const getPlans = cache(async () => {
  try {
    const { plans } = await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/plans`)
      .then((res) => res.data);
    return plans;
  } catch (error) {
    console.log("[Get Plans Error]", error);
  }
});

export const getPlanWithId = cache(async (planId: number) => {
  try {
    const { plan } = await axios
      .get(`${URL}/plans/${planId}`)
      .then((res) => res.data);
    return plan;
  } catch (error) {
    console.log("[Get PlanWithId Error]", error);
  }
});

export const getCategories = cache(async () => {
  try {
    const { categories } = await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
      .then((res) => res.data);
    return categories;
  } catch (error) {
    console.log("[Get Categories Error]", error);
  }
});

export const getCategoryWithId = cache(async (categoryId: number) => {
  try {
    const { category } = await axios
      .get(`${URL}/categories/${categoryId}`)
      .then((res) => res.data);
    return category;
  } catch (error) {
    console.log("[Get CategoryWithId Error]", error);
  }
});
