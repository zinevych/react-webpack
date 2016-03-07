import React from 'react';
import AuthStore from '../stores/AuthStore';

export default (ComposedComponent) => {
  return class AuthComponent extends React.Component {

    constructor() {
      super();
      this.state = this._getLoginState();
    }

    _getLoginState() {
      return {
        userLoggedIn: AuthStore.isLoggedIn(),
        user: AuthStore.user,
        jwt: AuthStore.jwt
      };
    }

    componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      AuthStore.addChangeListener(this.changeListener);
    }

    _onChange() {
      this.setState(this._getLoginState());
    }

    componentWillUnmount() {
      //AuthStore.removeChangeListener(this.changeListener);
    }

    render() {
      return (
          <ComposedComponent
              {...this.props}
              user={this.state.user}
              jwt={this.state.jwt}
              userLoggedIn={this.state.userLoggedIn} />
      );
    }
  }
};