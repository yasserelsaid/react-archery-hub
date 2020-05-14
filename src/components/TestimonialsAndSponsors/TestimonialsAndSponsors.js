import React from 'react';
import classes from './TestimonialsAndSponsors.module.css';
import Testimonials from './Testimonials/Testimonials';
import Sponsors from './Sponsors/Sponsors';

const testimonialsAndSponsors = props => (
  <section className={classes.TestimonialsAndSponsors}>
    <div className={classes.Container}>
      <Testimonials />
      <Sponsors />
    </div>
  </section>
);

export default testimonialsAndSponsors;
