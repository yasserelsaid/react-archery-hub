import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import NavBar from '../../components/NavBar/NavBar';
import LocationsWithMaps from '../../components/LocationsWithMaps/LocationsWithMaps';
import Memberships from '../../components/Memberships/Memberships';
import Schedules from '../../components/Schedules/Schedules';
import Footer from '../../components/Footer/Footer';

const joinNow = () => (
  <Aux>
    <NavBar />
    <LocationsWithMaps />
    <Memberships />
    <Schedules />
    <Footer />
  </Aux>
);

export default joinNow;
