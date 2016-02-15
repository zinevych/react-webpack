import React from 'react';
import $ from 'jquery';
import Dispatcher from '../dispatcher/AppDispatcher';

export default class ModalActionCreator extends React.Component {
  constructor() {
    super();
  }

  static createClient(obj) {
    console.log($);
    $.ajax({
      url: '/client/create',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    Dispatcher.dispatch({
      actionType: 'create'
    });
  }
}