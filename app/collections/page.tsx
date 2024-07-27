import type { Metadata } from "next";

import { CategoryCard } from "@/components/cards/CategoryCard";
import { getCategories } from "@/lib/api";
import type { Category } from "@/types";

export const metadata: Metadata = {
  title: "Collections",
  openGraph: {
    title: 'Collections',
    type: "article",
    locale: "en_US",
    url: "https://blifinvestment.com/collections",
    siteName: "Blif Investment",
    images: [
      {
        url: "https://blifinvestment.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Collections | Blif Investment"
      }
    ]
  }
};

const PlansPage = async () => {
  const categories = await getCategories();
  return (
    <section className="bg-[#f3f3f3] py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="px-5 md:px-8 lg:px-12">
        <div className="flex flex-col w-full gap-y-12 max-w-[1600px] mx-auto">
          <h1 className="font-bold text-4xl md:text-5xl text-center">
            All collections
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category: Category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansPage;
