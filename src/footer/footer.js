import React from "react";
import { useSelector } from "react-redux";
import FilterButton from "../fitlerButton/fitlerButton";
import "./footer.css";

function Footer() {
  const todoList = useSelector((state) => state.todos.todoList);

  if (todoList.length > 0) {
    return (
      <footer className="footer">
        <ul className="footer__pagination-links">
          <FilterButton name="All" to="/" />
          <FilterButton name="Active" to="/active" />
          <FilterButton name="Completed" to="/completed" />
        </ul>
      </footer>
    );
  }
}

export default Footer;
