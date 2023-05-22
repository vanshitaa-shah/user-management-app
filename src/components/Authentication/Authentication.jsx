import React, { useEffect } from "react";
import img from "../../assets/signup.png";
import LoginForm from "./Form/LoginForm";
import SignupForm from "./Form/SignupForm";
import Styles from "./Authentication.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header/Header";

// Reusable container for both login and signup page
const Authentication = ({ type }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  });

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <Header />
      {!isLoggedIn && (
        <div className={Styles.mainContainer}>
          <div className={Styles.container}>
            <div className={Styles.formContainer}>
              <h1 id={Styles.heading}>{type}</h1>
              {type === "SignUp" && <SignupForm />}
              {type === "Login" && <LoginForm />}
              <div className={Styles.bottomSection}>
                {type === "SignUp" && (
                  <p>
                    Already Registered? <Link to="/login">Login Here</Link>
                  </p>
                )}
                {type === "Login" && (
                  <p>
                    Not Registered? <Link to="/signup">Signup</Link>
                  </p>
                )}
              </div>
            </div>
            <div className={Styles.imageContainer}>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Authentication;
