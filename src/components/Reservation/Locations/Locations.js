import React from 'react';
import Location from './Location/Location';
import leftLogo from '../../../assets/images/logoleft.png';
import rightLogo from '../../../assets/images/logoright.png';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Locations.module.css';

const locations = props => (
  <Aux>
    <h1 className='l-heading-2 center-txt'>
      <span className='primary-text-dark'>Choose</span> Location
    </h1>
    <div className={classes.Locations}>
      <Location
        logo={leftLogo}
        direction='WEST'
        address='ALSSON-NEWGIZA'
        click={() => props.chosen('west')}
      />
      <Location
        logo={rightLogo}
        direction='EAST'
        address='SODIC EAST TOWN'
        click={() => props.chosen('east')}
      />
    </div>
  </Aux>
);

export default locations;
