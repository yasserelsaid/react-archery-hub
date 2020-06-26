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
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';
import moment from 'moment';
class Reserve extends Component {
  // state = {
  //   output: 'infoForm',
  // };
  // location = null;
  // clientInfo = null;

  // locationChosenHandler = (loc) => {
  //   this.location = loc;
  //   this.setState({ output: 'chooseDate' });
  // };
  // formSubmitHandler = (clientInfo) => {
  //   this.clientInfo = clientInfo;
  //   this.setState({ output: 'chooseLocation' });
  // };
  // chooseLocation = () => {
  //   this.setState({ output: 'chooseLocation' });
  // };

  componentDidMount() {
    this.props.initialState();
  }
  makeReservation = () => {
    this.props.showSpinner();
    const data = {
      name: this.props.name,
      email: this.props.email,
      number: this.props.number,
      numberOfPeople: parseInt(this.props.numberOfPeople),
      time: this.props.selectedTimeslot.startDate._d,
    };

    Axios.post(`/reservation/${this.props.location}`, data)
      .then((res) => {
        // this.setState({ output: 'reservationConfirmationMessage' });
        this.props.reservationConfirmed();
      })
      .catch((err) => {
   
        this.props.showError();
        console.log(err);
      });
  };
  render() {
    let locationName;
    if (this.props.location === 'west') {
      locationName = 'ALSSON NEW-GIZA';
    } else if (this.props.location === 'east') {
      locationName = 'SODIC EAST TOWN';
    }

    let output;
    if (this.props.output === 'infoForm') {
      output = <UserInfoForm />;
    } else if (this.props.output === 'chooseLocation') {
      output = <Locations />;
    } else if (this.props.output === 'chooseDate') {
      output = (
        <Calendar
          confirmReservation={this.reservationConfirmationMessageHandler}
        />
      );
    } else if (this.props.output === 'confirmReservationPrompt') {
      const people =
        this.props.numberOfPeople > 1
          ? `${this.props.numberOfPeople} people`
          : `1 person`;
      const date = moment(this.props.selectedTimeslot.startDate).format(
        'dddd MMMM Do YYYY [at] h:mm a'
      );
      const confirmationPromptMessage = `Are you sure you want to make a reservation for ${people} in ${locationName} on ${date}?`;
      output = (
        <ReservationMessage
          continueButton
          continueClicked={this.makeReservation}
          text1={confirmationPromptMessage}
        />
      );
    } else if (this.props.output === 'loading') {
      output = <Spinner />;
    } else if (this.props.output === 'reservationConfirmationMessage') {
      output = (
        <ReservationMessage
          heading='Thank you for making a reservation with us!'
          text1='An email was sent to you to confirm your reservation and it is added to your Google calendar.'
          text2='We are looking forward to see you soon.'
        />
      );
    } else if (this.props.output === 'reservationError') {
      output = (
        <ReservationMessage
          error
          heading='Oops!'
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

const mapStateToProps = (state) => {
  return {
    output: state.reserve.output,
    location: state.reserve.location,
    selectedTimeslot: state.reserve.selectedTimeslot,
    numberOfPeople: state.reserve.form.numberOfPeople.value,
    name: state.reserve.form.name.value,
    email: state.reserve.form.email.value,
    number: state.reserve.form.number.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initialState: () => dispatch({ type: actionTypes.INITIAL_STATE }),
    // showConfirmation: () => dispatch({ type: actionTypes.SHOW_CONFIRMATION }),
    showSpinner: () => dispatch({ type: actionTypes.SHOW_SPINNER }),
    reservationConfirmed: () =>
      dispatch({ type: actionTypes.SHOW_CONFIRMATION }),
    showError: () => dispatch({ type: actionTypes.SHOW_ERROR }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Reserve);
