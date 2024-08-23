import { DEFAULT_FILTER, ProductState } from "@/lib/validators";
import { create } from "zustand";

type FilterStoreProps = {
  filters: ProductState;
  setFilters: (filter: ProductState) => void;
  reset: () => void;
};


export const useFilterStore = create<FilterStoreProps>((set) => ({
  filters: DEFAULT_FILTER,
  setFilters: (filters) => set({ filters }),
  reset: () => set({ filters: DEFAULT_FILTER }),
}));
