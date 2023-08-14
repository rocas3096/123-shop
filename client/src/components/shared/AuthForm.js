import React, { useEffect, useState } from "react";
import Input from "./Input";
import "./AuthForm.css";
import Exit from "./Exit";
function AuthForm({ children, title, active, handleSubmit, error }) {
  const [errorExists, setErrorExists] = useState(error);
  useEffect(() => {
    console.log({ error });
  }, [error]);
  return (
    <div className={`relative auth-forms bg-primary ${active && "active"}`}>
      <h2 className="auth-forms-title">{title.toUpperCase()}</h2>

      <form
        onSubmit={handleSubmit}
        onClick={() => console.log(errorExists)}
        className="p-5 auth-forms-form"
      >
        {errorExists && (
          <span className="m-auto auth-form-error text-error">
            <span onClick={() => setErrorExists(null)} className="exit">
              <Exit stroke="#fff" width="100%" />
            </span>
            {error.message}
          </span>
        )}
        {children}
      </form>
      <footer className="bottom-2 auth-forms-footer">
        <p className="text-white w-max">© All Rights Reserved 123Shop</p>
      </footer>
    </div>
  );
}

export default AuthForm;
