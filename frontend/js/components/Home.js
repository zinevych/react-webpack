import React from 'react';
import AuthComponent from './Auth';
import Dashboard from './Dashboard';
import { Route, RouteHandler, Link } from 'react-router';

export default AuthComponent(class Home extends React.Component {
  get headerItems() {
    if (true) {
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

  render() {
    return (
        <div className="home">
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Sandbox</a>
            </div>
            {this.headerItems}
          </nav>
          <div className="content">
            <Dashboard />
          </div>
        </div>);
  }
});