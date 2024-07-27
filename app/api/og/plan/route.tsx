import { getPlanWithId } from "@/lib/api";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const plan = await getPlanWithId(Number(searchParams.get("id")));

    return new ImageResponse(
      (
        <div tw="relative flex flex-col w-full h-full items-center justify-center bg-white">
          <img
            src={`http://13.37.100.57:5001/${plan.images[0].image_path}`}
            tw="object-cover"
          />
        </div>
      )
    );
  } catch (error) {
    return new Response("Failed to generate OG image");
  }
}
