"use client";

import useLocalStorage, { KEYS } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

const HomeRedirect = ({ boards }) => {
  const router = useRouter();
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
