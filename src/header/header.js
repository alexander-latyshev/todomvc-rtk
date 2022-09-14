import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <label />
      <button className="header__toggle-btn" />
      <input
        type="text"
        className="header__add-input"
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;
