import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.module.scss';

import Header from 'Components/header/header';
import HomePage from '~/js/pages/homepage/homepage';
import ShopPage from '~/js/pages/shop/shop';

function App() {
  return pug`
    div
      Header
      Switch
        Route(exact path="/" component=HomePage)
        Route(path="/shop" component=ShopPage)
  `;
}

export default App;
