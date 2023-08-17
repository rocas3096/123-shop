import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { brandLogo } from "../assets/svg/svg";
import { authUserContext } from "../context/authUserContext";
import "./Navbar.css";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../api/userApi";

function Navbar() {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(authUserContext);

  return (
    <nav className="flex items-center justify-between w-full p-3 bg-secondary">
      <NavLink to="/" className="logo-brand">
        {brandLogo}
      </NavLink>

      {/* auth links */}
      {user ? (
        <>
          <div className="auth-links desktop">
            <NavLink
              className="flex mr-5 text-white align-middle hover-link"
              to="/co"
            >
              <span>Browse</span>
            </NavLink>
            <NavLink
              to="/vendor"
              className="flex mr-5 text-white align-middle cursor-pointer hover-link"
            >
              <span>Dashboard</span>
            </NavLink>
            <div
              onClick={() => logoutUser(navigate, "/")}
              className="flex mr-5 text-white align-middle cursor-pointer hover-link"
            >
              <span>Logout</span>
            </div>
          </div>
          <div className="auth-links mobile">
            <div className="navbar-toggler">
              {user.getUser.first_name.substr(0, 1).toUpperCase()}
            </div>
          </div>
        </>
      ) : (
        <div className="auth-links">
          <NavLink
            className="flex mr-5 text-white align-middle hover-link"
            to="/co"
          >
            <span>Browse</span>
          </NavLink>
          <NavLink
            className="flex mr-5 text-white align-middle hover-link"
            to="/auth"
          >
            <span>Login/Signup</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
