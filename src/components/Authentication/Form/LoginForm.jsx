import React, { useState } from "react";
import { Form, Formik } from "formik";

import { loginValues, loginValidateSchema } from "../FormUtils/FormValidations";
import InputField from "../InputField/InputField";
import Styles from "../Authentication.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/authSlice";
import { useEffect } from "react";
import FormErrors from "../FormUtils/FormErrors";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isError = useSelector((state) => state.auth.isError);
  const [showError, setShowError] = useState(isError);
  const errorMessage = useSelector((state) => state.auth.errorMessage);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn]);

  const onSubmit = (values) => {
    dispatch(authActions.login(values));
    errorHandler();
  };

  const errorHandler = () => {
    if (isError) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 1500);
    }
  };

  return (
    <>
      <Formik
        initialValues={loginValues}
        validationSchema={loginValidateSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <InputField name="email" value="Email" type="email" />

          <InputField name="password" value="Password" type="password" />

          <button
            type="submit"
            className={Styles.btn}
            id={Styles.submitBtn}
            onClick={errorHandler}
          >
            Login
          </button>

          <button type="reset" className={Styles.btn} id={Styles.resetBtn}>
            Reset
          </button>
        </Form>
      </Formik>
      <FormErrors errorMessage={errorMessage} showError={showError} />
    </>
  );
};

export default LoginForm;
