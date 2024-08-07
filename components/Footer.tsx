import Link from "next/link";
import Image from "next/image";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-[#f3f3f3] border-t-2 border-slate-200 pt-8 pb-5 md:pt-10 lg:pt-12 xl:pt-16">
      <div className="px-3 sm:px-5 md:px-8 lg:px-12">
        <div className="max-w-[1600px] w-full flex flex-col mx-auto">
          <div className="grid grid-cols-2 gap-y-8 md:flex flex-row justify-between mt-8">
            <div className="flex flex-col text-center">
              <h3 className="font-bold text-lg">About</h3>
              <p className="max-w-xs mt-4 text-gray-700">
                At Blif Investment, we blend creativity with technical
                expertise to bring your architectural visions to life. Our team
                of seasoned architects, designers, and construction specialists
                is committed to delivering innovative house plans and top-tier
                construction management services tailored to your needs.
              </p>
            </div>
            <div className="flex flex-col text-center">
              <h3 className="font-bold text-lg">Support</h3>
              <div className="flex flex-col mt-4 space-y-3">
                <Link href="#" className="text-gray-700 hover:text-black">
                  Frequently Asked Questions
                </Link>
                <Link href="#" className="text-gray-700 hover:text-black">
                  Terms and Conditions
                </Link>
                <Link href="#" className="text-gray-700 hover:text-black">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-700 hover:text-black">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-700 hover:text-black">
                  Refund policy
                </Link>
              </div>
            </div>
            <div className="flex flex-col col-span-2 space-y-4 order-first max-w-md md:max-w-none mx-auto md:mx-0 md:order-none items-center md:pl-2">
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
                  className="w-full bg-blue-500 transition-all ease-in-out duration-700 text-lg font-bold h-12"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
          <div className="flex space-y-5 md:space-y-0 justify-center w-full mt-20">
            <div className="flex flex-wrap items-center gap-y-3 gap-x-10">
              <Link href="#">
                <Image src="/facebook.svg" alt="" width={30} height={30} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#">
                <Image src="/x.svg" alt="" width={30} height={30} />
                <span className="sr-only">X</span>
              </Link>
              <Link href="#">
                <Image src="/instagram.svg" alt="" width={30} height={30} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#">
                <Image src="/pinterest.svg" alt="" width={30} height={30} />
                <span className="sr-only">Pinterest</span>
              </Link>
              <Link href="#">
                <Image src="/whatsapp.svg" alt="" width={30} height={30} />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
