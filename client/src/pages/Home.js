import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeroFront from "../components/HeroFront";
import HeroUnder from "../components/HeroUnder";
import { gql, useSubscription } from "@apollo/client";

const NEW_ORDER_SUB = gql`
  subscription Subscription($businessId: ID!) {
    orderCreated(businessId: $businessId) {
      business
      customer_name
      orderDetails {
        item
        quantity
        price
      }
    }
  }
`;

function Home() {
  const [orders, setOrders] = useState([]);
  const { data, loading } = useSubscription(NEW_ORDER_SUB, {
    variables: { businessId: "2345" },
    onSubscriptionData: (data) => {
      const order = data.subscriptionData.data.orderCreated;
      setOrders((pre) => [order, ...pre]);
      console.log("ORDER CREATED", order);
    },
  });
  return (
    <div>
      <div>
        {orders.map((order) => {
          return (
            <>
              <p>ORDER: {order.business}</p>
              <p></p>
            </>
          );
        })}
      </div>
      <HeroFront />
      <HeroUnder />
    </div>
  );
}

export default Home;
// "userId": "64da0831f8ebe6c29961913e",
//   "businessId": "64da0831f8ebe6c299619148",
// 64da08657d4e64941fc92979
// 64da0831f8ebe6c299619146
