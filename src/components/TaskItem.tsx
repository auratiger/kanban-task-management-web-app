import React from "react";

interface ColumnProps {
  title: string;
  subtasks: Array<any>;
}

const TaskItem = ({ title, subtasks }: ColumnProps) => {
  const completeSubstasks = subtasks.reduce((acc: number, current) => {
    if (current.isCompleted) return acc + 1;
    else return acc;
  }, 0);

  return (
    <div className="grid rounded-lg bg-grey-dark hover:bg-grey-sdark px-4 py-5">
      <span className="text-head-md">{title}</span>
      <span className="text-grey-medium">{`${completeSubstasks} of ${subtasks.length} subtasks`}</span>
    </div>
  );
};

export default TaskItem;
