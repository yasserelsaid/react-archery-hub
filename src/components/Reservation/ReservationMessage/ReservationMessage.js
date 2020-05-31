import React from "react";
import { Link } from "react-router-dom";
import classes from "./ReservationMessage.module.css";

const reservationMessage = (props) => {
  let mainClasses = [classes.ReservationMessage];
  if (props.error) {
    mainClasses.push(classes.Error);
  }
  return (
    <div className="container">
      <div className={mainClasses.join(" ")}>
        <h1>{props.heading}</h1>
        <p>{props.text1}</p>
        <p>{props.text2}</p>

        <Link to="/" className={classes.Btn}>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default reservationMessage;
