import axios from "axios";
import { NextResponse } from "next/server";

import { URL } from "@/lib/api";

export const GET = async () => {
  try {
    const { plans } = await axios.get(`${URL}/plans`).then((res) => res.data);
    return NextResponse.json(plans);
  } catch (error) {
    console.log("[Get Plans Error]", error);
  }
};
