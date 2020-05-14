import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';

import NavBar from '../../components/NavBar/NavBar';
import Showcase from '../../components/Showcase/Showcase';
import MeetCoaches from '../../components/MeetCoaches/MeetCoaches';
import TestimonialsAndSponsors from '../../components/TestimonialsAndSponsors/TestimonialsAndSponsors';
import Social from '../../components/Social/Social';
import Footer from '../../components/Footer/Footer';

const home = props => (
  <Aux>
    <NavBar trans />
    <Showcase />
    <MeetCoaches />
    <TestimonialsAndSponsors />
    <Social />
    <Footer />
  </Aux>
);

export default home;
