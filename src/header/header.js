import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, toggleAllTodo } from "../redux/todosReducer";
import "./header.css";

const Header = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const todoListCheck = state.todos.todoList.every((todo) => {
    return todo.isCompleted;
  });

  function addNewTodoHandler(event) {
    const todoProps = {
      title: event.target.value,
      id: performance.now() * 1000,
      isCompleted: false,
    };

    if (event.code !== "Enter" || event.target.value === "") {
      return;
    }
    dispatch(addNewTodo(todoProps));
    event.target.value = "";
  }
  return (
    <header className="header">
      <button
        className={`header__toggle-btn${
          todoListCheck === true ? "_active" : ""
        }`}
        onClick={() => dispatch(toggleAllTodo())}
      />
      <input
        onKeyDown={(event) => addNewTodoHandler(event)}
        type="text"
        className="header__add-input"
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;
