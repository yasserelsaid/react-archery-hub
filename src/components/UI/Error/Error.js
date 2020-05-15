import React from 'react';
import classes from './Error.module.css';

const error = props => <div className={classes.Error}>{props.message}</div>;

export default error;
