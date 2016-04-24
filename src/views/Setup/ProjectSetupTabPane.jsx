'use strict';

import React from 'react';
import PanelBox from '../../components/Panel/PanelBox.jsx';
import Initialize from './Initialize.jsx';
import Clone from './Clone.jsx';
import RecentSetup from './RecentSetup.jsx';
import OpenExist from './OpenExist.jsx';

class ProjectSetupTabPane extends React.Component {
  render() {
    return (
      <div className="project-setup-container">

        <div className="row">
          <div className="col-md-6">
            <PanelBox title="Create New Respository" hasToolbar="true" type="panel-primary">
              <Initialize/>
            </PanelBox>
            <PanelBox title="Clone Existing Repository" hasToolbar="true" type="panel-primary">
              <Clone/>
            </PanelBox>
            <PanelBox title="Open Existing Respository" hasToolbar="true" type="panel-primary">
              <OpenExist/>
            </PanelBox>
          </div>
          <div className="col-md-6">
            <PanelBox title="Open Recent Visited Repository" hasToolbar="true" type="panel-primary">
              <RecentSetup/>
            </PanelBox>
          </div>
        </div>

      </div>
    );
  }
};

export default ProjectSetupTabPane;
