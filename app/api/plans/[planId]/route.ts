import axios from "axios";
import { NextResponse } from "next/server";

import { URL } from "@/lib/api";

export const GET = async (
  req: Request,
  { params }: { params: { planId: number } }
) => {
  try {
    const { plan } = await axios
      .get(`${URL}/plans/${params.planId}`)
      .then((res) => res.data);
    return NextResponse.json(plan);
  } catch (error) {
    console.log("[Get Plans Error]", error);
  }
};
