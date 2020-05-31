import React from "react";
import { Link } from "react-router-dom";
import classes from "./ReservationMessage.module.css";

const reservationMessage = (props) => (
  <div className="container">
    <div className={classes.Confirmed}>
      <h1>{props.heading}</h1>
      <h2>{props.text1}</h2>
      <h2>{props.text2}</h2>

      <Link to="/" className={classes.Btn}>
        Return to Home
      </Link>
    </div>
  </div>
);

export default reservationMessage;
