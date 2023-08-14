import React from "react";
import { NavLink } from "react-router-dom";

function HeroFront() {
  return (
    <div className="bg-primary ">
      <section className="bg-primary ">
        <div
          className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center "
        >
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-5xl font-extrabold sm:text-5xl">
              Get Started as Soon as
            </h1>
            <strong className="text-5xl font-extrabold text-secondary sm:block">
              1-2-3!
            </strong>

            <p className="mt-4 sm:text-xl/relaxed">
              With <span className="text-secondary font-bold">1-2-3 Shop!</span>, you can modernize your business and reach a bigger audience in just a few steps.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded  px-12 py-3 text-sm font-medium text-white shadow bg-secondary focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              >
                <NavLink to="/auth">
                  Get Started
                </NavLink>
              </a>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroFront;
