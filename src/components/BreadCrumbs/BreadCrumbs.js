import React from 'react';
import classes from './BreadCrumbs.module.scss';

import { useNavigate } from 'react-router-dom';

const BreadCrumbs = props => {
  let navigate = useNavigate();

  return (
    <nav className={classes.container}>
      <button onClick={() => navigate(`/`)}>Home page</button>
      <span>&gt;</span>
      <button onClick={() => navigate(`/products/smartphones`)}>
        Smartphones
      </button>
      <span>&gt;</span>
      <p>{props?.title}</p>
    </nav>
  );
};

export default BreadCrumbs;
