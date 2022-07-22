import React from 'react';
import classes from './SearchForm.module.scss';

const SearchForm = () => {
  const submitFormHandler = event => {
    console.log('event', event);
    console.log('event.target.value', event.target.value);
    event.preventDefault();
    // fetchData()
  };

  return (
    <div className={classes.container}>
      <form
        className={classes.form}
        onSubmit={event => submitFormHandler(event)}
      >
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
