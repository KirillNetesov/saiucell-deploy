import React from "react";
import "./Nav.css";

const Nav = ({ isMenuOpen }) => {
  return (
    <nav className={isMenuOpen ? "nav active" : "nav"}>
      <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
