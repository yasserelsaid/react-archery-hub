import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';
import React, { Component } from 'react';
import Error from '../../UI/Error/Error';
import Button from '../../UI/Button/Button';
import classes from './Calendar.module.css';
// import Aux from '../../hoc/Auxiliary/Auxiliary';

class Calendar extends Component {
  state = {
    showError: false,
    calendar: {},
  };
  selectedTimeslot = null;
  displayedLocation = null;
  selectTimeslotHandler = (allTimeslots, lastSelectedTimeslot) => {
    this.selectedTimeslot = allTimeslots[0];
    console.log(this.selectedTimeslot);
  };
  reserveHandler = () => {
    if (this.selectedTimeslot) {
      console.log('reservation made');
      this.props.confirmReservation();
    } else {
      this.setState({ showError: true });
      setTimeout(() => {
        this.setState({ showError: false });
      }, 3000);
    }
  };
  componentDidMount() {
    if (this.props.location === 'west') {
      this.displayedLocation = 'ALSSON-NEW GIZA';
      const west = {
        timeslots: {
          monday: [
            ['12', '14'],
            ['14', '16'],
          ],
          tuesday: [['19', '20']],
          wednesday: [['19', '20']],
          thursday: [['19', '20']],
          friday: [['19', '20']],
        },
        disabledTimeslots: [
          {
            startDate: 'May 8th 2020, 1:00:00 AM',
            format: 'MMMM Do YYYY, h:mm:ss A',
          },
          {
            startDate: 'May 11th 2020, 3:00:00 AM',
            format: 'MMMM Do YYYY, h:mm:ss A',
          },
          {
            startDate: 'May 12th 2020, 3:00:00 AM',
            format: 'MMMM Do YYYY, h:mm:ss A',
          },
        ],

        ignoreWeekends: {
          sunday: true,
          saturday: true,
        },
      };
      this.setState({ calendar: west });
    } else if (this.props.location === 'east') {
      this.displayedLocation = 'SODIC EAST TOWN';
      const east = {
        timeslots: {
          sunday: [
            ['4', '6'],
            ['7', '8'],
            ['8', '9'],
          ],
          monday: [
            ['4', '6'],
            ['7', '8'],
            ['8', '9'],
          ],
          tuesday: [
            ['4', '6'],
            ['7', '8'],
            ['8', '9'],
          ],
          wednesday: [
            ['4', '6'],
            ['7', '8'],
            ['8', '9'],
          ],
          thursday: [
            ['4', '6'],
            ['7', '8'],
            ['8', '9'],
          ],
          friday: [
            ['4', '6'],
            ['7', '8'],
            ['8', '9'],
          ],
        }, // 1:00 AM - 2:00 AM
        disabledTimeslots: [
          {
            startDate: 'May 8th 2020, 1:00:00 AM',
            format: 'MMMM Do YYYY, h:mm:ss A',
          },
          {
            startDate: 'May 11th 2020, 3:00:00 AM',
            format: 'MMMM Do YYYY, h:mm:ss A',
          },
          {
            startDate: 'May 12th 2020, 3:00:00 AM',
            format: 'MMMM Do YYYY, h:mm:ss A',
          },
        ],

        ignoreWeekends: {
          sunday: false,
          saturday: false,
        },
      };
      this.setState({ calendar: east });
    }
  }

  render() {
    let error = null;
    if (this.state.showError) {
      error = <Error message='Please Select a Time Slot' />;
    }

    return (
      <div className='container'>
        <h1 className='l-heading-2 center-txt py-1'>
          <span className='primary-text-dark'>Choose</span> Date & Time
        </h1>
        <p className='center-txt'>{this.displayedLocation}</p>
        <div className={classes.Calendar}>
          <ReactTimeslotCalendar
            initialDate={moment().format()}
            timeslots={this.state.calendar.timeslots}
            disabledTimeslots={this.state.calendar.disabledTimeslots}
            renderDays={this.state.calendar.ignoreWeekends}
            onSelectTimeslot={this.selectTimeslotHandler}
          />
        </div>
        {error}
        <button
          className={classes.AnotherLocBtn}
          onClick={this.props.changeLocation}
        >
          Choose another location
        </button>
        <Button click={this.reserveHandler}>Book time slot</Button>
      </div>
    );
  }
}
export default Calendar;
