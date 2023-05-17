import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={Styles.header}>
      <h1>Home Page</h1>
      <Link to="/signup">
        <button id={Styles.logoutBtn}>Logout</button>
      </Link>
    </div>
  );
};

export default Header;
