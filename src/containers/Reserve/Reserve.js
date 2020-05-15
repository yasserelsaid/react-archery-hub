import React, { Component } from 'react';

import classes from './Reserve.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

import NavBar from '../../components/NavBar/NavBar';

import UserInfoForm from '../../components/Reservation/UserInfoForm/UserInfoForm';
import Locations from '../../components/Reservation/Locations/Locations';
import Calendar from '../../components/Reservation/Calendar/Calendar';
import Spinner from '../../components/UI/Spinner/Spinner';
import ReservationConfirmed from '../../components/Reservation/ReservationConfirmed/ReservationConfirmed';
import Footer from '../../components/Footer/Footer';

class Reserve extends Component {
  state = {
    output: 'inputInfoForm',
  };
  location = null;

  locationChosenHandler = loc => {
    this.location = loc;
    this.setState({ output: 'chooseDate' });
  };
  chooseAnotherLocationHandler = () => {
    this.setState({ output: 'chooseLocation' });
  };
  reservationConfirmedHandler = () => {
    this.setState({ output: 'loading' });
    setTimeout(() => this.setState({ output: 'reservationConfirmed' }), 5000);
  };

  render() {
    let output;
    if (this.state.output === 'inputInfoForm') {
      output = (
        <UserInfoForm showLocations={this.chooseAnotherLocationHandler} />
      );
    } else if (this.state.output === 'chooseLocation') {
      output = <Locations chosen={this.locationChosenHandler} />;
    } else if (this.state.output === 'chooseDate') {
      output = (
        <Calendar
          location={this.location}
          changeLocation={this.chooseAnotherLocationHandler}
          confirmReservation={this.reservationConfirmedHandler}
        />
      );
    } else if (this.state.output === 'loading') {
      output = <Spinner />;
    } else if (this.state.output === 'reservationConfirmed') {
      output = <ReservationConfirmed />;
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
