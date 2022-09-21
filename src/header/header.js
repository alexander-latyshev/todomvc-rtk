import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo } from "../redux/todosReducer";
import "./header.css";

const Header = () => {
  const dispatch = useDispatch();

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
      <button className="header__toggle-btn" />
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