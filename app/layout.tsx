import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { MarqueeComp } from "@/components/Marquee";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blif Investments",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MarqueeComp />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
