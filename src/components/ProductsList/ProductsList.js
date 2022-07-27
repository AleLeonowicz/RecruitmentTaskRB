import React, { Fragment, useContext, useEffect } from 'react';

import ListItem from '../ListItem/ListItem';
import classes from './ProductsList.module.scss';
import { productsMock } from '../../mocks/index';
import SortSelect from '../SortSelect/SortSelect';
import StateContext from '../../store/state-context';

import { useNavigate } from 'react-router-dom';

const ProductsList = () => {
  const { sortState, sortMethods, setFetchedData, fetchedData, usersVotes } =
    useContext(StateContext);

  let navigate = useNavigate();

  /*eslint-disable */
  useEffect(() => {
    if (!fetchedData) {
      setFetchedData(productsMock.data);
    }
  }, []);
  /*eslint-enable */

  const showDetailsHandler = el => {
    navigate(`/details/${el.id}`);
  };

  return (
    <Fragment>
      <SortSelect />
      <div className={classes.productsList_container}>
        {fetchedData !== null &&
          fetchedData.sort(sortMethods[sortState]).map(el => {
            const score =
              el.rating +
              usersVotes?.find(voteEl => voteEl.productId === el.id)?.vote;

            return (
              <ListItem
                key={el.id}
                src={el.image.src}
                alt={el.image.alt}
                productType={el.product_type}
                title={el.title}
                rating={score}
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
