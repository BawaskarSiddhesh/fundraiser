import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Donate from "./pages/Donate"
const App = () => {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>
    </>
  );
};

export default App;
