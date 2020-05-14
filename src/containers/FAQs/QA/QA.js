import React from 'react';
import classes from './QA.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const qa = props => (
  <Aux>
    <p className={classes.Question}>{props.question}</p>
    <p className={classes.Answer}>{props.answer}</p>
  </Aux>
);

export default qa;
