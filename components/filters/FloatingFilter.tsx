import { Settings2 } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlanSort } from "./PlanSort";
import { PlanFilters } from "./PlanFilters";

export const FloatingFilter = () => {
  return (
    <div className="sticky lg:hidden bottom-10 z-30">
      <Sheet>
        <SheetTrigger>
          <div className="rounded-full py-4 px-6 flex items-center justify-center gap-x-3 bg-black">
            <Settings2 className="h-5 w-5 text-white" />
            <span className="text-white">Filter and sort</span>
          </div>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full pb-12 mr-20 max-w-[90%] sm:max-w-[60%] mx-auto rounded-lg overflow-y-scroll"
        >
          <SheetHeader className="flex items-center justify-center pb-5 border-b border-gray-400">
            <SheetTitle>
              <span className="font-bold text-xl">Filters</span>
            </SheetTitle>
            <SheetDescription>
            </SheetDescription>
              <div className="w-full flex justify-center items-center my-3">
                <PlanSort />
              </div>
              <PlanFilters />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
