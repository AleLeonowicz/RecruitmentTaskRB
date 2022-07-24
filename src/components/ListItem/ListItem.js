import React from 'react';
import classes from './ListItem.module.scss';

const ListItem = props => {
  return (
    <div className={classes.listItem_container}>
      <div className={classes.listItem_box}>
        <div className={classes.listItem_imgBlock}>
          <img src={props.src} alt={props.alt} />
        </div>
        <div className={classes.listItem_textBlock}>
          <p>{props.productType}</p>
          <h4>{props.title}</h4>
          <p>Rating: {props.rating}</p>
          <h1>{props.price} €</h1>
          <button className={classes.detailsBtn}>Show details</button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;

/* <div className={classes.listItem_container}>
<div className={classes.listItem_box}>
  <img src={img0001} alt={fetchedData[0].image.alt}></img>
  <h5>{fetchedData[0].product_type}</h5>
  <h4>{fetchedData[0].title}</h4>
  <p>Rating: {fetchedData[0].rating.toString()}</p>
  <h1>{fetchedData[0].price.toString()} €</h1>
  <button>DETAILS</button>
</div>
</div> */
