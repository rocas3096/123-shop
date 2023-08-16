import React, { useContext, useEffect, useState } from "react";
import "./Orders.css";
import { useMutation, useSubscription } from "@apollo/client";
import { CLOSE_ORDER, NEW_ORDER_SUB } from "../../api/orderApi";
import { v4 as uuid } from "uuid";
import { orderContext } from "../../context/orderContext";
import OrderCard from "../../components/VendorPanel/OrderItem";
import OrderContainer from "../../components/shared/OrdersContainer";
function Orders() {
  const { orders } = useContext(orderContext);

  return (
    <OrderContainer>
      {orders &&
        orders.map((order) => (
          <OrderCard order={order} btnTitle="COMPLETE ORDER" />
        ))}
    </OrderContainer>
  );
}

export default Orders;
