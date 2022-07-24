import React from 'react';
import classes from './Header.module.scss';
import logo from '../../assets/Rebuy_Logo_Grey_RGB.png';
import SearchForm from '../SearchForm/SearchForm';
import cart from '../../assets/svg/cart.svg';
import { goToHomePage } from '../../utils/index';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_top} />
      <div className={classes.header_bottom}>
        <div className={classes.headerContainer}>
          <div className={classes.headerContainer_imgContainer}>
            <img
              className={classes.headerContainer_logo}
              alt="rebuy"
              src={logo}
              onClick={goToHomePage}
            />
          </div>
          <div className={classes.headerContainer_searchContainer}>
            <SearchForm />
          </div>
          <div className={classes.headerContainer_naviContainer}>
            <img src={cart} alt="Cart" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
