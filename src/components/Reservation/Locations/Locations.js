import React, { Component } from 'react';
import Location from './Location/Location';
import leftLogo from '../../../assets/images/logoleft.png';
import rightLogo from '../../../assets/images/logoright.png';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Locations.module.css';
import * as actionTypes from '../../../store/actions';
import { connect } from 'react-redux';

class Locations extends Component {
  render() {
    return (
      <Aux>
        <h1 className='l-heading-2 center-txt'>
          <span className='primary-text-dark'>Choose</span> Location
        </h1>
        <div className={classes.Locations}>
          <Location
            logo={leftLogo}
            direction='WEST'
            address='ALSSON-NEWGIZA'
            click={() => this.props.onLocationSelected('west')}
          />
          <Location
            logo={rightLogo}
            direction='EAST'
            address='SODIC EAST TOWN'
            click={() => this.props.onLocationSelected('east')}
          />
        </div>
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLocationSelected: (loc) =>
      dispatch({
        type: actionTypes.SUBMIT_LOCATION,
        location: loc,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
