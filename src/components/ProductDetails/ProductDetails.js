import React, { useContext, Fragment } from 'react';
import classes from './ProductDetails.module.scss';
import StateContext from '../../store/state-context';
import thumbUp from '../../assets/svg/thumbs-up-outline.svg';
import thumbDown from '../../assets/svg/thumbs-down-outline.svg';

const ProductDetails = () => {
  const { clickedProduct } = useContext(StateContext);

  console.log('clickedProduct.price', clickedProduct.price);
  return (
    <div className={classes.detailsContainer}>
      {clickedProduct !== null && (
        <Fragment>
          <div className={classes.detailsContainer_imgContainer}>
            <img
              src={clickedProduct.image.src}
              alt={clickedProduct.image.alt}
            />
          </div>
          <div className={classes.detailsContainer_infoContainer}>
            <h1>{clickedProduct.title}</h1>
            <p>Product type: {clickedProduct.product_type}</p>
            <p>{clickedProduct.description}</p>
            <h3>Customer rating: {clickedProduct.rating}</h3>
            <div className={classes.infoContainer_rate}>
              <h4>Do you like this offer?</h4>
              <div className={classes.infoContainer_rateIcons}>
                <img src={thumbUp} alt="Upvote the offer" />
                <img src={thumbDown} alt="Downvote the offer" />
              </div>
            </div>
          </div>
          <div className={classes.detailsContainer_addToCartContainer}>
            <div className={classes.addToCart_backgroundWrapper}>
              <div className={classes.addToCart_wrapper}>
                <p>
                  {clickedProduct.color}
                  <span>|</span>
                  {clickedProduct.rom}
                </p>
              </div>
              <h1>{parseFloat(clickedProduct.price).toFixed(2)} €</h1>
              <button>Add to Cart</button>
              <p>Ready to ship in {clickedProduct.readyToShip} business days</p>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ProductDetails;
