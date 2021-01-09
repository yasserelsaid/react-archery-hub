import React from 'react';
import Membership from './Membership/Membership';
import classes from './Memberships.module.css';

const memberships = props => (
  <section className={classes.MembershipsFull}>
    <div className='container'>
      <h2 className='l-heading-2 center-txt primary-text-dark py-1'>
        Memberships
      </h2>

      <div className={classes.Memberships}>
        <Membership
          type='One Session'
          description='If you want to try archery for fun, you can come visit us and pay for only one session.'
          displayedPrice='200 EGP/Session'
        />
        <Membership
          type='Monthly'
          description='If you want to practice archery and you can commit for a whole month then this is your plan.'
          displayedPrice='1500 EGP /Month'
        />
        <Membership
          type='Yearly'
          description='If you are serious about becoming a professional archer and have big goals in archery, you can pay the yearly fee at a discounted price.'
          displayedPrice='8000 EGP /Year'
        />
      </div>
    </div>
  </section>
);

export default memberships;
