import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import "./global.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Experience />
    </div>
  );
}
