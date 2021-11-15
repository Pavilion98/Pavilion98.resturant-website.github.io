import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { productData } from './components/Products/data';
import { dishesData } from './components/Dishes/data';

import Hero from './components/Hero';
import Products from './components/Products';
import Dishes from './components/Dishes';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Dishes data={dishesData} />
      <Products heading="Most Popular Foods" data={productData} />
    </Router>
  );
}

export default App;
