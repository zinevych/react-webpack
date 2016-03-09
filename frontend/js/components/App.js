import React from 'react';
import AuthStore from '../stores/AuthStore';
import router from '../router';

export default class App extends React.Component {
  constructor() {
    super();
    //this.state = this._getLoginState();
  }
  //
  //componentDidMount() {
  //  this.changeListener = this._onChange.bind(this);
  //  AuthStore.addChangeListener(this.changeListener);
  //}
  //
  //_onChange() {
  //  this.setState(this._getLoginState());
  //}
  //
  //componentWillUnmount() {
  //  //AuthStore.removeChangeListener(this.changeListener);
  //}

  render() {
    return this.props.children;
  }
}