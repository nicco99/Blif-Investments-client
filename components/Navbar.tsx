"use client";

import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#"
              className="font-bold hover:text-gray-600"
            >
              Sizes
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#"
              className="font-bold hover:text-gray-600"
            >
              Shop
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-max">
            <NavigationMenuLink
              href="/#"
              className="font-bold hover:text-gray-600"
            >
              By Budget
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
