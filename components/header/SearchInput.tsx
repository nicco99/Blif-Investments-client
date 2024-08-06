"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import useDebounce from "@/hooks/useDebounce";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const debouncedSearch = useDebounce(value, 500);
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
    <div className="w-full flex justify-center">
      <div className="flex items-center justify-center border-b-2 border-slate-300 px-2 py-2 max-w-lg">
        <Search className="h-10 w-10 mr-2 text-gray-400 group-hover:text-white transition-all ease-in-out duration-300" />
        <input
          ref={inputRef}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
          }}
          value={value}
          maxLength={50}
          className="w-full border-none bg-transparent text-xl py-3 text-gray-600 outline-none placeholder:text-gray-400 md:text-2xl lg:text-4xl"
          placeholder="What are you looking for?"
        />
      </div>
    </div>
  );
};
