import Link from "next/link";
import type { Metadata } from "next/types";
export const metadata: Metadata = {
  title: "Not found",
};
export default function NotFound() {
  return (
    <div className="my-36 flex h-full items-center justify-center text-center">
      <div className="flex flex-col">
        <h1 className="mr-4 text-4xl">Not found</h1>
        <p className="text-md">
          This page could not be found. Go{" "}
          <Link className="tracking-wide text-teal-700" href="/">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
