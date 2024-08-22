import { Settings2 } from "lucide-react";

import { PlanFilters } from "@/components/filters/PlanFilters";
import { PlanNotFound } from "@/components/PlanNotFound";
import { PlanSort } from "@/components/filters/PlanSort";
import { PlanCard } from "@/components/cards/PlanCard";
import { Plan } from "@/types";

const ShowPlans = ({
  plans,
  showPlansCount,
}: {
  plans: Plan[];
  showPlansCount?: boolean;
}) => {
  return (
    <div className="w-full flex flex-col lg:grid grid-cols-4 lg:gap-x-12">
      {showPlansCount && (
        <p className="lg:hidden text-center text-sm md:text-base">
          {`${plans?.length} product${plans?.length === 1 ? "" : "s"}`}
        </p>
      )}
      <div className="hidden lg:flex flex-col z-30 w-full py-3 col-span-1">
        <div className="sticky top-[120px]">
          <div className="flex space-x-3">
            <Settings2 className="h-5 w-5" />
            <span className="font-bold">Filters</span>
          </div>
          <div className="flex flex-col gap-y-6 lg:gap-y-8 w-full">
            <PlanFilters />
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-3">
        <div className="w-full flex justify-end items-center">
          <PlanSort />
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8 pt-3 lg:pb-12 lg:px-3 lg:-mx-3">
          {plans.length === 0 ? (
            <PlanNotFound />
          ) : (
            plans?.map((plan: Plan) => <PlanCard key={plan.id} plan={plan} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowPlans;
