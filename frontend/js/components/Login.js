import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import router from '../router';
import LoginActionCreator from '../actions/LoginActionCreator';
import {Input, Button} from 'react-bootstrap';

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
    LoginActionCreator.loginUser(this.state.user, this.state.password);
  }

  render() {
    return (<div>
        <form onSubmit={this.login} className="form-horizontal">
        <h2>Please sign in</h2>
          <Input value={this.state.user}
                 type="text" label="User name: "
                 name="user"
                 placeholder="Enter user name"
                 onChange={this.handleChange}
                 labelClassName="col-xs-2"
                 wrapperClassName="col-xs-4" />

          <Input type="password"
                 name="password"
                 label="Password: "
                 placeholder="Enter password"
                 value={this.state.password}
                 onChange={this.handleChange}
                 labelClassName="col-xs-2"
                 wrapperClassName="col-xs-4"/>

          <Button type="submit" bsStyle="primary">OK</Button>
        </form>
        </div>);
  }
}