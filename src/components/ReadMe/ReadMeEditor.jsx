'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Panel } from 'react-bootstrap';

class ReadMeEditor extends React.Component {
  render() {
    return (
      <Panel header="Header" footer="Footer">
        Content
      </Panel>
    );
  }
};

export default ReadMeEditor;
