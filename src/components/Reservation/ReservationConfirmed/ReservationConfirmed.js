import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ReservationConfirmed.module.css';

const reservationConfirmed = props => (
  <div className='container'>
    <div className={classes.Confirmed}>
      <h1>Thank you for making a reservation with us!</h1>
      <h2>
        A confirmation Email was sent to you and the event is added to your
        google calendar.
      </h2>
      <h2>We are looking forward to see you soon!</h2>

      <Link to='/' className={classes.Btn}>
        Return to Home
      </Link>
    </div>
  </div>
);

export default reservationConfirmed;
