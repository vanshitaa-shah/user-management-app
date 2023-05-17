import React from "react";
import Header from "../Header/Header";
import Styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={Styles.homeContainer}>
        <div className={Styles.container}>
          <div className={Styles.imgContainer}>
            <img src="https://reqres.in/img/faces/9-image.jpg" alt="" />
          </div>
          <h1 className={Styles.greeting}>Hello Vanshita!</h1>
          <p>
            you are registered with the email id - vanshitashah969@gmail.com and
            phone number - 9510352737
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
