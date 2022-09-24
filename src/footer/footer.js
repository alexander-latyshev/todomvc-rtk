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
  console.log(props.router.location.pathname);
  if (todoList.length > 0) {
    return (
      <footer className="footer">
        <article>
          {`${uncompletedTodos.length} item`}
          {todoList.length > 0 ? "s left" : "left"}
        </article>

        <ul className="footer__pagination-links">
          <FilterButton name="All" to="/" />
          <FilterButton name="Active" to="/active" />
          <FilterButton name="Completed" to="/completed" />
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
