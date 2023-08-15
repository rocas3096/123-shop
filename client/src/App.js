import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/shared/Footer";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "./api/userApi";
import { useContext, useEffect } from "react";
import { DrawersContext } from "./context/drawersContext";

function App() {
  const { backdrop, toggleBackdrop, setSetupInvActive } =
    useContext(DrawersContext);
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  const handleBackdropClick = () => {
    toggleBackdrop(false);
    setSetupInvActive(false);
  };
  useEffect(() => {
    if (backdrop) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [backdrop]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;
  return (
    <div className={`App fade `}>
      <div
        onClick={handleBackdropClick}
        className={`backdrop ${backdrop && "active"}`}
      ></div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
