import { AlignJustify } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { AccordionContent } from "@radix-ui/react-accordion";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Logo";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="h-7 w-7" />
      </SheetTrigger>
      <SheetContent side="bottom" className="w-full mr-20 max-w-[90%] sm:max-w-[60%] mx-auto rounded-lg">
        <SheetHeader>
            <SheetTitle className="flex justify-center">
                <Logo />
            </SheetTitle>
          <Accordion type="single">
            <AccordionItem value="1">
              <AccordionTrigger>Shop</AccordionTrigger>
              <AccordionContent>
                1
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Sizes</AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>By Budget</AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
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
