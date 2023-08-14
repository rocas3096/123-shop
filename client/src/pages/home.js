import React from "react";
import { NavLink } from "react-router-dom";
import HeroFront from "../components/HeroFront";
import HeroUnder from "../components/HeroUnder";
import { useSubscription } from "@apollo/client";
import { NEW_ORDER_SUB } from "../api/orderApi";

function Home() {
  const { data } = useSubscription(NEW_ORDER_SUB, {
    variables: { businessId: "64da0831f8ebe6c299619148" },
  });
  console.log({ data });
  if (data && data.newOrder) {
    const newOrder = data.newOrder;
    alert(newOrder);
  }
  return (
    <div>
      {data && data.newOrder ? "NEW ORDER" : ""}
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
