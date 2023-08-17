import React from "react";
import { NavLink } from "react-router-dom";
function BussinessCard({ title, description, _id }) {
  return (
    <div className="result">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="shop-btn">
        <NavLink to={`${_id}`} className="shop">
          MENU
        </NavLink>
      </div>
    </div>
  );
}

export default BussinessCard;
