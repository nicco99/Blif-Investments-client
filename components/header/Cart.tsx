import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export const Cart = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/cart"
            className="relative flex items-center transition-all duration-150 ease-in-out cursor-pointer hover:bg-transparent hover:scale-110"
          >
            <ShoppingBag aria-label="cart" className="w-6 h-6" />
            <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2">
              2
            </span>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          align="start"
          className="text-white bg-gray-700"
        >
          <p className="text-sm">Cart</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
