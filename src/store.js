import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../src/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
