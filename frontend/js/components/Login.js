import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import router from '../router';
import LoginActionCreator from '../actions/LoginActionCreator';

export default class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      user: '',
      password: ''
    }
  }

  handleChange(e) {
    var s = {};
    s[e.target.name] = e.target.value;
    this.setState(s);
  }

  login (e) {
    e.preventDefault();
    console.log(LoginActionCreator)
    LoginActionCreator.loginUser(this.state.user, this.state.password);
  }

  render() {
    return (<div>
        <form onSubmit={this.login}>
        <h1>Please login to use this application</h1>
        <div className="email">
          <label>Email: </label>
          <input value={this.state.user} name="user" onChange={this.handleChange}/>
        </div>
        <div className="password">
          <label>Password: </label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        </div>
        <button>OK</button>
        </form>
        </div>);
  }
}