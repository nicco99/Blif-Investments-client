import type { Metadata } from "next";
import Image from "next/image";

import plan3 from "@/public/plan3.jpg";

export const metadata: Metadata = {
  title: "About",
};

const ContactUsPage = () => {
  return (
    <section className="bg-white pb-8 md:pb-10 lg:pb-12 xl:pb-16">
      <div className="">
        <div className="flex flex-col w-full gap-y-12">
          <div className="relative flex flex-col justify-center items-center h-[22rem] overflow-hidden before:absolute before:z-10 before:h-full before:w-full before:bg-gray-700 before:opacity-10 before:content-['']">
            <Image src={plan3} alt="" className="object-cover h-full" />
          </div>
          <div className="px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
            <div className="flex flex-col gap-y-4 md:gap-y-6 text-center md:max-w-xl mx-auto mb-12">
              <span className="text-2xl font-bold">About Us</span>
              <p className="sm:text-lg">
                At Blif Investments, we blend creativity with technical
                expertise to bring your architectural visions to life. Our team
                of seasoned architects, designers, and construction specialists
                is committed to delivering innovative house plans and top-tier
                construction management services tailored to your needs.
              </p>
            </div>
            <div className="flex flex-col gap-y-12 lg:gap-y-0">
              <div className="flex flex-col gap-y-12 lg:flex-row">
                <div className="w-full mx-auto lg:w-1/2">
                  <Image src={plan3} alt="" className="rounded-xl lg:rounded-3xl lg:rounded-br-none"/>
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
              <div className="flex flex-col gap-y-12 lg:flex-row">
                <div className="w-full mx-auto lg:w-1/2 lg:order-last">
                  <Image src={plan3} alt="" className="rounded-xl lg:rounded-3xl lg:rounded-tl-none" />
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
            </div>
            <div className="mt-12 max-w-lg mx-auto w-full bg-slate-200 py-2">
              <p className="text-center text-xl">
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
