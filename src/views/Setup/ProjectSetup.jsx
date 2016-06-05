'use strict';

import React from 'react';
import Initialize from './Initialize.jsx';
import Clone from './Clone.jsx';
import OpenExist from './OpenExist.jsx';
import MyRepositories from './MyRepositories.jsx';

class ProjectSetup extends React.Component {
  render() {
    return (
      <div className="project-setup-container">
        <div className="row">
          <div className="col-md-6">
            <Initialize/>
            <Clone/>
          </div>
          <div className="col-md-6">
            <OpenExist/>
            <MyRepositories/>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectSetup;
