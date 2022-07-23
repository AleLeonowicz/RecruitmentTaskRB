import React, { useContext, Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import StateContext from './store/state-context';
import ProductsList from './components/ProductsList/ProductsList';

function App() {
  const { fetchedData } = useContext(StateContext);
  console.log('fetchedData', fetchedData);

  return (
    <Fragment>
      <Header />
      {fetchedData === null && <Categories />}
      {fetchedData !== null && <ProductsList />}
    </Fragment>
  );
}

export default App;
