import React from "react";
import Styles from "./ErrorMsg.module.css";

const ErrorMsg = (props) => {
  return <div className={Styles.error}>{props.children}</div>;
};

export default ErrorMsg;
