import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, History } from 'react-router';
import history from './constants/history.js';
import App from './components/App.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import AuthActionCreator from './actions/AuthActionCreator.js';
import AuthStore from './stores/AuthStore.js';

let jwt = localStorage.getItem('jwt');
if (jwt) {
  AuthActionCreator.loginUser(jwt);
}

function requireAuth (nextState, replace) {
  if(!AuthStore.user) {
    replace({ nextPathname: nextState.location.pathname }, '/login');
  }
}

render((
  <Router history={history}>
    <Route component={App}>
      <Route name="home" path="/" component={Home} onEnter={requireAuth}/>
      <Route name="login" path="/login" component={Login}/>
    </Route>
  </Router>
), document.getElementById('container'));