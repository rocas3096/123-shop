import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="App fade">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
