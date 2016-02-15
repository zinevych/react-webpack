import React from 'react';
import Dispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

class ModalStore extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  getListItems() {
    return _items;
  }

  deleteListItemByIndex(index) {
    console.log('deleted');
  }
}

// Initialize the singleton to register with the
// dispatcher and export for React components
const ListStoreObj = new ListStore();

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
Dispatcher.register((payload) => {
  switch (payload.actionType) {
    case 'deleteItemByIndex':
      //ListStoreObj.deleteListItemByIndex(payload.index);

      _items = _items.filter((item, index) => {
        return index !== payload.index;
      });

      ListStoreObj.emit(CHANGE_EVENT);
      break;
  }
});

export default ListStoreObj;