'use strict';

import React from 'react';

import ProjectSetupTabPane from '../../views/Setup/ProjectSetupTabPane.jsx';
import MyRepositories from '../../views/MyRepositories/MyRepositoriesTabPane.jsx';

class TabPaneContainer extends React.Component {
  render() {
    return (
      <div id="super-tab-content" className="tab-content">
        <div className="tab-pane fade active in" id="setup">
          <ProjectSetupTabPane />
        </div>
        <div className="tab-pane" id="repositories">
          <MyRepositories />
        </div>
      </div>
    );
  }
};

export default TabPaneContainer;
