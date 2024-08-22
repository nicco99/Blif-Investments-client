"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import useDebounce from "@/hooks/useDebounce";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const debouncedSearch = useDebounce(value);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sizeSearchParams = new URLSearchParams(searchParams);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (debouncedSearch === "" || debouncedSearch === null) {
      sizeSearchParams.delete("search");
    } else {
      sizeSearchParams.set("search", debouncedSearch);
    }
    router.push(`${pathname}?${sizeSearchParams}`, { scroll: false });
  }, [debouncedSearch, router, pathname, sizeSearchParams]);

  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center justify-center max-w-lg px-2 py-2 border-b-2 border-slate-300">
        <Search className="w-10 h-10 mr-2 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-white" />
        <input
          ref={inputRef}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
          }}
          value={value}
          maxLength={50}
          className="w-full py-3 text-xl text-gray-600 bg-transparent border-none outline-none placeholder:text-gray-400 md:text-2xl lg:text-4xl"
          placeholder="What are you looking for?"
        />
      </div>
    </div>
  );
};
