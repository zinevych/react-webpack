import React from 'react';
//import LoginStore from '../stores/LoginStore';
//import RouterStore from '../stores/RouterStore';
//import LoginActionCreators from '../actions/LoginActionCreators';
import { Route, RouteHandler, Link } from 'react-router';
import router from '../router';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">React Flux app with JWT authentication innit</a>
          </div>
          {this.headerItems}
        </nav>
        <div className="content">
              {this.props.children}
        </div>
      </div>);
  }

  get headerItems() {
    if (!this.state.userLoggedIn) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>)
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="" onClick={this.logout}>Logout</a>
          </li>
        </ul>)
    }
  }
}