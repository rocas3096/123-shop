import { useQuery } from "@apollo/client";
import { createContext, useState } from "react";
import {
  AUTH_USER,
  GET_BUSINESS_BY_USER_ID,
  GET_USER_BY_ID,
} from "../api/userApi";

export const authUserContext = createContext({});

export const AuthUserContextProvider = ({ children }) => {
  let token = localStorage.getItem("_auth");
  let [globalLoading, setGlobalLoading] = useState(false);
  let [userAuthed, setUserAuthed] = useState(false);
  const { loading, error, data } = useQuery(AUTH_USER, {
    variables: {
      token,
    },
  });
  const {
    loading: user_loading,
    error: user_error,
    data: user_data,
  } = useQuery(GET_USER_BY_ID, {
    variables: { userId: data && data.authUser.userId },
  });
  const {
    loading: business_loading,
    error: business_error,
    data: business_data,
  } = useQuery(GET_BUSINESS_BY_USER_ID, {
    variables: { userId: data && data.authUser.userId },
  });
  const loginUser = (token, fn, path) => {
    localStorage.setItem("_auth", token);
    setGlobalLoading(true);

    fn(path);
  };
  const logoutUser = (fn, path) => {
    localStorage.removeItem("_auth");
    fn(path);
    window.location.reload(false);
  };
  console.log(business_error);
  return (
    <authUserContext.Provider
      value={{
        token,
        loading,
        error,
        data,
        globalLoading,
        userAuthed,
        user: user_data && user_data,
        business: business_data && business_data,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </authUserContext.Provider>
  );
};
