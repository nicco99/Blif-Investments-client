"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import logo from "@/public/new-logo.png"

export const Logo = () => {
  const router = useRouter();

  return (
    <div
      className="flex items-center cursor-pointer select-none justify-self-center lg:justify-self-start"
      onClick={() => router.push("/")}
    >
      <Image src={logo} priority alt="Blif" className="aspect-video object-cover h-16 w-32" />
    </div>
  );
};
