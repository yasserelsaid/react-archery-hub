import React from 'react';
import classes from './Testimonials.module.css';
import TestimonialBox from './TestimonialBox/TestimonialBox';
import Yasser from '../../../assets/images/yasser(2).png';
import Sehely from '../../../assets/images/se7.png';

const testimonials = props => (
  <div className={classes.Testimonials}>
    <h2 className='l-heading-2 py-2' data-aos='fade-up'>
      What Our <span className='primary-text-dark'>Guests</span> Say
    </h2>
    <div data-aos='fade-up'>
      <TestimonialBox
        dark
        text1='"I had an amazing time, love the friendly vibe"'
        text2='Yasser Elsaid'
        img={Yasser}
      />
      <TestimonialBox
        dark
        text1='"Best place for archery training"'
        text2='Seif Elsehely'
        img={Sehely}
      />
    </div>
  </div>
);

export default testimonials;
