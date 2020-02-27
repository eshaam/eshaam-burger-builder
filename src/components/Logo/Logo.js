import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css'


const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Eshaam Burger React App" />
  </div>
);

export default logo;
