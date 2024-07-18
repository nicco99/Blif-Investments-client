import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us"
}

const ContactUsPage = () => {
  return (
    <section className="bg-slate-200 py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="px-5 md:px-8 lg:px-12">
        <div className="flex flex-col w-full gap-y-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-5 text-center">
            Contact Us
          </h1>
          <div className="flex flex-col gap-y-5 md:gap-y-6 lg:gap-y-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold">
              Contact Info
            </h2>
            <div className="flex flex-col gap-y-3">
              <p className="text-sm md:text-base">
                Phone:{" "}
                <Link
                  href="tel:+254712345678"
                  className="underline underline-offset-4 hover:no-underline transition-all ease-in-out duration-300"
                >
                  +254712345678
                </Link>
              </p>
              <p className="text-sm md:text-base">
                Email:{" "}
                <Link
                  href="mailto:blifinvestment@mail.com"
                  className="underline underline-offset-4 hover:no-underline transition-all ease-in-out duration-300"
                >
                  blifinvestment@mail.com
                </Link>
              </p>
              <p className="text-sm md:text-base">
                Working Hours: Monday to Friday 8:00 am - 4:00 pm GMT +3
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
