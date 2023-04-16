import React, { ReactNode } from "react";

import classNames from "classnames";
import { boards } from "sampleData/data";

import ToggleSidebarButton from "./Button/ToggleSidebarButton";
import BoardIcon from "./icons/BoardIcon";
import ThemeToggle from "./Input/ThemeToggle";
import OpenPortalButton from "./OpenPortalButton";
import { PORTALS } from "@/enums/portals";

const Sidebar = () => {
  const count: number = boards.length;

  return (
    <>
      <aside className="sidebar sidebar-dark place-content-start gap-4 overflow-hidden whitespace-nowrap py-8">
        <span className="px-8 uppercase">{`All boards (${count})`}</span>
        <div className="mb-auto grid gap-2">
          {boards.map((board, index) => {
            return (
              <BoardItem
                key={index}
                active={index === 0}
                renderIcon={() => <BoardIcon />}
              >
                <button>{board.name}</button>
              </BoardItem>
            );
          })}
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
};

interface BoardsItemProps {
  active?: boolean;
  secondary?: boolean;
  renderIcon?: () => ReactNode;
  children?: any;
  className?: string;
}

const BoardItem = ({
  active = false,
  secondary = false,
  renderIcon,
  className,
  children,
}: BoardsItemProps) => {
  return (
    <div
      className={classNames(
        "flex w-[80%] items-center gap-2 rounded-r-full fill-[#828FA3] py-2 pl-8",
        active && "bg-purple fill-white text-white",
        "hover:bg-purple/10 hover:fill-purple hover:text-purple hover:dark:bg-white",
        secondary && "fill-purple text-purple",
        `${className}`
      )}
    >
      {renderIcon?.()}
      {children}
    </div>
  );
};

export default Sidebar;
