import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./shared/AuthForm";
import Input from "./shared/Input";
import "./Register.css";
import { AuthContext } from "../context/authFormContext";
import { REGISTER_USER } from "../api/userApi";
import { useMutation } from "@apollo/client";
import { authUserContext } from "../context/authUserContext";
function Register() {
  const [createUser, { loading, error }] = useMutation(REGISTER_USER);
  const navigate = useNavigate();
  const { globalLoading, loginUser, userAuthed } = useContext(authUserContext);
  const initialFormState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    business_name: "",
    phone_number: "",
    description: "",
    address: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.vendor = true;
    formData.newVendorUser = true;
    try {
      let result = await createUser({
        variables: {
          userInput: {
            ...formData,
          },
        },
      });
      if (result) {
        loginUser(result.data.createUser.token, navigate, "/vendor/setup");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { formType, setFormType } = useContext(AuthContext);
  if (loading) return <p>Loading..</p>;

  return (
    <AuthForm
      handleSubmit={handleSubmit}
      title="Register"
      active={formType === "Register"}
      error={error}
    >
      <Input
        title="First name"
        name="first_name"
        value={formData.first_name}
        handleChange={handleChange}
      />
      <Input
        title="Last name"
        name="last_name"
        value={formData.last_name}
        handleChange={handleChange}
      />
      <Input
        title="Email"
        name="email"
        type="email"
        value={formData.email}
        handleChange={handleChange}
      />
      <Input
        title="Password"
        name="password"
        type="password"
        value={formData.password}
        handleChange={handleChange}
      />
      <Input
        title="Business name"
        name="business_name"
        value={formData.business_name}
        handleChange={handleChange}
      />
      <Input
        title="Business phone"
        name="phone_number"
        value={formData.phone_number}
        handleChange={handleChange}
      />
      <Input
        title="Business Address"
        name="address"
        value={formData.address}
        handleChange={handleChange}
      />
      <Input
        title="Business description"
        type="textarea"
        name="description"
        handleChange={handleChange}
        value={formData.description}
      />
      <button className="w-1/2 p-2 m-auto text-white auth-btn bg-secondary">
        {globalLoading ? "Loading" : "SIGNUP"}
      </button>
      <span className="flex m-auto auth-switch w-max gap-x-1">
        Have an account?
        <span
          onClick={() => setFormType("Login")}
          className="cursor-pointer text-tertiary"
        >
          Sign In
        </span>
      </span>
    </AuthForm>
  );
}

export default Register;
