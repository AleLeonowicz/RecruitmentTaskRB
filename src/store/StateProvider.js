import React, { useState } from 'react';
import StateContext from './state-context';

import { productsMock } from '../mocks/index';

const StateProvider = props => {
  const [usersQuery, setUsersQuery] = useState('');
  const [fetchedData, setFetchedData] = useState(null);
  const [sortState, setSortState] = useState('ascending');
  // const [cartValue, setCartValue] = useState(0);

  const sortMethods = {
    ascending: (a, b) => a['rating'] - b['rating'],
    descending: (a, b) => b['rating'] - a['rating'],
  };

  const fetchData = async (event, usersQuery) => {
    event.preventDefault();
    // isFetchingErr && setIsFetchingErr(false);
    try {
      //   const response = await fetch(
      //     `https://rebuyengine.com/api/v1/products/search/q=${usersQuery}`
      //   );

      //   const data = await response.json();
      const data = productsMock.data;
      setFetchedData(data);
      setUsersQuery('');
    } catch (err) {
      //   setIsFetchingErr(true);
    }
  };

  const stateContext = {
    usersQuery: usersQuery,
    setUsersQuery: setUsersQuery,
    fetchData: fetchData,
    fetchedData: fetchedData,
    setFetchedData: setFetchedData,
    sortState: sortState,
    setSortState: setSortState,
    sortMethods: sortMethods,
  };

  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
