import React, { useContext, Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import StateContext from './store/state-context';
import ProductsList from './components/ProductsList/ProductsList';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  const { fetchedData, isCategoryClicked, clickedProduct } =
    useContext(StateContext);

  // console.log('clickedProduct', clickedProduct);
  // console.log('fetchedData', fetchedData);
  // console.log('isCategoryClicked', isCategoryClicked);

  const showCategories = fetchedData === null && !isCategoryClicked;
  const showProductsList =
    (fetchedData !== null || isCategoryClicked) && clickedProduct === null;
  const showProductDetails = clickedProduct !== null;

  return (
    <Fragment>
      <Header />
      {showCategories && <Categories />}
      {showProductsList && <ProductsList />}
      {showProductDetails && <ProductDetails />}
      <Footer />
    </Fragment>
  );
}

export default App;
