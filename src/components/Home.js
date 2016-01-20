import React from 'react';

export default class Home extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1> {this.props.user ? 'Hello ' + this.props.user.username : ''}</h1>
        <Link to="/private">Private page</Link>
      </div>
    );
  }
}