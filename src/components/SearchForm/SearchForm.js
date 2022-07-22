import React from 'react';
import classes from './SearchForm.module.scss';

const SearchForm = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        {/* <span></span> */}
        <input
          type="text"
          className={classes.form_input}
          placeholder="What are you looking for?"
        />
        <button className={classes.form_btn}>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
