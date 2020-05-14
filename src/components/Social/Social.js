import React from 'react';
import classes from './Social.module.css';
import './Social.css';

const social = props => (
  <section className={classes.Social}>
    <div className='container'>
      <h2 className='l-heading-2 py-1' data-aos='fade-up' data-aos-offset='150'>
        We're <span className='primary-text-dark'>Social,</span> Follow Us On
      </h2>

      <a
        href='https://www.facebook.com/ArcheryHub/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i
          className='fab fa-facebook-square fa-5x'
          data-aos='fade-right'
          data-aos-offset='150'
        ></i>
      </a>

      <a
        href='https://www.instagram.com/archeryhub/?hl=en'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i
          className='fab fa-instagram fa-5x'
          data-aos='fade-right'
          data-aos-delay='300'
          data-aos-offset='150'
        ></i>
      </a>
    </div>
  </section>
);

export default social;
