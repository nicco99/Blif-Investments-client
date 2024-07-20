import Marquee from "react-fast-marquee";

export const MarqueeCenter = () => {
  return (
    <section className="bg-white pb-8 md:pb-10 lg:pb-12 xl:pb-16">
      <Marquee speed={100} className="no-scrollbar">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="mx-10">
            <p className="font-bold sm:text-lg md:text-xl lg:text-2xl">
              Build Your Dream Home: Discover Our Exceptional Design Plans
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
