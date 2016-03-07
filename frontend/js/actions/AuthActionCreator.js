import React from 'react';
import $ from 'jquery';
import Dispatcher from '../dispatcher/AppDispatcher';

export default class LoginActionCreator extends React.Component {
  constructor() {
    super();
  }

  static auth(user, password, cb) {
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
        cb(true);
        //this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  static loginUser(jwt) {
    var savedJwt = localStorage.getItem('jwt');

    Dispatcher.dispatch({
      actionType: 'AUTH_SUCCESS',
      data: {
        token: jwt
      }
    });

    if (savedJwt !== jwt) {
      //var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';
      //
      //RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('jwt', jwt);
    }
  }
}