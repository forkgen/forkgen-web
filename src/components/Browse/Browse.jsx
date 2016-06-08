'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Panel } from 'react-bootstrap';
import BrowseList from './BrowseList.jsx';

class Browse extends React.Component {
  render() {
    return (
      <Panel className="browse-component" header="Header" footer="Footer">
        <BrowseList />
      </Panel>
    );
  }
};

export default Browse;
