import Scroll from "@/app/plans/[planId]/_components/Scroll";

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
