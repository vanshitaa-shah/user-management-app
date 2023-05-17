import React from "react";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={Styles.header}>
      <h1>Home Page</h1>
      <button id={Styles.logoutBtn}>Logout</button>
    </div>
  );
};

export default Header;
