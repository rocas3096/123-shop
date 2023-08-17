import React from "react";

function ProductIco({ width = "23", height = "23", color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="product"
    >
      <path d="M6.25 1H1V6.25H6.25V1Z" stroke={color} />
      <path d="M14.125 1H8.875V6.25H14.125V1Z" stroke={color} />
      <path d="M14.125 16.75H8.875V22H14.125V16.75Z" stroke={color} />
      <path d="M22 1H16.75V6.25H22V1Z" stroke={color} />
      <path d="M6.25 8.875H1V14.125H6.25V8.875Z" stroke={color} />
      <path d="M14.125 8.875H8.875V14.125H14.125V8.875Z" stroke={color} />
      <path d="M22 8.875H16.75V14.125H22V8.875Z" stroke={color} />
      <path d="M6.25 16.75H1V22H6.25V16.75Z" stroke={color} />
      <path d="M22 16.75H16.75V22H22V16.75Z" stroke={color} />
    </svg>
  );
}

export default ProductIco;
