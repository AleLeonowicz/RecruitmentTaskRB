import React, { useState } from 'react';
import StateContext from './state-context';

import { productsMock } from '../mocks/index';

const StateProvider = props => {
  const [usersQuery, setUsersQuery] = useState('');
  const [fetchedData, setFetchedData] = useState(null);

  const fetchData = async (event, usersQuery) => {
    event.preventDefault();
    // isFetchingErr && setIsFetchingErr(false);
    try {
      //   const response = await fetch(
      //     `https://rebuyengine.com/api/v1/products/search/q=${usersQuery}`
      //   );

      //   const data = await response.json();
      const data = productsMock.data;
      console.log('data', data);
      setFetchedData(data);
    } catch (err) {
      //   setIsFetchingErr(true);
    }
  };

  const stateContext = {
    usersQuery: usersQuery,
    setUsersQuery: setUsersQuery,
    fetchData: fetchData,
    fetchedData: fetchedData,
  };

  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
