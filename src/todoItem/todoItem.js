import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todosReducer";
import "./todoItem.css";

const TodoItem = (props) => {
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  console.log(props);
  return (
    <div className="todo-item">
      <label htmlFor="check" className="todo-item__checkbox-label" />
      <input
        type="checkbox"
        className="todo-item__checkbox"
        id="check"
        onChange={() => dispatch(toggleTodo(props.id))}
        checked={props.isCompleted}
      />
      <div
        className={classNames("todo-item__content", {
          "todo-item__content_checked": props.isCompleted,
        })}
      >
        {props.title}
      </div>
      <button
        className="todo-item_remove-btn"
        onClick={() => dispatch(removeTodo(props.id))}
      ></button>
    </div>
  );
};

export default TodoItem;
