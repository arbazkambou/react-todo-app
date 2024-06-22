import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

function Tasks({ showPending }) {
  const todos = useSelector((state) => state.todos);
  const completed = useSelector((state) => state.completed);

  return (
    <>
      {showPending
        ? todos.map((todo) => <TaskItem todo={todo} key={todo.id} />)
        : completed.map((completedTodo) => (
            <TaskItem
              todo={completedTodo}
              key={completedTodo.id}
              isCompleted={true}
            />
          ))}
    </>
  );
}

export default Tasks;
