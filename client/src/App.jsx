import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Donate from "./pages/Donate";
import Campaigns from "./pages/Campaigns";
import Dashboard from "./pages/Dashboard";
import Sisu from './pages/Sisu'
const App = () => {

  const location = useLocation();
  return (
    <>
      {location.pathname != '/sisu' && <Navbar />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Campaigns' element={<Campaigns />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/sisu' element={<Sisu />} />
      </Routes>
    </>
  );
};

export default App
