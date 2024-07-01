// src/app/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar/navbar";
import Footer from "../common/Footer/footer"

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
