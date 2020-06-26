import React, { Component } from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Aux from '../../hoc/Auxiliary/Auxiliary';

import BookingControls from '../../components/BookingControls/BookingControls';

class AdminPanel extends Component {
  render() {
    return (
      <Aux>
        <NavBar />

        <BookingControls />

        <Footer />
      </Aux>
    );
  }
}

export default AdminPanel;
