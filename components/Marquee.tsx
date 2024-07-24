import { Marquee } from "./ui/marquee";

export const MarqueeComp = () => {
  return (
    <Marquee
      time={80}
      amount={3}
      className="bg-black text-white shrink-0"
    >
      <div className="flex items-center justify-between grow-0">
        <p className="text-[11px] md:text-sm font-bold">
          Unlock Savings: 30% Off for a Limited Time Applied Automatically at
          Checkout. Shop Now!
        </p>
      </div>
    </Marquee>
  );
};
