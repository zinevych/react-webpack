import React from 'react';
import Dispatcher from '../dispatcher/AppDispatcher';

export default class LoginActionCreator extends React.Component {
  constructor() {
    super();
  }

  static loginUser(user, password) {
    Dispatcher.dispatch({
      actionType: 'loginUser',
      user: user,
      password: password
    });
  }
}