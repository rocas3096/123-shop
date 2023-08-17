import React, { useContext, useState } from "react";
import Logo123 from "../shared/Logo123";
import DrawerLink from "./DrawerLink";
import "./VendorPanelDrawer.css";
import Ticket from "../shared/Ticket";
import Rewind from "../shared/Rewind";
import ProductIco from "../shared/ProductIco";
import Gear from "../shared/Gear";
import { orderContext } from "../../context/orderContext";
function VendorPanelDrawer() {
  const [active, setActive] = useState(false);
  const { orders } = useContext(orderContext);
  return (
    <div className="VendorPanelDrawer">
      <div className="VendorPanelDrawer-logo">
        <Logo123 width="70" />
      </div>
      <div className="DrawerLinks">
        <DrawerLink
          title="Orders"
          ico={<Ticket width="20" color="black" />}
          to="orders"
          type="orders"
          amount={orders ? orders.length : 0}
        />
        <DrawerLink
          title="Past orders"
          ico={<Rewind width="20" color="black" />}
          to={"past-orders"}
        />
        <DrawerLink
          title="Products"
          ico={<ProductIco width="20" color="black" />}
          to="products"
        />
        <DrawerLink
          title="Account"
          ico={<Gear width="20" color="black" />}
          to="account"
        />
      </div>
    </div>
  );
}

export default VendorPanelDrawer;
