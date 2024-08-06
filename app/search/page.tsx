import { PlanCard } from "@/components/cards/PlanCard";
import { SearchInput } from "@/components/header/SearchInput";
import { searchPlanWithName } from "@/hooks/filters";
import { Plan } from "@/types";
import { Metadata } from "next";

type Props = {
  searchParams: {
    search?: string | undefined;
  };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata | undefined> {
  return {
    title: "Search",
    description: searchParams.search,
    openGraph: {
      title: "Search | Blif Investment",
      description: searchParams.search,
      type: "article",
      locale: "en_US",
      url: "https://blifinvestment.com/search",
      siteName: "Blif Investment",
      images: [
        {
          url: "https://blifinvestment.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "Search",
        },
      ],
    },
  };
}

const SearchPage = async ({ searchParams }: Props) => {
  const searchPlans = await searchPlanWithName(searchParams?.search);
  return (
    <section className="bg-[#f3f3f3] py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="px-5 md:px-8 lg:px-12">
        <div className="flex flex-col w-full gap-y-12 max-w-[1600px] mx-auto">
          <SearchInput />
          {!searchPlans ? (
            <div className="w-full flex items-center justify-center py-12">
              Please type a keyword or phrase into the search bar to begin your
              search:
            </div>
          ) : searchPlans.length === 0 ? (
            <div className="w-full flex items-center justify-center py-12">
              No results could be found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchPlans?.map((plan: Plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
