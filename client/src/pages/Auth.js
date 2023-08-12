import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

function Auth() {
  return (
    <div className="flex">
      {/* left side of auth */}
      <div className="inline-block w-2/3 h-screen border bg-secondary mx-0 p-0">
      </div>
      <div className="inline-block p-2 border w-1/3 bg-primary ">
        {/* top buttons in auth */}
        <div className="flex mx-5 p-2 justify-between">
        <NavLink to="/" className="block">
        <button className="bg-secondary p-2 text-white">Go Back</button>
        </NavLink>
        <button className="bg-secondary p-2 text-white">Button</button>
        </div>
        {/* form inputs */}
        <form className="mx-2 pt-3">
          <label className="block p-2 ">
            <span className="block text-sm font-medium text-slate-700">First Name</span>
            <input className="w-full border-slate-200 border p-2 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
          </label>
          <label className="block p-2">
            <span className="block text-sm font-medium text-slate-700">Last Name</span>
            <input className="w-full border-slate-200 border p-2 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
          </label>
          <label className="block p-2">
            <span className="block text-sm font-medium text-slate-700 w-auto">Email Address</span>
            <input className="w-full border-slate-200 border p-2 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
          </label>
          <label className="block p-2">
            <span className="block text-sm font-medium text-slate-700">Password</span>
            <input className="w-full border-slate-200 border p-2 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
          </label>
          <label className="block p-2">
            <span className="block text-sm font-medium text-slate-700">Business Phone Number</span>
            <input className="w-full border-slate-200 border p-2 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
          </label>
          <label className="block p-2">
            <span className="block text-sm font-medium text-slate-700">Business Phone Number</span>
            <input className="w-full border-slate-200 border p-2 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
          </label>
        </form>
        <div className="flex mx-5 p-2 justify-end">
        <button className="bg-secondary p-2 text-white mb-auto">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
