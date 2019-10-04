import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import ReactDOM from 'react-dom';
import React from 'react'; // eslint-disable-line no-unused-vars
import '../scss/index.scss';

import App from './components/App';

const element = document.getElementById('app');

ReactDOM.render(
  <App />,
  element,
);
