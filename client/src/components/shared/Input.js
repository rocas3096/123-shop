import React from "react";
import "./Input.css";
function Input({ title, name, type = "text", handleChange, value, price }) {
  return (
    <div className="Input">
      {["text", "email", "password"].includes(type) && !price ? (
        <>
          <input
            onChange={handleChange}
            type={type}
            className="Input-item"
            placeholder={title}
            name={name}
            value={value}
          />
          <label className="Input-label" htmlFor={name}>
            {title}
          </label>
        </>
      ) : price ? (
        <>
          <label className="price-label" htmlFor="price">
            <span className="content">$</span>
          </label>
          <input
            onChange={handleChange}
            placeholder="0.00"
            className="price-input"
            id={name}
            name={name}
            type="text"
            value={value}
          />
        </>
      ) : (
        <>
          <textarea
            className="Input-textarea"
            name={name}
            id={name}
            cols="30"
            rows="5"
            placeholder={title}
            value={value}
            onChange={handleChange}
          ></textarea>
        </>
      )}
    </div>
  );
}

export default Input;
