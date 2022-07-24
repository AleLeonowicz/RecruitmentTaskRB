import React, { Fragment, useContext } from 'react';

import ListItem from '../ListItem/ListItem';
import classes from './ProductsList.module.scss';
import { productsMock } from '../../mocks/index';
import Navbar from '../Navbar/Navbar';
import StateContext from '../../store/state-context';

const ProductsList = () => {
  const { sortState, sortMethods } = useContext(StateContext);

  // productsMock.data.sort(sortMethods[sortState].method);

  return (
    <Fragment>
      <Navbar />
      <div className={classes.productsList_container}>
        {productsMock.data.sort(sortMethods[sortState]).map(el => {
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

// {data.sort(sortMethods[sortState].method).map((el, i) => (
//   <li key={i}>{el}</li>
