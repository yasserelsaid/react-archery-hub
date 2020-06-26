import React from 'react';
import WeekDayTimes from './WeekDayTimes/WeekDayTimes';
import myClasses from './WeekDay.module.css';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

// import classes from './WeekDay.module.css';
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const weekday = (props) => {
  const weekDayTimesCollection = props.timeslots.map((weekDayTimes, index) => {
    return (
      <WeekDayTimes
        key={index}
        onTimeSlotChange={props.onTimeSlotChange}
        day={props.day}
        timeslots={props.timeslots}
        index={index}
        // onAddClick={props.onAddClick}
        onDeleteClick={props.onDeleteClick}
      />
    );
  });

  return (
    <div className={myClasses.WeekDay}>
      <div className={myClasses.DayAndMax}>
        <p className={myClasses.Day}>{capitalizeFirstLetter(props.day)}</p>
        <TextField
          id='filled-number'
          label='Maximum # of People'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          // variant='outlined'
          inputProps={{ min: '1' }}
          value={props.maximumReservations.toString()}
          onChange={(e) => props.onMaxReservationsChange(props.day, e)}
          required
        />
      </div>
      <AddIcon
        style={{ marginRight: 4, cursor: 'pointer' }}
        onClick={() => props.onAddClick(props.day)}
      />
      <div>{weekDayTimesCollection}</div>
      {/* <form className={classes.container} noValidate> */}
    </div>
  );
};

export default weekday;
