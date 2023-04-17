"use client";

import { ThemeProvider } from "next-themes";

import { ApolloProvider } from "@apollo/client";

import { getClient } from "@/apollo";

export function Providers({ children }) {
  const client = getClient();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ThemeProvider>
  );
}
