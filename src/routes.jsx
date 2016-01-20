import React from 'react';
import Router, {DefaultRoute, Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';

<Route path="/" handler={App}>
  <Route path="/" component={App} />
  <Route name="login" path="/login" handler={Login}/>
</Route>