import React from "react";

import { MultipleContainers } from "@/components/dnd/MultipleContainers";

// TODO: This will be deleted
const defaultInitializer = (index: number) => index;
export function createRange<T = number>(
  length: number,
  initializer: (index: number) => any = defaultInitializer
): T[] {
  return [...new Array(length)].map((_, index) => initializer(index));
}

const Board = () => {
  const itemCount = 3;
  const items: any = {
    A: createRange(itemCount, (index) => {
      return {
        uid: `A${index + 1}`,
        title: "some title",
        subtasks: [
          {
            title: "Sign up page",
            isCompleted: true,
          },
          {
            title: "Sign in page",
            isCompleted: false,
          },
          {
            title: "Welcome page",
            isCompleted: false,
          },
        ],
      };
    }),
    B: createRange(itemCount, (index) => {
      return {
        uid: `B${index + 1}`,
        title: "ticket two very important",
        subtasks: [
          {
            title: "Sign in page",
            isCompleted: false,
          },
          {
            title: "Welcome page",
            isCompleted: false,
          },
        ],
      };
    }),
    // B: createRange(itemCount, (index) => `B${index + 1}`),
    // C: createRange(itemCount, (index) => `C${index + 1}`),
    // D: createRange(itemCount, (index) => `D${index + 1}`),
  };

  return <MultipleContainers items={items} />;
};

export default Board;
