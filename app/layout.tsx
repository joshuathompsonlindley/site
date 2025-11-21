import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import React from "react";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshua Thompson-Lindley",
  description:
    "a full-stack developer passionate about building elegant solutions to complex problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-stone-100">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
