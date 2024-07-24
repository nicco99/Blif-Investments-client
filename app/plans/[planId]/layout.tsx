import Scroll from "@/components/Scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Scroll />
      {children}
    </>
  );
}
