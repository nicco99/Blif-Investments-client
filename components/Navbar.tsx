"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-x-10">
      <Link
        href="/collections"
        className={cn(
          "font-bold text-lg hover:text-gray-600",
          pathname.startsWith("/collections") &&
            "underline underline-offset-8 decoration-2 hover:decoration-gray-400"
        )}
      >
        Collections
      </Link>
      <Link
        href="/plans"
        className={cn(
          "font-bold text-lg hover:text-gray-600",
          pathname.startsWith("/plans") &&
            "underline underline-offset-8 decoration-2 hover:decoration-gray-400"
        )}
      >
        Plans
      </Link>
      <Link
        href="/about"
        className={cn(
          "font-bold text-lg hover:text-gray-600",
          pathname === "/about" &&
            "underline underline-offset-8 decoration-2 hover:decoration-gray-400"
        )}
      >
        About
      </Link>
      <Link
        href="/contact-us"
        className={cn(
          "font-bold text-lg hover:text-gray-600",
          pathname === "/contact-us" &&
            "underline underline-offset-8 decoration-2 hover:decoration-gray-400"
        )}
      >
        Contact Us
      </Link>
    </nav>
  );
};
