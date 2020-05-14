import React from 'react';
import classes from './Membership.module.css';

const membership = props => (
  <div className={classes.Membership}>
    <div>
      <h4 className='l-heading-3 center-txt primary-text-dark'>{props.type}</h4>
      <p>{props.description}</p>
    </div>
    <div className='center-txt'>
      <h4>Pricing</h4>
      <p>{props.displayedPrice}</p>
    </div>
  </div>
);

export default membership;
