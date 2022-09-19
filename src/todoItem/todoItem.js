import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/todosReducer";
import "./todoItem.css";

const TodoItem = (props) => {
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  console.log();
  return (
    <div className="todo-item">
      {/* <label for="check" /> */}
      <input type="checkbox" className="todo-item_check-btn" id="check" />
      <div className="todo-item_content">{props.title}</div>
      <button
        className="todo-item_remove-btn"
        onClick={() => dispatch(removeTodo(props.id))}
      />
    </div>
  );
};

export default TodoItem;
