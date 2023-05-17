import React from "react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/signUp");
  }, []);
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
