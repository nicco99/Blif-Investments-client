import { AlignJustify } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Logo } from "./Logo";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="h-7 w-7" />
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="w-full mr-20 max-w-[90%] sm:max-w-[60%] mx-auto rounded-lg"
      >
        <SheetHeader>
          <SheetTitle className="flex justify-center">
            <Logo />
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-y-6">
            <Link href="/collections" className="text-gray-700 hover:text-black font-semibold">Collections</Link>
            <Link href="/plans" className="text-gray-700 hover:text-black font-semibold">Plans</Link>
            <Link href="/about" className="text-gray-700 hover:text-black font-semibold">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black font-semibold">Contact Us</Link>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="mt-24 mb-5">
          <div className="flex space-x-10 mx-auto">
            <Link href="#">
              <Image src="/facebook.svg" alt="" width={20} height={20} />
            </Link>
            <Link href="#">
              <Image src="/x.svg" alt="" width={20} height={20} />
            </Link>
            <Link href="#">
              <Image src="/instagram.svg" alt="" width={20} height={20} />
            </Link>
            <Link href="#">
              <Image src="/pinterest.svg" alt="" width={20} height={20} />
            </Link>
            <Link href="#">
              <Image src="/whatsapp.svg" alt="" width={20} height={20} />
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
