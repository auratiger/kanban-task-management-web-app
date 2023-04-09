"use client";

import React from "react";
import { MultipleContainers } from "./dnd/MultipleContainers";

interface ColumnProps {
  columns: Array<any>;
}

const Board = ({ columns }: ColumnProps) => {
  return <MultipleContainers />;
};

export default Board;
