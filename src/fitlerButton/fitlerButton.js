import React from "react";
import "./fitlerButton.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

function FilterButton(props) {
  const isAcitveLink = props.router.location.pathname === props.path;
  return (
    <li>
      <Link
        className={classNames("filter-btn", {
          "filter-btn_active": isAcitveLink,
        })}
        to={props.path}
      >
        {props.name}
      </Link>
    </li>
  );
}

export default FilterButton;
