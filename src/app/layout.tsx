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
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={` text-slate-100 scroll-smooth ${raleway.className}`}>
        {children}
      </body>
    </html>
  );
}
