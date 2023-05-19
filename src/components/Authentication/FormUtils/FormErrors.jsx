import React from "react";
import { useSelector } from "react-redux";
import Styles from "./FormErrors.module.css";

const FormErrors = ({ errorMessage }) => {
  const isError = useSelector((state) => state.auth.isError);
  return isError && <p className={Styles.error}>{errorMessage}</p>;
};

export default FormErrors;
