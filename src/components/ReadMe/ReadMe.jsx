'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Panel } from 'react-bootstrap';

class ReadMe extends React.Component {
  render() {
    let header = (
      <p className="lead"><strong>README.md</strong></p>
    );
    return (
      <Panel header={header}>
        Content
      </Panel>
    );
  }
};

export default ReadMe;
