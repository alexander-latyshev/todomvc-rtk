import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../todoItem/todoItem";
import "./main.css";

const Main = (props) => {
  const pathLocation = props.router.location.pathname;
  const todoList = useSelector((state) => state.todos.todoList);

  // ROUTING
  const filteredTodos = todoList.filter((todo) => {
    if (pathLocation === "/active") {
      return todo.isCompleted === false;
    } else if (pathLocation === "/completed") {
      return todo.isCompleted === true;
    } else return todoList;
  });

  return todoList.length > 0 ? (
    <main className="main">
      {filteredTodos.map((todo) => {
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
