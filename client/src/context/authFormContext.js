import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [formType, setFormType] = useState("Register");

  return (
    <AuthContext.Provider
      value={{
        formType,
        setFormType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
