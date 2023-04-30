"use client";

import { useRef } from "react";

import { store } from "@/store";
import { setBoards, setCurrentBoard } from "@/store/boardSlice";
import { Board } from "@/types";

function Preloader({ boards }: { boards: Array<Board> }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setBoards(boards));
    loaded.current = true;
  }

  return null;
}

export function CurrentBoardPreloader({ board }: { board: Board }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setCurrentBoard(board));
    loaded.current = true;
  }

  return null;
}

export default Preloader;
