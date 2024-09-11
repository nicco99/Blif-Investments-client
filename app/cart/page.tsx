import { ShoppingBag } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  openGraph: {
    title: "Cart | Blif Investment",
    type: "article",
    locale: "en-US",
    url: "https://blifinvestment.com/cart",
    siteName: "Blif Investment",
    images: [
      {
        url: "https://blifinvestment.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cart | Blif Investment",
      },
    ],
  },
};

const CartPage = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="px-5 md:px-8 lg:px-12">
        <div className="flex flex-col items-center w-full gap-y-12 max-w-[1600px] mx-auto">
          <ShoppingBag className="w-16 h-16" />
          <h1 className="text-3xl font-bold text-center md:text-4xl">
            Cart is Empty!
          </h1>
          <p className="text-center">Please add some items to the cart.</p>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
