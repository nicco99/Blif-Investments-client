import { Search } from "lucide-react";

import { Navbar } from "./Navbar";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <header className="z-50 sticky top-0 w-full bg-slate-200">
      <div className="px-5 md:px-8 lg:px-12 md:py-4">
        <div className="grid grid-cols-3 items-center max-w-[1600px] mx-auto">
          {/* MOBILE NAV */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
          {/* LOGO */}
          <Logo />
          {/* NAV */}
          <div className="hidden lg:block justify-self-center">
            <Navbar />
          </div>
          {/* ICONS */}
          <div className="flex gap-x-3 lg:gap-x-6 justify-self-end">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};
