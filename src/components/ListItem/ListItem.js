import React, { useContext } from 'react';
import StateContext from '../../store/state-context';
import classes from './ListItem.module.scss';

import img0001 from '../../assets/mocks/img0001.jpeg';
// import img0002 from '../assets/mocks/img0002';

const ListItem = () => {
  const { fetchedData } = useContext(StateContext);

  return (
    <div className={classes.listItem_container}>
      <div className={classes.listItem_box}>
        <img src={img0001} alt={fetchedData[0].image.alt}></img>
        <h5>{fetchedData[0].product_type}</h5>
        <h4>{fetchedData[0].title}</h4>
        <p>Rating: {fetchedData[0].rating.toString()}</p>
        <h1>{fetchedData[0].price.toString()} €</h1>
        <button>DETAILS</button>
      </div>
    </div>
  );
};

export default ListItem;
