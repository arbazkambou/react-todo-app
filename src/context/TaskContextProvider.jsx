import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  const [showPending, setShowPending] = useState(true);

  useEffect(() => {
    // Load todos and completed tasks from localStorage when the component mounts

    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const storedCompleted = JSON.parse(localStorage.getItem("completed")) || [];

    setTodos(() => storedTodos);
    setCompleted(() => storedCompleted);
  }, []);

  useEffect(() => {
    // Save todos to localStorage whenever they change
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    // Save completed tasks to localStorage whenever they change
    if (completed.length > 0) {
      localStorage.setItem("completed", JSON.stringify(completed));
    }
  }, [completed]);

  function onUpdate(data, id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, name: data.name, description: data.description }
          : todo
      )
    );
  }

  function onComplete(id) {
    setCompleted((completed) => [
      ...completed,
      ...todos.filter((todo) => todo.id === id),
    ]);

    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function onDelete(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    setCompleted((completed) => completed.filter((todo) => todo.id !== id));
  }

  return (
    <TaskContext.Provider
      value={{
        showPending,
        setShowPending,
        todos,
        setTodos,
        completed,
        setCompleted,
        onDelete,
        onUpdate,
        onComplete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
