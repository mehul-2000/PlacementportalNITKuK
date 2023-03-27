import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideNavbar from "./components/Sidenavbar/sidenavbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import HallOfFame from "./pages/HallOfFame/HallOfFame";
import Developer from "./pages/Developer/Developer";
import TeamPage from "./pages/Team/Team";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";
import AddNewCompany from "./pages/AddNewCompany/AddNewCompany";
import AdminPanel from "./pages/Admin-Management/Admin-Management";

function App() {
  return (
    <>
    {/* <SideNavbar/> */}
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/main-portal" element={<SideNavbar />} />
    </Routes>
    </>










  );
}

export default App;
