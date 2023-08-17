import React, { useContext, useState } from "react";
import VendorPanelDrawer from "../../components/VendorPanel/VendorPanelDrawer";
import { useSubscription } from "@apollo/client";
import { NEW_ORDER_SUB } from "../../api/orderApi";
import "./VendorPanel.css";
import Logo123 from "../../components/shared/Logo123";
import { NavLink, Outlet } from "react-router-dom";
import Ticket from "../../components/shared/Ticket";
import DrawerLink from "../../components/VendorPanel/DrawerLink";
import { DrawersContext } from "../../context/drawersContext";
function VendorPanel() {
  const { toggleDrawer } = useContext(DrawersContext);
  return (
    <div className="VendorPanel">
      <div onClick={toggleDrawer} className="nav-toggler"></div>
      <VendorPanelDrawer active={toggleDrawer} />
      <div className="VendorPanelO">
        <Outlet />
      </div>
    </div>
  );
}

export default VendorPanel;
