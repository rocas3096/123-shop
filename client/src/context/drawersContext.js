import { createContext, useState } from "react";

export const DrawersContext = createContext({});

export const DrawersContextProvider = ({ children }) => {
  const [backdrop, setBackdrop] = useState(false);
  const toggleBackdrop = (cond) => {
    if (cond) {
      setBackdrop(true);
    } else {
      setBackdrop(false);
    }
  };
  const [setupInvActive, setSetupInvActive] = useState(false);
  const [welcomeModal, setWelcomeModal] = useState(false);
  return (
    <DrawersContext.Provider
      value={{
        setupInvActive,
        setSetupInvActive,
        backdrop,
        toggleBackdrop,
        welcomeModal,
        setWelcomeModal,
      }}
    >
      {children}
    </DrawersContext.Provider>
  );
};
