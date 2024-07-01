import { UserRound, Search, ShoppingBasket } from "lucide-react";

import { Navbar } from "./Navbar";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="px-12 py-4 bg-slate-100">
      <div className="flex items-center justify-between">
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
