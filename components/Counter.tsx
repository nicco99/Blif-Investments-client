"use client";

import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(false);
  return (
    <section className="bg-slate-100 w-full pb-24">
      {/* @ts-ignore */}
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="flex flex-col items-center justify-center max-w-max mx-auto">
          <h2 className="font-bold text-[12rem] bg-gradient-to-b from-gray-400 via-gray-300 to-gray-200 text-transparent bg-clip-text">
            +{counter && <CountUp end={5000} />}
          </h2>
          <p className="font-bold text-3xl tracking-tighter">
            Dream homes brought to life with Blif Investments
          </p>
        </div>
      </ScrollTrigger>
    </section>
  );
};
