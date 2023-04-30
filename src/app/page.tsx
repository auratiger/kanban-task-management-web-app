import { GET_BOARDS } from "graphql/boards";

import HomeRedirect from "@/app/redirect";
import { grafbase } from "@/grafbase";

export default async function Home() {
  const { boards }: any = await grafbase.request(GET_BOARDS);

  return <HomeRedirect boards={boards} />;
}
