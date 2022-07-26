import React, { useContext, Fragment, useState, useEffect } from 'react';
import classes from './ProductDetails.module.scss';
import StateContext from '../../store/state-context';
import thumbUp from '../../assets/svg/thumbs-up-outline.svg';
import thumbDown from '../../assets/svg/thumbs-down-outline.svg';
import { useLocation } from 'react-router-dom';
import { productsMock } from '../../mocks';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

const ProductDetails = () => {
  const { fetchedData, setFetchedData, usersVotes, setUsersVotes } =
    useContext(StateContext);

  /*eslint-disable */
  useEffect(() => {
    if (!fetchedData) {
      setFetchedData(productsMock.data);
    }
  }, []);
  /*eslint-enable */

  let location = useLocation();

  let productId = location.pathname.split('/details/')[1];

  const [renderedElement, setRenderedElement] = useState(null);

  useEffect(() => {
    if (fetchedData) {
      const elementToRender = fetchedData.find(el => el.id === productId);

      setRenderedElement(elementToRender);
    }
  }, [productId, fetchedData]);

  ///////////////////////////////////////////////////////////////

  const voteHandler = voteValue => {
    // const updatedFetchedData = fetchedData.map(el => {
    //   if (el.id === renderedElement.id) {
    //     return {
    //       ...el,
    //       rating: el.rating + voteValue,
    //     };
    //   }
    //   return el;
    // });
    // setFetchedData(updatedFetchedData);

    const updatedUsersVotes = usersVotes.map(elementVote => {
      if (elementVote.productId === renderedElement.id) {
        return {
          ...elementVote,
          vote: voteValue,
        };
      }
      return elementVote;
    });

    setUsersVotes(updatedUsersVotes);
  };

  const disableVotingHandler = () => {
    let isDisabled = false;
    usersVotes.forEach(elementVote => {
      if (elementVote.productId === renderedElement.id) {
        if (elementVote.vote === 0) {
          isDisabled = false;
        }
        if (elementVote.vote === 1 || elementVote.vote === -1) {
          isDisabled = true;
        }
      }
    });
    return isDisabled;
  };

  const score =
    renderedElement?.rating +
    usersVotes?.find(el => el.productId === renderedElement?.id)?.vote;

  ///////////////////////////////////////////////////////////////

  return (
    <Fragment>
      <BreadCrumbs title={renderedElement?.title} />
      <div className={classes.detailsContainer}>
        {renderedElement !== null && (
          <Fragment>
            <div className={classes.detailsContainer_imgContainer}>
              <img
                src={renderedElement.image.src}
                alt={renderedElement.image.alt}
              />
            </div>
            <div className={classes.detailsContainer_infoContainer}>
              <h1>{renderedElement.title}</h1>
              <p>Product type: {renderedElement.product_type}</p>
              <p>{renderedElement.description}</p>
              <h3>Customer rating: {score}</h3>
              <div className={classes.infoContainer_rate}>
                <h4>Do you like this offer?</h4>
                <div className={classes.infoContainer_rateIcons}>
                  <button
                    className={classes.infoContainer_upvoteBtn}
                    onClick={() => voteHandler(1)}
                    disabled={disableVotingHandler()}
                  >
                    <img src={thumbUp} alt="Upvote the offer" />
                  </button>
                  <button
                    className={classes.infoContainer_downvoteBtn}
                    onClick={() => voteHandler(-1)}
                    disabled={disableVotingHandler()}
                  >
                    <img src={thumbDown} alt="Downvote the offer" />
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.detailsContainer_addToCartContainer}>
              <div className={classes.addToCart_backgroundWrapper}>
                <div className={classes.addToCart_wrapper}>
                  <p>
                    {renderedElement.color}
                    <span>|</span>
                    {renderedElement.rom}
                  </p>
                </div>
                <h1>{parseFloat(renderedElement.price).toFixed(2)} €</h1>
                <a role="button" href="https://www.rebuy.de/">
                  Buy now
                </a>
                <p>
                  Ready to ship in {renderedElement.readyToShip} business days
                </p>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default ProductDetails;
