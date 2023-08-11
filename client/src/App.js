import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import { brandLogo } from "./assets/svg/svg";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <nav className="flex items-center justify-between w-full p-3 bg-secondary">
        <NavLink to="/" className="logo-brand">
          {brandLogo}
        </NavLink>
        <NavLink
          className="pr-5 text-white hover:text-primary transition-[2s]"
          to="/auth"
        >
          Login/Signup
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
