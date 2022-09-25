import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, toggleAllTodo } from "../redux/todosReducer";
import "./header.css";

const Header = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  const todoListCheck = todoList.every((todo) => {
    return todo.isCompleted;
  });

  function addNewTodoHandler(event) {
    const todoProps = {
      title: event.target.value,
      id: performance.now() * 1000,
      isCompleted: false,
      isEditing: false,
    };

    if (event.code !== "Enter" || event.target.value === "") {
      return;
    }
    dispatch(addNewTodo(todoProps));
    event.target.value = "";
  }
  return (
    <header className="header">
      {todoList.length > 0 ? (
        <button
          className={`header__toggle-btn${
            todoListCheck === true ? "_active" : ""
          }`}
          onClick={() => dispatch(toggleAllTodo())}
        />
      ) : null}
      <input
        onKeyDown={(event) => addNewTodoHandler(event)}
        type="text"
        className="header__add-todo-input"
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;
