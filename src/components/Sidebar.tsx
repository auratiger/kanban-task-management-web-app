import React from "react";

import BoardIcon from "./icons/BoardIcon";
import ThemeToggle from "./ThemeToggle";
import ToggleSidebarButton from "./ToggleSidebarButton";

const boards = [
  {
    name: "Platform Launch",
    active: true,
  },
  {
    name: "Marketing Plan",
    active: false,
  },
  {
    name: "Roadmap",
    active: false,
  },
];

const Sidebar = () => {
  const count: number = boards.length;

  return (
    <aside className="sidebar sidebar-dark place-content-start gap-4 overflow-hidden whitespace-nowrap">
      <span className="uppercase">{`All boards (${count})`}</span>
      <div className="mb-auto grid gap-2">
        {boards.map((board, index) => {
          return (
            <BoardsItem key={index} name={board.name} active={board.active} />
          );
        })}
        <BoardsItem name={"+ Create New Board"} className="text-purple" />
      </div>

      <ThemeToggle />
      <ToggleSidebarButton />
    </aside>
  );
};

interface BoardsItemProps {
  name: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const BoardsItem = ({
  name,
  active = false,
  onClick,
  className,
}: BoardsItemProps) => {
  return (
    <div
      className={`relative flex items-center gap-2 py-2 ${
        active &&
        "text-white before:absolute before:inset-0 before:-z-10 before:-translate-x-1/2 before:rounded-full before:bg-purple before:px-[200px] before:content-['']"
      } ${className}`}
    >
      <BoardIcon />
      <button onClick={onClick}>{name}</button>
    </div>
  );
};

export default Sidebar;
