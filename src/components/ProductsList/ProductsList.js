import React, { Fragment } from 'react';

import ListItem from '../ListItem/ListItem';
import classes from './ProductsList.module.scss';
import { productsMock } from '../../mocks/index';
import Navbar from '../Navbar/Navbar';

const ProductsList = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={classes.productsList_container}>
        {productsMock.data.map(el => {
          return (
            <ListItem
              key={el.id}
              src={el.image.src}
              alt={el.image.alt}
              productType={el.product_type}
              title={el.title}
              rating={el.rating}
              price={el.price}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProductsList;
