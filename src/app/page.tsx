import { getClient } from "@/apollo";
import HomeRedirect from "@/app/redirect";
import { GET_BOARDS } from "graphql/boards";

export default async function Home() {
  const client = getClient();
  const {
    data: { boards },
  } = await client.query({ query: GET_BOARDS });

  return <HomeRedirect boards={boards} />;
}
