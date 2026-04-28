import { useTasks } from "../../hooks/todoList/useTasks";
import Container from "../UI/Container";
import Task from "./Task";

export default function TodoListContent() {
  const tasksState = useTasks();

  return (
    <Container className="mt-[20px]">
      <div className="flex bg-gray-100 rounded-[20px] h-[70px]">
        <button
          type="button"
          className="px-[20px] text-[22px] text-text-color-light cursor-pointer"
        >
          +
        </button>
        <input
          type="text"
          placeholder="e.g. do the laundry"
          className="outline-none flex-1 placeholder:text-text-color-light"
        />
      </div>
      <div className="mt-[20px] flex flex-col gap-[10px]">
        {tasksState.tasks.map((task) => (
          <Task
            key={task.label}
            label={task.label}
            isDone={task.isDone}
            isFavorite={task.isFavorite}
          />
        ))}
      </div>
    </Container>
  );
}
