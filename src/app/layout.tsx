import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

export const metadata: Metadata = {
  title: "Raees Ahmed",
  description: "Manna Raees Ahmed's Portfolio",
};
const raleway: any = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={` text-slate-100 scroll-smooth ${raleway.className}`}>
        {children}
      </body>
    </html>
  );
}
