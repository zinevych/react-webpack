import React from 'react';
//import LoginStore from '../stores/LoginStore';
//import RouterStore from '../stores/RouterStore';
//import LoginActionCreators from '../actions/LoginActionCreators';
import ListContainer from './List/ListContainer.js';
import ModalContainer from './Modal/ModalContainer.js';
import { Route, RouteHandler, Link } from 'react-router';
import AuthStore from '../stores/AuthStore';
import router from '../router';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = this._getLoginState();
  }


  _getLoginState() {
    return {
      userLoggedIn: AuthStore.isLoggedIn()
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    AuthStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    console.log('a1');
    this.setState(this._getLoginState());
  }

  componentWillUnmount() {
    //AuthStore.removeChangeListener(this.changeListener);
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Sandbox</a>
          </div>
          {this.headerItems}
        </nav>
        <div className="content">
              {this.props.children}
        </div>
      </div>);
  }

  get headerItems() {
    //if (!this.state.userLoggedIn) {
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

  //render() {
  //  return (<div>
  //      <ListContainer/>
  //      <ModalContainer/>
  //    </div>);
  //}
}