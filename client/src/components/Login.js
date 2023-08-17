import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authFormContext";
import AuthForm from "./shared/AuthForm";
import Input from "./shared/Input";
import { useMutation, useQuery } from "@apollo/client";
import { LOGIN_USER } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { authUserContext } from "../context/authUserContext";

function Login() {
  const { formType, setFormType } = useContext(AuthContext);
  const initialFormState = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
  const { loginUser: authLogin } = useContext(authUserContext);
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
    try {
      let result = await loginUser({
        variables: {
          ...formData,
        },
      });
      console.log(result.data.loginUser.token);
      if (result) {
        authLogin(result.data.loginUser.token, navigate, "/vendor");
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (loading) return <p>Loading..</p>;
  return (
    <AuthForm
      title="Login"
      active={formType === "Login"}
      handleSubmit={handleSubmit}
      error={error}
    >
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

      <button className="w-1/2 p-2 m-auto text-white auth-btn bg-secondary">
        SIGN IN
      </button>
      <span className="flex m-auto auth-switch w-max gap-x-1">
        Don't have an account?
        <span
          onClick={() => setFormType("Register")}
          className="cursor-pointer text-tertiary"
        >
          Signup
        </span>
      </span>
    </AuthForm>
  );
}

export default Login;
