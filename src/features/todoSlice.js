import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  completed: [],
};

const loadedInitialState =
  JSON.parse(localStorage.getItem("todos")) || initialState;

function saveToLocalStorage(state) {
  localStorage.setItem("todos", JSON.stringify(state));
}
const todoSlice = createSlice({
  name: "todo",
  initialState: loadedInitialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        name: action.payload.name,
        description: action.payload.description,
      };
      state.todos.push(todo);
      saveToLocalStorage(state);
    },
    removeTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );

      if (todoIndex !== -1) {
        state.todos.splice(todoIndex, 1);
      }

      const completeIndex = state.completed.findIndex(
        (complete) => complete.id === action.payload
      );

      if (completeIndex !== -1) {
        state.completed.splice(completeIndex, 1);
      }

      saveToLocalStorage(state);
    },

    updateTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (todoIndex !== -1) {
        state.todos[todoIndex] = {
          ...state.todos[todoIndex],
          name: action.payload.name,
          description: action.payload.description,
        };
      }

      saveToLocalStorage(state);
    },

    completeTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (todoIndex !== -1) {
        state.completed.push(state.todos[todoIndex]);
        state.todos.splice(todoIndex, 1);
      }

      saveToLocalStorage(state);
    },
  },
});

export const { addTodo, removeTodo, updateTodo, completeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
