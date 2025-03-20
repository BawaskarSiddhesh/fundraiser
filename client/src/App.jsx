import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Donate from "./pages/Donate";
import Campaigns from "./pages/Campaigns";
import Dashboard from "./pages/Dashboard";
import Sisu from './pages/Sisu'
import StartCampaign from "./pages/StartCampaign";
const App = () => {

  const location = useLocation();
  return (
    <>
    <div className="relative z-50">
      {location.pathname != '/sisu' && <Navbar />} 
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Campaigns' element={<Campaigns />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path='/Campaigns/:id' element={<Donate />} />
        <Route path='/sisu' element={<Sisu />} />
        <Route path='/start-campaign' element={<StartCampaign />} />
      </Routes>
    </>
  );
};

export default App


//mUy702NoXzxVENPm