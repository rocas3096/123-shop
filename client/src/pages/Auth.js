import React, { useContext, useEffect, useRef, useState } from "react";
import { brandLogo } from "../assets/svg/svg";
import { NavLink, useNavigate } from "react-router-dom";
import bgImage from "../assets/imgs/plate-auth-bg.png";
import "./Auth.css";
import Input from "../components/shared/Input";
import AuthForm from "../components/shared/AuthForm";
import Register from "../components/Register";
import { AuthContext } from "../context/authFormContext";
import Login from "../components/Login";
import { authUserContext } from "../context/authUserContext";
function Auth() {
  const { formType } = useContext(AuthContext);
  const { token, data } = useContext(authUserContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      if (data.authUser.authed) {
        navigate("/vendor");
      }
    }
  }, [data, navigate]);

  return (
    <div className="w-screen Auth auth-page bg-secondary fade">
      <div className="auth-media">
        <NavLink to="/" className="block p-3 auth-media-nav ">
          {brandLogo}
        </NavLink>
        <img className="auth-bg-img" src={bgImage} alt="" />
      </div>

      <Register />

      <Login />
    </div>
  );
}

export default Auth;
