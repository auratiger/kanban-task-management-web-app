import React from "react";

import ToggleSidebarButton from "../Button/ToggleSidebarButton";
import BoardIcon from "../icons/BoardIcon";
import ThemeToggle from "../Input/ThemeToggle";
import OpenPortalButton from "../OpenPortalButton";

import BoardItem from "./BoardItem";
import BoardLinks from "./BoardLinks";

import { PORTALS } from "@/enums/portals";
import { store } from "@/store";

export default async function Sidebar() {
  const boards = store.getState().board.boards;
  const count: number = boards.length;

  return (
    <>
      <aside className="sidebar sidebar-dark place-content-start gap-4 overflow-hidden whitespace-nowrap py-8">
        <span className="px-8 uppercase">{`All boards (${count})`}</span>
        <div className="mb-auto grid gap-2">
          <BoardLinks boards={boards} />

          <BoardItem secondary renderIcon={() => <BoardIcon />}>
            <OpenPortalButton
              text="+ Create New Board"
              portal={PORTALS.CREATE_BOARD}
              unstyled
            />
          </BoardItem>
        </div>

        <div className="px-8">
          <ThemeToggle />
        </div>

        <BoardItem>
          <ToggleSidebarButton />
        </BoardItem>
      </aside>
    </>
  );
}
