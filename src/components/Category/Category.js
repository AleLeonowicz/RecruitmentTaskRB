import React, { useContext } from 'react';
import classes from './Category.module.scss';
import StateContext from '../../store/state-context';

const Category = props => {
  const { setIsCategoryClicked } = useContext(StateContext);

  return (
    <div
      className={classes.category_container}
      onClick={() => setIsCategoryClicked(true)}
    >
      <div className={classes.category_innerContainer}>
        <div className={classes.category_imgContainer}>
          <img src={props.src} alt={props.alt} />
        </div>
        <div className={classes.category_textContainer}>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
