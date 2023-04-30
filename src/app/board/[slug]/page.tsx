import { GET_BOARD } from "graphql/boards";

import Button from "@/components/Button/Button";
import { Items, MultipleContainers } from "@/components/dnd/MultipleContainers";
import { CurrentBoardPreloader } from "@/components/Preloader";

import { grafbase } from "@/grafbase";
import { store } from "@/store";
import { setCurrentBoard } from "@/store/boardSlice";
import { Board } from "@/types";

function convertColumnsToItems(columns: any): Items {
  const items: any = {};

  columns?.forEach((column: any) => {
    items[column.name] = column.tasks.map((task: any) => ({
      id: task.id,
      title: task.title,
      subtasks: task.subtasks,
    }));
  });

  return items;
}

export default async function Home({ params: { slug } }) {
  const { board }: { board: Board } = await grafbase.request(GET_BOARD, {
    id: slug,
  });

  store.dispatch(setCurrentBoard(board));

  const isBoardEmpty: boolean = board.columns.length <= 0;
  const items: Items = convertColumnsToItems(board.columns);

  return (
    <>
      <main className="scrollbar m-1 flex flex-1 overflow-auto bg-grey-light p-8 dark:bg-grey-vdark">
        <CurrentBoardPreloader board={board} />
        {isBoardEmpty && (
          <div className="flex flex-1 flex-col items-center gap-4 self-center justify-self-center">
            <span>
              This board is empty. Create a new column to get started.
            </span>
            <Button text="+ Add New Column" />
          </div>
        )}
        <MultipleContainers items={items} />
      </main>
    </>
  );
}
