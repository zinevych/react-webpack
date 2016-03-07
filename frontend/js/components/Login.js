import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import router from '../router';
import LoginActionCreator from '../actions/AuthActionCreator';
import AuthStore from '../stores/AuthStore';
import {Input, Button} from 'react-bootstrap';

export default class Login extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

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
    LoginActionCreator.auth(this.state.user, this.state.password, (loggedIn) => {
      console.log('callback');
      console.log(this);

      if (!loggedIn)
        return this.setState({ error: true })

      const { location } = this.props;

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname)
      } else {
        this.context.router.replace('/')
      }
    });
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