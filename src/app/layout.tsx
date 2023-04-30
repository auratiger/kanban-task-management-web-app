import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

import { GET_BOARDS } from "graphql/boards";

import Header from "@/components/Header";
import Preloader from "@/components/Preloader";

import { Providers } from "./providers";

import "../../styles/globals.scss";

import { grafbase } from "@/grafbase";
import { store } from "@/store";
import { setBoards } from "@/store/boardSlice";
import { Board } from "@/types";

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
  const { boards }: { boards: Array<Board> } = await grafbase.request(
    GET_BOARDS
  );
  store.dispatch(setBoards(boards));

  return (
    <html lang="en" className={`${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <title>Mike van Peeren</title>
      </head>
      <body className="bg-grey-light dark:bg-grey-vdark">
        <Preloader boards={boards} />
        <Providers>
          <Header />
          {children}
          <div id="portal"></div>
        </Providers>
      </body>
    </html>
  );
}
