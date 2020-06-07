import React, { Component } from 'react';

import classes from './Reserve.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

import NavBar from '../../components/NavBar/NavBar';

import UserInfoForm from '../../components/Reservation/UserInfoForm/UserInfoForm';
import Locations from '../../components/Reservation/Locations/Locations';
import Calendar from '../../components/Reservation/Calendar/Calendar';
import Spinner from '../../components/UI/Spinner/Spinner';
import ReservationMessage from '../../components/Reservation/ReservationMessage/ReservationMessage';
import Footer from '../../components/Footer/Footer';
import Axios from '../../axios';

class Reserve extends Component {
  state = {
    output: 'inputInfoForm',
  };
  location = null;
  clientInfo = null;

  locationChosenHandler = (loc) => {
    this.location = loc;
    this.setState({ output: 'chooseDate' });
  };
  formSubmitHandler = (clientInfo) => {
    this.clientInfo = clientInfo;
    this.setState({ output: 'chooseLocation' });
  };
  chooseLocation = () => {
    this.setState({ output: 'chooseLocation' });
  };
  reservationMessageHandler = (selectedTimeSlot) => {
    this.setState({ output: 'loading' });

    const data = {
      ...this.clientInfo,
      dateTime: selectedTimeSlot.startDate._d,
    };

    Axios.post(`/reserve/${this.location}`, data)
      .then((res) => {
        this.setState({ output: 'reservationMessage' });
      })
      .catch((err) => {
        this.setState({ output: 'reservationError' });
      });
  };

  render() {
    let output;
    if (this.state.output === 'inputInfoForm') {
      output = <UserInfoForm submitForm={this.formSubmitHandler} />;
    } else if (this.state.output === 'chooseLocation') {
      output = <Locations chosen={this.locationChosenHandler} />;
    } else if (this.state.output === 'chooseDate') {
      output = (
        <Calendar
          location={this.location}
          changeLocation={this.chooseLocation}
          confirmReservation={this.reservationMessageHandler}
        />
      );
    } else if (this.state.output === 'loading') {
      output = <Spinner />;
    } else if (this.state.output === 'reservationMessage') {
      output = (
        <ReservationMessage
          heading='Thank you for making a reservation with us!'
          text1='An email was sent to you to confirm your reservation and it is added to your Google calendar.'
          text2='We are looking forward to see you soon.'
        />
      );
    } else if (this.state.output === 'reservationError') {
      output = (
        <ReservationMessage
          error
          heading='Network Error'
          text1='Something went wrong, please try again later.'
        />
      );
    }

    return (
      <Aux>
        <NavBar />
        <div className={classes.Output}>{output}</div>
        <Footer />
      </Aux>
    );
  }
}
export default Reserve;
