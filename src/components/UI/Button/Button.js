import React from "react";
import classes from "./Button.module.css";
// import classes from './Button.module.css';

const button = (props) => (
  <button
    disabled={props.disabled}
    className={classes.Button}
    type={props.type}
    onClick={props.click}
  >
    {props.children}
  </button>
);

export default button;
