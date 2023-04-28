import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  // if (!client || typeof window === "undefined") {
  if (!client) {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "http://localhost:8001/graphql",
      }),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "cache-and-network",
        },
      },
    });
  }

  return client;
};
