import { z } from "zod";

export const BEDROOM_DEFAULTS = ["1", "2", "3", "4"] as const;

export const FilterValidator = z.object({
  bdrm: z.array(z.enum(BEDROOM_DEFAULTS)),
  btrm: z.array(z.enum(BEDROOM_DEFAULTS)),
  flrs: z.array(z.enum(BEDROOM_DEFAULTS)),
  prce: z.tuple([z.number(), z.number()]),
});

export type ProductState = Omit<z.infer<typeof FilterValidator>, "prce"> & {
  prce: { isCustom: boolean; range: [number, number] };
};
