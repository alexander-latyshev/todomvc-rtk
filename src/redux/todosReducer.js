import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
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
    removeTodo: (state, action) => {
      const filteredTodos = state.todoList.filter((todo) => {
        return todo.id !== action.payload;
      });
      return {
        ...state,
        todoList: filteredTodos,
      };
    },
    toggleTodo: (state, action) => {
      const changedTodo = state.todoList.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        } else
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
      });
      return {
        ...state,
        todoList: changedTodo,
      };
    },
  },
});

export const { addNewTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
