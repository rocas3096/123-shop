import { useMutation } from "@apollo/client";
import "./OrderItem.css";
import React, { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { CLOSE_ORDER } from "../../api/orderApi";
import OrderItem from "../shared/OrderItem";
import { orderContext } from "../../context/orderContext";
function OrderCard({ order, btnTitle, completed }) {
  const { closeOrder, refetchClosedOrders, setOrders, orders } =
    useContext(orderContext);
  const [closing, setClosing] = useState(false);

  const handleClose = async (id) => {
    const newArray = orders.filter((order) => order._id !== id);
    setOrders(newArray);
    localStorage.setItem("orders", JSON.stringify(newArray));
    closeOrder({
      variables: { orderId: id },
      completed() {
        alert("D");
      },
    });

    setClosing(true);
    refetchClosedOrders();
  };

  return (
    <div key={uuid()} className={`${closing && "order-closed"} OrderItem`}>
      <div className="OrderHeader">
        <div className="header-info">
          <h2 className="header-info-order-num">Order #{order._id}</h2>
          <span className="header-info-order-date">12:34pm 01-27-2023</span>
        </div>
        <span className="header-info-total">
          $
          {order?.orderDetails.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0)}
        </span>
      </div>
      <div className="order-scrollable">
        {order?.orderDetails.map((detail) => {
          return <OrderItem detail={detail} />;
        })}
      </div>
      <div className="order-footer">
        {completed ? (
          <button className="completed">{btnTitle}</button>
        ) : (
          <button onClick={() => handleClose(order._id)}>{btnTitle}</button>
        )}
      </div>
    </div>
  );
}

export default OrderCard;
