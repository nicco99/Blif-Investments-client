import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  openGraph: {
    title: 'Contact Us',
    type: "article",
    locale: "en_US",
    url: "https://blifinvestment.com/contact-us",
    siteName: "Blif Investment",
    images: [
      {
        url: "https://blifinvestment.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Us | Blif Investment"
      }
    ]
  }
}

const ContactUsPage = () => {
  return (
    <section className="bg-[#f3f3f3] md:py-10 lg:py-12 xl:py-16">
      <div className="px-5 md:px-8 lg:px-12">
        <div className="flex flex-col w-full gap-y-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-5 text-center">
            Contact Us
          </h1>
          <div className="flex flex-col gap-y-5 md:gap-y-6 lg:gap-y-8 text-center">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold">
              Contact Info
            </h2>
            <div className="flex flex-col gap-y-3">
              <p className="text-base md:text-lg">
                Phone:{" "}
                <Link
                  href="tel:+254712345678"
                  className="underline underline-offset-4 hover:no-underline transition-all ease-in-out duration-700"
                >
                  +254712345678
                </Link>
              </p>
              <p className="text-base md:text-lg">
                Email:{" "}
                <Link
                  href="mailto:blifinvestment@mail.com"
                  className="underline underline-offset-4 hover:no-underline transition-all ease-in-out duration-700"
                >
                  blifinvestment@mail.com
                </Link>
              </p>
              <p className="text-base md:text-lg">
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
