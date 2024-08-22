import type { Metadata } from "next";

import { PlansPagination } from "./_components/PlansPagination";
import ShowPlans from "@/components/filters/ShowPlans";
import { filterPlansWithCategoryId } from "@/hooks/filters";
import { FloatingFilter } from "@/components/filters/FloatingFilter";

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

type Props = {
  searchParams: {
    sort: "none" | "name-asc" | "name-desc" | "price-asc" | "price-desc";
    bdrm: string;
    btrm: string;
    flrs: string;
    prce: string;
  };
};

const PlansPage = async ({ searchParams }: Props) => {
  const filters = {
    bdrm: searchParams?.bdrm,
    btrm: searchParams?.btrm,
    flrs: searchParams?.flrs,
    prce: searchParams?.prce,
  };
  const sort = searchParams?.sort;

  const plans = await filterPlansWithCategoryId({ filters, sort });
  return (
    <section className="relative flex flex-col items-center  py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="px-5 md:px-8 lg:px-12 w-full">
        <div className="flex flex-col w-full gap-y-8 md:gap-y-12 max-w-[1600px] mx-auto">
          <h1 className="font-bold text-4xl md:text-5xl text-center">
            All plans
          </h1>
          <ShowPlans plans={plans} />
          <PlansPagination />
        </div>
      </div>
      <FloatingFilter />
    </section>
  );
};

export default PlansPage;
