import React from 'react';
import classes from './Categories.module.scss';
import Category from '../Category/Category';

const Categories = () => {
  return (
    <section className={classes.categories_container}>
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </section>
  );
};

export default Categories;
