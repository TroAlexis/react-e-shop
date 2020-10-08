import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '~/js/pages/homepage/homepage';

const HatsPage = () => pug`
  div
    h1 HATS PAGE
`;

function App() {
  return pug`
    div
      Switch
        Route(exact path="/e-shop/" component=HomePage)
        Route(path="/hats" component=HatsPage)
  `;
}

export default App;
