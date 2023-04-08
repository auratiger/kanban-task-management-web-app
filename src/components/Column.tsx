import React from "react";

import TaskItem from "./TaskItem";

interface ColumnProps {
  name: string;
  tasks: Array<any>;
}

const Column = ({ name, tasks }: ColumnProps) => {
  return (
    <section className="grid w-[300px] gap-8">
      <div className="flex items-center gap-2">
        <div className="aspect-square w-4 rounded-full bg-red-300" />
        <span className="text-head-md uppercase text-grey-medium">
          {`${name} (${tasks.length})`}
        </span>
      </div>

      <div className="grid gap-8">
        {tasks.map(({ title, subtasks }, index: number) => {
          return <TaskItem key={index} title={title} subtasks={subtasks} />;
        })}
      </div>
    </section>
  );
};

export default Column;
