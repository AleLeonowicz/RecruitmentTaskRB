import React from 'react';

import ListItem from '../ListItem/ListItem';
import classes from './ProductsList.module.scss';

const ProductsList = () => {
  return (
    <div className={classes.productsList_container}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default ProductsList;
