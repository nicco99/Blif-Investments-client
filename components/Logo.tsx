// "use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
//   const router = useRouter();

  return (
    <div
      className="flex items-center cursor-pointer select-none"
    //   onClick={() => router.push("/")}
    >
      <Image src="/logo2.webp" alt="Blif" width={64} height={64} />
      <p className="text-lg font-bold text-main">Blif Investments</p>
    </div>
  );
};
