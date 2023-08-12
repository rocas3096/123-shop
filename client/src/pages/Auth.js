import React, { useEffect, useRef, useState } from "react";
import { brandLogo } from "../assets/svg/svg";
import { NavLink } from "react-router-dom";
import bgImage from "../assets/imgs/plate-auth-bg.png";
import "./Auth.css";
import Input from "../components/shared/Input";
import AuthForm from "../components/shared/AuthForm";
function Auth() {
  const initialFormState = {
    firstName: "Corey",
    lastName: "",
    email: "",
    password: "",
    businessName: "",
    phone: "",
  };
  const handleChange = () => {};
  const [formData, setFormData] = useState(initialFormState);
  console.log(formData);
  return (
    <div className="w-screen Auth auth-page bg-secondary fade">
      <div className="auth-media">
        <NavLink to="/" className="block p-3 auth-media-nav ">
          {brandLogo}
        </NavLink>
        <img className="auth-bg-img" src={bgImage} alt="" />
      </div>
      <AuthForm title="Register">
        {formData.firstName}
        <Input title="First name" name="firstName" value={formData.firstName} />
        <Input title="Last name" name="lastName" value={formData.lastName} />
        <Input title="Email" name="email" type="email" value={formData.email} />
        <Input
          title="Password"
          name="password"
          type="password"
          value={formData.password}
        />
        <Input
          title="Business name"
          name="businessName"
          value={formData.businessName}
        />{" "}
        <Input title="Business phone" name="phone" value={formData.phone} />
        <Input
          title="Business description"
          type="textarea"
          name="businessDescription"
        />
      </AuthForm>
    </div>
  );
}

export default Auth;
