import React from 'react';
import classes from './Categories.module.scss';
import Category from '../Category/Category';
import { categoriesMock } from '../../mocks/index';

const Categories = () => {
  return (
    <section className={classes.categories_container}>
      {categoriesMock.data.map(el => {
        return (
          <Category
            key={el.id}
            title={el.title}
            src={el.image.src}
            alt={el.image.alt}
          />
        );
      })}
    </section>
  );
};

export default Categories;
