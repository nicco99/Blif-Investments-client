"use client"

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Input } from "./ui/input";

export const PlanFilters = () => {
  const [bathroom, setBathroom] = useState(0)
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="sort" className="lg:hidden border-b-0 border-gray-400">
        <AccordionTrigger className="font-bold w-full text-start">
          Sort
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
      <AccordionItem value="bedroom" className="border-b border-gray-400">
        <AccordionTrigger className="font-bold w-full text-start">
          Number of Bedrooms
        </AccordionTrigger>
        <AccordionContent>
          <input type="range" name="bedrooms" min="1000" max="12000" value="2000" id="bedrooms" />
          <label htmlFor="bedrooms">{bathroom}</label>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="bathroom" className="border-b border-gray-400">
        <AccordionTrigger className="font-bold w-full text-start">
          Number of Bathrooms
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
      <AccordionItem value="floor" className="border-b border-gray-400">
        <AccordionTrigger className="font-bold w-full text-start">
          Number of Floors
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
      <AccordionItem value="area" className="border-b border-gray-400">
        <AccordionTrigger className="font-bold w-full text-start">
          Area
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
      <AccordionItem value="price" className="border-b border-gray-400">
        <AccordionTrigger className="font-bold w-full text-start">
          Price
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
