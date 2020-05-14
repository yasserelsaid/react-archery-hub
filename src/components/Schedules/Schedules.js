import React from 'react';
import classes from './Schedules.module.css';

import SchedulesTitle from '../../assets/images/januaryschedules.jpg';
import WestSchedule from '../../assets/images/westschedules.jpg';
import EastSchedule from '../../assets/images/eastschedule.jpg';

const schedules = props => (
  <section className={classes.SchedulesFull}>
    <div className='container'>
      <h2 className='l-heading-2 center-txt primary-text-dark py-1'>
        {' '}
        <i className='far fa-calendar-alt'></i> Schedules
      </h2>

      <div className={classes.Schedules}>
        <div className={[classes.Schedule, classes.item - 2].join(' ')}>
          <img src={SchedulesTitle} alt='January Schedules' />
        </div>

        <div className={[classes.Schedule, classes.item - 1].join(' ')}>
          <img src={WestSchedule} alt='West Schedule' />
        </div>

        <div className={[classes.Schedule, classes.item - 3].join(' ')}>
          <img src={EastSchedule} alt='East Schedule' />
        </div>
      </div>
    </div>
  </section>
);

export default schedules;
