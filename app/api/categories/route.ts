import axios from "axios";
import { NextResponse } from "next/server";

import { URL } from "@/lib/api";

export const GET = async () => {
  try {
    const { categories } = await axios.get(`${URL}/categories`).then((res) => res.data);
    return NextResponse.json(categories);
  } catch (error) {
    console.log("[Get Categories Error]", error);
  }
};
