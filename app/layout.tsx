import type { Metadata } from "next";
import { Dosis } from "next/font/google";

import { MarqueeComp } from "@/components/Marquee";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "@/app/globals.css";

const font = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Blif Investment",
    template: "%s | Blif Investment"
  },
  description: "We design and build modern affordable homes in Kenya.",
  openGraph: {
    title: 'Blif Investment',
    description: "",
    type: "website",
    locale: "en-US",
    url: "https://blifinvestment.com/",
    siteName: "Blif Investment",
    images: [
      {
        url: "https://blifinvestment.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blif Investment"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MarqueeComp />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
