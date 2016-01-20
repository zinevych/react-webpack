import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, History } from 'react-router';
import history from './constants/history.js';
import App from './components/App.js';

render((
  <Router history={history}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('container'));