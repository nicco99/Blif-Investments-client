import axios from "axios";
import { NextResponse } from "next/server";

import { URL } from "@/lib/api";
import { cache } from "react";

export const GET = cache(async (
  req: Request,
  { params }: { params: { categoryId: number } }
) => {
  try {
    const { category } = await axios
      .get(`${URL}/categories/${params.categoryId}`)
      .then((res) => res.data);
    return NextResponse.json(category);
  } catch (error) {
    console.log("[Get CategoryId Error]", error);
  }
})
