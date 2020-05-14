import React from 'react';
import ContactInfoBox from './ContactInfoBox/ContactInfoBox';
import classes from './ContactInfo.module.css';

const contactInfo = props => (
  <section className={classes.ContactInfo}>
    <ContactInfoBox
      iconClasses='fas fa-map-marked-alt fa-5x'
      title='Locations'
      text1='Sodic East Town, New Cairo'
      text2='Alsson School-New Giza'
    />
    <ContactInfoBox
      iconClasses='fas fa-phone fa-5x'
      title='Phone Number'
      text1='+20 1005183837'
    />
    <ContactInfoBox
      iconClasses='fas fa-envelope fa-5x'
      title='Email'
      text1='archeryhubeg@gmail.com'
    />
  </section>
);

export default contactInfo;
