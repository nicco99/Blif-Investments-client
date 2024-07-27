import { SquareCheckBig } from "lucide-react";
import type { Metadata } from "next";

import { getPlanWithId, URL } from "@/lib/api";
import { PlanCard } from "@/components/cards/PlanCard";
import { ProductImages } from "@/components/ProductImages";
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
      title: plan.plan_name,
      description: plan.description,
      type: "article",
      locale: "en_US",
      url: `https://blifinvestment.com/plans/${params.planId}`,
      siteName: "Blif Investment",
      images: [
        {
          url: `${URL}/${plan.images[0].image_path}`,
          width: 1200,
          height: 630,
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
    <section className="bg-[#f3f3f3] pb-8 md:pb-10 lg:pb-12">
      <div className="lg:px-12">
        <div className="flex flex-col w-full gap-y-8 md:gap-y-12 max-w-[1600px] mx-auto">
          <div className="lg:p-12 lg:rounded-3xl">
            <div className="relative flex flex-col lg:flex-row gap-y-5 md:gap-y-8 lg:gap-y-0 lg:gap-x-12 xl:gap-x-24">
              {/* IMAGE */}
              <div className="w-full lg:w-1/2 lg:sticky top-[143px] h-max">
                <ProductImages images={plan.images} urlPath={URL} />
              </div>
              {/* TEXTS */}
              <div className="w-full px-3 sm:px-5 md:px-8 lg:px-0 lg:w-1/2 flex flex-col gap-y-6 xl:gap-y-10">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                  {plan.plan_name}
                </h1>
                <div className="flex flex-col gap-y-2">
                  <h3 className="font-bold sm:text-xl">Description</h3>
                  <p className="text-gray-500 text-base sm:text-lg">
                    {plan.description}
                  </p>
                </div>
                <div className="h-[2px] bg-gray-200" />
                <div className="grid grid-cols-3 gap-y-6 justify-items-center mb-6 lg:mb-0">
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-base sm:text-lg">
                      Floors
                    </span>
                    <span className="text-base text-gray-500 mt-2">
                      {plan.floors}
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-base sm:text-lg">
                      Bedrooms
                    </span>
                    <span className="text-base text-gray-500 mt-2">
                      {plan.no_of_bedrooms}
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center">
                    <span className="font-bold text-center text-base sm:text-lg">
                      Bathrooms
                    </span>
                    <span className="text-base text-gray-500 mt-2">
                      {plan.no_of_bathrooms}
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-base sm:text-lg">
                      Height
                    </span>
                    <span className="text-base text-gray-500 mt-2">
                      {plan.plan_height} m
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-base sm:text-lg">
                      Length
                    </span>
                    <span className="text-base text-gray-500 mt-2">
                      {plan.plan_length} m
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center">
                    <span className="font-bold text-center text-base sm:text-lg">
                      Size
                    </span>
                    <span className="text-base text-gray-500 mt-2">
                      {plan.plan_size} m<sup className="text-xs">2</sup>
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-base sm:text-lg">
                      Price
                    </span>
                    <span className="text-base text-gray-500 mt-2">
                      {formattedPrice2(formattedPrice(plan.price))}
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-base sm:text-lg">
                      Price / m<sup className="text-xs">2</sup>
                    </span>
                    <span className="text-base text-gray-500 mt-2">
                      {formattedPrice2(formattedPrice(plan.price_per_sqm))}
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center">
                    <span className="font-bold text-center text-base sm:text-lg">
                      Plinth Area
                    </span>
                    <span className="text-base text-gray-500 mt-2">
                      {plan.plinth_area} m<sup className="text-xs">2</sup>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center px-3 sm:px-5 md:px-8 lg:px-0 pb-8 md:pb-10 lg:pb-12 xl:pb-16">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-5">
              Features included
            </h1>
            <ul className="grid grid-cols-2 sm:grid-cols-3 bg-white w-full rounded-lg lg:rounded-3xl gap-y-6 gap-x-10 px-10 py-6 sm:py-8 md:py-10 lg:py-12">
              {plan.features.map((feature: Feature) => (
                <li
                  key={feature.id}
                  className="flex gap-x-1 text-lg sm:justify-center items-center justify-start"
                >
                  <SquareCheckBig className="h-4 w-4 shrink-0 text-green-500" />
                  {feature.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-3 sm:px-5 md:px-8 lg:px-0">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
              You may also like
            </h1>
            <div className="flex overflow-x-scroll no-scrollbar gap-x-3 pt-3 lg:pb-12 lg:px-3 lg:-mx-3">
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
