import React from 'react';
import classes from './UserInfoForm.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

import FormGroupAnimated from '../../UI/FormGroupAnimated/FormGroupAnimated';
import Button from '../../UI/Button/Button';

const userInfoForm = props => (
  <Aux>
    <section className={classes.UserInfoForm}>
      <div className='container'>
        <h1 className='l-heading-2'>
          {' '}
          <span className='primary-text-dark'>Book</span> a Session
        </h1>
        <p>Please fill out the form below to book a session with us.</p>

        <form action=''>
          <FormGroupAnimated
            type='text'
            name='name'
            id='name'
            for='name'
            text='Name'
          />
          <FormGroupAnimated
            type='email'
            name='email'
            id='email'
            for='email'
            text='Email'
          />
          <FormGroupAnimated
            type='tel'
            name='number'
            id='number'
            for='number'
            text='Phone Number'
          />

          <Button type='submit' className='btn' click={props.showLocations}>
            Continue
          </Button>
        </form>
      </div>
    </section>
  </Aux>
);

export default userInfoForm;
