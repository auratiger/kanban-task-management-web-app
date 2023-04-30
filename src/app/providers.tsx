"use client";

import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";

import { store } from "@/store";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Provider store={store}>{children}</Provider>;
    </ThemeProvider>
  );
}
