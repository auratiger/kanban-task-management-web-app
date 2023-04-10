import { boards } from "sampleData/data";

import Board from "@/components/Board";
import Button from "@/components/Button";

export default function Home() {
  const board = boards[0];
  const isBoardEmpty: boolean = board.columns.length <= 0;

  return (
    <main className="scrollbar m-1 flex flex-1 overflow-auto bg-grey-light p-8 dark:bg-grey-vdark">
      {isBoardEmpty && (
        <div className="flex flex-1 flex-col items-center gap-4 self-center justify-self-center">
          <span>This board is empty. Create a new column to get started.</span>
          <Button text="+ Add New Column" />
        </div>
      )}

      <Board columns={board.columns} />
    </main>
  );
}
