import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, History } from 'react-router';
import history from './constants/history.js';
import App from './components/App.js';
import Login from './components/Login.js';
import Home from './components/Home.js';

render((
  <Router history={history}>
    <Route component={App}>
      <Route name="home" path="/" component={Home}/>
    </Route>
    <Route name="login" path="/login" component={Login}/>
  </Router>
), document.getElementById('container'));