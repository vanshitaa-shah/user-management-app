import React from "react";
import img from "../../assets/signup.png";
import Styles from "./Signup.module.css";

const Signup = () => {
  return (
    <>
      <div className={Styles.mainContainer}>
        <div className={Styles.signupContainer}>
          <div className={Styles.formContainer}>
            <h1 id={Styles.heading}>SignUp</h1>

            <form>
              <div className={`${Styles.profile} ${Styles.formControl}`}>
                <label htmlFor="name">Photo +</label>
              </div>

              <div className={Styles.formControl}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className={Styles.formControl}>
                <label htmlFor="email">Email</label>
                <input type="Email" name="email" id="email" />
              </div>

              <div className={Styles.formControl}>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" />
              </div>

              <div className={Styles.formControl}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
              </div>

              <div className={Styles.formControl}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                />
              </div>

              <button
                type="submit"
                className={Styles.btn}
                id={Styles.submitBtn}
              >
                Signup
              </button>

              <button type="reset" className={Styles.btn} id={Styles.resetBtn}>
                Reset
              </button>
            </form>
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
