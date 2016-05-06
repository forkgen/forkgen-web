'use strict';

import React from 'react';
import PanelBox from '../../components/Panel/PanelBox.jsx';

import RepositoriesList from './RepositoriesList.jsx';

class MyRepositoriesTabPane extends React.Component {
  render() {
    return (
      <div className="my-repositories-container">
        <div className="row">
          <div className="col-md-12">
            <RepositoriesList/>
          </div>
        </div>
      </div>
    );
  }
};

export default MyRepositoriesTabPane;
