import React from "react";
import { NavLink } from "react-router-dom";
import HeroFront from "../components/HeroFront";
import HeroUnder from "../components/HeroUnder";

function Home() {
    return (
        <div>
            <HeroFront />
            <HeroUnder />
        </div>
    );
}

export default Home;
