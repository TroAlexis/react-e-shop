import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.module.scss';

import Header from 'Components/header/header';
import HomePage from '~/js/pages/homepage/homepage';
import ShopPage from '~/js/pages/shop/shop';
import SignInUp from '~/js/pages/sign-in-up/sign-in-up';

function App() {
  return pug`
    div
      Header
      Switch
        Route(exact path="/" component=HomePage)
        
        Route(path="/shop" component=ShopPage)
        
        Route(path="/signin" component=SignInUp)
  `;
}

export default App;
