import { PlanCard } from "@/components/cards/PlanCard";
import { getPlans } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plans | Blif Investments",
};

const PlansPage = async () => {
  const plans = await getPlans();

  return (
    <section className="bg-white py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="px-5 md:px-8 lg:px-12">
        <div className="flex flex-col w-full gap-y-12 max-w-[1600px] mx-auto">
          <h1 className="font-bold text-4xl md:text-5xl text-center">
            All plans
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {plans.map((plan: any) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansPage;
