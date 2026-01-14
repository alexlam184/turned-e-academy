import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turned-E Academy | STEM Education in Canada",
  description:
    "Turned-E Academy brings hands-on STEM programs, coding, robotics, and design challenges to students across Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
