import { useTasks } from "../../hooks/todoList/useTasks";
import Container from "../UI/Container";
import Task from "./Task";

export default function TodoListContent() {
  const tasksState = useTasks();

  const handleAddTask = function (formData: FormData) {
    let taskLabel = formData.get("task-label");
    if (!taskLabel) return;
    taskLabel = taskLabel.toString().trim();
    if (!taskLabel) return;

    if (tasksState.tasks.some((task) => task.label === taskLabel)) return;
    tasksState.setTasks([
      ...tasksState.tasks,
      { label: taskLabel, isDone: false, isFavorite: false },
    ]);
  };

  return (
    <Container className="mt-[20px]">
      <form
        action={handleAddTask}
        className="flex bg-gray-100 rounded-[15px] md:rounded-[20px] h-[60px] md:h-[70px] transition-shadow duration-100 has-[input:focus]:ring-3 has-[input:focus]:ring-primary "
      >
        <button
          type="submit"
          className="px-[20px] text-[22px] text-text-color-light cursor-pointer"
        >
          +
        </button>
        <input
          type="text"
          placeholder="e.g. do the laundry"
          name="task-label"
          className="outline-none flex-1 placeholder:text-text-color-light"
        />
      </form>
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
