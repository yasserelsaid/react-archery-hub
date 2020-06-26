import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import WeekDay from './WeekDay/WeekDay';
import Box from '../UI/Box/Box';
import LocationRadio from './LocationRadio/LocationRadio';
import Button from '../UI/Button/Button';
import myClasses from './BookingControls.module.css';
import axios from '../../axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import * as actionTypes from '../../store/actions';

class BookingControls extends Component {
  state = {
    days: {
      monday: {
        timeslots: [],
        maximumReservations: 2,
      },
      tuesday: {
        timeslots: [],
        maximumReservations: 2,
      },
      wednesday: {
        timeslots: [],
        maximumReservations: 2,
      },
      thursday: {
        timeslots: [],
        maximumReservations: 2,
      },
      friday: {
        timeslots: [],
        maximumReservations: 2,
      },
      saturday: {
        timeslots: [],
        maximumReservations: 2,
      },
      sunday: {
        timeslots: [],
        maximumReservations: 2,
      },
    },
    location: 'east',
    submitSuccess: null,
    loading: false,
  };

  theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#d17b24',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      background: {
        default: '#f7f7f7',
      },
    },
    typography: {
      fontFamily: ['Exo', 'sans-serif'].join(','),
    },
  });

  TimeslotChangeHandler = (day, position, startOrEnd, e) => {
    const updatedDays = { ...this.state.days };
    const updatedDay = { ...this.state.days[day] };
    const updatedTimeslots = [...this.state.days[day].timeslots];
    updatedTimeslots[position][startOrEnd] = e.target.value;
    updatedDay.timeslots = updatedTimeslots;
    updatedDays[day] = updatedDay;
    this.setState({ days: updatedDays });
  };
  maxReservationsChangeHandler = (day, e) => {
    const updatedDays = { ...this.state.days };
    const updatedDay = { ...this.state.days[day] };
    updatedDay.maximumReservations = parseInt(e.target.value);
    updatedDays[day] = updatedDay;
    this.setState({ days: updatedDays });
  };
  AddClickHandler = (day) => {
    const updatedDays = { ...this.state.days };
    const updatedDay = { ...this.state.days[day] };
    const updatedTimeslots = [...this.state.days[day].timeslots];
    updatedTimeslots.push(['18:00', '19:00']);
    updatedDay.timeslots = updatedTimeslots;
    updatedDays[day] = updatedDay;
    this.setState({ days: updatedDays });
  };

  DeleteClickHandler = (day, index) => {
    const updatedDays = { ...this.state.days };

    const updatedDay = { ...this.state.days[day] };
    const updatedTimeslots = [...this.state.days[day].timeslots];
    updatedTimeslots.splice(index, 1);
    updatedDay.timeslots = updatedTimeslots;
    updatedDays[day] = updatedDay;
    this.setState({ days: updatedDays });
  };

  locationChangeHandler = (value) => {
    this.setState({ location: value });
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .post('/timeslots?token=' + this.props.token, this.state)
      .then((res) => {
        this.setState({ submitSuccess: true, loading: false });
        setTimeout(() => {
          this.setState({ submitSuccess: null });
        }, 3000);
      })
      .catch((err) => {
        this.setState({ submitSuccess: false, loading: false });
        setTimeout(() => {
          this.setState({ submitSuccess: null });
        }, 3000);
      });
  };
  // logoutHandler = () => {
  //   this.props.onLogout();
  //   console.log(this.props.history);
  // };

  render() {
    // for (const day in this.state) {
    //   console.log(day, this.state[day]);
    //   return <WeekDay day={day} onChange={this.TimeslotChangeHandler} />;
    // }
    let showMessage;
    if (this.state.submitSuccess) {
      showMessage = (
        <MuiAlert severity='success' elevation={6} variant='filled'>
          New time slots are set successfully!{' '}
        </MuiAlert>
      );
    } else if (this.state.submitSuccess === false) {
      showMessage = (
        <MuiAlert severity='error' elevation={6} variant='filled'>
          Something went wrong, please try again later!{' '}
        </MuiAlert>
      );
    }
    let spinner = this.state.loading ? <CircularProgress /> : null;

    let redirectComponent = null;
    if (this.props.token === null) {
      redirectComponent = <Redirect to='/admin-login' />;
    }
    const days = Object.keys(this.state.days).map((day) => {
      return (
        <WeekDay
          day={day}
          timeslots={this.state.days[day].timeslots}
          onTimeSlotChange={this.TimeslotChangeHandler}
          onMaxReservationsChange={this.maxReservationsChangeHandler}
          onAddClick={this.AddClickHandler}
          onDeleteClick={this.DeleteClickHandler}
          key={day}
          maximumReservations={this.state.days[day].maximumReservations}
        />
      );
    });
    return (
      <div className='bg-light'>
        {redirectComponent}
        <div className='container py-1c'>
          <Box light>
            <h4 className='l-heading-3 center-txt'>
              Hi Goofy, Set Time Slots Available For Booking
            </h4>
            <ThemeProvider theme={this.theme}>
              <form>
                <div className={myClasses.BoxContent}>
                  <LocationRadio
                    onChange={this.locationChangeHandler}
                    value={this.state.location}
                  />
                  {days} {showMessage} {spinner}
                  <div className={myClasses.Button}>
                    <Button
                      click={this.props.onLogout}
                      style={{ marginRight: '1rem' }}
                    >
                      Logout
                    </Button>
                    <Button type='submit' click={this.formSubmitHandler}>
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </ThemeProvider>
          </Box>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () =>
      dispatch({
        type: actionTypes.AUTH_LOGOUT,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingControls);
