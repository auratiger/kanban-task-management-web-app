import React from "react";

import { Plus_Jakarta_Sans } from "@next/font/google";

import "../../styles/globals.scss";

// If loading a variable font, you don't need to specify the font weight
const jakarta = Plus_Jakarta_Sans({
  display: "swap",
  variable: "--font-jakarta",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable}`}>
      <head>
        <title>Mike van Peeren</title>
      </head>
      <body className="bg-black">
        <div className="mx-auto max-w-screen-lg px-6 py-12">
          <div className="col-start-2">
            {/* Here you can place your Navigation */}
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
