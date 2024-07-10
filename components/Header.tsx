import { Search, ShoppingBasket } from "lucide-react";

import { Navbar } from "./Navbar";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <header className="z-50 sticky top-0 w-full bg-slate-200">
      <div className="px-3 sm:px-5 md:px-8 lg:px-12 md:py-4">
        <div className="flex items-center max-w-[1600px] mx-auto justify-between">
          {/* MOBILE NAV */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
          {/* LOGO */}
          <Logo />
          {/* NAV */}
          <div className="hidden lg:block">
            <Navbar />
          </div>
          {/* ICONS */}
          <div className="flex gap-6">
            <Search />
            <ShoppingBasket />
          </div>
        </div>
      </div>
    </header>
  );
};
