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
  const [toggleDrawerState, setToggleDrawerState] = useState(false);
  const [setupInvActive, setSetupInvActive] = useState(false);
  const [welcomeModal, setWelcomeModal] = useState(false);
  const toggleDrawerOff = () => {
    setToggleDrawerState(false);
  };
  const toggleDrawer = () => {
    setToggleDrawerState(true);
  };

  return (
    <DrawersContext.Provider
      value={{
        setupInvActive,
        setSetupInvActive,
        backdrop,
        toggleBackdrop,
        welcomeModal,
        setWelcomeModal,
        toggleDrawer,
        toggleDrawerState,
        toggleDrawerOff,
      }}
    >
      {children}
    </DrawersContext.Provider>
  );
};
