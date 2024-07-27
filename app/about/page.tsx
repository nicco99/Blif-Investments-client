import type { Metadata } from "next";
import Image from "next/image";

import grid3 from "@/public/grid3.jpg";
import grid4 from "@/public/grid4.jpg";
import grid9 from "@/public/grid9.jpg";

export const metadata: Metadata = {
  title: "About",
  openGraph: {
    title: 'About',
    type: "article",
    locale: "en-US",
    url: "https://blifinvestment.com/about",
    siteName: "Blif Investment",
    images: [
      {
        url: "https://blifinvestment.com/public/og-image.png",
        width: 1200,
        height: 630,
        alt: "About | Blif Investment"
      }
    ]
  }
};

const ContactUsPage = () => {
  return (
    <section className="bg-[#f3f3f3] pb-8 md:pb-10 lg:pb-12 xl:pb-16">
      <div className="">
        <div className="flex flex-col w-full gap-y-5 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">
          <div className="relative flex flex-col justify-center items-center max-h-[22rem] overflow-hidden before:absolute before:z-10 before:h-full before:w-full before:bg-gray-700 before:opacity-40 before:content-['']">
            <Image
              src={grid9}
              placeholder="blur"
              alt=""
              sizes="100vw"
              className="object-cover h-full"
            />
          </div>
          <div className="px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
            <div className="flex flex-col gap-y-4 md:gap-y-6 text-center md:max-w-xl mx-auto">
              <span className="text-2xl font-bold">About Us</span>
              <p className="sm:text-lg">
                Blif investment is a Construction Management firm doing design
                and building of affordable modern homes and residential
                developments.
                <br />
                We offer services in Construction Management,
                Architectural design, Interior design, structural designs,
                project management and construction services.
              </p>
            </div>
            <hr className="h-0.5 bg-gray-300 my-10 lg:my-12" />
            <div className="flex flex-col lg:gap-y-0">
              <div className="flex flex-col gap-y-12 lg:flex-row">
                <div className="w-full mx-auto lg:w-1/2">
                  <Image
                    src={grid3}
                    placeholder="blur"
                    alt=""
                    sizes="50vw"
                    className="rounded-xl lg:rounded-3xl lg:rounded-br-none"
                  />
                </div>
                <div className="flex flex-col justify-center gap-y-4 lg:gap-y-6 lg:w-1/2 mx-auto text-center">
                  <h3 className="font-bold text-2xl">Our Services</h3>
                  <ul className="space-y-3 max-w-sm mx-auto">
                    <li className="flex flex-col">
                      <span className="font-bold">Architectural Design</span>
                      <p>
                        Crafting bespoke designs for residential and commercial
                        spaces.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-bold">Construction Management</span>
                      <p>
                        Overseeing projects from conception to completion with
                        precision and care.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-bold">
                        Building Information Modeling (BIM)
                      </span>
                      <p>
                        Utilizing advanced technology to enhance project
                        efficiency and accuracy.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-bold">
                        Construction Documentation
                      </span>
                      <p>
                        Providing detailed and comprehensive documentation for
                        seamless execution.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="lg:hidden h-0.5 bg-gray-300 my-10" />
              <div className="flex flex-col gap-y-12 lg:flex-row">
                <div className="w-full mx-auto lg:w-1/2 lg:order-last">
                  <Image
                    src={grid4}
                    placeholder="blur"
                    alt=""
                    sizes="50vw"
                    className="rounded-xl lg:rounded-3xl lg:rounded-tl-none"
                  />
                </div>
                <div className="flex flex-col justify-center gap-y-4 lg:gap-y-6 lg:w-1/2 mx-auto text-center">
                  <h3 className="font-bold text-2xl">Why Choose Us?</h3>
                  <ul className="space-y-3 max-w-sm mx-auto">
                    <li className="flex flex-col">
                      <span className="font-bold">Personalized Solutions</span>
                      <p>
                        We tailor our services to meet your unique requirements.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-bold">Integrated Approach</span>
                      <p>
                        We ensure cohesive design and construction processes by
                        collaborating with other design professionals.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-bold">Quality Control</span>
                      <p>
                        Continuous oversight and value engineering to deliver
                        exceptional outcomes.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="h-0.5 bg-gray-300 my-10" />
            </div>
            <div className="max-w-lg mx-auto w-full py-2 lg:pt-6">
              <p className="text-center text-xl lg:text-2xl">
                Explore our portfolio and discover how we can transform your
                space with innovative design and expert management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
