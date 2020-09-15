import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/">
        Homepage
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/courses">
        Courses
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about">
        AboutPage
      </NavLink>
    </nav>
  );
}

export default Header;
