import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export const SearchBar = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/search"
            className="flex items-center transition-all duration-150 ease-in-out cursor-pointer hover:bg-transparent hover:scale-110"
          >
            <Search aria-label="search" className="w-6 h-6" />
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          align="start"
          className="text-white bg-gray-700"
        >
          <p className="text-sm">Search</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
