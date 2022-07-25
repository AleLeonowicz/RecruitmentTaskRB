import React, { useContext, Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import StateContext from './store/state-context';
import ProductsList from './components/ProductsList/ProductsList';

function App() {
  const { fetchedData, isCategoryClicked } = useContext(StateContext);

  console.log('fetchedData', fetchedData);
  console.log('isCategoryClicked', isCategoryClicked);

  const showCategories = fetchedData === null && !isCategoryClicked;
  const showProducts = fetchedData !== null || isCategoryClicked;

  return (
    <Fragment>
      <Header />
      {showCategories && <Categories />}
      {showProducts && <ProductsList />}
      <Footer />
    </Fragment>
  );
}

export default App;
