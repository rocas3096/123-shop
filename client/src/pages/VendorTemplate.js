import React, { useContext } from "react";
import { authUserContext } from "../context/authUserContext";
import { Outlet } from "react-router-dom";

function VendorTemplate() {
  const { user } = useContext(authUserContext);
  return (
    <div className="fade ">
      {/* {user?.getUser.first_name} {user?.getUser.last_name} */}
      <Outlet />
    </div>
  );
}

export default VendorTemplate;
