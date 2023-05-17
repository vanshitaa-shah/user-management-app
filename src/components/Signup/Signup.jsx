import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import img from "../../assets/signup.png";
import Styles from "./Signup.module.css";

const initialValues = {
  name: "",
  email: "",
  profile: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = (values, onSubmitprops) => {
  console.log("submitted");
  console.log("Form Data", values);
  onSubmitprops.resetForm();
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required!";
  }
  if (!values.email) {
    errors.email = "Required!";
  } else if (
    !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)
  ) {
    errors.email = "Invaild email format!";
  }
  if (!values.phone) {
    errors.phone = "Required!";
  } else if (!/^(\+91|0)?[6789]\d{9}$/.test(values.phone)) {
    errors.phone = "Invalid phone number!";
  }
  if (!values.password) {
    errors.password = "Required!";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required!";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password and Confirm password does not match!";
  }
  return errors;
};

const Signup = () => {
  return (
    <>
      <div className={Styles.mainContainer}>
        <div className={Styles.signupContainer}>
          <div className={Styles.formContainer}>
            <h1 id={Styles.heading}>SignUp</h1>

            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={onSubmit}
            >
              <Form>
                <div className={`${Styles.profile} ${Styles.formControl}`}>
                  <label htmlFor="profile">Photo +</label>
                  <Field
                    type="file"
                    name="profile"
                    id="profile"
                    accept="Image/jpg,Image/png"
                    hidden
                  />
                  <ErrorMessage name="profile" component={ErrorMsg} />
                </div>

                <div className={Styles.formControl}>
                  <label htmlFor="name">Name</label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage name="name" component={ErrorMsg} />
                </div>

                <div className={Styles.formControl}>
                  <label htmlFor="email">Email</label>
                  <Field type="Email" name="email" id="email" />
                  <ErrorMessage name="email" component={ErrorMsg} />
                </div>

                <div className={Styles.formControl}>
                  <label htmlFor="phone">Phone</label>
                  <Field type="text" name="phone" id="phone" />
                  <ErrorMessage name="phone" component={ErrorMsg} />
                </div>

                <div className={Styles.formControl}>
                  <label htmlFor="password">Password</label>
                  <Field type="password" name="password" id="password" />
                  <ErrorMessage name="password" component={ErrorMsg} />
                </div>

                <div className={Styles.formControl}>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                  />
                  <ErrorMessage name="confirmPassword" component={ErrorMsg} />
                </div>

                <button
                  type="submit"
                  className={Styles.btn}
                  id={Styles.submitBtn}
                >
                  Signup
                </button>

                <button
                  type="reset"
                  className={Styles.btn}
                  id={Styles.resetBtn}
                >
                  Reset
                </button>
              </Form>
            </Formik>
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
