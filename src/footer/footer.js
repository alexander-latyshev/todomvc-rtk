import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompletedTodos } from "../redux/todosReducer.js";
import FilterButton from "../fitlerButton/fitlerButton";
import "./footer.css";

function Footer(props) {
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  const uncompletedTodos = todoList.filter((todo) => {
    return todo.isCompleted === false;
  });
  if (todoList.length > 0) {
    return (
      <footer className="footer">
        <article>
          {`${uncompletedTodos.length} item`}
          {uncompletedTodos.length === 1 ? " left" : "s left"}
        </article>

        <ul className="footer__pagination-links">
          <FilterButton name="All" path="/" router={props.router}/>
          <FilterButton name="Active" path="/active" router={props.router}/>
          <FilterButton name="Completed" path="/completed" router={props.router}/>
        </ul>
        <button
          className="footer__clear-button"
          onClick={() => dispatch(clearCompletedTodos())}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
