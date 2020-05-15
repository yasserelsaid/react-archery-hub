import React from 'react';
import classes from './FormGroupAnimated.module.css';

const formGroupAnimated = props => (
  <div className={classes.FormGroupAnimated}>
    <input type={props.type} name={props.name} id={props.id} placeholder=' ' />
    <label htmlFor={props.for} className={classes.LabelName}>
      {' '}
      <span className={classes.ContentName}>{props.text}</span>{' '}
    </label>
  </div>
);

export default formGroupAnimated;
