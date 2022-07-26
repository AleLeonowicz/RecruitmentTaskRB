import React from 'react';
import classes from './Category.module.scss';

import { useNavigate } from 'react-router-dom';

const Category = props => {
  let navigate = useNavigate();

  const clickCategoryHandler = category => {
    navigate(`/products/${category.toLowerCase()}`);
  };

  return (
    <div
      className={classes.category_container}
      onClick={() => clickCategoryHandler(props.title)}
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
