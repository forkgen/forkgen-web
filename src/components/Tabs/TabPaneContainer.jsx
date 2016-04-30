'use strict';

import React from 'react';

import ProjectSetupTabPane from '../../views/Setup/ProjectSetupTabPane.jsx';
import MyRepositoriesTabPane from '../../views/MyRepositories/MyRepositoriesTabPane.jsx';
import DashboardTabPane from '../../views/Dashboard/DashboardTabPane.jsx';

class TabPaneContainer extends React.Component {
  render() {
    return (
      <div id="super-tab-content" className="tab-content">
        <div className="tab-pane fade active in" id="setup">
          <ProjectSetupTabPane />
        </div>
        <div className="tab-pane" id="repositories">
          <MyRepositoriesTabPane />
        </div>
        <div className="tab-pane" id="dashboard">
          <DashboardTabPane />
        </div>
      </div>
    );
  }
};

export default TabPaneContainer;
