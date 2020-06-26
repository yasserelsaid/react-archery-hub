import React, { Component } from 'react';
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';

import axios from '../../../axios';
import Error from '../../UI/Error/Error';
import Button from '../../UI/Button/Button';
import classes from './Calendar.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import ReservationMessage from '../ReservationMessage/ReservationMessage';
import { connect } from 'react-redux';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import * as actionTypes from '../../../store/actions';

class Calendar extends Component {
  state = {
    showError: false,
    calendar: {},
    loading: true,
    networkError: false,
  };
  _isMounted = false;
  timeslotProps = {
    format: 'hh:mm ', // Each element in the timeslot array is an Hour
    showFormat: 'h:mm A', // They will be displayed as Hour:Minutes AM/PM
  };
  // selectTimeslotHandler = (allTimeslots, lastSelectedTimeslot) => {
  //   this.setState({ selectedTimeslot: allTimeslots[0] });
  // };

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;

    // const data = {
    //   numberOfPeople: parseInt(this.props.numberOfPeople),
    // };
    axios
      .get(
        `/reservations/${this.props.location}?numberOfPeople=${this.props.numberOfPeople}/`
      )
      .then((res) => {
        this.setState({
          calendar: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ networkError: true, loading: false });
      });
  }

  reserveHandler = () => {
    if (this.props.selectedTimeslot) {
      this.props.onSubmitTimeslot();
    } else {
      this.setState({ showError: true });
      setTimeout(() => {
        if (this._isMounted) {
          this.setState({ showError: false });
        }
      }, 3000);
    }
  };

  render() {


    let error = null;
    if (this.state.showError) {
      error = <Error message='Please Select a Time Slot' />;
    }
    let locationName;
    if (this.props.location === 'west') {
      locationName = 'ALSSON NEW-GIZA';
    } else if (this.props.location === 'east') {
      locationName = 'SODIC EAST TOWN';
    }
    let output = null;
    if (this.state.loading) {
      output = <Spinner />;
    } else if (this.state.networkError) {
      output = (
        <ReservationMessage
          error
          heading='Network Error'
          text1='Something went wrong, please try again later.'
        />
      );
    } else {
      output = (
        <Aux>
          <h1 className='l-heading-2 center-txt py-1'>
            <span className='primary-text-dark'>Choose</span> Date & Time
          </h1>
          <p className='center-txt'>{locationName}</p>
          <div className={classes.Calendar}>
            <ReactTimeslotCalendar
              initialDate={moment().format()}
              timeslots={this.state.calendar.timeslots}
              disabledTimeslots={this.state.calendar.disabledTimeslots}
              renderDays={this.state.calendar.ignoreDays}
              onSelectTimeslot={this.props.onTimeslotSelected}
              timeslotProps={this.timeslotProps}
            />
          </div>
          <div className={classes.Buttons}>
            {error}
            <button
              className={classes.AnotherLocBtn}
              onClick={this.props.changeLocation}
            >
              Choose Another Location
            </button>
            <Button
              click={() => this.reserveHandler(this.props.selectedTimeslot)}
            >
              Book Time Slot
            </Button>
          </div>
        </Aux>
      );
    }

    return <div className='container'>{output}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.reserve.location,
    selectedTimeslot: state.reserve.selectedTimeslot,
    numberOfPeople: state.reserve.form.numberOfPeople.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTimeslotSelected: (allTimeslots, lastSelectedTimeslot) =>
      dispatch({
        type: actionTypes.SELECT_TIMESLOT,
        timeslot: allTimeslots[0],
      }),
    changeLocation: () =>
      dispatch({
        type: actionTypes.CHANGE_LOCATION,
      }),
    onSubmitTimeslot: () =>
      dispatch({ type: actionTypes.SHOW_CONFIRMATION_PROMPT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
