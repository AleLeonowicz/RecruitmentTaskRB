import React, { useState } from 'react';

import StateContext from './state-context';

const StateProvider = props => {
  const [usersQuery, setUsersQuery] = useState('');

  const stateContext = {
    usersQuery: usersQuery,
    setUsersQuery: setUsersQuery,
  };

  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
