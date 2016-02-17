import React from 'react';
import $ from 'jquery';
import Dispatcher from '../dispatcher/AppDispatcher';

export default class LoginActionCreator extends React.Component {
  constructor() {
    super();
  }

  static loginUser(user, password) {
    $.ajax({
      url: '/security/auth',
      dataType: 'json',
      data: {
        name: user,
        password: password
      },
      method: 'POST',
      cache: false,
      success: function(data) {
        localStorage.setItem('jwt', data.token)
        Dispatcher.dispatch({
          actionType: 'AUTH_SUCCESS',
          data: data
        });
        //this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
}