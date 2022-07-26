import React, { Fragment, useContext, useEffect } from 'react';

import ListItem from '../ListItem/ListItem';
import classes from './ProductsList.module.scss';
import { productsMock } from '../../mocks/index';
import Navbar from '../Navbar/Navbar';
import StateContext from '../../store/state-context';

import { useNavigate } from 'react-router-dom';

const ProductsList = () => {
  const { sortState, sortMethods, setFetchedData, fetchedData } =
    useContext(StateContext);

  let navigate = useNavigate();

  useEffect(() => {
    if (!fetchedData) {
      setFetchedData(productsMock.data);
    }
  }, []);

  const showDetailsHandler = el => {
    navigate(`/details/${el.id}`);
    // setFetchedData(productsMock.data);
  };

  return (
    <Fragment>
      <Navbar />
      <div className={classes.productsList_container}>
        {fetchedData !== null &&
          fetchedData.sort(sortMethods[sortState]).map(el => {
            return (
              <ListItem
                key={el.id}
                src={el.image.src}
                alt={el.image.alt}
                productType={el.product_type}
                title={el.title}
                rating={el.rating}
                price={el.price}
                onClick={() => showDetailsHandler(el)}
              />
            );
          })}
      </div>
    </Fragment>
  );
};

export default ProductsList;
