import clsx from "clsx";
import { useTasks } from "../../hooks/todoList/useTasks";
import penStrokeEffect1Path from "../../assets/audio/pen-stroke-1.mp3";

type Props = {
  label: string;
  isDone: boolean;
  isFavorite: boolean;
};

export default function Task(props: Props) {
  const tasksState = useTasks();
  const penStrokeEffect1 = new Audio(penStrokeEffect1Path);

  const toggleDone = () => {
    if (!props.isDone) penStrokeEffect1.play();

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

  const deleteTask = () => {
    tasksState.setTasks((prevTasks) =>
      prevTasks.filter((task) => task.label !== props.label),
    );
  };

  return (
    <div className="flex justify-between items-center px-[20px] border-1 border-[#eee] rounded-[15px] h-[60px] md:h-[65px] animate-float-show [animation-duration:300ms]">
      <div className="flex items-center gap-[10px] md:gap-[20px]">
        <div
          className="text-primary text-[20px] md:text-[22px] cursor-pointer"
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
        <span
          className={clsx(
            "relative transition:colors duration-300 text-[15px] md:[font-size:inherit] before:h-[2px] before:bg-text-color-light before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:transition-[width]",
            props.isDone ? "text-text-color-light before:w-full" : "before:w-0",
          )}
        >
          {props.label}
        </span>
      </div>
      <div className="flex items-center gap-[15px]">
        <div
          title="add to favorites"
          className="text-text-color-light cursor-pointer transition-colors duration-300 hover:text-amber-300"
          onClick={toggleFavorite}
        >
          <i
            className={clsx(
              props.isFavorite ? "fa-solid fa-star" : "fa-regular fa-star",
            )}
          ></i>
        </div>
        <div
          title="delete task"
          className="text-text-color-light cursor-pointer transition-colors duration-300 hover:text-red-500"
          onClick={deleteTask}
        >
          <i className="fa-solid fa-minus"></i>
        </div>
      </div>
    </div>
  );
}
