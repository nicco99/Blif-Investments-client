import { Marquee } from "./ui/marquee";

export const MarqueeComp = () => {
  return (
    <Marquee
      time={80}
      amount={5}
      className="hidden sm:block bg-black text-white shrink-"
    >
      <div className="flex items-center justify-betwee grow-0">
        <p className="text-[11px] md:text-sm font-bold">
          Unlock Savings: 30% Off for a Limited Time Applied Automatically at
          Checkout. Shop Now!
        </p>
      </div>
    </Marquee>
  );
};
