import { UserRound, Search, ShoppingBasket } from "lucide-react";

import { Navbar } from "./Navbar";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="z-50 sticky top-0 w-full">
      <div className="flex items-center justify-between px-12 py-4 bg-slate-100">
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
