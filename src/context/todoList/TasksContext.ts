import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Task } from "../../types/todoList/todoListTypes";

type TasksContextType = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

export const TasksContext = createContext<TasksContextType | null>(null);
