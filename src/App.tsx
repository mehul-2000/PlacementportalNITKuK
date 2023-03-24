import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideNavbar from "./components/Sidenavbar/sidenavbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main-portal" element={<SideNavbar />} />
      </Routes>
    </>
  );
}

export default App;
