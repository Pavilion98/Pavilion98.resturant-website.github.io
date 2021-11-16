import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

import { popularData } from './components/Popular/data';
import { dishesData } from './components/Dishes/data';
import { stepsData } from './components/Steps/data';

import Hero from './components/Hero';
import Dishes from './components/Dishes';
import Popular from './components/Popular';
import Steps from './components/Steps';


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Dishes data={dishesData} />
      <Popular data={popularData} />
      <Steps data = {stepsData} />
    </Router>
  );
}

export default App;
