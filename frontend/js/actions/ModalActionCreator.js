import React from 'react';
import $ from 'jquery';
import Dispatcher from '../dispatcher/AppDispatcher';

export default class ModalActionCreator extends React.Component {
  constructor() {
    super();
  }

  static createEntity(obj) {
    console.log($);
    $.ajax({
      url: '/test/createEntity',
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
      actionType: 'createEntity'
    });
  }
}