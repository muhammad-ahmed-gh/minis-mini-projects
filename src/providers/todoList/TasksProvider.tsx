import { useState, type ReactNode } from "react";
import { TasksContext } from "../../context/todoList/TasksContext";
import type { Task } from "../../types/todoList/todoListTypes";

type Props = {
  children: ReactNode | ReactNode[];
};

export function TasksProvider(props: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      label: "do the laundry",
      isDone: false,
      isFavorite: false,
    },
    {
      label: "do the dishes",
      isDone: true,
      isFavorite: false,
    },
    {
      label: "do the things",
      isDone: false,
      isFavorite: true,
    },
  ]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {props.children}
    </TasksContext.Provider>
  );
}
