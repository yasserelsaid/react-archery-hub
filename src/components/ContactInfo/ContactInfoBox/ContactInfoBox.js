import React from 'react';
import classes from './ContactInfoBox.module.css';

const contactInfoBox = props => (
  <div className={classes.ContactInfoBox}>
    <i className={props.iconClasses}></i>
    <h3>{props.title}</h3>
    <p>{props.text1}</p>
    <p>{props.text2}</p>
  </div>
);

export default contactInfoBox;
