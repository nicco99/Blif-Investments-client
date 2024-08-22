import { Marquee } from "@/components/ui/marquee";

export const MarqueeCenter = () => {
  return (
    <section className=" hidden sm:block py-8 md:py-10 lg:py-12 xl:py-16">
      <Marquee time={50} amount={4}>
        <div className="mx-10">
          <p className="font-bold sm:text-lg md:text-xl lg:text-2xl w-max">
            Build Your Dream Home: Discover Our Exceptional Design Plans
          </p>
        </div>
      </Marquee>
    </section>
  );
};
