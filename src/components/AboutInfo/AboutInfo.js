import React from 'react';
import classes from './AboutInfo.module.css';
import Box from '../UI/Box/Box';
import GarfVideo from '../../assets/images/goofy.mp4';

const aboutInfo = props => (
  <section className={classes.AboutInfo}>
    <div className='container'>
      <div className={classes.InfoContent}>
        <div className={classes.InfoLeft}>
          <h1 className='l-heading-2 py-1'>
            About<span className='primary-text-dark'> Archery Hub</span>
          </h1>

          <Box light>
            <p>
              Archery Hub is one of a kind Archery Range that is currently
              located in #West (October) and #East (New Cairo) of Cairo.
            </p>
          </Box>

          <h1 className='l-heading-2 py-1'>Company Overview</h1>
          <Box light>
            <p>
              After a long journey of success in Nationals, Internationals,
              African, Arab and Olympic Championships ; Our team decided to go
              Above & Beyond the limits by starting a new Chain for Archery
              training service within greater Cairo and later in other cities.
            </p>

            <p>
              We Selected top notch archery Players and Coaches in Egypt to make
              sure we serve our future Archers and Athletes in a better way and
              let them experience Archery as a fun game and as a unique sport in
              a different way.
            </p>
          </Box>
        </div>
        <div className={classes.InfoRight}>
          <video autoPlay loop muted>
            <source src={GarfVideo} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  </section>
);

export default aboutInfo;
