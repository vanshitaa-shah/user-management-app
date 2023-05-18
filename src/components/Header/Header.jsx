import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store/authSlice";
import Styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div className={Styles.header}>
      <h1>Home Page</h1>
      <Link to="/signup" onClick={logoutHandler}>
        <button id={Styles.logoutBtn}>Logout</button>
      </Link>
    </div>
  );
};

export default Header;
