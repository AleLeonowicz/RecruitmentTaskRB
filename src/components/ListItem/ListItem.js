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
          <h1>{parseFloat(props.price).toFixed(2)} €</h1>
          <button className={classes.detailsBtn} onClick={props.onClick}>
            Show details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
