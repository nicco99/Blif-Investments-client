import Link from "next/link";
import Image from "next/image";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="pt-8 pb-5 border-t-2 border-slate-200 md:pt-10 lg:pt-12 xl:pt-16">
      <div className="px-3 sm:px-5 md:px-8 lg:px-12">
        <div className="max-w-[1600px] w-full flex flex-col mx-auto">
          <div className="grid flex-row justify-between grid-cols-2 mt-8 gap-y-8 md:flex">
            <div className="flex flex-col text-center">
              <h3 className="text-lg font-bold">About</h3>
              <p className="max-w-xs mt-4 text-gray-700">
                At Blif Investment, we blend creativity with technical expertise
                to bring your architectural visions to life. Our team of
                seasoned architects, designers, and construction specialists is
                committed to delivering innovative house plans and top-tier
                construction management services tailored to your needs.
              </p>
            </div>
            <div className="flex flex-col text-center">
              <h3 className="text-lg font-bold">Support</h3>
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
            <div className="flex flex-col items-center order-first max-w-md col-span-2 mx-auto space-y-4 md:max-w-none md:mx-0 md:order-none md:pl-2">
              <h2 className="text-3xl font-bold">Don&apos;t Miss Out!</h2>
              <p className="text-gray-700">
                Sign up now to get the latest updates and offers
              </p>
              <div className="w-full space-y-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="h-12 py-4 border border-gray-600 placeholder:text-lg"
                  required
                />
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-bold transition-all duration-700 ease-in-out bg-blue-500"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full mt-20 space-y-5 md:space-y-0">
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
