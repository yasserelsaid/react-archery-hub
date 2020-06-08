import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ReservationMessage.module.css';
import Button from '../../UI/Button/Button';

const reservationConfirmationMessage = (props) => {
  let mainClasses = [classes.ReservationMessage];
  if (props.error) {
    mainClasses.push(classes.Error);
  }
  let continueButton;
  if (props.continueButton) {
    continueButton = <Button click={props.continueClicked}>Continue</Button>;
  }
  return (
    <div className='container'>
      <div className={mainClasses.join(' ')}>
        <h1>{props.heading}</h1>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <div className={classes.Buttons}>
          <Link to='/' className={classes.Btn}>
            Return to Home
          </Link>
          {continueButton}
        </div>
      </div>
    </div>
  );
};

export default reservationConfirmationMessage;
