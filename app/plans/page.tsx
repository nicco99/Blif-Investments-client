import type { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { RenderPlans } from "./RenderPlans";

export const metadata: Metadata = {
  title: "Plans",
  openGraph: {
    title: "Plans | Blif Investment",
    type: "article",
    locale: "en_US",
    url: "https://blifinvestment.com/plans",
    siteName: "Blif Investment",
    images: [
      {
        url: "https://blifinvestment.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plans | Blif Investment",
      },
    ],
  },
};

const PlansPage = () => {
  const queryClient = new QueryClient();
  return (
    <section className="bg-[#f3f3f3] py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="px-5 md:px-8 lg:px-12">
        <div className="flex flex-col w-full gap-y-12 max-w-[1600px] mx-auto">
          <h1 className="font-bold text-4xl md:text-5xl text-center">
            All plans
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            <HydrationBoundary state={dehydrate(queryClient)}>
              <RenderPlans />
            </HydrationBoundary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansPage;
