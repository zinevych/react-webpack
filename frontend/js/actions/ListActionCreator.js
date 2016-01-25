import React from 'react';
import Dispatcher from '../dispatcher/AppDispatcher';

class ListActionCreator extends React.Component {
  constructor() {
    super();
  }

  deleteItemByIndex(index){
    Dispatcher.dispatch({
      actionType: 'deleteItemByIndex',
      index: index
    });
  }
}

const ListActionCreatorObj = new ListActionCreator();
export default ListActionCreatorObj;