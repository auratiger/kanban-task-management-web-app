"use client";

import { getClient } from "@/apollo";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  const client = getClient();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ThemeProvider>
  );
}
