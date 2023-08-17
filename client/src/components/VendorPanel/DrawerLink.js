import React from "react";
import { NavLink } from "react-router-dom";
import Ticket from "../shared/Ticket";
import "./DrawerLink.css";
function DrawerLink({ type = null, amount, title, ico, to }) {
  return (
    <NavLink to={to} className="VendorPanelDrawer-link">
      <span className="VendorPanelDrawer-link-ico">{ico}</span>
      <span className="uppercase VendorPanelDrawer-link-text text-[14px]">
        {title}
      </span>
      {type === "orders" && <span className="num_of_items">{amount}</span>}
    </NavLink>
  );
}

export default DrawerLink;
