import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import router from '../router';
//import LoginActionCreators from '../actions/LoginActionCreators';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      password: ''
    }
  }

  login (e) {
    e.preventDefault();
    //LoginActionCreators.loginUser(this.state.user, this.state.password);
  }

  render() {
    console.log('asasasas');
    return (<div>
        <h1>App</h1>
        </div>);
  }
}