'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Browse from '../../../components/Browse/Browse.jsx';
import ReadMe from '../../../components/ReadMe/ReadMe.jsx';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Browse />
        <ReadMe />
      </div>
    );
  }
};

export default Dashboard;
