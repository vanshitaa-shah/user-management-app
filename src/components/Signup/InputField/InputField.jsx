import React from "react";
import { ErrorMessage, Field } from "formik";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import Styles from "../Signup.module.css";

const InputField = ({ name, type, value }) => {
  return (
    <div className={Styles.formControl}>
      <label htmlFor={name}>{value}</label>
      <Field type={type} name={name} id={name} />
      <ErrorMessage name={name} component={ErrorMsg} />
    </div>
  );
};

export default InputField;
