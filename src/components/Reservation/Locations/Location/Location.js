import React from "react";
import classes from "./Location.module.css";

const location = (props) => (
  <div className={classes.Location} onClick={props.click}>
    <img src={props.logo} alt="Logo" />
    <h1 style={{ fontSize: "2.2rem" }}>
      <span className={classes.ColorText}>{props.direction}</span> TOWN
    </h1>
    <p>{props.address}</p>
  </div>
);

export default location;
