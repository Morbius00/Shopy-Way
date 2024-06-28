// src/app/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar/navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}
