'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Panel, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class Credential extends React.Component {
  render() {
    return (
      <Panel>
        <Form>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" placeholder="Enter username" />
          </FormGroup>
          <FormGroup controlId="formControlsEmail">
            <ControlLabel>Email address</ControlLabel>
            <FormControl type="email" placeholder="Enter email" />
          </FormGroup>
          <Button type="submit" bsStyle="primary">Save</Button>
        </Form>
      </Panel>
    );
  }
};

export default Credential;
