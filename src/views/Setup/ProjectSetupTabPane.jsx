'use strict';

import React from 'react';
import PanelBox from '../../components/Panel/PanelBox.jsx';
import Initialize from './Initialize.jsx';
import Clone from './Clone.jsx';
import RecentSetup from './RecentSetup.jsx';

class ProjectSetupTabPane extends React.Component {
  render() {
    return (
      <div className="project-setup-container">

        <div className="row">
          <div className="col-md-6">
            <PanelBox title="Clone a repository" hasToolbar="true" type="panel-primary">
              <Clone/>
            </PanelBox>
            <PanelBox title="Initialize a repository" hasToolbar="true" type="panel-primary">
              <Initialize/>
            </PanelBox>
          </div>
          <div className="col-md-6">
            <PanelBox title="Recent repository" hasToolbar="true" type="panel-primary">
              <RecentSetup/>
            </PanelBox>
          </div>
        </div>

      </div>
    );
  }
};

export default ProjectSetupTabPane;
