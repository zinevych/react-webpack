import React from 'react';
import $ from 'jquery';
import Dispatcher from '../dispatcher/AppDispatcher';

export default class LoginActionCreator extends React.Component {
  constructor() {
    super();
  }

  static loginUser(user, password) {
    console.log($);
    //$.ajax({
    //  url: this.props.url,
    //  dataType: 'json',
    //  cache: false,
    //  success: function(data) {
    //    this.setState({data: data});
    //  }.bind(this),
    //  error: function(xhr, status, err) {
    //    console.error(this.props.url, status, err.toString());
    //  }.bind(this)
    //});
    Dispatcher.dispatch({
      actionType: 'loginUser',
      user: user,
      password: password
    });
  }
}