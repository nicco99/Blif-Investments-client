import Link from "next/link";
import Image from "next/image";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="px-3 sm:px-5 md:px-8 lg:px-12">
        <div className="max-w-[1600px] w-full flex flex-col mx-auto">
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="flex justify-evenly md:justify-between md:w-1/2 mt-8">
              <div className="flex flex-col pr-2">
                <h3 className="font-bold text-sm">About</h3>
                <p className="max-w-xs mt-4 text-sm text-gray-700">
                  Blif Investments provides affordable, African market-tailored
                  designs. Our expert team works together to deliver top-tier
                  designs with competitively priced, premium construction
                  documents, and custom design options available.
                </p>
              </div>
              <div className="flex flex-col md:px-2">
                <h3 className="font-bold text-sm">Support</h3>
                <div className="flex flex-col mt-4 space-y-3">
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-black text-sm"
                  >
                    Frequently Asked Questions
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-black text-sm"
                  >
                    Terms and Conditions
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-black text-sm"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-black text-sm"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-black text-sm"
                  >
                    Refund policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 order-first max-w-md mx-auto md:order-none items-center md:pl-2">
              <h2 className="font-bold text-3xl">Don&apos;t Miss Out!</h2>
              <p className="text-gray-700">
                Sign up now to get the latest updates and offers
              </p>
              <div className="w-full space-y-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="border h-12 border-gray-600 placeholder:text-lg py-4"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-500 text-lg font-bold h-12"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
          <div className="flex space-y-5 md:space-y-0 justify-center w-full mt-20">
            <div className="flex flex-wrap gap-y-3 gap-x-10">
              <Link href="#">
                <Image src="/facebook.svg" alt="" width={30} height={30} />
              </Link>
              <Link href="#">
                <Image src="/x.svg" alt="" width={30} height={30} />
              </Link>
              <Link href="#">
                <Image src="/instagram.svg" alt="" width={30} height={30} />
              </Link>
              <Link href="#">
                <Image src="/pinterest.svg" alt="" width={30} height={30} />
              </Link>
              <Link href="#">
                <Image src="/whatsapp.svg" alt="" width={30} height={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
