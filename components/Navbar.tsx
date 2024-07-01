import React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export const Navbar = () => {
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/shop" className="font-bold hover:text-gray-600">
            <NavigationMenuLink>
              Shop
            </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-base font-bold hover:text-gray-600">
              Sizes
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-max">
            <NavigationMenuTrigger className="bg-transparent text-base font-bold hover:text-gray-600">
              By Budget
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-base font-bold hover:text-gray-600">
              Collections
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/collections" className="font-bold hover:text-gray-600">Collections</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-base font-bold hover:text-gray-600">
              Learn
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" className="font-bold hover:text-gray-600">Contact Us</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
