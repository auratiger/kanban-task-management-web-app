import { boards } from "sampleData/data";

import { GET_BOARDS } from "graphql/boards";
import { getClient } from "@/apollo";

import Board from "@/components/Board";
import Button from "@/components/Button/Button";

export default async function Home() {
  const board = boards[0];
  const isBoardEmpty: boolean = board.columns.length <= 0;

  const client = getClient();
  const { data } = await client.query({ query: GET_BOARDS });

  console.log(data);

  return (
    <main className="scrollbar m-1 flex flex-1 overflow-auto bg-grey-light p-8 dark:bg-grey-vdark">
      {isBoardEmpty && (
        <div className="flex flex-1 flex-col items-center gap-4 self-center justify-self-center">
          <span>This board is empty. Create a new column to get started.</span>
          <Button text="+ Add New Column" />
        </div>
      )}

      <Board />
    </main>
  );
}
