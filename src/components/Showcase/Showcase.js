import React, { Component } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import classes from './Showcase.module.css';

class Showcase extends Component {
  componentDidMount() {
    new Typed('.type', {
      strings: ['Athlete.', 'Olympian.', 'Archer.'],
      typeSpeed: 80, // Default value
      backSpeed: 60, // Default value
      loop: true, // Default value
      backDelay: 2000,
      startDelay: 300,
    });
  }

  render() {
    return (
      <header>
        <div className={classes.Showcase}>
          <div className={classes.ShowcaseContent}>
            <h1 className='l-heading py-1'>
              {' '}
              Become an{' '}
              <span className='block'>
                {' '}
                <span className='type  primary-text-light '></span>
              </span>
            </h1>

            <Link to='/book' className='btn'>
              {' '}
              BOOK NOW{' '}
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Showcase;
