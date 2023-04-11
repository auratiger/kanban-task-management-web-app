"use client";

import React from "react";

import { MultipleContainers } from "./dnd/MultipleContainers";
import { createRange } from "./dnd/utilities";

interface ColumnProps {
  columns: Array<any>;
}

const Board = ({ columns }: ColumnProps) => {
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
