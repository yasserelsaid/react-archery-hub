import React from "react";
import classes from "./FormGroupMessage.module.css";

const formGroupMessage = (props) => (
  <div className={classes.FormGroupMessage}>
    <label htmlFor="message">{props.label}</label>
    <textarea
      name="message"
      id="message"
      value={props.value}
      onChange={props.changed}
    ></textarea>
  </div>
);

export default formGroupMessage;
