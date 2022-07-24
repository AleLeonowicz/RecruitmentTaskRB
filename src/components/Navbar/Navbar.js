import React from 'react';

import classes from './Navbar.module.scss';
import { productsMock } from '../../mocks/index';

const Navbar = () => {
  let articlesNumber = productsMock.data.length;

  return (
    <nav className={classes.container}>
      <div className={classes.container_navBox}>
        <div className={classes.container_navBox_articlesNum}>
          {articlesNumber} articles
          <span>|</span>
        </div>
        <select name="Sort by ratings">
          <option value="ascending">Best results</option>
          <option value="ascending">Rating: ascending</option>
          <option value="descending">Rating: descending</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
