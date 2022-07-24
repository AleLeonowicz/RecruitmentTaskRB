import React, { useContext } from 'react';

import classes from './Navbar.module.scss';
import { productsMock } from '../../mocks/index';
import StateContext from '../../store/state-context';

const Navbar = () => {
  const { setSortState } = useContext(StateContext);

  let articlesNumber = productsMock.data.length;

  return (
    <nav className={classes.container}>
      <div className={classes.container_navBox}>
        <div className={classes.container_navBox_articlesNum}>
          {articlesNumber} articles
          <span>|</span>
        </div>
        <select
          name="Sort by ratings"
          defaultValue={'ascending'}
          onChange={event => {
            setSortState(event.target.value);
          }}
        >
          <option value="ascending">Rating: ascending</option>
          <option value="descending">Rating: descending</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
