import { PlanCard } from "@/components/cards/PlanCard";
import { ProductImages } from "@/components/product-images";
import { SquareCheckBig } from "lucide-react";

const features = [
  {
    id: 1,
    description: "Master Bedroom",
  },
  {
    id: 2,
    description: "Bedroom",
  },
  {
    id: 3,
    description: "Bathroom",
  },
  {
    id: 4,
    description: "Kitchen",
  },
  {
    id: 5,
    description: "Dining Room",
  },
  {
    id: 6,
    description: "Living Room",
  },
  {
    id: 7,
    description: "Indoor Store Room",
  },
  {
    id: 8,
    description: "Laundry",
  },
  {
    id: 9,
    description: "Pantry",
  },
  {
    id: 10,
    description: "Veranda",
  },
  {
    id: 11,
    description: "Balcony",
  },
  {
    id: 12,
    description: "Office/Library",
  },
];

const PlanIdPage = () => {
  return (
    <section className="bg-slate-200 pb-8 md:pb-10 lg:py-12">
      <div className="lg:px-12">
        <div className="flex flex-col w-full gap-y-8 md:gap-y-12 max-w-[1600px] mx-auto">
          <div className="bg-white lg:p-12 lg:rounded-3xl">
            <div className="relative flex flex-col lg:flex-row gap-y-5 md:gap-y-8 lg:gap-y-0 lg:gap-x-12 xl:gap-x-24">
              {/* IMAGE */}
              <div className="w-full lg:w-1/2 lg:sticky top-[143px] h-max">
                <ProductImages />
              </div>
              {/* TEXTS */}
              <div className="w-full px-3 sm:px-5 md:px-8 lg:px-0 lg:w-1/2 flex flex-col gap-y-6 xl:gap-y-10">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                  Modern 5 Bedroom Double Storey House - ID 25506
                </h1>
                <div className="flex flex-col gap-y-2">
                  <h3 className="font-bold sm:text-lg">Description</h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vitae rem dicta laboriosam, non nihil adipisci inventore
                    aliquid atque, ea quia distinctio illo nemo rerum vero,
                    earum pariatur qui deleniti blanditiis!
                  </p>
                </div>
                <div className="h-[2px] bg-gray-200" />
                <div className="grid grid-cols-3 gap-y-6 justify-items-center mb-6 lg:mb-0">
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-sm sm:text-base">
                      Floors
                    </span>
                    <span className="text-sm text-gray-500 mt-2">2</span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-sm sm:text-base">
                      Bedrooms
                    </span>
                    <span className="text-sm text-gray-500 mt-2">5</span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center">
                    <span className="font-bold text-center text-sm sm:text-base">
                      Bathrooms
                    </span>
                    <span className="text-sm text-gray-500 mt-2">5</span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-sm sm:text-base">
                      Height
                    </span>
                    <span className="text-sm text-gray-500 mt-2">17.5 m</span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-sm sm:text-base">
                      Width
                    </span>
                    <span className="text-sm text-gray-500 mt-2">14.1 m</span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center">
                    <span className="font-bold text-center text-sm sm:text-base">
                      Size
                    </span>
                    <span className="text-sm text-gray-500 mt-2">
                      427 m<sup>2</sup>
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-sm sm:text-base">
                      Price
                    </span>
                    <span className="text-sm text-gray-500 mt-2">$400</span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-sm sm:text-base">
                      Price / m<sup>2</sup>
                    </span>
                    <span className="text-sm text-gray-500 mt-2">$40</span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center">
                    <span className="font-bold text-center text-sm sm:text-base">
                      Plinth Area
                    </span>
                    <span className="text-sm text-gray-500 mt-2">
                      40 m<sup>2</sup>
                    </span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-sm sm:text-base">
                      Class of Finishes
                    </span>
                    <span className="text-sm text-gray-500 mt-2">2</span>
                  </div>
                  <div className="col-span-1 flex w-full flex-col items-center justify-center after:content-[''] after:h-full after:text-gray-500 relative after:absolute after:right-0 after:border after:border-gray-300">
                    <span className="font-bold text-center text-sm sm:text-base">
                      Contract Type
                    </span>
                    <span className="text-sm text-gray-500 mt-2">
                      Unit price
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center px-3 sm:px-5 md:px-8 lg:px-0 pb-8 md:pb-10 lg:pb-12 xl:pb-16">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
              Features included
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white w-full rounded-lg lg:rounded-3xl gap-y-6 gap-x-10 px-10 py-6 sm:py-8 md:py-10 lg:py-12">
              {features.map((feature) => (
                <li
                  key={feature.id}
                  className="flex gap-x-1 items-center justify-center"
                >
                  <SquareCheckBig className="h-4 w-4 text-green-500" />
                  {feature.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-3 sm:px-5 md:px-8 lg:px-0">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
              You may also like
            </h1>
            <div className="flex overflow-x-scroll no-scrollbar gap-x-3">
              {Array.from({ length: 7 }).map((_, index) => (
                <PlanCard key={index} aspect />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanIdPage;
