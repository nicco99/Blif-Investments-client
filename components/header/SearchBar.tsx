"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const SearchBar = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/search")}
      variant="ghost"
      className="flex items-center cursor-pointer justify-self-end hover:bg-transparent hover:scale-110 transition-all ease-in-out duration-150"
    >
      <Search aria-label="search" className="h-6 w-6" />
    </Button>
  );
};
