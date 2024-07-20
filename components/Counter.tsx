"use client";

import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(false);
  return (
    <section className="bg-white px-5 pb-8 md:pb-10 lg:pb-12 xl:pb-16">
      {/* @ts-ignore */}
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="flex flex-col items-center justify-center max-w-max mx-auto">
          <h2 className="font-bold text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] bg-gradient-to-b from-gray-500 via-gray-400 to-gray-300 text-transparent bg-clip-text">
            +{counter && <CountUp end={5000} />}
          </h2>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl text-center tracking-tighter">
            Dream homes brought to life with Blif Investments
          </p>
        </div>
      </ScrollTrigger>
    </section>
  );
};
