import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

const ContactUsPage = () => {
  return (
    <section className="bg-slate-200 py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="px-5 md:px-8 lg:px-12">
        <div className="flex flex-col w-full gap-y-12 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-5 text-center">
            Welcome to Blif Investments
          </h1>
          <div className="flex flex-col gap-y-5 md:gap-y-6 lg:gap-y-8">
            <p className="">
              At Blif Investments, we blend creativity with technical expertise
              to bring your architectural visions to life. Our team of seasoned
              architects, designers, and construction specialists is committed
              to delivering innovative house plans and top-tier construction
              management services tailored to your needs.
            </p>
            <div className="flex flex-col gap-y-3">
              <h3 className="font-bold text-lg">Our Services</h3>
              <ul className="list-disc list-inside space-y-3">
                <li className="">
                  <span className="font-bold">Architectural Design:</span>{" "}
                  Crafting bespoke designs for residential and commercial
                  spaces.
                </li>
                <li className="">
                  <span className="font-bold">Construction Management:</span>{" "}
                  Overseeing projects from conception to completion with
                  precision and care.
                </li>
                <li className="">
                  <span className="font-bold">
                    Building Information Modeling (BIM):
                  </span>{" "}
                  Utilizing advanced technology to enhance project efficiency
                  and accuracy.
                </li>
                <li className="">
                  <span className="font-bold">Construction Documentation:</span>{" "}
                  Providing detailed and comprehensive documentation for
                  seamless execution.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-3">
              <h3 className="font-bold text-lg">Why Choose Us?</h3>
              <ul className="list-disc list-inside space-y-3">
                <li className="">
                  <span className="font-bold">Personalized Solutions:</span> We
                  tailor our services to meet your unique requirements.
                </li>
                <li className="">
                  <span className="font-bold">Integrated Approach:</span> We
                  ensure cohesive design and construction processes by
                  collaborating with other design professionals.
                </li>
                <li className="">
                  <span className="font-bold">Quality Control:</span> Continuous
                  oversight and value engineering to deliver exceptional
                  outcomes.
                </li>
              </ul>
            </div>
            <p>Explore our portfolio and discover how we can transform your space with innovative design and expert management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
