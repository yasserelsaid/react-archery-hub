import React from 'react';
import classes from './FormGroupMessage.module.css';

const formGroupMessage = props => (
  <div className={classes.FormGroupMessage}>
    <label htmlFor='message'>{props.message}</label>
    <textarea name='message' id='message'></textarea>
  </div>
);

export default formGroupMessage;
