import { useContext } from "react";
import { TasksContext } from "../../context/todoList/TasksContext";

export function useTasks() {
  const tasksState = useContext(TasksContext);
  if (!tasksState) throw Error("useTasks must be used within TasksProvider");
  return tasksState;
}
