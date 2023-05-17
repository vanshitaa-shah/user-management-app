import React from "react";
import img from "../../assets/signup.png";
import SignupForm from "./Form/SignupForm";
import Styles from "./Signup.module.css";

const Signup = () => {
  return (
    <>
      <div className={Styles.mainContainer}>
        <div className={Styles.signupContainer}>
          <div className={Styles.formContainer}>
            <h1 id={Styles.heading}>SignUp</h1>
            <SignupForm />
          </div>
          <div className={Styles.imageContainer}>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
