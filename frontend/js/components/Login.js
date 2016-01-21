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

    return (<div>
        <form>
        <h1>Please login to use this application</h1>
        <div className="email">
          <label>Email: </label>
        </div>
        <div className="password">
          <label>Password: </label>
        </div>
        </form>
        </div>);
  }
}