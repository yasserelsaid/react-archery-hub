import React from 'react';
import myClasses from './WeekDayTimes.module.css';
import TimePicker from '../TimePicker/TimePicker';
import DeleteIcon from '@material-ui/icons/Delete';

const weekDayTimes = (props) => (
  <div className={myClasses.WeekDayTimes}>
    <TimePicker
      style={{ marginRight: 22 }}
      label='Start Time'
      onChange={(e) => props.onTimeSlotChange(props.day, props.index, 0, e)}
      value={props.timeslots[props.index][0]}
    />
    <TimePicker
      style={{ marginRight: 10 }}
      label='End Time'
      onChange={(e) => props.onTimeSlotChange(props.day, props.index, 1, e)}
      value={props.timeslots[props.index][1]}
    />

    <DeleteIcon
      style={{ cursor: 'pointer' }}
      onClick={() => props.onDeleteClick(props.day, props.index)}
    />
  </div>
);
export default weekDayTimes;
