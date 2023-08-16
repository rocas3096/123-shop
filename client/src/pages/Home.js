import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeroFront from "../components/HeroFront";
import HeroUnder from "../components/HeroUnder";
import { gql, useSubscription } from "@apollo/client";

function Home() {
  return (
    <div>
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
