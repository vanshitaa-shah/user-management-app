import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store/authSlice";
import Styles from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div className={Styles.header}>
      <h1>USER-APP</h1>
      {!isLoggedIn && (
        <div>
          <Link className={Styles.navlink} to="/login">
            Login
          </Link>
          <Link className={Styles.navlink} to="/signup">
            Signup
          </Link>
          <Link className={Styles.navlink} to="/home">
            Home
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <Link to="/login" onClick={logoutHandler}>
          <button id={Styles.logoutBtn}>Logout</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
