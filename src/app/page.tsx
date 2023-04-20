import { getClient } from "@/apollo";
import { GET_BOARDS } from "graphql/boards";
import { redirect } from "next/navigation";

export default async function Home() {
  const client = getClient();
  const {
    data: { boards },
  } = await client.query({ query: GET_BOARDS });

  const data = client.readQuery({
    query: GET_BOARDS,
  });

  console.log("cache23", data);

  redirect(`board/${boards[0].id}`);
}
