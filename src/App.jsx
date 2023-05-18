import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";

const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/signUp");
    }
  }, []);
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
