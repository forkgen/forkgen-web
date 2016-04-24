'use strict';

import React from 'react';

import ProjectSetupTabPane from '../../views/Setup/ProjectSetupTabPane.jsx';

class TabPaneContainer extends React.Component {
  render() {
    return (
      <div id="super-tab-content" className="tab-content">
        <div className="tab-pane fade active in" id="setup">
          <ProjectSetupTabPane />
        </div>
      </div>
    );
  }
};

export default TabPaneContainer;
