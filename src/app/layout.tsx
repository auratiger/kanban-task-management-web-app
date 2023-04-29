import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

import Header from "@/components/Header";

import { Providers } from "./providers";

import "../../styles/globals.scss";

// If loading a variable font, you don't need to specify the font weight
const jakarta = Plus_Jakarta_Sans({
  display: "swap",
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <title>Mike van Peeren</title>
      </head>
      <body className="bg-grey-light dark:bg-grey-vdark">
        <Providers>
          <Header />
          {children}
        </Providers>
        <div id="portal"></div>
      </body>
    </html>
  );
}
