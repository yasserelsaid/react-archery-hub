import React from 'react';
import classes from './NavigationItems.module.css';
import { Link } from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
  <div className={classes.NavRight}>
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/about' exact>
        About
      </NavigationItem>
      <NavigationItem link='/faqs' exact>
        FAQs
      </NavigationItem>
      <NavigationItem link='/contact' exact>
        Contact Us
      </NavigationItem>
    </ul>
    <Link to='/join' className={classes.Btn}>
      JOIN NOW
    </Link>
  </div>
);

export default navigationItems;
