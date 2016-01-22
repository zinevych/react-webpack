import React from 'react';

export default class LoginActionCreator extends React.Component {
  constructor() {
    super();
  }

  static loginUser(user, password) {
    console.log(user);
    console.log(password);
  }
}