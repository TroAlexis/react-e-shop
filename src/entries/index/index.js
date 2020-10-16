// WEBPACK ENTRY FILE MAIN
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '~/js/redux/store';

// SCSS
import 'Scss/shared.scss';

// JS
import App from '~/js/App';

const wrapper = document.querySelector('.root');
ReactDOM.render(pug`
  Provider(
    store=store
  )
    BrowserRouter
      App
`, wrapper);
