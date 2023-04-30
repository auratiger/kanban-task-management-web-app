"use client";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import useLocalStorage, { KEYS } from "@/hooks/useLocalStorage";
import { RootState } from "@/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const HomeRedirect = () => {
  const router = useRouter();
  const boards = useAppSelector((state) => state.board.boards);
  const [boardId, setBoardId] = useLocalStorage<string>(KEYS.BOARD);

  if (typeof window === "undefined") {
    return null;
  }

  if (boardId) {
    router.push(`board/${boardId}`);
  } else {
    const id: string = boards[0].id;
    setBoardId(id);
    router.push(`board/${id}`);
  }

  return null;
};

export default HomeRedirect;
