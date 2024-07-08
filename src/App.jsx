import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Navbar from "./components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
