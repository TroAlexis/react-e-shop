// WEBPACK ENTRY FILE MAIN
import React from 'react';
import ReactDOM from 'react-dom';

// SCSS
import 'Scss/shared.scss';

// JS
import HomePage from '~/js/pages/homepage/homepage';

const wrapper = document.querySelector('.root');
ReactDOM.render(pug`HomePage`, wrapper);

if (module.hot) {
  module.hot.accept();
}
