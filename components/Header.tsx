import { UserRound, Search, ShoppingBasket } from "lucide-react";

import { Navbar } from "./Navbar";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="z-50 sticky top-0 w-full bg-slate-100">
      <div className="flex items-center max-w-[1600px] mx-auto justify-between py-4">
        {/* LOGO */}
        <Logo />
        {/* NAV */}
        <Navbar />
        {/* ICONS */}
        <div className="flex gap-6">
          <Search />
          <UserRound />
          <ShoppingBasket />
        </div>
      </div>
    </header>
  );
};
