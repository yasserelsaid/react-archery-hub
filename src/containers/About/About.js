import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';

import NavBar from '../../components/NavBar/NavBar';
import AboutInfo from '../../components/AboutInfo/AboutInfo';
import VVM from '../../components/VVM/VVM';
import Footer from '../../components/Footer/Footer';

const about = props => (
  <Aux>
    <NavBar />
    <AboutInfo />
    <VVM />
    <Footer />
  </Aux>
);

export default about;
