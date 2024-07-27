import { imageFromPlanToCategory } from "@/hooks/filters";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const image = await imageFromPlanToCategory(Number(searchParams.get("id")));

    return new ImageResponse(
      (
        <div tw="relative flex flex-col w-full h-full items-center justify-center bg-white">
          <img src={`http://13.37.100.57:5001/${image}`} />
        </div>
      )
    );
  } catch (error) {
    return new Response("Failed to generate OG image");
  }
}
