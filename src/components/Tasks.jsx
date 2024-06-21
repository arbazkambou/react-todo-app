import { TaskContext } from "@/context/TaskContextProvider";
import { useContext } from "react";
import TaskItem from "./TaskItem";

function Tasks() {
  const { showPending, todos, completed } = useContext(TaskContext);

  return (
    <>
      {showPending
        ? todos.map((todo) => <TaskItem todo={todo} key={todo.id} />)
        : completed.map((completedTodo) => (
            <TaskItem todo={completedTodo} key={completedTodo.id} />
          ))}
    </>
  );
}

export default Tasks;
