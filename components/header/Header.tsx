import { Navbar } from "./Navbar";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { SearchBar } from "./SearchBar";
import { Cart } from "./Cart";

export const Header = () => {
  return (
    <header className="bg-[#f3f3f3] z-40 sticky top-0 w-full drop-shadow-2xl">
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
          <div className="flex items-center gap-x-5 justify-self-end">
            <SearchBar />
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};
