import { Settings2 } from "lucide-react";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { PlanFilters } from "./PlanFilters";

export const FloatingFilter = () => {
  return (
    <div className="sticky lg:hidden bottom-10 z-30">
      <Sheet>
        <SheetTrigger>
          <Button className="rounded-full py-7 px-8 flex items-center justify-center gap-x-3 bg-black">
            <Settings2 className="h-5 w-5" />
            Filter and sort
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full pb-12 mr-20 max-w-[90%] sm:max-w-[60%] mx-auto rounded-lg overflow-y-scroll"
        >
          <SheetHeader className="flex items-center justify-center pb-5 border-b border-gray-400">
            <span className="font-bold text-xl">Filters</span>
          </SheetHeader>
          <PlanFilters />
        </SheetContent>
      </Sheet>
    </div>
  );
};
