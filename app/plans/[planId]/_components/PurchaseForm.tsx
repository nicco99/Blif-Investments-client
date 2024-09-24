"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const PurchaseForm = ({ price }: { price: string }) => {
  const [fileType, setFileType] = useState("CAD + PDF");
  const [archDrawings, setArchDrawings] = useState(true);
  const [structDrawings, setStructDrawings] = useState(false);

  const calculatePrice = () => {
    let basePrice = 300;
    if (fileType === "CAD + PDF") basePrice += 24;
    if (structDrawings) basePrice += 100;
    return basePrice;
  };

  return (
    <div className="w-full">
      {/* File Type */}
      <div className="p-4 mb-4 border border-gray-300 rounded-md">
        <label className="block mb-2 font-bold sm:text-xl">File Type</label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="fileType"
              value="CAD + PDF"
              checked={fileType === "CAD + PDF"}
              onChange={() => setFileType("CAD + PDF")}
              className="mr-2"
            />
            CAD + PDF
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="fileType"
              value="PDF"
              checked={fileType === "PDF"}
              onChange={() => setFileType("PDF")}
              className="mr-2"
            />
            PDF
          </label>
        </div>
      </div>

      {/* Drawing Sets */}
      <div className="p-4 mb-6 border border-gray-300 rounded-md">
        <label className="block mb-2 font-bold sm:text-xl">Drawing Sets</label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={archDrawings}
              onChange={() => setArchDrawings(!archDrawings)}
              className="mr-2"
            />
            Architectural Drawings
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={structDrawings}
              onChange={() => setStructDrawings(!structDrawings)}
              className="mr-2"
            />
            Structural Drawings
          </label>
        </div>
      </div>

      {/* Buy Now Button */}
      <Button className="w-full py-4 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
        <div className="w-full space-x-4">
          <span>Buy Now</span>
          <span>{price}</span>
        </div>
      </Button>
    </div>
  );
};
