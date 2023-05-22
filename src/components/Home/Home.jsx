import React from "react";
import Header from "../Header/Header";
import Styles from "./Home.module.css";
import { useSelector } from "react-redux";

// Home page
const Home = () => {
  const userInfo = useSelector((state) => state.auth.currentUser);

  return (
    <>
      <Header />
      <div className={Styles.homeContainer}>
        <div className={Styles.container}>
          <div className={Styles.imgContainer}>
            <img src={userInfo.profile} alt="" />
          </div>
          <h1 className={Styles.greeting}>Hello {userInfo.name}!</h1>
          <p>
            you are registered with the email id -{" "}
            <strong>{userInfo.email}</strong> and phone number -{" "}
            <strong>{userInfo.phone}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
