import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Donate from "./pages/Donate"
import Campaigns from "./pages/Campaigns";
const App = () => {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Campaigns' element={<Campaigns />} />
      </Routes>
    </>
  );
};

export default App;
