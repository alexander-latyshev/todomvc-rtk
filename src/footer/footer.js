import React from "react";
import { useSelector } from "react-redux";
import FilterButton from "../fitlerButton/fitlerButton";
import "./footer.css";

function Footer() {
  const todoList = useSelector((state) => state.todos.todoList);

  if (todoList.length > 0) {
    return (
      <div className="footer">
        <FilterButton />
        <FilterButton />
      </div>
    );
  }
}

export default Footer;
