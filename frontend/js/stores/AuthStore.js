import React from 'react';
import Dispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import jwt_decode from 'jwt-decode';

const CHANGE_EVENT = 'change';

class AuthStore extends EventEmitter {
  constructor() {
    super();
    this._user = null;
    this._jwt = null;
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  setJwt(jwt) {
    console.log(jwt);
    this._jwt = jwt;
    this._user = jwt_decode(this._jwt);
    console.log(this._user);
  }

  get jwt() {
    return this._jwt;
  }

  get user() {
    return this._user;
  }

  isLoggedIn() {
    return !!this._user;
  }
}

const AuthStoreObj = new AuthStore();

Dispatcher.register((payload) => {
  switch (payload.actionType) {
    case 'AUTH_SUCCESS':
      AuthStoreObj.setJwt(payload.data.token);
      AuthStoreObj.emit(CHANGE_EVENT);
      break;
  }
});

export default AuthStoreObj;