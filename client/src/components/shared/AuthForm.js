import React from "react";
import Input from "./Input";

function AuthForm({ children, title }) {
  return (
    <div className="auth-forms bg-primary">
      <h2 className="auth-forms-title">{title.toUpperCase()}</h2>
      <form className="p-5 auth-forms-form">{children}</form>
    </div>
  );
}

export default AuthForm;
