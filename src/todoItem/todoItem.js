import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  endEditingTodo,
  removeTodo,
  startEditingTodo,
  toggleTodo,
} from "../redux/todosReducer";
import "./todoItem.css";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const inputEditRef = useRef(null);
  useEffect(() => {
    inputEditRef.current.focus();
  });

  function editTodoHandler(event) {
    if (event.code === "Enter" && event.target.value) {
      return dispatch(
        endEditingTodo({
          title: event.target.value,
          id: props.id,
          isEditing: false,
        })
      );
    }
    if (event.code == "Enter" && !event.target.value) {
      return dispatch(removeTodo(props.id));
    }
    if (event.code === "Escape") {
      event.target.value = props.title;
      return dispatch(
        endEditingTodo({
          title: props.title,
          id: props.id,
          isEditing: false,
        })
      );
    }
    if (!event.code && event.target.value) {
      return dispatch(
        endEditingTodo({
          title: event.target.value,
          id: props.id,
          isEditing: false,
        })
      );
    }
    if (!event.code && !event.target.value) {
      return dispatch(removeTodo(props.id));
    }
  }
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className={classNames("todo-item__checkbox", {
          "todo-item__checkbox_hidden": props.isEditing,
        })}
        id="check"
        onChange={() => dispatch(toggleTodo(props.id))}
        checked={props.isCompleted}
      />
      <div
        className={classNames("todo-item__content", {
          "todo-item__content_checked": props.isCompleted,
          "todo-item__content_hidden": props.isEditing,
        })}
        onDoubleClick={() => dispatch(startEditingTodo(props.id))}
      >
        {props.title}
      </div>
      <input
        type="text"
        className={classNames("todo-item__edit-input_hidden", {
          "todo-item__edit-input_visible": props.isEditing,
        })}
        onKeyDown={(event) => editTodoHandler(event)}
        defaultValue={props.title}
        onBlur={(event) => editTodoHandler(event)}
        ref={inputEditRef}
      />
      <button
        className={classNames("todo-item__remove-btn", {
          "todo-item__remove-btn_hidden": props.isEditing,
        })}
        onClick={() => dispatch(removeTodo(props.id))}
      ></button>
    </div>
  );
};

export default TodoItem;
