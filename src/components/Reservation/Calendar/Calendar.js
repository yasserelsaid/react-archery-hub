import React, { Component } from "react";
import moment from "moment";
import ReactTimeslotCalendar from "react-timeslot-calendar";

import axios from "../../../axios";
import Error from "../../UI/Error/Error";
import Button from "../../UI/Button/Button";
import classes from "./Calendar.module.css";
import Spinner from "../../UI/Spinner/Spinner";
import ReservationMessage from "../ReservationMessage/ReservationMessage";

import Aux from "../../../hoc/Auxiliary/Auxiliary";

class Calendar extends Component {
  state = {
    showError: false,
    calendar: {},
    loading: true,
    networkError: false,
  };
  _isMounted = false;
  selectedTimeslot = null;
  displayedLocation = null;
  selectTimeslotHandler = (allTimeslots, lastSelectedTimeslot) => {
    this.selectedTimeslot = allTimeslots[0];
    console.log(this.selectedTimeslot);
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;

    if (this.props.location === "west") {
      this.displayedLocation = "ALSSON-NEW GIZA";
    } else if (this.props.location === "east") {
      this.displayedLocation = "SODIC EAST TOWN";
    }

    axios
      .get(`/reservations/${this.props.location}`)
      .then((res) => {
        this.setState({ calendar: res.data, loading: false });
      })
      .catch((err) => {
        this.setState({ networkError: true, loading: false });
      });
  }

  reserveHandler = () => {
    if (this.selectedTimeslot) {
      this.props.confirmReservation(this.selectedTimeslot);
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
      error = <Error message="Please Select a Time Slot" />;
    }

    let output = null;
    if (this.state.loading) {
      output = <Spinner />;
    } else if (this.state.networkError) {
      output = (
        <ReservationMessage
          error
          heading="Network Error"
          text1="Something went wrong, please try again later."
        />
      );
    } else {
      output = (
        <Aux>
          <h1 className="l-heading-2 center-txt py-1">
            <span className="primary-text-dark">Choose</span> Date & Time
          </h1>
          <p className="center-txt">{this.displayedLocation}</p>
          <div className={classes.Calendar}>
            <ReactTimeslotCalendar
              initialDate={moment().format()}
              timeslots={this.state.calendar.timeslots}
              disabledTimeslots={this.state.calendar.disabledTimeslots}
              renderDays={this.state.calendar.ignoreDays}
              onSelectTimeslot={this.selectTimeslotHandler}
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
            <Button click={() => this.reserveHandler(this.selectedTimeslot)}>
              Book Time Slot
            </Button>
          </div>
        </Aux>
      );
    }

    return <div className="container">{output}</div>;
  }
}
export default Calendar;
