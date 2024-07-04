import Link from "next/link";
import Image from "next/image";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const Footer = () => {
  const payments = [
    {
      icon: "amazon",
      title: "Amazon",
    },
    {
      icon: "americanexpress",
      title: "American Express",
    },
    {
      icon: "applepay",
      title: "Apple Pay",
    },
    {
      icon: "dinersclub",
      title: "Diners Club",
    },
    {
      icon: "googlepay",
      title: "Google Pay",
    },
    {
      icon: "jcb",
      title: "JCB",
    },
    {
      icon: "mastercard",
      title: "Mastercard",
    },
    {
      icon: "paypal",
      title: "Paypal",
    },
    {
      icon: "venmo",
      title: "Venmo",
    },
    {
      icon: "visa",
      title: "Visa",
    },
  ];
  return (
    <footer>
      <div className="max-w-[1600px] w-full flex flex-col py-24 mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="font-bold text-sm">About</h3>
            <p className="max-w-md mt-4 text-sm text-gray-700">
              Blif Investments provides affordable, African market-tailored
              designs. Our expert team works together to deliver top-tier
              designs with competitively priced, premium construction documents,
              and custom design options available.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-sm">Support</h3>
            <div className="flex flex-col mt-4 space-y-3">
              <Link href="#" className="text-gray-700 hover:text-black text-sm">
                Frequently Asked Questions
              </Link>
              <Link href="#" className="text-gray-700 hover:text-black text-sm">
                Terms and Conditions
              </Link>
              <Link href="#" className="text-gray-700 hover:text-black text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-700 hover:text-black text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-700 hover:text-black text-sm">
                Refund policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4 items-center">
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
        <div className="flex justify-between w-full mt-20">
          <div className="flex space-x-10">
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
          <div className="flex space-x-5">
            {payments.map((payment, index) => (
              <TooltipProvider key={index}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <Image
                      src={`/${payment.icon}.svg`}
                      alt=""
                      width={30}
                      height={30}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-black">
                    <p className="text-white">{payment.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
