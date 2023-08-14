import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="App fade">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
