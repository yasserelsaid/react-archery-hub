import React, { Component } from 'react';
import LocationWithMap from './LocationWithMap/LocationWithMap';
import classes from './LocationsWithMaps.module.css';

import LeftLogo from '../../assets/images/logoleft.png';
import RightLogo from '../../assets/images/logoright.png';

import LeftPic from '../../assets/images/westpic.jpg';
import RightPic from '../../assets/images/eastpic.jpg';

class LocationsWithMaps extends Component {
  render() {
    return (
      <section className={classes.LocationsWithMaps}>
        <div className='container'>
          <h2 className='l-heading-2 center-txt primary-text-dark py-1'>
            {' '}
            <i className='fas fa-map-marked-alt '></i> Locations
          </h2>
          <div className='center-txt'>
            <LocationWithMap
              logo={LeftLogo}
              img={LeftPic}
              coloredTitleText='WEST'
              uncoloredTitleText='TOWN'
              address='ALSSON-NEWGIZA'
              west
              mapNumber='1'
            />

            <LocationWithMap
              logo={RightLogo}
              img={RightPic}
              coloredTitleText='EAST'
              uncoloredTitleText='TOWN'
              address='SODIC EAST TOWN'
              east
              mapNumber='2'
            />
          </div>
        </div>
      </section>
    );
  }
}
export default LocationsWithMaps;
