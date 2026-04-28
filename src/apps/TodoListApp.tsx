import TodoListContent from "../components/todoList/Content";
import TodoListHeader from "../components/todoList/Header";
import { TasksProvider } from "../providers/todoList/TasksProvider";

export default function TodoListApp() {
  return (
    <TasksProvider>
      <section className="pt-header-h">
        <TodoListHeader />
        <TodoListContent />
      </section>
    </TasksProvider>
  );
}
