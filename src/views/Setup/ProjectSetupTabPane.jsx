'use strict';

import React from 'react';
import Initialize from './Initialize.jsx';
import Clone from './Clone.jsx';
import OpenExist from './OpenExist.jsx';

class ProjectSetupTabPane extends React.Component {
  render() {
    return (
      <div className="project-setup-container">
        <div className="row">
          <div className="col-md-6">
            <Initialize/>
          </div>
          <div className="col-md-6">
            <Clone/>
            <OpenExist/>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectSetupTabPane;
