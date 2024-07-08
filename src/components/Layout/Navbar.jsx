import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <NavLink to="/">YT Download</NavLink>
        </div>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-300 hover:text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-300 hover:text-white"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
