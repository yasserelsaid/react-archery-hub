import React from 'react';
import classes from './Box.module.css';

const box = props => {
  let bg;
  if (props.dark) {
    bg = 'Dark';
  } else if (props.light) {
    bg = 'Light';
  }
  return (
    <div className={[classes.Box, classes[bg]].join(' ')}>{props.children}</div>
  );
};

export default box;
