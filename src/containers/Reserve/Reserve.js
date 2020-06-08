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
  // reservationConfirmationMessageHandler = (selectedTimeSlot) => {
  //   this.setState({ output: 'loading' });

  //   const data = {
  //     ...this.clientInfo,
  //     dateTime: selectedTimeSlot.startDate._d,
  //   };

  //   Axios.post(`/reserve/${this.location}`, data)
  //     .then((res) => {
  //       this.setState({ output: 'reservationConfirmationMessage' });
  //     })
  //     .catch((err) => {
  //       this.setState({ output: 'reservationError' });
  //     });
  // };
  componentDidMount() {
    this.props.showForm();
  }

  render() {
    console.log(this.props.numberOfPeople);
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
        this.props.numberOfPeople.value > 1
          ? `${this.props.numberOfPeople.value} people`
          : `1 person`;
      const date = moment(this.props.selectedTimeslot.startDate).format(
        'dddd MMMM Do YYYY'
      );
      const confirmationPromptMessage = `Are you sure you want to make a reservation for ${people} in ${locationName} on ${date}?`;
      output = (
        <ReservationMessage
          continueButton
          continueClicked={this.props.showConfirmation}
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

const mapStateToProps = (state) => {
  return {
    output: state.output,
    location: state.location,
    selectedTimeslot: state.selectedTimeslot,
    numberOfPeople: state.form.numberOfPeople,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showForm: () => dispatch({ type: actionTypes.SHOW_FORM }),
    showConfirmation: () => dispatch({ type: actionTypes.SHOW_CONFIRMATION }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Reserve);
