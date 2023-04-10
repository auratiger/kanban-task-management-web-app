import React from "react";

import classNames from "classnames";
import { boards } from "sampleData/data";

import BoardIcon from "./icons/BoardIcon";
import ThemeToggle from "./ThemeToggle";
import ToggleSidebarButton from "./ToggleSidebarButton";

const Sidebar = () => {
  const count: number = boards.length;

  return (
    <aside className="sidebar sidebar-dark place-content-start gap-4 overflow-hidden whitespace-nowrap">
      <span className="uppercase">{`All boards (${count})`}</span>
      <div className="mb-auto grid gap-2">
        {boards.map((board, index) => {
          return (
            <BoardsItem key={index} name={board.name} active={index === 0} />
          );
        })}
        <BoardsItem name={"+ Create New Board"} secondary />
      </div>

      <ThemeToggle />
      <ToggleSidebarButton />
    </aside>
  );
};

interface BoardsItemProps {
  name: string;
  active?: boolean;
  secondary?: boolean;
  onClick?: () => void;
  className?: string;
}

const BoardsItem = ({
  name,
  active = false,
  secondary = false,
  onClick,
  className,
}: BoardsItemProps) => {
  return (
    <div
      className={classNames(
        "relative isolate flex items-center gap-2 fill-[#828FA3] py-2",
        active && "active-item fill-white text-white before:bg-purple",
        "hover:active-item hover:fill-purple hover:text-purple hover:before:bg-purple/10 hover:dark:before:bg-white",
        secondary && "fill-purple text-purple",
        `${className}`
      )}
    >
      <BoardIcon />
      <button onClick={onClick}>{name}</button>
    </div>
  );
};

export default Sidebar;
