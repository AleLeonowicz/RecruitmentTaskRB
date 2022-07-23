import React from 'react';

import ListItem from '../ListItem/ListItem';
import classes from './ProductsList.module.scss';
import { productsMock } from '../../mocks/index';

const ProductsList = () => {
  return (
    <div className={classes.productsList_container}>
      {productsMock.data.map(el => {
        return (
          <ListItem
            src={el.image.src}
            alt={el.image.alt}
            productType={el.product_type}
            title={el.title}
            rating={el.rating.toString()}
            price={el.price.toString()}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
