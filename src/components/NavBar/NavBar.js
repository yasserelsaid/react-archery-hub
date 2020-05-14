import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

import fullLogo from '../../assets/images/logo(7).png';
import NavigationItems from './NavigationItems/NavigationItems';

const navBar = props => {
  let bgNav = null;
  if (props.trans) {
    bgNav = classes.Trans;
  }
  return (
    <nav className={[classes.NavBar, bgNav].join(' ')}>
      <div className={classes.Container}>
        <Link to='/'>
          <img className={classes.Logo} src={fullLogo} alt='' />
        </Link>
        <NavigationItems />
      </div>
    </nav>
  );
};

export default navBar;
