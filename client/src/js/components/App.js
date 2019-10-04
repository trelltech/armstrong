// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import MainPanel from './MainPanel';

import '../../scss/components/App.scss';

const history = createBrowserHistory();

const App = () => (
  <section className="app-component">
    <Router history={history}>
        <Route path="/" component={MainPanel} />
    </Router>
  </section>
);

export default App;
