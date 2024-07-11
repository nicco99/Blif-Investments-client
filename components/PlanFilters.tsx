import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const PlanFilters = () => {
  return (
    <Accordion type="multiple" className="w-full sticky top-[100px]">
      <AccordionItem value="sort" className="lg:hidden border-b-0 border-gray-400">
        <AccordionTrigger className="font-bold w-full text-start">
          Sort
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
      <AccordionItem value="type" className="border-y border-gray-400">
        <AccordionTrigger className="font-bold w-full text-start">
          Product Type
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
      <AccordionItem value="bedroom" className="border-b border-gray-400">
        <AccordionTrigger className="font-bold w-full text-start">
          Number of Bedrooms
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
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
