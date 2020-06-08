import React from 'react';
import classes from './FormGroupAnimated.module.css';

const formGroupAnimated = (props) => {
  const inputClasses = props.invalid ? classes.Invalid : '';
  return (
    <div className={classes.FormGroupAnimated}>
      <input
        className={inputClasses}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder=' '
        onChange={props.changed}
        value={props.value}
        min={props.min}
        max={props.max}
      />
      <label htmlFor={props.for} className={classes.LabelName}>
        {' '}
        <span className={classes.ContentName}>{props.text}</span>{' '}
      </label>
    </div>
  );
};

export default formGroupAnimated;
