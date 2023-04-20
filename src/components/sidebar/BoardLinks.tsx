"use client";

import useLocalStorage, { KEYS } from "@/hooks/useLocalStorage";
import Link from "next/link";
import React from "react";
import BoardIcon from "../icons/BoardIcon";
import { BoardItem } from "./Sidebar";

const BoardLinks = ({ boards }) => {
  const [boardId, setBoardId] = useLocalStorage<string>(KEYS.BOARD);

  const handleNavigation = (boardId: string) => {
    setBoardId(boardId);
  };

  return boards.map(({ id, name }, index: number) => {
    return (
      <BoardItem
        key={index}
        active={id === boardId}
        renderIcon={() => <BoardIcon />}
      >
        <Link onClick={() => handleNavigation(id)} href={`/board/${id}`}>
          {name}
        </Link>
      </BoardItem>
    );
  });
};

export default BoardLinks;
