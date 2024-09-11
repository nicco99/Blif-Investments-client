import { SquareCheckBig } from "lucide-react";
import type { Metadata } from "next";

import { getPlanWithId, URL } from "@/lib/api";
import { PlanCard } from "@/components/cards/PlanCard";
import { ProductImages } from "./_components/ProductImages";
import type { Feature, Plan } from "@/types";
import {
  filterPlanFromCategory,
  formattedPrice,
  formattedPrice2,
} from "@/hooks/filters";

type Props = {
  params: {
    planId: number;
  };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const plan: Plan = await getPlanWithId(params.planId);
  if (!plan) {
    return;
  }
  return {
    title: plan.plan_name,
    description: plan.description,
    openGraph: {
      title: `${plan.plan_name} | Blif Investment`,
      description: plan.description,
      type: "article",
      locale: "en_US",
      url: `https://blifinvestment.com/plans/${params.planId}`,
      siteName: "Blif Investment",
      images: [
        {
          url: "https://blifinvestment.com/og-image.png",
          width: 1200,
          height: 630,
          alt: plan.plan_name,
        },
      ],
    },
  };
}

const PlanIdPage = async ({ params }: Props) => {
  const plan: Plan = await getPlanWithId(params.planId);
  const filteredPlans: Plan[] = await filterPlanFromCategory(
    plan.id,
    plan.category_id
  );

  return (
    <section className="pb-8  md:pb-10 lg:pb-12">
      <div className="lg:px-12">
        <div className="flex flex-col w-full gap-y-8 md:gap-y-12 max-w-[1600px] mx-auto">
          <div className="lg:p-12 lg:rounded-3xl">
            <div className="relative flex flex-col lg:flex-row gap-y-5 md:gap-y-8 lg:gap-y-0 lg:gap-x-12 xl:gap-x-24">
              {/* IMAGE */}
              <div className="w-full lg:w-1/2 lg:sticky top-[143px] h-max">
                <ProductImages images={plan.images} urlPath={URL} />
              </div>
              {/* TEXTS */}
              <div className="flex flex-col w-full px-3 sm:px-5 md:px-8 lg:px-0 lg:w-1/2 gap-y-6 xl:gap-y-10">
                <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                  {plan.plan_name}
                </h1>
                <div className="flex flex-col gap-y-2">
                  <h3 className="font-bold sm:text-xl">Description</h3>
                  <p className="text-base text-gray-500 sm:text-lg">
                    {plan.description}
                  </p>
                </div>
                <div className="h-[2px] bg-gray-200" />
                <div className="grid grid-cols-3 mb-6 gap-y-6 justify-items-center lg:mb-0">
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="text-base font-bold text-center sm:text-lg">
                      Floors
                    </span>
                    <span className="mt-2 text-base text-gray-500">
                      {plan.floors}
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="text-base font-bold text-center sm:text-lg">
                      Bedrooms
                    </span>
                    <span className="mt-2 text-base text-gray-500">
                      {plan.no_of_bedrooms}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full col-span-1">
                    <span className="text-base font-bold text-center sm:text-lg">
                      Bathrooms
                    </span>
                    <span className="mt-2 text-base text-gray-500">
                      {plan.no_of_bathrooms}
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="text-base font-bold text-center sm:text-lg">
                      Length
                    </span>
                    <span className="mt-2 text-base text-gray-500">
                      {plan.plan_length} m
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="text-base font-bold text-center sm:text-lg">
                      Size
                    </span>
                    <span className="mt-2 text-base text-gray-500">
                      {plan.plan_size} m<sup className="text-xs">2</sup>
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full col-span-1">
                    <span className="text-base font-bold text-center sm:text-lg">
                      Construction Cost
                    </span>
                    <span className="mt-2 text-base text-gray-500">
                      {formattedPrice2(formattedPrice(plan.price))}
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="text-base font-bold text-center sm:text-lg">
                      Plinth Area
                    </span>
                    <span className="mt-2 text-base text-gray-500">
                      {plan.plinth_area} m<sup className="text-xs">2</sup>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center px-3 pb-8 sm:px-5 md:px-8 lg:px-0 md:pb-10 lg:pb-12 xl:pb-16">
            <h1 className="mb-5 text-4xl font-bold lg:text-5xl xl:text-6xl">
              Features included
            </h1>
            <ul className="grid w-full grid-cols-2 px-10 py-6 sm:grid-cols-3 gap-y-6 gap-x-10 sm:py-8 md:py-10 lg:py-12">
              {plan.features.map((feature: Feature) => (
                <li
                  key={feature.id}
                  className="flex items-center justify-start text-lg gap-x-1 sm:justify-center"
                >
                  <SquareCheckBig className="w-4 h-4 text-green-500 shrink-0" />
                  {feature.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-3 sm:px-5 md:px-8 lg:px-0">
            <h1 className="mb-5 text-3xl font-bold lg:text-4xl xl:text-5xl">
              You may also like
            </h1>
            <div className="flex pt-3 overflow-x-scroll no-scrollbar gap-x-3 lg:pb-12 lg:px-3 lg:-mx-3">
              {filteredPlans.map((plan: Plan) => (
                <PlanCard key={plan.id} aspect plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanIdPage;
