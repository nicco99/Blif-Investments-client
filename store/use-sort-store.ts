import { create } from "zustand";

interface SortState {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

export const useSortStore = create<SortState>((set) => ({
  sortBy: "none",
  setSortBy: (sortBy) => set({ sortBy }),
}));
