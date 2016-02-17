import React from 'react';
import AuthComponent from './Auth'

export default AuthComponent(class Home extends React.Component {
  render() {
    return (<h1>Hello {this.props.user ? this.props.user.name : ''}</h1>);
  }
});