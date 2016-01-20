import React from 'react';
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
    return ''
  }
}