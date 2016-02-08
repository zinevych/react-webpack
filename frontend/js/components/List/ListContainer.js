import React from 'react';
import ListActionCreator from '../../actions/ListActionCreator';
import ListStore from '../../stores/ListStore';
import ListComponent from './List.js';

export default class ListContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.items = ListStore.getListItems();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ListStore.addChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      items: ListStore.getListItems()
    });
  }

  render() {
    var that = this;
    return (<ListComponent data={this.state.items}></ListComponent>);
  }
}