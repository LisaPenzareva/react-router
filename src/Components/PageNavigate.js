import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigate = () => {
  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <NavLink className="nav-link" to="todo">
          ToDo
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="posts">
          Posts
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="albums">
          Albums
        </NavLink>
      </li>
    </ul>
  );
};

export default PageNavigate;
