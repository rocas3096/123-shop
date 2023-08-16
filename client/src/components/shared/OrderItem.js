import React, { useEffect } from "react";
import "./OrderItem.css";
function OrderItem({ detail }) {
  return (
    <div className="order-scrollable-item">
      <img src={`https://source.unsplash.com/50x50?${detail.item}`} alt="" />
      <div className="order-scrollable-item-content">
        <p>{detail.item}</p>
        <div className="order-scrollable-item-content-info">
          <span className="price">${detail.price}</span>
          <span className="qty">Qty:{detail.quantity}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
