import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, removeTodo } from "../redux/todosReducer";
import "./header.css";

const Header = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  function addNewTodoHandler(event) {
    const todoProps = {
      title: event.target.value,
      id: performance.now(),
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
      <label />
      <button
        className="header__toggle-btn"
        onClick={() => dispatch(removeTodo())}
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
