import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../todoItem/todoItem";
import "./main.css";

const Main = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  return todoList.length > 0 ? (
    <main className="main">
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            id={todo.id}
          />
        );
      })}
    </main>
  ) : null;
};

export default Main;
