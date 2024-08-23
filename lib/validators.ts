import { z } from "zod";

export const BEDROOM_DEFAULTS = ["1", "2", "3", "4"] as const;
export const NONAME = [
  {
    label: "Bedrooms",
    category: "bdrm",
  },
  {
    label: "Bathrooms",
    category: "btrm",
  },
  {
    label: "Floors",
    category: "flrs",
  },
] as const;

export const DEFAULT_CUSTOM_PRICE = [0, 10000000] as [number, number];
export const DEFAULT_FILTER = {
  bdrm: [],
  btrm: [],
  flrs: [],
  prce: { isCustom: false, range: DEFAULT_CUSTOM_PRICE },
};

export const FilterValidator = z.object({
  bdrm: z.array(z.enum(BEDROOM_DEFAULTS)),
  btrm: z.array(z.enum(BEDROOM_DEFAULTS)),
  flrs: z.array(z.enum(BEDROOM_DEFAULTS)),
  prce: z.tuple([z.number(), z.number()]),
});

export type ProductState = Omit<z.infer<typeof FilterValidator>, "prce"> & {
  prce: { isCustom: boolean; range: [number, number] };
};
