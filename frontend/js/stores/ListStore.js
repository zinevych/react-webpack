import React from 'react';
import Dispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
let _items = [
  {
    id: 1,
    name: 'item1'
  },
  {
    id: 2,
    name: 'item2'
  },
  {
    id: 3,
    name: 'item3'
  },
  {
    id: 4,
    name: 'item4'
  },
  {
    id: 5,
    name: 'item5'
  },
  {
    id: 6,
    name: 'item6'
  },
  {
    id: 7,
    name: 'item7'
  },
  {
    id: 8,
    name: 'item8'
  }
];

class ListStore extends EventEmitter {
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