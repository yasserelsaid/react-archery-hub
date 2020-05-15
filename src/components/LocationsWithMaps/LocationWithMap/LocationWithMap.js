import React from 'react';
import classes from './LocationWithMap.module.css';
import MyMap from '../../MyMap/MyMap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const locationWithMap = props => {
  let mapAndImage;
  if (props.west) {
    mapAndImage = (
      <Aux>
        {' '}
        <img className={classes.ImgNxtMap} src={props.img} alt='Archery' />
        <MyMap
          center={{ lat: 30.0004787, lng: 31.0481126 }}
          mapContainerStyle={{ flex: '2', minHeight: '100%' }}
        />{' '}
      </Aux>
    );
  } else if (props.east) {
    mapAndImage = (
      <Aux>
        <MyMap
          center={{ lat: 30.006549, lng: 31.505759 }}
          mapContainerStyle={{ flex: '2', minHeight: '100%' }}
        />{' '}
        <img className={classes.ImgNxtMap} src={props.img} alt='Archery' />
      </Aux>
    );
  }

  return (
    <div className={classes.Location}>
      <div className={classes.LocationInfo}>
        <div>
          <img src={props.logo} alt='Logo' data-aos='fade-left' />
          <h4 className='l-heading-3'>
            <span className='primary-text-dark'>{props.coloredTitleText}</span>{' '}
            {props.uncoloredTitleText}
          </h4>
          <p>{props.address}</p>
        </div>
      </div>

      <div className={classes.MapAndImage}>{mapAndImage}</div>
    </div>
  );
};

export default locationWithMap;
