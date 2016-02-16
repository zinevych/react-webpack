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
        //Dispatcher.dispatch({
        //  actionType: 'loginUser',
        //  user: user,
        //  password: password
        //});
        //this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
}