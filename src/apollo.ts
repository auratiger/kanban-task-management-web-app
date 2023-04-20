import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  // if (!client || typeof window === "undefined") {
  if (!client) {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clgjc056m2ijk01uj9kcrg5bq/master",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
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
