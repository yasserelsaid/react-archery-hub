import React from 'react';
import classes from './Sponsors.module.css';
import Box from '../../UI/Box/Box';
import Sigma from '../../../assets/images/sigma(5).png';

const Sponsors = props => (
  <div className={classes.Sponsors}>
    <h2 className='l-heading-2 py-2' data-aos='fade-up' data-aos-offset='400'>
      Our <span className='primary-text-dark'>Sponsors</span>
    </h2>

    <div className={classes.Sponsor} data-aos='fade-up' data-aos-offset='400'>
      <Box dark>
        <a
          href='https://sigmafiteg.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Sigma} alt='SigmaFit' />
        </a>
        <br />
        <p>
          Sigma Fit is a techwear company that creates revolutionary products to
          solve people’s daily challenges. Every product has distinctive
          properties that mix technology with innovative designs.
        </p>
      </Box>
    </div>
  </div>
);

export default Sponsors;
