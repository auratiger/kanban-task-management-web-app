export interface Board {
  id: string;
  name: string;
  columns: Array<Column>;
}

export interface Column {
  id: string;
  name: string;
  tasks: Array<Task>;
}

export interface Task {
  id: string;
  title: string;
  status: string;
  subtasks: Array<Subtask>;
}
export interface Subtask {
  id: string;
  title: string;
  isComplete: boolean;
}
