import React from "react";
import "./fitlerButton.css";
import { Link } from "react-router-dom";

function FilterButton(props) {
  return (
    <li>
      <Link className="filter-btn" to={props.to}>
        {props.name}
      </Link>
    </li>
  );
}

export default FilterButton;
