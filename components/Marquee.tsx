import Marquee from "react-fast-marquee";

export const MarqueeComp = () => {
  return (
    <div className="bg-black text-white py-2.5 md:py-3.5">
      <Marquee speed={50}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center grow-0">
            <p className="text-[11px] md:text-sm font-bold">
              Unlock Savings: 30% Off for a Limited Time Applied Automatically
              at Checkout. Shop Now!
            </p>
            <div className="w-1.5 h-1.5 rounded-full bg-white mx-16" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
