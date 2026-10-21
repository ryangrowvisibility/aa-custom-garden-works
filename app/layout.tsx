import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const head = Libre_Baskerville({ variable: "--font-head", subsets: ["latin"], weight: ["700"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "AA Custom Garden Works | Concrete, Block Walls & Turf in Bakersfield",
  description:
    "Bakersfield backyard contractor owned by Jose Bravo: concrete patios and driveways, block walls, artificial turf, irrigation and full backyard renovations. 5.0 stars from 46 Google reviews. Call (661) 379-9664.",
  openGraph: {
    title: "AA Custom Garden Works | Bakersfield Backyards",
    description: "Concrete, block walls, artificial turf and full backyard makeovers by Jose Bravo's crew. 5.0 stars, 46 Google reviews. Call (661) 379-9664.",
    type: "website",
    locale: "en_US",
    images: ["/images/photo3.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
