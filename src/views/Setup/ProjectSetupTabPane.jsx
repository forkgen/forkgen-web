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
            <PanelBox title="Create a new respository" type="panel-primary">
              <Initialize/>
            </PanelBox>
            <PanelBox title="Open an existing respository" type="panel-primary">
              <OpenExist/>
            </PanelBox>
          </div>
          <div className="col-md-6">
            <PanelBox title="Clone an existing repository" type="panel-primary">
              <Clone/>
            </PanelBox>
          </div>
        </div>

      </div>
    );
  }
};

export default ProjectSetupTabPane;
