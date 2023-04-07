import React from "react";

import BoardIcon from "./icons/BoardIcon";

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
    <aside className="sidebar sidebar-dark place-content-start gap-4 overflow-hidden p-8">
      <span className="uppercase">{`All boards (${count})`}</span>
      <div className="grid gap-2">
        <span className=""></span>
        <span className=""></span>
        {boards.map((board, index) => {
          return (
            <div
              key={index}
              className={`relative flex items-center gap-2 py-2 ${
                board.active &&
                "text-white before:absolute before:inset-0 before:-z-10 before:-translate-x-1/2 before:rounded-full before:bg-purple before:px-[200px] before:content-['']"
              }`}
            >
              <BoardIcon />
              <span>{board.name}</span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <BoardIcon />
        <button className="text-purple">+ Create New Board</button>
      </div>
    </aside>
  );
};

export default Sidebar;
