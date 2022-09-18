import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      title: "header",
      id: 1,
      isCompleted: false,
    },
    {
      title: "main",
      id: 2,
      isCompleted: false,
    },
    {
      title: "footer",
      id: 3,
      isCompleted: false,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTodo: (state, action) => {
      return {
        todoList: [...state.todoList, action.payload],
      };
    },
    removeTodo: (state) => {
      return state;
    },
  },
});

export const { addNewTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
