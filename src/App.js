import React, { Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import ProductsList from './components/ProductsList/ProductsList';
import ProductDetails from './components/ProductDetails/ProductDetails';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/products/*" element={<ProductsList />} />
        <Route path="/details/*" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
