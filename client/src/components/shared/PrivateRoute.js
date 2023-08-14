import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { authUserContext } from "../../context/authUserContext";

function PrivateRoute({ component, navigateTo }) {
  const navigate = useNavigate();
  const { token, loading, error, data } = useContext(authUserContext);
  useEffect(() => {
    if (!token) {
      navigate(navigateTo);
    }
    // if (!data) {
    //   navigate(navigateTo);
    // }
    if (data) {
      if (!data.authUser.authed) {
        navigate(navigateTo);
      }
    }
    if (error) {
      navigate(navigateTo);
    }
  }, [token, navigate, navigateTo, data, error]);

  if (loading) return <p>Loading...</p>;

  return component;
}

export default PrivateRoute;
