import React from "react";
import "./Loading.css";
function Loading({ border, color, width, height, active }) {
  return (
    <>
      <div className={`loading-backdrop ${active && "active"}`}></div>
      <div
        style={{
          border: `${border}px solid transparent`,
          borderLeftColor: color,
          borderTopColor: color,
          width: `${width}px`,
          height: `${height}px`,
        }}
        className={`Loading ${active && "active"}`}
      ></div>
    </>
  );
}

export default Loading;
