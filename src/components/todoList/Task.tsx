import clsx from "clsx";
import { useTasks } from "../../hooks/todoList/useTasks";

type Props = {
  label: string;
  isDone: boolean;
  isFavorite: boolean;
};

export default function Task(props: Props) {
  const tasksState = useTasks();

  const toggleDone = () => {
    tasksState.setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.label === props.label
          ? {
              label: props.label,
              isDone: !props.isDone,
              isFavorite: props.isFavorite,
            }
          : task,
      ),
    );
  };

  const toggleFavorite = () => {
    tasksState.setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.label === props.label
          ? {
              label: props.label,
              isDone: props.isDone,
              isFavorite: !props.isFavorite,
            }
          : task,
      ),
    );
  };

  return (
    <div className="flex justify-between items-center px-[20px] border-1 border-[#eee] rounded-[15px] h-[65px]">
      <div className="flex items-center gap-[20px]">
        <div
          className="text-primary text-[22px] cursor-pointer"
          onClick={toggleDone}
        >
          <i
            className={clsx(
              props.isDone
                ? "fa-solid fa-circle-check"
                : "fa-regular fa-circle",
            )}
          ></i>
        </div>
        <span>{props.label}</span>
      </div>
      <div
        className="text-text-color-light cursor-pointer"
        onClick={toggleFavorite}
      >
        <i
          className={clsx(
            props.isFavorite ? "fa-solid fa-star" : "fa-regular fa-star",
          )}
        ></i>
      </div>
    </div>
  );
}
