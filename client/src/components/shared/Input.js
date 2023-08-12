import React from "react";
import "./Input.css";
function Input({ title, name, type = "text" }) {
  return (
    <div className="Input">
      {["text", "email", "password"].includes(type) ? (
        <>
          <input type={type} className="Input-item" placeholder={title} />
          <label className="Input-label" htmlFor={name}>
            {title}
          </label>
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
          ></textarea>
        </>
      )}
    </div>
  );
}

export default Input;
