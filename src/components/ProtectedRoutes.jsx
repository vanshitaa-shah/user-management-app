import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ Component }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isAuthenticated, setISAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/home");
    }
    setISAuthenticated(true);
  }, [isLoggedIn]);
  return isAuthenticated && <Component />;
};

export default ProtectedRoutes;
