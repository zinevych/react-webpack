import React from 'react';
var Modal = require('react-modal');
import { Button } from 'react-bootstrap';
import Form from 'react-jsonschema-form';
import schema from '../../../../json-schemas/schema/form.js';
import uiSchema from '../../../../json-schemas/ui-schema/form.js';

import ClientActionCreator from '../../actions/ClientActionCreator.js';

const formData = {
  title: "First task",
  done: true
};

const log = (type) => console.log.bind(console, type);


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class ModalContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  submit() {
    ClientActionCreator.createClient();
  }

  render() {
    var that = this;
    return (<div><Button onClick={that.openModal} bsStyle="primary">Primary</Button>
          <Modal
              isOpen={that.state.modalIsOpen}
              onRequestClose={that.closeModal}
              style={customStyles} >

            <h2>Hello</h2>
            <button onClick={that.closeModal}>close</button>
            <div>I am a modal</div>
            <Form schema={schema}
                  formData={formData}
                  uiSchema={uiSchema}
                  onChange={log("changed")}
                  onSubmit={that.submit}
                  onError={log("errors")} />
          </Modal>
        </div>
    );
  }
}