"use client";

import React from "react";
import Column from "./Column";
import { MultipleContainers } from "./dnd/MultipleContainers";
import SkeletonColumn from "./SkeletonColumn";

interface ColumnProps {
  columns: Array<any>;
}

const Board = ({ columns }: ColumnProps) => {
  const isBoardEmpty: boolean = columns.length <= 0;

  return (
    <>
      {/* <section className="flex items-start gap-8 overflow-auto"> */}
      {/*   {columns.map(({ name, tasks }, index: number) => { */}
      {/*     return <Column key={index} name={name} tasks={tasks} />; */}
      {/*   })} */}

      {/*   {!isBoardEmpty && <SkeletonColumn />} */}
      {/* </section> */}
      <MultipleContainers />
    </>
  );
};

export default Board;
