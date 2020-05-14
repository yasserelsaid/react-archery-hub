import React from 'react';
import classes from './TestimonialBox.module.css';

const box = props => {
  let bg;
  if (props.dark) {
    bg = 'Dark';
  } else if (props.light) {
    bg = 'Light';
  }
  return (
    <div className={[classes.Testimonial, classes.Box, classes[bg]].join(' ')}>
      <div className={classes.TestimonialImg}>
        <img src={props.img} alt='' />
      </div>
      <div className={classes.TestimonialTxt}>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
      </div>
    </div>
  );
};

export default box;
