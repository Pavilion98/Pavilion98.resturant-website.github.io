import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { productData } from './components/Products/data';
import Hero from './components/Hero/index';
import Products from './components/Products';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products data={productData} />
    </Router>
  );
}

export default App;
