import React from "react";
import { NavLink } from "react-router-dom";
import { brandLogo } from "../assets/svg/svg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar flex items-center justify-between w-full p-3 bg-secondary">
      <NavLink to="/" className="logo-brand">
        {brandLogo}
      </NavLink>
      <NavLink
        className="flex mr-5 text-white align-middle hover-link"
        to="/auth"
      >
        Login/Signup
      </NavLink>
    </nav>
  );
}

export default Navbar;
