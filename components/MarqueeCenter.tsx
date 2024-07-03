import Marquee from "react-fast-marquee";

export const MarqueeCenter = () => {
  return (
    <section className="bg-slate-100 pb-16">
      <Marquee speed={100}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="mx-10">
            <p className="font-bold text-2xl">
              Build Your Dream Home: Discover Our Exceptional Design Plans
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
