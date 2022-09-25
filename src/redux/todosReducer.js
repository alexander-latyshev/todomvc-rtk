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
    toggleAllTodo: (state) => {
      const isCompletedTodo = state.todoList.every((todo) => {
        return todo.isCompleted === true;
      });

      const changedTodoList = state.todoList.map((todo) => {
        return {
          ...todo,
          isCompleted: !isCompletedTodo,
        };
      });
      return {
        ...state,
        todoList: changedTodoList,
      };
    },
    clearCompletedTodos: (state) => {
      const clearedTodos = state.todoList.filter((todo) => {
        return todo.isCompleted === false;
      });
      return {
        ...state,
        todoList: clearedTodos,
      };
    },
    startEditingTodo: (state, action) => {
      const editedTodo = state.todoList.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        } else
          return {
            ...todo,
            isEditing: !todo.isEditing,
          };
      });
      return {
        ...state,
        todoList: editedTodo,
      };
    },
    endEditingTodo: (state, action) => {
      const submitTodo = state.todoList.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        else
          return {
            ...todo,
            isEditing: false,
            title: action.payload.title,
          };
      });
      return {
        ...state,
        todoList: submitTodo,
      };
    },
  },
});

export const {
  // HEADER
  addNewTodo,
  toggleAllTodo,
  // MAIN
  removeTodo,
  toggleTodo,
  startEditingTodo,
  endEditingTodo,
  // FOOTER
  clearCompletedTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
