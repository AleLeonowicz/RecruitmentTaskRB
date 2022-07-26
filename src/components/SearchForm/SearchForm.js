import React, { useContext } from 'react';
import classes from './SearchForm.module.scss';
import StateContext from '../../store/state-context';

import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const { usersQuery, setUsersQuery, fetchData } = useContext(StateContext);

  let navigate = useNavigate();

  const usersQueryHandler = event => {
    setUsersQuery(event.target.value);
  };

  const submitQueryHandler = (event, usersQuery) => {
    fetchData(event, usersQuery);
    navigate(`/products?query=${usersQuery}`);
  };

  return (
    <div className={classes.container}>
      <form
        className={classes.form}
        onSubmit={event => submitQueryHandler(event, usersQuery)}
      >
        {/* <span></span> */}
        <input
          type="text"
          className={classes.form_input}
          placeholder="What are you looking for?"
          onChange={event => usersQueryHandler(event)}
          value={usersQuery}
        />
        <button className={classes.form_btn}>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
